export interface Talk {
  id: string;
  title: string;
  date: Date;
  venue: string;
  location?: string;
  description?: string;
  slideUrl?: string;
  recordingUrl?: string;
  type?: 'conference' | 'invited' | 'workshop' | 'seminar' | 'other';
  // New fields
  slug: string;
  pdfPresentation?: string;
  talk_html?: string;
  relatedPublicationIds?: string[];
}