export interface Publication {
  title: string;
  authors: string[];
  year: number;
  journal?: string;
  booktitle?: string;
  publisher?: string;
  volume?: string;
  number?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract?: string;
  keywords?: string[];
  type: 'article' | 'inproceedings' | 'book' | 'techreport' | 'phdthesis' | 'mastersthesis' | 'misc' | string;
}