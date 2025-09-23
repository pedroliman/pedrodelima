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
 * Format authors with Nascimento de Lima in bold
 */
export function formatAuthorsWithHighlight(authorString: string): string {
  if (!authorString) return '';

  // Split the string into individual authors
  const authors = authorString.split(/\s+and\s+|,\s+and\s+|,\s+/);

  // Process each author
  const processedAuthors = authors.map(author => {
    const lowercaseAuthor = author.toLowerCase().trim();

    // If this is Pedro, make the Nascimento de Lima part bold
    if (lowercaseAuthor.includes('pedro') && lowercaseAuthor.includes('nascimento de lima')) {
      // Find the position of "Nascimento"
      const index = author.toLowerCase().indexOf('nascimento');
      if (index !== -1) {
        const firstName = author.substring(0, index).trim();
        const lastName = author.substring(index).trim();
        return `${firstName} <strong>${lastName}</strong>`;
      }
      return `<strong>${author}</strong>`;
    }

    return author.trim();
  });

  // Join the authors with commas and "and" for the last one
  if (processedAuthors.length === 1) {
    return processedAuthors[0];
  } else if (processedAuthors.length === 2) {
    return `${processedAuthors[0]} and ${processedAuthors[1]}`;
  } else {
    const lastAuthor = processedAuthors.pop();
    return `${processedAuthors.join(', ')}, and ${lastAuthor}`;
  }
}

/**
 * Format authors to show only last names (except for Pedro Nascimento de Lima)
 * This creates a more compact display with focus on other co-authors
 */
export function formatAuthorsLastNames(authors: string): string {
  if (!authors) return '';

  // Split the authors string into individual authors using common delimiters
  const authorsArray = authors.split(/\s+and\s+|,\s+and\s+|,\s+/);

  // Process each author to extract only the last name unless it's Pedro
  const processedAuthors = authorsArray.map(author => {
    const lowercaseAuthor = author.toLowerCase();

    // If this is Pedro, skip processing and return null (we'll filter it out)
    if (lowercaseAuthor.includes('nascimento de lima') || lowercaseAuthor.includes('de lima') || lowercaseAuthor.includes('lima')) {
      return null;
    }

    // Extract last name, ensuring multi-part last names are handled
    const parts = author.trim().split(/\s+/);
    if (parts.length === 0) return '';

    // Handle cases where the last name might include multiple parts (e.g., "Van Den Puttelaar")
    if (parts.length > 1 && /^[A-Z]/.test(parts[parts.length - 1]) && /^[A-Z]/.test(parts[parts.length - 2])) {
      return `${parts[parts.length - 2]} ${parts[parts.length - 1]}`;
    }

    // Default to the last part as the last name
    return parts[parts.length - 1];
  });

  // Filter out null values (Pedro)
  const filteredAuthors = processedAuthors.filter(name => name !== null);

  if (filteredAuthors.length === 0) {
    return '';
  } else if (filteredAuthors.length <= 4) {
    // If there are 4 or fewer authors, show all with "and" before the last
    const lastAuthor = filteredAuthors.pop();
    return `with ${filteredAuthors.join(', ')}${filteredAuthors.length > 0 ? ', and ' : ''}${lastAuthor}`;
  } else {
    // Show the first three authors, "others," and the last author
    const firstThree = filteredAuthors.slice(0, 3);
    const lastAuthor = filteredAuthors[filteredAuthors.length - 1];
    return `with ${firstThree.join(', ')}, others and ${lastAuthor}`;
  }
}

/**
 * Format authors according to APA citation style
 * Lists all authors if there are 20 or fewer, and uses ellipses for more than 20 authors
 */
export function formatAuthorsCitationStyle(authors: string): string {
  if (!authors) return '';

  // Split the authors string into individual authors using common delimiters
  const authorsArray = authors.split(/\s+and\s+|,\s+and\s+|,\s+/);

  // Filter out the user's name (Pedro Nascimento de Lima)
  const filteredAuthors = authorsArray.filter(author => {
    const lowercaseAuthor = author.toLowerCase();
    return !(
      lowercaseAuthor.includes('nascimento de lima') ||
      lowercaseAuthor.includes('de lima') ||
      lowercaseAuthor.includes('lima')
    );
  });

  // Format according to APA style
  if (filteredAuthors.length <= 20) {
    // List all authors with commas, and use "&" before the last author
    if (filteredAuthors.length === 1) {
      return `with ${filteredAuthors[0]}`;
    } else if (filteredAuthors.length === 2) {
      return `with ${filteredAuthors[0]} & ${filteredAuthors[1]}`;
    } else {
      const lastAuthor = filteredAuthors.pop();
      return `with ${filteredAuthors.join(', ')}, & ${lastAuthor}`;
    }
  } else {
    // List the first 19 authors, followed by "...", and then the last author
    const firstNineteen = filteredAuthors.slice(0, 19);
    const lastAuthor = filteredAuthors[filteredAuthors.length - 1];
    return `with ${firstNineteen.join(', ')}, ..., & ${lastAuthor}`;
  }
}

/**
 * Format authors for publication page display
 * Converts bibtex format to readable format with full names
 * Example: "Nascimento De Lima, Pedro and Bartholomew, Lillian" becomes "Pedro Nascimento De Lima; Lillian Bartholomew"
 */
export function formatAuthorsForPublication(authors: string): string {
  if (!authors) return '';

  // Split the authors string by 'and' to get individual authors
  const authorsArray = authors.split(/\s+and\s+/);

  // Process each author to format as "First Last"
  const formattedAuthors = authorsArray.map(author => {
    const trimmedAuthor = author.trim();

    // Check if author is in "Last, First" format or "First Last" format
    if (trimmedAuthor.includes(',')) {
      // In "Last, First" format, convert to "First Last"
      const [lastName, firstName] = trimmedAuthor.split(',').map(part => part.trim());
      return `${firstName} ${lastName}`;
    } else {
      // Already in "First Last" format
      return trimmedAuthor;
    }
  });

  // Join with semicolons
  return formattedAuthors.join('; ');
}