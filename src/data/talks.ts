import type { Talk } from '../types/talk';

const talks: Talk[] = [
  {
    title: "Policy Analysis Under Deep Uncertainty: Methods and Applications",
    date: new Date("2023-11-15"),
    venue: "International Conference on Decision Making",
    location: "Boston, MA",
    type: "conference",
    slideUrl: "https://example.com/slides/policy-uncertainty-2023.pdf",
    recordingUrl: "https://example.com/recordings/policy-uncertainty-2023.mp4",
    description: "Presented new methods for robust decision making in contexts with deep uncertainty, focusing on applications in climate policy."
  },
  {
    title: "Interdisciplinary Approaches to Policy Research",
    date: new Date("2023-09-22"),
    venue: "Policy Research Institute Seminar Series",
    location: "Washington, DC",
    type: "invited",
    slideUrl: "https://example.com/slides/interdisciplinary-approaches-2023.pdf",
    description: "Discussed how cross-disciplinary methods can enhance policy research and lead to more robust recommendations."
  },
  {
    title: "Machine Learning for Policy Analysis: Opportunities and Challenges",
    date: new Date("2023-06-05"),
    venue: "Workshop on AI and Public Policy",
    location: "Virtual",
    type: "workshop",
    slideUrl: "https://example.com/slides/ml-policy-2023.pdf",
    recordingUrl: "https://example.com/recordings/ml-policy-2023.mp4",
    description: "Examined the potential of machine learning techniques to transform policy analysis while addressing key ethical and practical challenges."
  },
  {
    title: "Stakeholder Engagement in Model Development",
    date: new Date("2022-10-12"),
    venue: "Annual Meeting of the Society for Policy Modeling",
    location: "San Francisco, CA",
    type: "conference",
    slideUrl: "https://example.com/slides/stakeholder-engagement-2022.pdf",
    description: "Presented a framework for incorporating stakeholder input throughout the policy modeling process."
  },
  {
    title: "Engineering Methods in Public Policy",
    date: new Date("2022-03-18"),
    venue: "University of California Policy Seminar",
    location: "Los Angeles, CA",
    type: "seminar",
    slideUrl: "https://example.com/slides/engineering-policy-2022.pdf",
    recordingUrl: "https://example.com/recordings/engineering-policy-2022.mp4",
    description: "Discussed how engineering perspectives and methodologies can enhance the development and evaluation of public policy."
  }
];

export default talks;