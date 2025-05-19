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
    relatedPublicationIds: ['nascimentodelimaCharacteristicsCosteffectiveBlood2024', 'nascimentodelimaValueEnvironmentalSurveillance2024', 'nascimento_de_lima_stress-testing_2025']
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
    relatedPublicationIds: ['nascimentodelimaValueEnvironmentalSurveillance2024', 'nascimento_de_lima_case_2025']
  },
  {
    id: 'crc-screening-robustness',
    slug: 'colorectal-cancer-screening-robustness',
    title: "Robustness of colorectal cancer screening: A Stress test of US colonoscopy screening guidelines",
    date: new Date("2023-10-16"),
    venue: "INFORMS Annual Meeting",
    location: "Phoenix, AZ", // Inferred based on INFORMS 2023 location
    type: "conference",
    slideUrl: "/presentations/2023.10.16.INFORMS.html",
    description: "This presentation demonstrates how colorectal cancer screening strategies are robust to a wide range of uncertainties, including different model specifications and colonoscopy sensitivity assumptions. The study uses Bayesian inference to quantify uncertainty around adenoma birth-cohort effects and evaluate the robustness of screening recommendations.",
    talk_html: "/presentations/2023.10.16.INFORMS.html",
    relatedPublicationIds: ['NascimentodeLima2022', 'nascimento_de_lima_stress-testing_2025']
  },
  {
    id: 'deep-uncertainty-101',
    slug: 'deep-uncertainty-101-infectious-disease-modeling',
    title: "Deep Uncertainty 101 For Infectious Disease Modelers: What it is, why you should care, and what we can do about it",
    date: new Date("2023-01-28"),
    venue: "MIDAS Webinar",
    location: "Virtual",
    type: "webinar",
    slideUrl: "presentations/2023-01-27-deep-uncertainty-infectious-disease-modelers.pdf",
    description: "An introduction to deep uncertainty concepts for infectious disease modeling, covering fundamentals of Robust Decision Making (RDM) methodology, its application to pandemic response planning, and how infectious disease modelers can incorporate these approaches to better inform policy decisions under conditions of deep uncertainty.",
    pdfPresentation: "/presentations/2023-01-27-deep-uncertainty-infectious-disease-modelers.pdf",
    relatedPublicationIds: ['NascimentodeLima2022', 'NascimentodeLima2021b', 'NascimentodeLima2021a']
  },
  {
    id: 'reopening-california-covid-19-exit-strategies',
    slug: 'reopening-california-covid-19-exit-strategies',
    title: "Reopening California: Seeking Robust, Non-Dominated COVID-19 Exit Strategies",
    date: new Date("2021-04-15"), // Approximate date for MIDAS Annual Conference 2021
    venue: "MIDAS/CDC call",
    location: "Virtual", // Inferred given the time period (during COVID-19)
    type: "conference",
    slideUrl: "presentations/2021-02-08-MIDAS-Call-Reopening-California.pdf", // If you have a public URL
    description: "Presentation on using Robust Decision Making (RDM) approach to evaluate COVID-19 reopening strategies in California under deep uncertainty. The research stress-tests various policy approaches across different futures, comparing constant-caution, time-based, and vaccination-based strategies to find non-dominated solutions.",
    pdfPresentation: "/presentations/2021-02-08-MIDAS-Call-Reopening-California.pdf",
    relatedPublicationIds: ['NascimentodeLima2021a', 'NascimentodeLima2021b']
  }
];

export default talks;