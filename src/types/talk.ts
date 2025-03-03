export interface Talk {
  title: string;
  date: Date;
  venue: string;
  slideUrl?: string;
  recordingUrl?: string;
  description?: string;
  location?: string;
  type?: 'conference' | 'invited' | 'workshop' | 'seminar' | 'other';
}