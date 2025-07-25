// Usage: npx ts-node tools/update_citations_cache.ts
import fs from 'fs';
import fetch from 'node-fetch';
import { fileURLToPath } from 'url';
import path from 'path';
import { publications } from '../src/data/publications';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CACHE_PATH = path.resolve(__dirname, '../src/data/dimensions_citations_cache.json');
const API_BASE = 'https://metrics-api.dimensions.ai/doi/';
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

async function getCitations(doi: string): Promise<number | null> {
    try {
        const res = await fetch(`${API_BASE}${encodeURIComponent(doi)}`);
        if (!res.ok) return null;
        const data = await res.json();
        return typeof data.times_cited === 'number' ? data.times_cited : null;
    } catch {
        return null;
    }
}

async function main() {
    let cache = { last_updated: '', citations: {} as Record<string, number> };
    if (fs.existsSync(CACHE_PATH)) {
        cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
        const last = new Date(cache.last_updated).getTime();
        if (Date.now() - last < ONE_WEEK_MS) {
            console.log('Cache is fresh. No update needed.');
            return;
        }
    }
    const dois = publications.map(p => p.doi).filter(Boolean);
    const citations: Record<string, number> = {};
    for (const doi of dois) {
        const count = await getCitations(doi!);
        if (count !== null) citations[doi!] = count;
    }
    cache = {
        last_updated: new Date().toISOString(),
        citations
    };
    fs.writeFileSync(CACHE_PATH, JSON.stringify(cache, null, 2));
    console.log('Citation cache updated.');
}

main();
