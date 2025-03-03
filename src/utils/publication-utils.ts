import type { Publication } from '../data/publications';

/**
 * Simple BibTeX parser for the front page display
 * Only extracts title, journal and DOI info
 * Note: This is kept for reference but we're using the static data instead
 */
export function parseBibTeX(bibtex: string): Publication[] {
  const entries: Publication[] = [];
  const entryRegex = /@\w+\s*{[^@]*}/gs;
  const matches = bibtex.match(entryRegex);

  if (!matches) return [];

  matches.forEach(entry => {
    // Extract basic fields from each entry
    const titleMatch = entry.match(/title\s*=\s*{([^}]*)}/);
    const journalMatch = entry.match(/journal\s*=\s*{([^}]*)}/);
    const doiMatch = entry.match(/doi\s*=\s*{([^}]*)}/);
    const urlMatch = entry.match(/url\s*=\s*{([^}]*)}/);
    const authorMatch = entry.match(/author\s*=\s*{([^}]*)}/);
    const yearMatch = entry.match(/year\s*=\s*{?(\d{4})},?/);

    if (titleMatch && journalMatch) {
      entries.push({
        title: titleMatch[1].replace(/[{}]/g, ''),
        journal: journalMatch[1],
        doi: doiMatch ? doiMatch[1] : undefined,
        url: urlMatch ? urlMatch[1] : undefined,
        author: authorMatch ? authorMatch[1] : '',
        year: yearMatch ? yearMatch[1] : '',
        featured: false // Default to not featured
      });
    }
  });

  // Sort by year (descending)
  return entries.sort((a, b) => parseInt(b.year) - parseInt(a.year));
}

/**
 * Format authors for research page
 * Shows authors up to Pedro Nascimento de Lima, then shows et al
 */
export function formatAuthors(authorString: string): string {
  const authors = authorString.split(/\s+and\s+/);

  // Find Pedro's position
  const pedroIndex = authors.findIndex(author =>
    author.toLowerCase().includes('pedro') &&
    author.toLowerCase().includes('nascimento de lima'));

  if (pedroIndex === -1) {
    // If Pedro is not in the list, show first author + et al if more than one
    return authors.length > 1 ? `${authors[0]} et al.` : authors[0];
  }

  // If Pedro is the only author
  if (authors.length === 1) {
    return authors[0];
  }

  // If Pedro is the first author
  if (pedroIndex === 0) {
    return authors.length > 1 ? `${authors[0]} et al.` : authors[0];
  }

  // Show authors up to Pedro, then et al
  const relevantAuthors = authors.slice(0, pedroIndex + 1);

  // Format author list with Oxford comma if needed
  if (relevantAuthors.length === 1) {
    return relevantAuthors[0];
  } else if (relevantAuthors.length === 2) {
    return `${relevantAuthors[0]} and ${relevantAuthors[1]}`;
  } else {
    const lastAuthor = relevantAuthors.pop();
    return `${relevantAuthors.join(', ')}, and ${lastAuthor}${authors.length > pedroIndex + 1 ? ' et al.' : ''}`;
  }
}

/**
 * Format authors to show only last names (except for Pedro Nascimento de Lima)
 * This creates a more compact display with focus on other co-authors
 */
export function formatAuthorsLastNames(authorString: string): string {
  // Split the string into individual authors
  const authors = authorString.split(/\s+and\s+|,\s+/);

  // Filter out empty entries
  const validAuthors = authors.filter(author => author.trim() !== '');

  // Process each author to get the last name unless it's Pedro
  const processedAuthors = validAuthors.map(author => {
    const lowercaseAuthor = author.toLowerCase();

    // If this is Pedro, skip processing and return null (we'll filter it out)
    if (lowercaseAuthor.includes('pedro') && lowercaseAuthor.includes('nascimento de lima')) {
      return null;
    }

    // Otherwise, get the last name
    const parts = author.trim().split(/\s+/);
    if (parts.length === 0) return '';

    // Return the last part, which should be the last name
    return parts[parts.length - 1];
  });

  // Filter out null values (Pedro) and join with commas
  const filteredAuthors = processedAuthors.filter(name => name !== null);

  if (filteredAuthors.length === 0) {
    return '';
  }

  return filteredAuthors.join(', ');
}