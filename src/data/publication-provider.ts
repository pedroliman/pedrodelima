import { publications as basePublications, type Publication } from './publications';
import { loadPublications } from '../utils/bibtex-utils';

let augmentedPublications: Publication[] | null = null;

export async function getAugmentedPublications(): Promise<Publication[]> {
  if (augmentedPublications) {
    return augmentedPublications;
  }

  const bibPublications = await loadPublications('src/data/my_citations.bib');
  const bibMap = new Map(bibPublications.map(p => [p.id, p]));

  const mergedPublications = basePublications.map(basePub => {
    const bibPub = bibMap.get(basePub.id);
    if (bibPub) {
      return {
        ...basePub,
        bibtex: bibPub.bibtex,
      };
    }
    return basePub;
  });

  augmentedPublications = mergedPublications;
  return augmentedPublications;
}
