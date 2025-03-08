import type { Talk } from '../types/talk';

// Updated Talk interface in src/types/talk.ts
// export interface Talk {
//   id: string;
//   title: string;
//   date: Date;
//   venue: string;
//   location?: string;
//   description?: string;
//   slideUrl?: string;
//   recordingUrl?: string;
//   type?: 'conference' | 'invited' | 'workshop' | 'seminar' | 'other';
//   slug: string;
//   pdfPresentation?: string;
//   talk_html?: string;
//   relatedPublicationIds?: string[];
// }

const talks: Talk[] = [
  {
    id: 'health-policy-robustness-2025',
    slug: 'health-policy-robustness-2025',
    title: "Demonstrating Robustness in Health Policy Choices",
    date: new Date("2024-11-25"),
    venue: "DMDU in Health Symposium",
    location: "Virtual",
    type: "conference",
    slideUrl: "/presentations/2024.11.25.DMDU-Health-Symposium.pdf",
    description: "Presentation on applying Robust Decision Making methods to health policy questions, covering colorectal cancer screening and pandemic response strategies.",
    pdfPresentation: "/presentations/2024.11.25.DMDU-Health-Symposium.pdf",
    relatedPublicationIds: ['nascimentodelimaCharacteristicsCosteffectiveBlood2024', 'nascimentodelimaValueEnvironmentalSurveillance2024']
  },
  {
    id: 'blood-test-crc-screening-2024',
    slug: 'blood-test-crc-screening-2024',
    title: "Characteristics of a cost-effective blood test for colorectal cancer screening",
    date: new Date("2024-05-20"),
    venue: "Digestive Disease Week (DDW)",
    location: "Washington, D.C.",
    type: "conference",
    slideUrl: "/presentations/2024.05.17.Nascimento de Lima-DDW.pdf",
    description: "Research presentation on the conditions under which blood-based tests for colorectal cancer screening would be cost-effective compared to traditional screening methods.",
    pdfPresentation: "/presentations/2024.05.17.Nascimento de Lima-DDW.pdf",
    relatedPublicationIds: ['nascimentodelimaCharacteristicsCosteffectiveBlood2024']
  },
  {
    id: 'environmental-surveillance-value',
    slug: 'environmental-surveillance-value-pandemic-response',
    title: "The Value of Environmental Surveillance for Pandemic Response",
    date: new Date("2024-07-26"),
    venue: "MIDAS Webinar",
    location: "Virtual",
    type: "webinar",
    slideUrl: "/presentations/2024.07.26-Value-of-Environmental-Surveillance-MIDAS-talk.pdf",
    description: "This presentation explores the economic value of environmental surveillance systems (ESS) in pandemic response using COVID-19 as a case study. It demonstrates how ESS can provide early warning, help mitigate slow policy decisions, and deliver meaningful benefits even if pandemics are rare events.",
    pdfPresentation: "/presentations/2024.07.26-Value-of-Environmental-Surveillance-MIDAS-talk.pdf",
    relatedPublicationIds: ['nascimentodelimaValueEnvironmentalSurveillance2024']
  }
];

export default talks;