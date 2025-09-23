import type { Publication } from '../types/publication';
import fs from 'fs';
import path from 'path';

// Simpler BibTeX parser function focused on extracting basic citation info
export function parseBibTeX(content: string): Publication[] {
  const publications: Publication[] = [];
  const entries = content.split('@').filter(entry => entry.trim() !== '');
  
  for (const entry of entries) {
    try {
      // Get entry type (article, inproceedings, etc.)
      const typeMatch = entry.match(/^(\w+)\s*\{/);
      if (!typeMatch) continue;
      
      const type = typeMatch[1].toLowerCase();
      
      // Get citation key
      const keyMatch = entry.match(/\{\s*([^,]+)\s*,/);
      if (!keyMatch) continue;
      const id = keyMatch[1];
      
      // Extract year - critical field
      let yearMatch = entry.match(/year\s*=\s*\{(\d{4})\}/i) || 
                      entry.match(/year\s*=\s*(\d{4})/i);
      
      if (!yearMatch) {
        // Try to find year in the entry with a more permissive pattern
        const yearText = entry.match(/year.*?(\d{4})/i);
        if (yearText) {
          yearMatch = [null, yearText[1]];
        } else {
          continue; // Skip if no year found
        }
      }
      
      // Extract title - critical field
      const titleText = entry.match(/title\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*")/i);
      if (!titleText) continue;
      
      // Clean the title text by removing braces, quotes, etc.
      let title = titleText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      title = title.replace(/\{([^{}]*)\}/g, '$1'); // Remove nested braces
      
      // Extract authors - critical field
      const authorText = entry.match(/author\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*")/i);
      if (!authorText) continue;
      
      // Clean and split authors
      let authorString = authorText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      authorString = authorString.replace(/\\textbf\{\{([^{}]*)\}\}/g, '$1'); // Handle \textbf{{Name}}
      
      // Split by 'and' but handle cases where 'and' is part of a name
      const authorsRaw = authorString.split(' and ');
      const authors = authorsRaw.map(author => author.trim());
      
      // Create publication object with required fields
      const publication: Publication = {
        id: id,
        title: title.trim(),
        authors: authors,
        year: parseInt(yearMatch[1]),
        type,
        bibtex: `@${entry.trim()}`
      };
      
      // Additional fields - all optional
      
      // Abstract
      const abstractText = entry.match(/abstract\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*")/i);
      if (abstractText) {
        publication.abstract = abstractText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }

      // Journal
      const journalText = entry.match(/journal\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*")/i);
      if (journalText) {
        publication.journal = journalText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // Booktitle for conference papers
      const booktitleText = entry.match(/booktitle\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*")/i);
      if (booktitleText) {
        publication.booktitle = booktitleText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // Volume
      const volumeText = entry.match(/volume\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*"|[^,\s]+)/i);
      if (volumeText) {
        publication.volume = volumeText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // Number/Issue
      const numberText = entry.match(/number\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*"|[^,\s]+)/i);
      if (numberText) {
        publication.number = numberText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // Pages
      const pagesText = entry.match(/pages\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*"|[^,\s]+)/i);
      if (pagesText) {
        publication.pages = pagesText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // DOI
      const doiText = entry.match(/doi\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*"|[^,\s]+)/i);
      if (doiText) {
        publication.doi = doiText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      // URL
      const urlText = entry.match(/url\s*=\s*(\{[^}]*\}|\[[^\]]*\]|"[^"]*"|[^,\s]+)/i);
      if (urlText) {
        publication.url = urlText[1].replace(/^\{|\}$|^"|"$|\[|\]/g, '');
      }
      
      console.log("Parsed publication:", publication.title);
      
      // Add publication to array
      publications.push(publication);
    } catch (error) {
      console.error('Error parsing BibTeX entry:', error);
    }
  }
  
  return publications;
}

// Helper function to clean BibTeX field values (not used in new parser but keeping for compatibility)
function cleanField(value: string): string {
  return value
    .replace(/\\&/g, '&')
    .replace(/\\\{/g, '{')
    .replace(/\\\}/g, '}')
    .replace(/\\"([aeiouAEIOU])/g, '$1')
    .replace(/\\'\{([aeiouAEIOU])\}/g, '$1')
    .replace(/\\'([aeiouAEIOU])/g, '$1')
    .replace(/\\`([aeiouAEIOU])/g, '$1')
    .replace(/\\=([aeiouAEIOU])/g, '$1')
    .replace(/\\~([aeiouAEIOU])/g, '$1')
    .replace(/\\\^([aeiouAEIOU])/g, '$1')
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to format author names for citation
export function formatAuthors(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  return `${authors[0]} et al.`;
}

// Function to get DOI URL
export function getDoiUrl(doi: string): string {
  return `https://doi.org/${doi}`;
}

// Function to load publications from a BibTeX file
export async function loadPublications(filePath: string): Promise<Publication[]> {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const publications = parseBibTeX(content);
    
    // Sort by year (descending) and then by title
    return publications.sort((a, b) => {
      if (a.year !== b.year) return b.year - a.year;
      return a.title.localeCompare(b.title);
    });
  } catch (error) {
    console.error('Error loading publications:', error);
    return [];
  }
}

// Function to get recent publications
export function getRecentPublications(publications: Publication[], count: number): Publication[] {
  return publications.slice(0, count);
}

// Function to clean bibtex entry for display
export function cleanBibtexForDisplay(bibtex: string): string {
  if (!bibtex) return '';

  let cleanedBibtex = bibtex;

  // Remove file field lines
  cleanedBibtex = cleanedBibtex.replace(/^\s*file\s*=\s*\{[^}]*\},?\s*$/gm, '');

  // Remove abstract field lines (can be multi-line)
  cleanedBibtex = cleanedBibtex.replace(/^\s*abstract\s*=\s*\{[\s\S]*?\},?\s*$/gm, '');

  // Replace \textbf{{Nascimento de Lima}} with {Nascimento de Lima}
  cleanedBibtex = cleanedBibtex.replace(/\\textbf\{\{([^}]*)\}\}/g, '{$1}');

  // Clean up any trailing commas or empty lines that might result from field removal
  cleanedBibtex = cleanedBibtex.replace(/,\s*\n\s*\}/g, '\n}');
  cleanedBibtex = cleanedBibtex.replace(/,\s*,/g, ',');
  cleanedBibtex = cleanedBibtex.replace(/\n\s*\n\s*\n/g, '\n\n');

  return cleanedBibtex.trim();
}