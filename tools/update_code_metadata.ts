import { publications } from '../src/data/publications.js';
import { writeFileSync } from 'fs';
import { join } from 'path';

interface GitHubRepoData {
    name: string;
    full_name: string;
    description: string;
    updated_at: string;
    stargazers_count: number;
    forks_count: number;
    html_url: string;
}

interface GitHubTag {
    name: string;
    commit: {
        sha: string;
    };
}

interface RepositoryMetadata {
    id: string;
    stars: number;
    forks: number;
    lastUpdated: string;
    version?: string;
    url: string;
}

// Extract owner and repo from GitHub URL
function parseGitHubUrl(url: string): { owner: string; repo: string } | null {
    const match = url.match(/github\.com\/([^\/]+)\/([^\/]+)/);
    if (match) {
        return {
            owner: match[1],
            repo: match[2].replace(/\.git$/, '')
        };
    }
    return null;
}

// Get latest tag/release for a repository
async function getLatestVersion(owner: string, repo: string, token?: string): Promise<string | undefined> {
    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'pedro-website-metadata-tool'
        };

        if (token) {
            headers['Authorization'] = `token ${token}`;
        }

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/tags`, {
            headers
        });

        if (!response.ok) {
            console.warn(`Failed to fetch tags for ${owner}/${repo}: ${response.status}`);
            return undefined;
        }

        const tags: GitHubTag[] = await response.json();
        return tags.length > 0 ? tags[0].name : undefined;
    } catch (error) {
        console.warn(`Error fetching tags for ${owner}/${repo}:`, error);
        return undefined;
    }
}

// Get repository metadata from GitHub API
async function getRepoMetadata(owner: string, repo: string, token?: string): Promise<GitHubRepoData | null> {
    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'pedro-website-metadata-tool'
        };

        if (token) {
            headers['Authorization'] = `token ${token}`;
        }

        const response = await fetch(`https://api.github.com/repos/${owner}/${repo}`, {
            headers
        });

        if (!response.ok) {
            console.error(`Failed to fetch repo data for ${owner}/${repo}: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error(`Error fetching repo data for ${owner}/${repo}:`, error);
        return null;
    }
}

// Get latest commit date across all branches for a repository
async function getLatestCommitDate(owner: string, repo: string, token?: string): Promise<string | undefined> {
    try {
        const headers: HeadersInit = {
            'Accept': 'application/vnd.github.v3+json',
            'User-Agent': 'pedro-website-metadata-tool'
        };

        if (token) {
            headers['Authorization'] = `token ${token}`;
        }

        // Get all branches first
        const branchesResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/branches`, {
            headers
        });

        if (!branchesResponse.ok) {
            console.warn(`Failed to fetch branches for ${owner}/${repo}: ${branchesResponse.status}`);
            return undefined;
        }

        const branches = await branchesResponse.json();
        let latestCommitDate = '';

        // Check the latest commit on each branch
        for (const branch of branches) {
            const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/commits/${branch.name}`, {
                headers
            });

            if (commitResponse.ok) {
                const commit = await commitResponse.json();
                const commitDate = commit.commit.author.date;

                if (!latestCommitDate || new Date(commitDate) > new Date(latestCommitDate)) {
                    latestCommitDate = commitDate;
                }
            }

            // Add a small delay between branch checks
            await new Promise(resolve => setTimeout(resolve, 50));
        }

        return latestCommitDate || undefined;
    } catch (error) {
        console.warn(`Error fetching latest commit date for ${owner}/${repo}:`, error);
        return undefined;
    }
}

async function updateCodeMetadata() {
    const githubToken = process.env.GITHUB_TOKEN;

    if (!githubToken) {
        console.log('No GITHUB_TOKEN found. You can set one to avoid rate limiting.');
        console.log('Required permissions: public_repo (read access to public repositories)');
    }

    // Get all publications with code repositories (including code-only)
    const codePublications = publications.filter(pub => pub.code && pub.code.trim().length > 0);

    const repositories: RepositoryMetadata[] = [];

    console.log(`Processing ${codePublications.length} repositories...`);

    for (const publication of codePublications) {
        const githubInfo = parseGitHubUrl(publication.code!);

        if (!githubInfo) {
            console.warn(`Skipping non-GitHub URL: ${publication.code}`);
            continue;
        }

        console.log(`Fetching data for ${githubInfo.owner}/${githubInfo.repo}...`);

        const repoData = await getRepoMetadata(githubInfo.owner, githubInfo.repo, githubToken);

        if (repoData) {
            const version = await getLatestVersion(githubInfo.owner, githubInfo.repo, githubToken);
            const lastUpdated = await getLatestCommitDate(githubInfo.owner, githubInfo.repo, githubToken);

            repositories.push({
                id: publication.id,
                stars: repoData.stargazers_count,
                forks: repoData.forks_count,
                lastUpdated: lastUpdated || repoData.updated_at,
                version: version,
                url: repoData.html_url
            });
        } else {
            // Fallback for failed API calls
            repositories.push({
                id: publication.id,
                stars: 0,
                forks: 0,
                lastUpdated: new Date().toISOString(),
                url: publication.code!
            });
        }

        // Add a small delay to avoid hitting rate limits
        await new Promise(resolve => setTimeout(resolve, 100));
    }

    // Sort by last updated date (most recent first)
    repositories.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());

    // Write the metadata to a JSON file
    const outputPath = join(process.cwd(), 'src/data/code-metadata.json');
    const metadata = {
        lastUpdated: new Date().toISOString(),
        repositories
    };

    writeFileSync(outputPath, JSON.stringify(metadata, null, 2));
    console.log(`\nCode metadata updated! Saved ${repositories.length} repositories to ${outputPath}`);

    // Print summary
    console.log('\nRepositories processed:');
    repositories.forEach(repo => {
        console.log(`- ${repo.owner}/${repo.repo} (⭐ ${repo.stars}, 🍴 ${repo.forks}${repo.version ? `, v${repo.version}` : ''})`);
    });
}

// Run the update
updateCodeMetadata().catch(console.error);