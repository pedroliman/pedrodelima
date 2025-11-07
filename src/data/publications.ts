export interface Publication {
  id: string;
  title: string;
  journal: string;
  doi?: string;
  url?: string;
  authors: string;
  year: string | number;
  featured: boolean;
  code?: string;
  codeOnly?: boolean; // New flag for code-only repositories
  abstract?: string;
  bibtex?: string;
  tags?: string[]; // SEO-optimized tags for search and categorization
}

/**
 * Sample publications data
 * featured flag controls whether it appears on the homepage
 */
export const publications: Publication[] = [
  {
    id: 'issaka_modeled_2025',
    title: 'Modeled Cost-Effectiveness of a Rideshare Program to Facilitate Colonoscopy Completion',
    journal: 'JAMA Network Open',
    year: 2025,
    authors: 'Issaka, Rachel B. and Matrajt, Laura and Nascimento de Lima, Pedro and Rutter, Carolyn M.',
    doi: '10.1001/jamanetworkopen.2025.30515',
    url: 'https://doi.org/10.1001/jamanetworkopen.2025.30515',
    featured: false,
    abstract: 'Importance: In colorectal cancer (CRC) screening, too many patients fail to receive follow-up colonoscopy after an abnormal fecal immunochemical test (FIT), and transportation is a frequently reported barrier. Objective:  To determine the outcomes and cost-effectiveness of providing a rideshare intervention to patients with abnormal FIT results. Design, Setting, and Participants:  The CRC-Simulated Population Model for Incidence and Natural History microsimulation model was used to simulate the outcomes and cost-effectiveness of a rideshare intervention to improve colonoscopy completion in a population-based CRC screening program. Cohorts were adherent to annual FIT-based screening; baseline analyses assumed that 35% would complete a follow-up colonoscopy. Data were analyzed from November 14, 2023, to July 8, 2025. Intervention:  A $40 or $100 rideshare to increase completion of follow-up colonoscopy. Main Outcomes and Measures: Lifetime outcomes included the number of CRC cases, deaths, and life-years gained (LYG) per 1000 people screened and costs associated with improved completion of a colonoscopy after an abnormal FIT result. Results:  Four single-age cohorts (ages 45, 55, 65, and 70 years on January 1, 2024) of 10 million people each were simulated. In cohorts with similar sex distribution as the US population (aged 45 years, 50.0% male; aged 55 years, 49.4% male); aged 65 years, 48.0% male; and aged 70 years, 46.9% male), compared with no intervention, using a rideshare intervention starting at age 45 years that costs $100 per ride to increase colonoscopy completion from 35% to 70% was associated with a reduction in CRC cases per 1000 by 26.3% (30.7 vs 41.6 cases per 1000), CRC deaths per 1000 by 32.5% (9.8 vs 14.6 cases per 1000), 24.9 LYG per 1000, and at $100 per ride cost $43 308 per 1000 people screened and saved $330 587 per 1000 people screened. Conclusions and Relevance: In a microsimulation model, increasing colonoscopy completion in a population with abnormal FIT results via a rideshare intervention was cost saving up to $100 per ride due to the combined outcome of cancer prevention and early detection.',
    tags: ['colorectal cancer', 'cancer screening', 'health disparities', 'mortality reduction', 'cost effectiveness', 'public health', 'health economics', 'preventive care', 'healthcare policy', 'cancer prevention', 'health equity', 'medical decision making']
  },
  {
    id: 'pedrodelima',
    title: 'My personal website',
    journal: 'GitHub Repository',
    year: 2024,
    authors: 'Pedro Nascimento de Lima',
    code: 'https://github.com/pedroliman/pedrodelima',
    codeOnly: true,  // This is the key flag
    featured: false
  },
  {
    id: 'nascimento_de_lima_compass_2025',
    title: 'COMPASS: A Framework for Navigating Systemic Risks',
    journal: 'RAND Working Paper',
    year: 2025,
    authors: 'Nascimento de Lima, Pedro and Dolan, Flannery C. and McDonald, Tim and Patel, Karishma V. and Boudreaux, Benjamin and Garber, Chandra and Dion, Leah and Mann, Sean and Welburn, Jonathan W.',
    url: 'https://www.rand.org/pubs/working_papers/WRA3888-1.html',
    doi: '10.7249/WRA3888-1',
    featured: true,
    abstract: 'COMPASS (Comprehensive Mapping Protocol for Anticipating and Adapting to Systemic Shocks) is a framework designed to help analysts and senior policymakers navigate systemic risks from disruptions, such as artificial intelligence adoption, pandemics, or natural disasters. It guides users through five steps to consider disruptors, primary and secondary system impacts, affected actors, relevant outcomes and policy objectives, and effective policy responses.',
    tags: ['artificial intelligence', 'complex systems analysis', 'emerging technologies', 'systemic risk', 'risk assessment', 'policy analysis', 'decision support']
  },
  {
    id: 'welburn_future_2025',
    title: 'The Future of Artificial Intelligence Policy Is the Future of Competing Demands',
    journal: 'RAND Visualization',
    year: 2025,
    authors: 'Welburn, Jonathan W. and Garber, Chandra and Dion, Leah and Nascimento de Lima, Pedro and Nergui, Anujin and Buenaventura, Maya and Nygaard, Vegard M.',
    url: 'https://www.rand.org/pubs/visualizations/DVA3888-1.html',
    doi: '10.7249/DVA3888-1',
    featured: false,
    abstract: 'To address the potential for transformative technological change brought about by increasingly widespread adoption of artificial intelligence (AI) technologies, researchers involved in the RAND Social and Economic Policy Rethink Initiative developed a volume of work on the opportunities and challenges presented by AI adoption. This visualization provides an overview of that research and outlines the policy stakes of adopting AI technologies.',
    tags: ['artificial intelligence', 'banking and financial services', 'data visualization', 'economic policy', 'energy and environment', 'health care technology', 'labor markets', 'science and technology']
  },
  {
    id: 'welburn_rethinking_2025',
    title: 'Rethinking Social and Economic Policy in the Age of General-Purpose Artificial Intelligence: Navigating the Cascading Impacts of AI Adoption',
    journal: 'RAND Research Report',
    year: 2025,
    authors: 'Welburn, Jonathan W. and Buenaventura, Maya and Nygaard, Vegard M. and Garber, Chandra and Dion, Leah and Nascimento de Lima, Pedro and Shenk, Anton and Nergui, Anujin and Price, Carter C. and Boudreaux, Benjamin and Cibralic, Beba and Mignano, Jim and Mann, Sean and Dolan, Flannery C. and Patel, Karishma V.',
    url: 'https://www.rand.org/pubs/research_reports/RRA3888-2.html',
    doi: '10.7249/RRA3888-2',
    featured: false,
    abstract: 'The authors synthesize findings related to artificial intelligence (AI) and examine sectoral trends in AI adoption, focusing on four key sectors while highlighting the profound uncertainty that surrounds the future trajectory of AI capability advancements. They examine the inherent trade-offs and tensions of AI adoption through both legal and macroeconomic lenses and discuss considerations for adequate policy responses.',
    tags: ['artificial intelligence', 'banking and financial services', 'economic policy', 'energy and environment', 'health care technology', 'research', 'science and technology legislation', 'social equity', 'technology']
  },
  {
    id: 'nascimento_de_lima_triple-effect_2025',
    title: `The triple-effect of colorectal cancer screening: reducing deaths, government spending and mortality disparities`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2025,
    authors: `Nascimento De Lima, Pedro and Bartholomew, Lillian and May, Folasade P and Coronado, Gloria D and Rutter, Carolyn M`,
    doi: '10.1093/jnci/djaf202',
    featured: true,
    abstract: `Colorectal cancer (CRC) screening accounts for over 60% of cancer screening costs in the US, prompting recurrent debates about its value. Yet CRC screening remains the main tool to curb overall CRC incidence, mortality, and disparities that affect Black Americans. Using the race-specific CRC-SPIN microsimulation model, we show that CRC screening in the United States simultaneously achieves three goals: it saves lives by preventing 24 deaths per 1,000 Black Americans screened with fecal immunochemical test (FIT) and 26 screened with colonoscopy; saves tax dollars by shifting costs from Medicare to private payers; and reduces racial incidence and mortality disparities, helping offset disparities in CRC survival. Both FIT and colonoscopy screening are cost-effective relative to no screening, with annual FIT remaining the most-cost-effective option. Changes to policy requiring coverage of preventive care services must avoid compromising the effectiveness of CRC screening—arguably the greatest equalizer of cancer disparities.`,
    tags: ['colorectal cancer', 'cancer screening', 'health disparities', 'mortality reduction', 'cost effectiveness', 'public health', 'health economics', 'preventive care', 'healthcare policy', 'cancer prevention', 'health equity', 'medical decision making']
  },
  {
    id: 'harlass_benefits_2025',
    title: `Benefits of colorectal cancer screening using FIT with varying positivity thresholds by age and sex`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2025,
    authors: `Harlass, Matthias and Knudsen, Amy B and Nieboer, Daan and van Duuren, Luuk A and Kuntz, Karen M and Rutter, Carolyn M and Nascimento de Lima, Pedro and Collier, Nicholson and Ozik, Jonathan and Hahn, Anne I and Alarid-Escudero, Fernando and Zauber, Ann G and Inadomi, John M and Meester, Reinier G S and Lansdorp Vogelaar, Iris`,
    doi: '10.1093/jnci/djaf149',
    featured: false,
    abstract: `Fecal immunochemical test (FIT) performance for colorectal cancer (CRC) screening varies by age and sex, yet most FIT-based screening programs use uniform thresholds. This study assessed the potential benefits of stratifying FIT thresholds based on age and sex.We conducted a meta-analysis of FIT sensitivity and specificity at various positivity thresholds by age and sex. We then used these estimates in two microsimulation models of CRC and projected lifetime clinical outcomes, incremental costs, and quality-adjusted life-years gained (QALYG) from age- and sex-stratified FIT strategies. FIT thresholds ranged from 10 to 50 µg hemoglobin/g feces (µg/g).For current uniform FIT screening (20 µg/g), models projected 85.67 to 122.15 QALYG at incremental costs of -$982 to $504 per 1,000 individuals compared to no screening. At equivalent costs to current uniform screening, only one model found stratified FIT approaches cost-effective, yielding a marginal increase of 1.04 and 1.10 QALYG/1,000 females and males, respectively. At a willingness-to-pay threshold of $100,000/QALYG, both models found stratified FIT cut-offs to be the best strategy, with cut-offs being equal or higher for men and lowest at older ages. Uniform strategies showed comparable effectiveness, falling within one quality-adjusted life day per person of efficient strategies at up to $112 more per person. Results were sensitive to FIT test performance characteristics and one-time setup costs.Stratifying FIT thresholds by age and sex may be cost-effective compared to current screening. However, the gain in expected health benefits with stratified FIT screening is likely small.`,
    tags: ['colorectal cancer', 'cancer screening', 'fecal immunochemical test', 'FIT', 'cost effectiveness', 'health economics', 'preventive medicine', 'population health', 'healthcare access', 'screening programs', 'early detection']
  },
  {
    id: 'griswold_assessing_2025',
    title: `Assessing Bias and Precision in State Policy Evaluations: A Comparative Analysis of Time-Varying Estimators Using Policy Simulations`,
    journal: 'arXiv',
    year: 2025,
    authors: `Griswold, Max and Griffin, Beth Ann and Rubinstein, Max and Liu, Mincen and Schuler, Megan and Stone, Elizabeth and Lima, Pedro Nascimento de and Stein, Bradley D. and Stuart, Elizabeth A.`,
    doi: '10.48550/arXiv.2503.20882',
    featured: false,
    abstract: `Using state-level opioid overdose mortality data from 1999-2016, we simulated four time-varying treatment scenarios, which correspond to real-world policy dynamics (ramp up, ramp down, temporary and inconsistent). We then evaluated seven commonly used policy evaluation methods: two-way fixed effects event study, debiased autoregressive model, augmented synthetic control, difference-in-differences with staggered adoption, event study with heterogeneous treatment, two-stage differences-in-differences and differences-in-differences imputation. Statistical performance was assessed by comparing bias, standard errors, coverage, and root mean squared error over 1,000 simulations. Results Our findings indicate that estimator performance varied across policy scenarios. In settings where policy effectiveness diminished over time, synthetic control methods recovered effects with lower bias and higher variance. Difference-in-difference approaches, while offering reasonable coverage under some scenarios, struggled when effects were non-monotonic. Autoregressive methods, although demonstrating lower variability, underestimated uncertainty. Overall, a clear bias-variance tradeoff emerged, underscoring that no single method uniformly excelled across scenarios. Conclusions This study highlights the importance of tailoring the choice of estimator to the expected trajectory of policy effects. In dynamic time-varying settings, particularly when a policy has an anticipated diminishing impact, methods like augmented synthetic controls may offer advantages despite reduced precision. Researchers should carefully consider these tradeoffs to ensure robust and credible state-policy evaluations.`,
    tags: ['policy evaluation', 'causal inference', 'time-varying treatment', 'synthetic control', 'difference-in-differences', 'statistical methods', 'bias-variance tradeoff', 'simulation study', 'health policy', 'econometrics', 'public policy analysis']
  },
  {
    id: 'nascimento_de_lima_stress-testing_2025',
    title: `Stress-testing US colorectal cancer screening guidelines: Decennial colonoscopy from age 45 is robust to natural history uncertainty and colonoscopy sensitivity assumptions`,
    journal: 'Medical Decision Making',
    year: 2025,
    authors: `Nascimento de Lima, Pedro and Maerzluft, Christopher and Ozik, Jonathan and Collier, Nicholson and Rutter, Carolyn M.`,
    doi: '10.1177/0272989X251334373',
    featured: false,
    abstract: `Purpose
The 2023 American College of Physicians (ACP) guidelines for colorectal cancer (CRC) screening are at odds with the United States Preventive Task Force (USPSTF) guidelines, with the former recommending screening starting at age 50 y and the latter at age 45 y. This article "stress tests" CRC colonoscopy screening strategies to investigate their robustness to uncertainties stemming from the natural history of disease and sensitivity of colonoscopy.
Methods
This study uses the CRC-SPIN microsimulation model to project the life-years gained (LYG) under several colonoscopy CRC screening strategies. The model was extended to include birth cohort effects on adenoma risk. We estimated natural history parameters under 2 different assumptions about the youngest age of adenoma initiation. For each, we generated 500 parameter sets to reflect uncertainty in the natural history parameters. We simulated 26 colonoscopy screening strategies and examined 4 different colonoscopy sensitivity assumptions, encompassing the range of sensitivities consistent with prior tandem colonoscopy studies. Across this set of scenarios, we identify efficient screening strategies and report posterior credible intervals for benefits of screening (LYG), burden (number of colonoscopies), and incremental burden-effectiveness ratios.
Results
Projected absolute screening benefits varied widely based on assumptions, but strategies starting at age 45 y were consistently in the efficiency frontier. Strategies in which screening starts at age 50 y with 10-y intervals were never efficient, saving fewer life-years than starting screening at age 45 y and performing colonoscopies every 15 y while requiring more colonoscopies per person.
Conclusions
Decennial colonoscopy screening initiation at age 45 y remained a robust recommendation. Colonoscopy screening with a 10-y interval starting at age 50 y did not result in an efficient use of colonoscopies in any of the scenarios evaluated.
Highlights
•
Colorectal cancer colonoscopy screening strategies initiated at age 45 y were projected to yield more life-years gained while requiring the least number of colonoscopies across different model assumptions about disease natural history and colonoscopy sensitivity.
•
Colonoscopy screening starting at age 50 y with a 10-y interval consistently underperformed strategies that started at age 45 y.`,
    tags: ['colorectal cancer', 'colonoscopy', 'screening guidelines', 'stress testing', 'uncertainty analysis', 'medical decision making', 'robust decision making', 'cancer prevention', 'age 45 screening', 'sensitivity analysis', 'clinical guidelines', 'screening policy']
  },
  {
    id: 'nascimento_de_lima_case_2025',
    title: `The Case For Sustaining Wastewater Surveillance Capabilities In The US`,
    journal: 'Health Affairs Forefront',
    year: 2025,
    authors: `Nascimento de Lima, Pedro and Williams, Adeline and Willis, Henry H. and Faherty, Laura J.`,
    doi: '10.1377/forefront.20250417.144021',
    featured: false,
    abstract: `Wastewater surveillance can become a cornerstone of US public health infrastructure.`,
    tags: ['wastewater surveillance', 'environmental surveillance', 'public health surveillance', 'pandemic preparedness', 'infectious disease', 'public health infrastructure', 'surveillance systems', 'health policy', 'disease monitoring', 'epidemiological surveillance', 'community health']
  },
  {
    id: 'optic-wheels',
    title: `OPTIC R Repository and Tutorial for Creating Policy Wheel Data Visualizations`,
    journal: 'RAND Tool',
    year: 2025,
    authors: `Eagan, Joshua and Beth Ann Griffin and Max Griswold and Hanna Han and Pedro Nascimento de Lima and Seema Choksy Pessar and Rosalie Liccardo Pacula and Bradley D. Stein`,
    doi: '10.7249/TLA3054-1',
    code: 'https://github.com/randcorporation/optic-policy-wheels',
    featured: false,
    abstract: `This R-based tool (and accompanying tutorial) allows users to create Opioid Policy Tools and Information Center (OPTIC)-style policy wheel data visualizations that illustrate the timeline over which state policies are implemented. The tool includes a working example of how to use this code with OPTIC-vetted policy data for state policies related to naloxone access, Good Samaritan laws, and medical and recreational marijuana policies.`
  },
  {
    id: 'optic-package',
    title: `optic: Simulation Tool for Causal Inference Using Longitudinal Data`,
    journal: 'R Package',
    year: 2023,
    authors: `Beth Ann Griffin, Pedro Nascimento de Lima, Max Griswold, Adam Scherling, Joseph D. Pane, Geoffrey E. Grimm`,
    doi: '10.7249/TLA1975-2',
    code: 'https://github.com/randcorporation/optic/',
    featured: false,
    abstract: `This tool, an R package, helps users compare the performance of various causal inference models using their own longitudinal data. Users can select from a variety of simulation options to explore how different state policy evaluation methods perform. Although the tool was initially created to examine data related to opioids, its framework can be used with longitudinal data on any topic.`,
    tags: ['causal inference', 'longitudinal data', 'simulation modeling', 'R package', 'statistical software', 'policy analysis', 'treatment effects', 'observational data', 'confounding', 'statistical methods', 'data analysis', 'econometrics']
  },
  {
    id: 'r6sim',
    title: `R6Sim: Encapsulated OOP base classes for simulation modeling studies in R`,
    journal: 'R Package',
    year: 2024,
    authors: `Pedro Nascimento de Lima`,
    url: 'https://randcorporation.github.io/R6Sim/',
    code: 'https://github.com/RANDCorporation/R6Sim',
    featured: false,
    abstract: `R6 encapsulated OOP base classes for simulation modeling studies in R`,
    tags: ['simulation modeling', 'R package', 'object oriented programming', 'OOP', 'R6 classes', 'statistical software', 'Monte Carlo simulation', 'modeling framework', 'software development', 'computational tools', 'statistical modeling']
  },
  {
    id: 'gerbil_package',
    title: `gerbil: Generalized Efficient Regression-Based Imputation with Latent Processes`,
    journal: 'R Package',
    year: 2023,
    authors: 'Michael Robbins [aut, cre], Max Griswold [ctb], Pedro Nascimento de Lima',
    url: 'https://cran.r-project.org/web/packages/gerbil/index.html',
    doi: undefined,
    code: 'https://cran.r-project.org/web/packages/gerbil/index.html',
    featured: false,
    abstract: `Implements a new multiple imputation method that draws imputations from a latent joint multivariate normal model which underpins a generally structured data. This model is constructed using a sequence of flexible conditional linear models that enables the resulting procedure to be efficiently implemented on high dimensional datasets in practice. See Robbins (2021) <doi:10.48550/arXiv.2008.02243>.`
  },
  {
    id: 'van_den_puttelaar_reply_2024',
    title: `Reply to Aziz et al and to Das et al`,
    journal: 'Gastroenterology',
    year: 2024,
    authors: `Van Den Puttelaar, Rosita and Pedro Nascimento de Lima  and Lansdorp-Vogelaar, Iris`,
    doi: '10.1053/j.gastro.2024.08.028',
    featured: false
  },
  {
    id: 'nascimento_de_lima_response_2024',
    title: `Response to Hu, Yang, and Sun`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2024,
    authors: `Pedro Nascimento de Lima and Rutter, Carolyn M and Van Den Puttelaar, Rosita and Hahn, Anne I and Ozik, Jonathan and Collier, Nicholson and Zauber, Ann G and Lansdorp-Vogelaar, Iris and Inadomi, John M`,
    doi: '10.1093/jnci/djae341',
    featured: false,
    abstract: `This response addresses concerns about blood-based colorectal cancer screening, emphasizing that while such tests might increase initial adherence, they would reduce screening benefit by 34% to 50% and net monetary benefit by 50% to 70% compared to existing methods. The authors highlight that sensitivity to precursor lesions is crucial for cancer prevention, and current blood tests do not meet the effectiveness standards of colonoscopy or fecal immunochemical tests. They conclude that higher test adherence cannot compensate for poor test performance, and more research is needed on real-world screening behaviors before widespread adoption of blood-based screening.`
  },
  {
    id: 'nascimento_de_lima_cost_effectiveness_2025',
    title: `Cost-Effectiveness of Noninvasive Colorectal Cancer Screening in Community Clinics`,
    journal: 'JAMA Network Open',
    year: 2025,
    authors: `Pedro Nascimento de Lima and Matrajt, Laura and Coronado, Gloria and Escaron, Anne L. and Rutter, Carolyn M.`,
    doi: '10.1001/jamanetworkopen.2024.54938',
    featured: false,
    abstract: `Importance
              Several noninvasive tests for colorectal cancer screening are available, but their effectiveness in settings with low adherence to screening and follow-up colonoscopy is not well documented.


              Objective
              To assess the cost-effectiveness of and outcomes associated with noninvasive colorectal cancer screening strategies, including new blood-based tests, in a population with low adherence to screening and ongoing surveillance colonoscopy.


              Design, Setting, and Participants
              The validated microsimulation model used for the decision analytical modeling study projected screening outcomes from 2025 to 2124 for a simulated cohort of 10 million individuals aged 50 years in 2025 and representative of a predominantly Hispanic or Latino patient population served by a Federally Qualified Health Center in Southern California. The simulated population had low adherence to first-step noninvasive testing (45%), second-step follow-up colonoscopy after an abnormal noninvasive test result (40%), and ongoing surveillance colonoscopy among patients with high-risk findings at follow-up colonoscopy (80%).


              Exposures
              Colorectal cancer screening strategies included no screening, an annual or biennial fecal immunochemical test, a triennial multitarget stool DNA test, and a triennial blood-based test. Using a blood-based test was assumed to increase first-step adherence by 17.5 percentage points.


              Main Outcomes and Measures
              Outcomes included colorectal cancer incidence and mortality, life-years gained and quality-adjusted life-years gained relative to no screening, costs, and net monetary benefit assuming a willingness to pay of $100 000 per quality-adjusted life-year gained.


              Results
              Under realistic adherence assumptions, a program of annual fecal immunochemical testing was the most effective and cost-effective strategy, yielding 121 life-years gained per 1000 screened individuals and a net monetary benefit of $5883 per person. Triennial blood testing was the least effective, yielding 23 life-years gained per 1000, and was not cost-effective, with a negative net monetary benefit. Annual fecal immunochemical testing with 45% first-step adherence and 80% adherence to follow-up and surveillance colonoscopy yielded greater benefit than triennial blood testing with perfect adherence (88 vs 77 life-years gained per 1000).


              Conclusions and Relevance
              This study suggests that in a federally qualified health care setting, prioritizing the convenience of blood tests over less costly and more effective existing stool-based tests could result in higher costs and worse population-level outcomes. Novel screening modalities should be carefully evaluated for performance in community settings before widespread adoption.`,
    tags: ['colorectal cancer', 'cancer screening', 'cost effectiveness', 'community health', 'noninvasive screening', 'health economics', 'preventive medicine', 'population health', 'healthcare access', 'screening programs', 'primary care', 'early detection']
  },
  {
    id: 'hotton_frontiers_2025',
    title: `Incorporating social determinants of health into agent-based models of HIV transmission: methodological challenges and future directions`,
    journal: 'Frontiers in Epidemiology',
    year: 2025,
    authors: `Hotton, Anna L. and Nascimento de Lima, Pedro and Fadikar, Arindam and Collier, Nicholson T. and Khanna, Aditya S. and Motley, Darnell N. and Tatara, Eric and Rimer, Sara and Almirol, Ellen and Pollack, Harold A. and Schneider, John A. and Lempert, Robert J. and Ozik, Jonathan`,
    doi: '10.3389/fepid.2025.1533119',
    featured: false,
    abstract: `There is much focus in the field of HIV prevention research on understanding the impact of social determinants of health (e.g., housing, employment, incarceration) on HIV transmission and developing interventions to address underlying structural drivers of HIV risk. However, such interventions are resource-intensive and logistically challenging, and their evaluation is often limited by small sample sizes and short duration of follow-up. Because they allow for both detailed and large-scale simulations of counterfactual experiments, agent-based models (ABMs) can demonstrate the potential impact of combinations of interventions that may otherwise be infeasible to evaluate in empirical settings and help plan for efficient use of public health resources. There is a need for computational models that are sufficiently realistic to allow for evaluation of interventions that address socio-structural drivers of HIV transmission, though most HIV models to date have focused on more proximal influences on transmission dynamics. Modeling the complex social causes of infectious diseases is particularly challenging due to the complexity of the relationships and limitations in the measurement and quantification of causal relationships linking social determinants of health to HIV risk. Uncertainty exists in the magnitude and direction of associations among the variables used to parameterize the models, the representation of sexual transmission networks, and the model structure (i.e. the causal pathways representing the system of HIV transmission) itself. This paper will review the state of the literature on incorporating social determinants of health into epidemiological models of HIV transmission. Using examples from our ongoing work, we will discuss Uncertainty Quantification and Robust Decision Making methods to address some of the above-mentioned challenges and suggest directions for future methodological work in this area.`
  },
  {
    id: 'vardavasCostBenefitAnalysisComprehensive2024',
    title: `Cost-Benefit Analysis of Comprehensive Military Eye Examination Policies`,
    journal: 'RAND Report',
    year: 2024,
    authors: `Vardavas, Raffaele and Armour, Philip and Katragadda, Sai Prathyush and Pujol-Mitchell, Toyya and Pedro Nascimento de Lima and Fateh, Baqir and Hernandez, Helin and Yi, Stacey and Rojas Aguilera, Javier and Gadwah-Meaden, Catria`,
    doi: '10.7249/RRA2188-1',
    featured: false,
    abstract: `In this study, the authors ascertain the costs and benefits of moving from the current visual acuity screening process for military service members to comprehensive eye examinations intended to detect a wider range of visual dysfunctions.`,
    tags: ['cost-benefit analysis', 'vision screening', 'health economics']
  },
  {
    id: 'fahertyEffectsNonpharmaceuticalInterventions2024',
    title: `Effects of non-pharmaceutical interventions on COVID-19 transmission: rapid review of evidence from Italy, the United States, the United Kingdom, and China`,
    journal: 'Frontiers in Public Health',
    year: 2024,
    authors: `Faherty, Laura J. and Pedro Nascimento de Lima and Lim, Jing Zhi and Roberts, Derek and Karr, Sarah and Lawson, Emily and Willis, Henry H.`,
    doi: '10.3389/fpubh.2024.1426992',
    featured: false,
    abstract: `Prior to the development of COVID-19 vaccines, policymakers instituted various non-pharmaceutical interventions (NPIs) to limit transmission. Prior studies have attempted to examine the extent to which these NPIs achieved their goals of containment, suppression, or mitigation of disease transmission. Existing evidence syntheses have found that numerous factors limit comparability across studies, and the evidence on NPI effectiveness during COVID-19 pandemic remains sparse and inconsistent. This study documents the magnitude and variation in NPI effectiveness in reducing COVID-19 transmission (i.e., reduction in effective reproduction rate [Reff] and daily contact rate) in Italy, the United States, the United Kingdom, and China. Our rapid review and narrative synthesis of existing research identified 126 studies meeting our screening criteria. We selected four contexts with >5 articles to facilitate a meaningful synthesis. This step yielded an analytic sample of 61 articles that used data from China, Italy, the United Kingdom, and the United States. We found wide variation and substantial uncertainty around the effectiveness of NPIs at reducing disease transmission. Studies of a single intervention or NPIs that are the least stringent had estimated Reff reductions in the 10–50% range; those that examined so-called "lockdowns" were associated with greater Reff reductions that ranged from 40 to 90%, with many in the 70–80% range. While many studies reported on multiple NPIs, only six of the 61 studies explicitly used the framing of "stringency" or "mild versus strict" or "tiers" of NPIs, concepts that are highly relevant for decisionmakers. Existing evidence suggests that NPIs reduce COVID-19 transmission by 40 to 90 percent. This paper documents the extent of the variation in NPI effectiveness estimates and highlights challenges presented by a lack of standardization in modeling approaches. Further research on NPI effectiveness at different stringency levels is needed to inform policy responses to future pandemics.`,
    tags: ['non-pharmaceutical interventions', 'COVID-19', 'disease transmission', 'public health policy', 'epidemiology', 'pandemic response', 'health interventions', 'disease mitigation', 'public health measures', 'infectious disease control', 'health policy analysis']
  },
  {
    id: 'vardavasModelingDisruptiveImpact2024',
    title: `Modeling the Disruptive Impact of the COVID-19 Pandemic on Nurses' Supply and Wages`,
    journal: 'RAND Working Paper',
    year: 2024,
    authors: `Vardavas, Raffaele and Pedro Nascimento de Lima and Baker, Lawrence and Crowley, Christina and Carman, Katherine Grace and Abir, Mahshid`,
    doi: '10.7249/WRA1444-1',
    featured: false,
    abstract: `This paper introduces an economic model to describe hospital nurses' supply and wage dynamics during the COVID-19 pandemic. The model illustrates how the pandemic disrupted nurse demand, supply, and wages and represents substitution dynamics between hospital and travel nurses. Using exogenous epidemiological data as model inputs, the authors evaluate how COVID-19 cases, hospitalizations, and deaths have affected nurse labor markets.`,
    tags: ['healthcare workforce', 'COVID-19', 'labor market dynamics', 'economic modeling']
  },
  {
    id: 'doi:10.1177/0272989X241255618',
    title: `Emulator-Based Bayesian Calibration of the CISNET Colorectal Cancer Models`,
    journal: 'Medical Decision Making',
    year: 2024,
    authors: `Carlos Pineda-Antunez and Claudia Seguin and Luuk A. van Duuren and Amy B. Knudsen and Barak Davidi and Pedro Nascimento de Lima and Carolyn Rutter and Karen M. Kuntz and Iris Lansdorp-Vogelaar and Nicholson Collier and Jonathan Ozik and Fernando Alarid-Escudero`,
    doi: '10.1177/0272989X241255618',
    featured: false,
    code: `https://github.com/NCI-CISNET-Colorectal/baycann_cisnet_crc`,
    abstract: `Purpose
  To calibrate Cancer Intervention and Surveillance Modeling Network (CISNET)’s SimCRC, MISCAN-Colon, and CRC-SPIN simulation models of the natural history colorectal cancer (CRC) with an emulator-based Bayesian algorithm and internally validate the model-predicted outcomes to calibration targets.
  Methods
  We used Latin hypercube sampling to sample up to 50,000 parameter sets for each CISNET-CRC model and generated the corresponding outputs. We trained multilayer perceptron artificial neural networks (ANNs) as emulators using the input and output samples for each CISNET-CRC model. We selected ANN structures with corresponding hyperparameters (i.e., number of hidden layers, nodes, activation functions, epochs, and optimizer) that minimize the predicted mean square error on the validation sample. We implemented the ANN emulators in a probabilistic programming language and calibrated the input parameters with Hamiltonian Monte Carlo–based algorithms to obtain the joint posterior distributions of the CISNET-CRC models’ parameters. We internally validated each calibrated emulator by comparing the model-predicted posterior outputs against the calibration targets.
  Results
  The optimal ANN for SimCRC had 4 hidden layers and 360 hidden nodes, MISCAN-Colon had 4 hidden layers and 114 hidden nodes, and CRC-SPIN had 1 hidden layer and 140 hidden nodes. The total time for training and calibrating the emulators was 7.3, 4.0, and 0.66 h for SimCRC, MISCAN-Colon, and CRC-SPIN, respectively. The mean of the model-predicted outputs fell within the 95% confidence intervals of the calibration targets in 98 of 110 for SimCRC, 65 of 93 for MISCAN, and 31 of 41 targets for CRC-SPIN.
  Conclusions
  Using ANN emulators is a practical solution to reduce the computational burden and complexity for Bayesian calibration of individual-level simulation models used for policy analysis, such as the CISNET CRC models. In this work, we present a step-by-step guide to constructing emulators for calibrating 3 realistic CRC individual-level models using a Bayesian approach.
  Highlights
  •	
  We use artificial neural networks (ANNs) to build emulators that surrogate complex individual-based models to reduce the computational burden in the Bayesian calibration process.
  •	
  ANNs showed good performance in emulating the CISNET-CRC microsimulation models, despite having many input parameters and outputs.
  •	
  Using ANN emulators is a practical solution to reduce the computational burden and complexity for Bayesian calibration of individual-level simulation models used for policy analysis.
  •	
  This work aims to support health decision scientists who want to quantify the uncertainty of calibrated parameters of computationally intensive simulation models under a Bayesian framework.`,
    tags: ['Bayesian calibration', 'artificial neural networks', 'colorectal cancer', 'CISNET models', 'simulation modeling', 'uncertainty quantification', 'medical decision making']
  },
  {
    id: 'nascimentodelimaCharacteristicsCosteffectiveBlood2024',
    title: `Characteristics of a cost-effective blood test for colorectal cancer screening`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2024,
    authors: `Pedro Nascimento de Lima and Van Den Puttelaar, Rosita and Knudsen, Amy B and Hahn, Anne I and Kuntz, Karen M and Ozik, Jonathan and Collier, Nicholson and Alarid-Escudero, Fernando and Zauber, Ann G and Inadomi, John M and Lansdorp-Vogelaar, Iris and Rutter, Carolyn M`,
    doi: '10.1093/jnci/djae124',
    featured: false,
    abstract: `Blood-based biomarker tests can potentially change the landscape of colorectal cancer (CRC) screening. We characterize the conditions under which blood test screening would be as effective and cost-effective as annual fecal immunochemical testing or decennial colonoscopy. We used the 3 Cancer Information and Surveillance Modeling Network–Colon models to compare scenarios of no screening, annual fecal immunochemical testing, decennial colonoscopy, and a blood test meeting Centers for Medicare & Medicaid (CMS) coverage criteria (74% CRC sensitivity and 90% specificity). We varied the sensitivity to detect CRC (74%-92%), advanced adenomas (10%-50%), screening interval (1-3 years), and test cost ($25-$500). Primary outcomes included quality-adjusted life-years (QALY) gained from screening and costs for a US average-risk cohort of individuals aged 45 years. Annual fecal immunochemical testing yielded 125-163 QALY gained per 1000 at a cost of $3811-$5384 per person, whereas colonoscopy yielded 132-177 QALY gained at a cost of $5375-$7031 per person. A blood test with 92% CRC sensitivity and 50% advanced adenoma sensitivity yielded 117-162 QALY gained if used every 3 years and 133-173 QALY gained if used every year but would not be cost-effective if priced above $125 per test. Blood tests that only meet CMS coverage requirements should not be recommended to patients who would otherwise undergo screening by colonoscopy or fecal immunochemical testing because of lower benefit. Blood tests need higher advanced adenoma sensitivity (above 40%) and lower costs (below $125) to be cost-effective.`,
    tags: ['colorectal cancer', 'blood test', 'liquid biopsy', 'cancer screening', 'cost effectiveness', 'health economics', 'preventive medicine', 'population health', 'healthcare access', 'screening programs', 'early detection', 'robust decision making']
  },
  {
    id: 'nascimentodelimaValueEnvironmentalSurveillance2024',
    title: `The Value of Environmental Surveillance for Pandemic Response`,
    journal: 'Scientific Reports',
    year: 2024,
    authors: `Pedro Nascimento de Lima and Karr, Sarah and Lim, Jing Zhi and Vardavas, Raffaele and Roberts, Derek and Kessler, Abigail and Awan, Jalal and Faherty, Laura J. and Willis, Henry H.`,
    doi: '10.1038/s41598-024-79952-5',
    featured: false,
    code: `https://github.com/RANDCorporation/value-of-env-surveillance`,
    abstract: `Environmental sampling surveillance (ESS) technologies, such as wastewater genomic surveillance and air sensors, have been increasingly adopted during the COVID-19 pandemic to provide valuable information for public health response. However, ESS coverage is not universal, and public health decision-makers need support to choose whether and how to expand and sustain ESS efforts. This paper introduces a model and approach to quantify the value of ESS systems that provide leading epidemiological indicators for pandemic response. Using the COVID-19 pandemic as a base-case scenario, we quantify the value of ESS systems in the first year of a new pandemic and demonstrate how the value of ESS systems depends on biological and societal parameters. Under baseline assumptions, an ESS system that provides a 5-day early warning relative to syndromic surveillance could reduce deaths from 149 (95% prediction interval: 136–169) to 134 (124–144) per 100,000 population during the first year of a new COVID-19-like pandemic, resulting in a net monetary benefit of $1,450 ($609-$2,740) per person. The system's value is higher for more transmissible and deadly pathogens but hinges on the effectiveness of public health interventions. Our findings also suggest that ESS systems would provide net-positive benefits even if they were permanently maintained and pathogens like SARS-Cov-2 emerged once every century or less frequently. Our results can be used to prioritize pathogens for ESS, decide whether and how to expand systems to currently uncovered populations, and determine how to scale surveillance systems' coverage over time.`,
    tags: ['environmental surveillance', 'pandemic response', 'wastewater surveillance', 'public health', 'infectious disease', 'surveillance systems', 'decision analysis', 'value of information', 'COVID-19', 'outbreak detection', 'disease monitoring', 'epidemiology']
  },
  {
    id: 'VANDENPUTTELAAR2024',
    title: `Effectiveness and Cost-Effectiveness of Colorectal Cancer Screening With a Blood Test That Meets the Centers for Medicare & Medicaid Services Coverage Decision`,
    journal: 'Gastroenterology',
    year: 2024,
    authors: `Rosita van den Puttelaar and Pedro Nascimento de Lima and Amy B. Knudsen and Carolyn M. Rutter and Karen M. Kuntz and Lucie de Jonge and Fernando Alarid Escudero and David Lieberman and Ann G. Zauber and Anne I. Hahn and John M. Inadomi and Iris Lansdorp-Vogelaar`,
    doi: '10.1053/j.gastro.2024.02.012',
    featured: true,
    abstract: `Background & Aims

A blood-based colorectal cancer (CRC) screening test may increase screening participation. However, blood tests may be less effective than current guideline-endorsed options. The Centers for Medicare & Medicaid Services (CMS) covers blood tests with sensitivity of at least 74% for detection of CRC and specificity of at least 90%. In this study, we investigate whether a blood test that meets these criteria is cost-effective.

Methods

Three microsimulation models for CRC (MISCAN-Colon, CRC-SPIN, and SimCRC) were used to estimate the effectiveness and cost-effectiveness of triennial blood-based screening (from ages 45 to 75 years) compared to no screening, annual fecal immunochemical testing (FIT), triennial stool DNA testing combined with an FIT assay, and colonoscopy screening every 10 years. The CMS coverage criteria were used as performance characteristics of the hypothetical blood test. We varied screening ages, test performance characteristics, and screening uptake in a sensitivity analysis.

Results

Without screening, the models predicted 77–88 CRC cases and 32–36 CRC deaths per 1000 individuals, costing $5.3–$5.8 million. Compared to no screening, blood-based screening was cost-effective, with an additional cost of $25,600–$43,700 per quality-adjusted life-year gained (QALYG). However, compared to FIT, triennial stool DNA testing combined with FIT, and colonoscopy, blood-based screening was not cost-effective, with both a decrease in QALYG and an increase in costs. FIT remained more effective (+5–24 QALYG) and less costly (–$3.2 to –$3.5 million) than blood-based screening even when uptake of blood-based screening was 20 percentage points higher than uptake of FIT.

Conclusion

Even with higher screening uptake, triennial blood-based screening, with the CMS-specified minimum performance sensitivity of 74% and specificity of 90%, was not projected to be cost-effective compared with established strategies for colorectal cancer screening.`,
    tags: ['colorectal cancer', 'blood test', 'liquid biopsy', 'cancer screening', 'Medicare', 'Medicaid', 'cost effectiveness', 'biomarkers', 'diagnostic testing', 'health policy', 'coverage decisions', 'preventive care', 'gastroenterology', 'early detection']
  },
  {
    id: 'LIEBERMAN2024',
    title: `Commentary: Liquid Biopsy for Average-Risk Colorectal Cancer Screening`,
    journal: 'Clinical Gastroenterology and Hepatology',
    year: 2024,
    authors: `David A. Lieberman and Aasma Shaukat and Folasade P. May and John M. Carethers and Iris Lansdorp-Vogelaar and Uri Ladabaum and Timothy R. Church and Anjelica Davis and Chyke A. Doubeni and John M. Inadomi and Richard C. Wender and Pedro Nascimento de Lima and Rosita van den Puttelaar`,
    doi: '10.1016/j.cgh.2024.01.034',
    featured: false,
    tags: ['liquid biopsy', 'colorectal cancer', 'cancer screening', 'average risk', 'biomarkers', 'circulating tumor DNA', 'early detection', 'preventive medicine', 'gastroenterology', 'clinical guidelines', 'screening guidelines', 'non-invasive testing'],
    abstract: `The American Gastroenterological Association convened a workshop to summarize the evidence on emerging blood tests for CRC screening. This paper reports those findings and provides consensus statements from the workshop's expert panel.`
  },
  {
    id: 'Nowak2024.02.19.24303020',
    title: `The cost of myopic pandemic response`,
    journal: 'medRxiv',
    year: 2024,
    authors: `Sarah Nowak and Pedro Nascimento de Lima and Raffaele Vardavas`,
    doi: '10.1101/2024.02.19.24303020',
    featured: false,
    abstract: `Prior to the availability of COVID-19 vaccines, non-pharmaceutical interventions (NPIs) served as a primary strategy to mitigate the spread of the disease. However, the efficiency of these interventions relies on understanding and incorporating human behavior into infectious disease models. This study addresses the need for models that better account for the influence of temporal discounting on behavioral dynamics to enhance forecasting accuracy and develop robust mitigation strategies. Our previous research introduced Known Time Horizon (KTH) policies, optimizing social distancing measures based on a central planner’s rational assessment of the pandemic’s time frame and associated costs. In this paper, we contrast the KTH policy with a model reflecting myopic decision-making, an extreme form of temporal discounting that emphasizes short-term outcomes over long-term consequences. By comparing the expected social distancing behavior under myopic decision-making with the optimal policy derived from KTH approaches, we elucidate the impact of temporal bias on social distancing practices and assess its implications for infection dynamics and associated costs. We find that myopic policy always results in greater total costs throughout an epidemic compared to a KTH policy. However, each cost component – the costs of infection and social distancing – derived from a myopic strategy may be either larger or smaller than the component costs for a strategy developed using a full optimization model, depending on the specific parameters involved as myopic decision-makers seek to delay both costs of social distancing and infection.`,
    tags: ['pandemic response', 'non-pharmaceutical interventions', 'infectious disease modeling', 'social distancing', 'COVID-19', `mathematical modeling`]
  },
  {
    id: 'NascimentodeLima2023Pandemic',
    title: `Co-Designing Capabilities for a Robust Pandemic Response: Stakeholder Engagement for Visioning, Backcasting, and Evaluating New Decision-Support Capabilities`,
    journal: 'RAND Working Paper',
    year: 2023,
    authors: `Nascimento de Lima and Stevens, Abby and Vardavas, Raffaele and Ozik, Jonathan and Lempert, Robert J.`,
    doi: '10.7249/WRA3085-1',
    featured: false,
    abstract: `This paper reports on a stakeholder engagement process to inform research to improve public health officials' responses to future pandemics. Three workshops convened decisionmakers, modelers, and researchers to envision a future with improved pandemic response, demonstrate means for co-producing research plans to pursue that vision, and inform the design of information products to support robust public health decisions in such a future.`,
    tags: ['pandemic response', 'public health decision-making', 'stakeholder engagement', 'decision support systems', 'scenario planning', 'visioning', 'backcasting', 'health policy', 'emergency preparedness']
  },
  {
    id: 'NascimentodeLima2023AMS',
    title: `Modeling America's Racial Wealth Disparities: Mathematical Models Help Chart Pathways for Closing Racial Wealth Gaps`,
    journal: 'Notices of the American Mathematical Society',
    year: 2023,
    authors: `Nascimento de Lima and Lamb, Jonathan and Osoba, Osonde and Welburn, Jonathan`,
    doi: '10.1090/noti2743',
    featured: false,
    code: `https://github.com/RANDCorporation/racial-wealth-gap`,
    abstract: `Will America always be a country marked by racial disparity? Will Black families always be systematically poorer than white families? Can the American society reach a stage where past disparities are mended, economic opportunity is expanded, and where everyone gets their fair share? Are such goals mathematically feasible, and if so, over what timeframe? What policies could achieve these goals? For many, questions like these evoke a very strong response. Some may immediately object, arguing that America is and has always been a land of opportunity for all races and groups--a leading democracy that delivered prosperity through free markets. Others will say America has never been a land of opportunity for all--particularly for Black Americans. No matter where you lie along this spectrum, we invite you to dive into mathematical facts about racial wealth disparity in America and models that help shed light on America's wealth disparity struggle. Building on our recently released report describing the headwinds of a long and incessant racial wealth gap, we introduce a measure of racial wealth disparity and characterize the wealth distribution among Black and white US households. Next, we frame America's racial wealth disparity challenge within a computational optimization setting where the social objective is to close racial wealth gaps at a minimal cost. Finally, we discuss how models that describe long-term dynamics of wealth accumulation--specifically, overlapping generation (OLG) models--can be used to investigate whether the United States can ever become a country free of racial wealth disparities.`,
    tags: ['racial wealth gap', 'economic disparity', 'mathematical modeling', 'wealth distribution', 'public policy', 'economic opportunity', 'racial inequality', 'computational optimization', 'overlapping generation models']
  },
  {
    id: 'Griffin2023',
    title: `Identifying Optimal Methods for Addressing Confounding Bias When Estimating the Effects of State-level Policies`,
    journal: 'Epidemiology',
    year: 2023,
    authors: `Griffin, Beth Ann and Schuler, Megan S and Stone, Elizabeth M and Patrick, Stephen W and Stein, Bradley D and Nascimento de Lima, Pedro and Griswold, Max and Scherling, Adam and Stuart, Elizabeth A`,
    doi: '10.1097/EDE.0000000000001659',
    featured: false,
    abstract: `Background: Policy evaluation studies that assess how state-level policies affect health-related outcomes are foundational to health and social policy research. The relative ability of newer analytic methods to address confounding, a key source of bias in observational studies, has not been closely examined.

Methods: We conducted a simulation study to examine how differing magnitudes of confounding affected the performance of 4 methods used for policy evaluations: (1) the two-way fixed effects difference-in-differences model; (2) a 1-period lagged autoregressive model; (3) augmented synthetic control method; and (4) the doubly robust difference-in-differences approach with multiple time periods from Callaway-Sant'Anna. We simulated our data to have staggered policy adoption and multiple confounding scenarios (i.e., varying the magnitude and nature of confounding relationships).

Results: Bias increased for each method: (1) as confounding magnitude increases; (2) when confounding is generated with respect to prior outcome trends (rather than levels), and (3) when confounding associations are nonlinear (rather than linear). The autoregressive model and augmented synthetic control method had notably lower root mean squared error than the two-way fixed effects and Callaway-Sant'Anna approaches for all scenarios; the exception is nonlinear confounding by prior trends, where Callaway-Sant'Anna excels. Coverage rates were unreasonably high for the augmented synthetic control method (e.g., 100%), reflecting large model-based standard errors and wide confidence intervals in practice.

Conclusions: In our simulation study, no single method consistently outperformed the others, but a researcher's toolkit should include all methodologic options. Our simulations and associated R package can help researchers choose the most appropriate approach for their data.`,
    tags: ['policy evaluation', 'state-level policies', 'causal inference', 'difference-in-differences', 'synthetic control method', 'autoregressive models', 'simulation study', 'epidemiology', 'observational studies']
  },
  {
    id: 'SelectiveOpenessLima2023',
    title: `Selective Openness in the Additive Manufacturing Industry: An Exploratory Modeling Analysis`,
    journal: 'Industrial Engineering and Operations Management',
    year: 2023,
    authors: ` Nascimento de Lima, Pedro and Teixeira, Rafael and Wolf Motta Morandi, Maria I and Lacerda, Daniel Pacheco and Popper, Steven W`,
    doi: '10.1007/978-3-031-47058-5_19',
    featured: false,
    abstract: `Selective openness is an R&D strategy in which firms allow portions of their technology to be accessed by other firms to attract adopters and supplier complements. While open-source software (OSS) has been widely embraced by software firms, it is unclear if open-source hardware (OSH) will be similarly embraced by technology-intensive manufacturing firms. This paper extends a competitive dynamics model to investigate tradeoffs associated with selective openness R&D strategies in the professional-grade additive manufacturing (AM) industry. We start by examining whether a competitive dynamics model supports selective openness strategies from a profit-maximization standpoint. We then evaluate the industry-level impacts of selective openness. While our results do not support the adoption of selective openness strategies from a strict profit-maximization standpoint, firms may pursue this strategy if they place value on advancing the overall product quality and accessibility in their industry.`,
    tags: ['additive manufacturing', 'open-source hardware', 'competitive dynamics', 'R&D strategy', 'industrial engineering', 'operations management', 'technology adoption']
  },
  {
    id: 'Rutter2023',
    title: `Black-White disparities in colorectal cancer outcomes: a simulation study of screening benefit`,
    journal: 'JNCI Monographs',
    year: 2023,
    authors: `Rutter, Carolyn M. and Nascimento de Lima, Pedro and Maerzluft, Christopher E and May, Folasade P and Murphy, Caitlin C`,
    doi: '10.1093/jncimonographs/lgad019',
    featured: false,
    abstract: `The US Black population has higher colorectal cancer (CRC) incidence rates and worse CRC survival than the US White population, as well as historically lower rates of CRC screening. The Surveillance, Epidemiology, and End Results incidence rate data in people diagnosed between the ages of 20 and 45 years, before routine CRC screening is recommended, were analyzed to estimate temporal changes in CRC risk in Black and White populations. There was a rapid rise in rectal and distal colon cancer incidence in the White population but not the Black population, and little change in proximal colon cancer incidence for both groups. In 2014-2018, CRC incidence per 100 000 was 17.5 (95% confidence interval [CI] = 15.3 to 19.9) among Black individuals aged 40-44 years and 16.6 (95% CI = 15.6 to 17.6) among White individuals aged 40-44 years; 42.3% of CRCs diagnosed in Black patients were proximal colon cancer, and 41.1% of CRCs diagnosed in White patients were rectal cancer. Analyses used a race-specific microsimulation model to project screening benefits, based on life-years gained and lifetime reduction in CRC incidence, assuming these Black–White differences in CRC risk and location. The projected benefits of screening (via either colonoscopy or fecal immunochemical testing) were greater in the Black population, suggesting that observed Black–White differences in CRC incidence are not driven by differences in risk. Projected screening benefits were sensitive to survival assumptions made for Black populations. Building racial disparities in survival into the model reduced projected screening benefits, which can bias policy decisions.`,
    tags: ['colorectal cancer', 'cancer disparities', 'racial disparities', 'cancer screening', 'microsimulation modeling', 'public health', 'epidemiology', 'health equity', 'preventive medicine', 'population health']
  },
  {
    id: 'VandenBerg2023',
    title: `NordICC Trial Results in Line With Expected Colorectal Cancer Mortality Reduction After Colonoscopy: A Modeling Study`,
    journal: 'Gastroenterology',
    year: 2023,
    authors: `van den Berg, Danica M.N. and Nascimento de Lima, Pedro and Knudsen, Amy B. and Rutter, Carolyn M. and Weinberg, David and Lansdorp-Vogelaar, Iris and Zauber, Ann G. and Hahn, Anne I. and Escudero, Fernando Alarid and Maerzluft, Christopher E. and Katsara, Alexandra and Kuntz, Karen M. and John, M.Inadomi and Collier, Nicholson and Ozik, Jonathan and van Duuren, Luuk A. and van den Puttelaar, Rosita and Harlass, Matthias and Seguin, Claudia Leigh and Davidi, Barak and Pineda-Antunez, Carlos and Feuer, Eric J. and de Jonge, Lucie`,
    doi: '10.1053/j.gastro.2023.06.035',
    featured: false,
    abstract: `This paper uses three Cancer Intervention and Surveillance Modeling Network (CISNET) colorectal cancer models to simulate NordICC trial outcomes.`,
    tags: ['colorectal cancer', 'cancer screening', 'colonoscopy', 'randomized controlled trial', 'microsimulation modeling', 'public health', 'epidemiology', 'preventive medicine', 'population health']
  },
  {
    id: 'Osoba2023',
    title: `Exploring Intergenerational Wealth Transfer Dynamics with Agent-Based Models`,
    journal: 'RAND Working Paper',
    year: 2023,
    authors: `Osoba, Osonde A and Welburn, Jonathan W and Lamb, Jonathan and Nascimento de Lima, Pedro and Kumar, Krishna B`,
    doi: '10.7249/WRA1259-8',
    featured: false,
    abstract: `This paper introduces a modeling environment that could be used for testing the long run impacts of policy interventions on differences between white and Black wealth.`,
    tags: ['intergenerational wealth transfer', 'agent-based modeling', 'economic inequality', 'racial wealth gap', 'wealth dynamics', 'social equity', 'economic policy']
  },
  {
    id: 'NascimentodeLima2023',
    title: `Projected long-term effects of colorectal cancer screening disruptions following the COVID-19 pandemic`,
    journal: 'eLife',
    year: 2023,
    authors: `Nascimento de Lima, Pedro and van den Puttelaar, Rosita and Hahn, Anne I and Harlass, Matthias and Collier, Nicholson and Ozik, Jonathan and Zauber, Ann G and Lansdorp-Vogelaar, Iris and Rutter, Carolyn M`,
    doi: '10.7554/eLife.85264',
    featured: false,
    code: `https://github.com/c-rutter/unequal-recovery-covid-19`,
    abstract: `The aftermath of the initial phase of the COVID-19 pandemic may contribute to the widening of disparities in colorectal cancer (CRC) outcomes due to differential disruptions to CRC screening. This comparative microsimulation analysis uses two CISNET CRC models to simulate the impact of ongoing screening disruptions induced by the COVID-19 pandemic on long-term CRC outcomes. We evaluate three channels through which screening was disrupted: delays in screening, regimen switching, and screening discontinuation. The impact of these disruptions on long-term CRC outcomes was measured by the number of life-years lost due to CRC screening disruptions compared to a scenario without any disruptions. While short-term delays in screening of 3–18 months are predicted to result in minor life-years loss, discontinuing screening could result in much more significant reductions in the expected benefits of screening. These results demonstrate that unequal recovery of screening following the pandemic can widen disparities in CRC outcomes and emphasize the importance of ensuring equitable recovery to screening following the pandemic.`,
    tags: ['colorectal cancer', 'cancer screening', 'COVID-19 pandemic', 'health disparities', 'microsimulation modeling', 'public health', 'epidemiology', 'health equity', 'preventive medicine', 'population health']
  },
  {
    id: 'Nowak2023',
    title: `Optimal non-pharmaceutical pandemic response strategies depend critically on time horizons and costs`,
    journal: 'Scientific Reports',
    year: 2023,
    authors: `Nowak, Sarah A and Nascimento de Lima, Pedro and Vardavas, Raffaele`,
    doi: '10.1038/s41598-023-28936-y',
    featured: false,
    abstract: `The COVID-19 pandemic has called for swift action from local governments, which have instated non-pharmaceutical interventions (NPIs) to curb the spread of the disease. The swift implementation of social distancing policies has raised questions about the costs and benefits of strategies that either aim to keep cases as low as possible (suppression) or aim to reach herd immunity quickly (mitigation) to tackle the COVID-19 pandemic. While curbing COVID-19 required blunt instruments, it is unclear whether a less-transmissible and less-deadly emerging pathogen would justify the same response. This paper illuminates this question using a parsimonious transmission model by formulating the social distancing lives vs. livelihoods dilemma as a boundary value problem using calculus of variations. In this setup, society balances the costs and benefits of social distancing contingent on the costs of reducing transmission relative to the burden imposed by the disease. We consider both single-objective and multi-objective formulations of the problem. To the best of our knowledge, our approach is distinct in the sense that strategies emerge from the problem structure rather than being imposed a priori. We find that the relative time-horizon of the pandemic (i.e., the time it takes to develop effective vaccines and treatments) and the relative cost of social distancing influence the choice of the optimal policy. Unsurprisingly, we find that the appropriate policy response depends on these two factors. We discuss the conditions under which each policy archetype (suppression vs. mitigation) appears to be the most appropriate.`,
    tags: ['pandemic response', 'non-pharmaceutical interventions', 'infectious disease modeling', 'social distancing', 'COVID-19', 'calculus of variations', 'optimal control', 'decision science']
  },
  {
    id: 'NascimentodeLima2022',
    title: `Robust Decision Making in Health Policy: Applications to COVID-19 and Colorectal Cancer`,
    journal: 'Pardee RAND Dissertation',
    year: 2022,
    authors: `Nascimento de Lima, Pedro`,
    doi: '10.7249/RGSDA2531-1',
    featured: false,
    abstract: `The COVID-19 pandemic demonstrated the value of modeling to inform health policy. Models were used to provide situational awareness and inform mitigation policies. However, uncertainty surrounding the longevity of vaccine and infection-induced immunity, the emergence and characteristics of SARS‐CoV‐2 variant strains, and behavioral responses to policy interventions prevent modelers from providing more than a few weeks of model-based foresight. Under those conditions, policymakers have options to control the pandemic, but deep uncertainties deny the prediction of their long-term effects. Robust Decision Making (RDM) is a set of methods and tools designed to inform decisions under conditions of deep uncertainty. This dissertation presents three papers exploring the utility of RDM for supporting health policy decisions. The first paper discusses how public health decision-makers may benefit from RDM, using pandemic response policies as a motivating example. The second paper presents a stress test of California's COVID-19 reopening strategy, demonstrating that adaptive reopening plans are superior to non-adaptive ones. The third evaluates the robustness of colorectal cancer screening strategies to uncertainties surrounding the natural history of the disease. Finally, this dissertation reflects on the broader applicability of RDM to health policy decision-analytic problems and reflects on future research directions.`,
    tags: ['robust decision making', 'health policy', 'COVID-19', 'pandemic response', 'colorectal cancer', 'decision analysis', 'uncertainty analysis', 'public health', 'policy modeling']
  },
  {
    id: 'Welburn2022',
    title: `Overcoming Compound Racial Inequity: Policies and Costs for Closing the Black-White Wealth Gap`,
    journal: 'RAND Report',
    year: 2022,
    authors: `Welburn, Jonathan W. and Nascimento de Lima, Pedro and Kumar, Krishna B. and Osoba, Osonde A. and Lamb, Jonathan`,
    doi: '10.7249/RRA1259-2',
    featured: false,
    abstract: 'This report provides a quantitative analysis of current the US wealth distribution, a measure of racial wealth disparity, and a model of disparity-reducing wealth allocations. The authors use data from the Survey of Consumer Finances, a survey conducted by the Federal Reserve Board, to investigate the sources of wealth disparity, estimate the potential first-order impacts of government allocations, and shed light on the possible trade-offs of one-time allocations.',
    code: `https://github.com/RANDCorporation/racial-wealth-gap`,
    tags: ['racial wealth gap', 'economic inequality', 'social equity', 'wealth disparities', 'policy analysis', 'economic policy', 'racial inequality', 'intergenerational wealth', 'social justice', 'economic modeling', 'inequality research', 'demographic economics']
  },
  {
    id: 'NascimentodeLima2021a',
    title: `Reopening California: Seeking robust, non-dominated COVID-19 exit strategies`,
    journal: 'PLOS ONE',
    year: 2021,
    authors: `Nascimento de Lima, Pedro and Lempert, Robert and Vardavas, Raffaele and Baker, Lawrence and Ringel, Jeanne and Rutter, Carolyn M and Ozik, Jonathan and Collier, Nicholson`,
    doi: '10.1371/journal.pone.0259166',
    featured: false,
    code: `https://github.com/RANDCorporation/covid-19-reopening-california`,
    abstract: `The COVID-19 pandemic required significant public health interventions from local governments. Although nonpharmaceutical interventions often were implemented as decision rules, few studies evaluated the robustness of those reopening plans under a wide range of uncertainties. This paper uses the Robust Decision Making approach to stress-test 78 alternative reopening strategies, using California as an example. This study uniquely considers a wide range of uncertainties and demonstrates that seemingly sensible reopening plans can lead to both unnecessary COVID-19 deaths and days of interventions. We find that plans using fixed COVID-19 case thresholds might be less effective than strategies with time-varying reopening thresholds. While we use California as an example, our results are particularly relevant for jurisdictions where vaccination roll-out has been slower. The approach used in this paper could also prove useful for other public health policy problems in which policymakers need to make robust decisions in the face of deep uncertainty.`,
    tags: ['COVID-19', 'pandemic response', 'public health policy', 'robust decision making', 'California', 'reopening strategies', 'uncertainty analysis', 'epidemiology', 'policy modeling', 'decision science', 'health economics', 'simulation modeling']
  },
  {
    id: 'Rutter2021',
    title: `Too Good to Be True? Evaluation of Colonoscopy Sensitivity Assumptions Used in Policy Models`,
    journal: 'Cancer Epidemiology Biomarkers & Prevention',
    year: 2022,
    authors: `Rutter, Carolyn M. and Nascimento de Lima, Pedro and Lee, Jeffrey K. and Ozik, Jonathan`,
    doi: '10.1158/1055-9965.EPI-21-1001',
    featured: false,
    abstract: "Background: Models can help guide colorectal cancer screening policy. Although models are carefully calibrated and validated, there is less scrutiny of assumptions about test performance. Methods: We examined the validity of the CRC-SPIN model and colonoscopy sensitivity assumptions. Standard sensitivity assumptions, consistent with published decision analyses, assume sensitivity equal to 0.75 for diminutive adenomas (<6 mm), 0.85 for small adenomas (6-10 mm), 0.95 for large adenomas (≥10 mm), and 0.95 for preclinical cancer. We also selected adenoma sensitivity that resulted in more accurate predictions. Targets were drawn from the Wheat Bran Fiber study. We examined how well the model predicted outcomes measured over a three-year follow-up period, including the number of adenomas detected, the size of the largest adenoma detected, and incident colorectal cancer. Results: Using standard sensitivity assumptions, the model predicted adenoma prevalence that was too low (42.5% versus 48.9% observed, with 95% confidence interval 45.3%-50.7%) and detection of too few large adenomas (5.1% versus 14.% observed, with 95% confidence interval 11.8%-17.4%). Predictions were close to targets when we set sensitivities to 0.20 for diminutive adenomas, 0.60 for small adenomas, 0.80 for 10- to 20-mm adenomas, and 0.98 for adenomas 20 mm and larger. Conclusions: Colonoscopy may be less accurate than currently assumed, especially for diminutive adenomas. Alternatively, the CRC-SPIN model may not accurately simulate onset and progression of adenomas in higher-risk populations. Impact: Misspecification of either colonoscopy sensitivity or disease progression in high-risk populations may affect the predicted effectiveness of colorectal cancer screening. When possible, decision analyses used to inform policy should address these uncertainties.See related commentary by Etzioni and Lange, p. 702.",
    tags: ['colorectal cancer', 'cancer screening', 'colonoscopy', 'test sensitivity', 'microsimulation modeling', 'public health', 'epidemiology', 'preventive medicine', 'population health']
  },
  {
    id: 'NascimentodeLima2021b',
    title: `Reopening Under Uncertainty: Stress-Testing California's COVID-19 Exit Strategy`,
    journal: 'RAND Perspective',
    year: 2021,
    authors: `Nascimento de Lima, Pedro and Vardavas, Raffaele and Baker, Lawrence and Ringel, Jeanne and Lempert, Robert J. and Rutter, Carolyn M and Ozik, Jonathan`,
    doi: '10.7249/PEA1080-1',
    featured: false,
    tags: ['COVID-19', 'pandemic response', 'public health policy', 'robust decision making', 'California', 'reopening strategies', 'uncertainty analysis', 'epidemiology', 'policy modeling', 'decision science', 'health economics', 'simulation modeling']
  },
  {
    id: 'Vardavas2021a',
    title: `Could periodic nonpharmaceutical intervention strategies produce better COVID-19 health and economic outcomes?`,
    journal: 'Journal on Policy and Complex Systems',
    year: 2021,
    authors: `Vardavas, Raffaele and Nascimento de Lima, Pedro and Baker, Lawrence`,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9109618/',
    featured: false,
    abstract: `The coronavirus disease 2019 pandemic required significant public health interventions from local governments. Early in the pandemic, RAND researchers developed a decision support tool to provide policymakers with insight into the trade-offs they might face when choosing among nonpharmaceutical intervention levels. Using an updated version of the model, the researchers performed a stress-test of a variety of alternative reopening plans, using California as an example. This Perspective presents the general lessons learned from these experiments and discusses four characteristics of the best reopening strategies.`,
    tags: ['COVID-19', 'pandemic response', 'nonpharmaceutical interventions', 'public health policy', 'decision support', 'health economics', 'pandemic planning', 'policy analysis', 'simulation modeling']
  },
  {
    id: 'Vardavas2021b',
    title: `Modeling Infectious Behaviors: The Need to Account for Behavioral Adaptation in COVID-19 Models`,
    journal: 'Journal on Policy and Complex Systems',
    year: 2021,
    authors: `Vardavas, Raffaele and Nascimento de Lima, Pedro and Davis, Paul K and Parker, Andrew M and Baker, Lawrence`,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9109616/',
    featured: false,
    abstract: `This essay discusses the need for new types of simulation models of COVID-19 that couple transmission dynamics with adaptive behaviors.`,
    tags: ['COVID-19', 'infectious disease modeling', 'behavioral adaptation', 'public health policy', 'pandemic response', 'simulation modeling', 'decision support']
  },
  {
    id: 'covid_allegheny_tool',
    title: `Vulnerability, Inequity, and COVID-19: A Portrait of the Pandemic in Allegheny County`,
    journal: 'RAND Tool',
    year: 2021,
    authors: `Evan D. Peet, Linnea Warren May, Jordan R. Fischbach, Christine Campigotto, Tichakunda Mangono, Colleen M. McCullough, Tiffany L. Gary-Webb, Robert Gradeck, Jared Kohler, Maria Gardner, Pedro Nascimento de Lima, Jason Beery, Lindsay Coome, Bettina Hammer, Jeanne S. Ringel, Noble Maseru, Fred Brown, Dara Mendez`,
    doi: '10.7249/TLA1080-1-v2',
    url: 'https://www.rand.org/pubs/tools/TLA1080-1-v2.html',
    featured: false,
    abstract: `To examine vulnerability to COVID-19 and the pandemic's impacts within a specific community, the RAND Corporation, the Black Equity Coalition, and Surgo Ventures partnered to consider disparities in Allegheny County in southwest Pennsylvania. Researchers created an interactive online tool to show how testing, cases, deaths, and the ability to practice physical distancing have been distributed across neighborhoods and populations.`,
    tags: ['COVID-19', 'health disparities', 'public health', 'epidemiology', 'social determinants of health', 'health equity', 'pandemic response', 'community health', 'data visualization']
  },
  {
    id: 'Vardavas2020',
    title: `The Health and Economic Impacts of Nonpharmaceutical Interventions to Address COVID-19: A Decision Support Tool for State and Local Policymakers`,
    journal: 'RAND Tool',
    year: 2020,
    authors: `Vardavas, Raffaele and Strong, Aaron and Bouey, Jennifer and Welburn, Jonathan and Nascimento de Lima, Pedro and Baker, Lawrence and Zhu, Keren and Priest, Michelle and Hu, Lynn and Ringel, Jeanne`,
    doi: '10.7249/tla173-1',
    featured: true,
    abstract: `This tool provides the information and context that policymakers need now to understand the effects of interventions, weigh the trade-offs between them, and decide when and how these interventions can be relaxed. The tool should be of interest to policymakers and others who wish to use it to understand the potential impacts of various nonpharmaceutical interventions (e.g., school closures, stay-at-home orders) on health and economic outcomes in their communities.`,
    tags: ['COVID-19', 'nonpharmaceutical interventions', 'public health policy', 'decision support', 'health economics', 'pandemic response', 'policy analysis', 'simulation modeling', 'state policy', 'local government', 'health impact assessment', 'economic impact']
  },
  {
    id: 'diet_tool',
    title: `How Would a Better Diet Affect Health and Economic Outcomes in the United States?`,
    journal: 'RAND Tool',
    year: 2020,
    authors: `Pedro Nascimento de Lima, PhuongGiang Nguyen, Patricia M. Herman, Roland Sturm`,
    url: 'https://www.rand.org/pubs/tools/TL363.html',
    doi: '10.7249/TL363',
    featured: false,
    abstract: `This online tool shows the effect that improving diet quality in the United States could have on health and economic outcomes, such as the prevalence of diet-related illness, health care spending, and labor force participation, over a 30-year period. The user can explore the effects of a dietary improvement on several outcomes, across different metrics and population sub-groups.`,
    tags: ['diet quality', 'public health', 'health economics', 'chronic disease', 'nutrition', 'health outcomes', 'economic outcomes', 'simulation modeling', 'health policy']
  },
  {
    id: 'Veit2019',
    title: `The impacts of Additive Manufacturing on production systems`,
    journal: 'International Joint Conference ICIEOM',
    year: 2019,
    authors: `Veit, Douglas Rafael and Larcerda, Daniel Pacheco and Morandi, Maria Isabel Wolf Motta and Dresch, Aline and Nascimento de Lima, Pedro`,
    doi: '10.1007/978-3-319-93488-4',
    featured: false,
    abstract: `Additive Manufacturing adoption has been growing in the last decades, holding the potential to fundamentally transform traditional production systems. Yet, its prospected impact on Production Systems and Operations Strategy is controversial. This article contributes to this debate by examining and summarizing the prospected impact of Additive Manufacturing on Production Systems, in the light of the Competitive Dimensions through a Systematic Literature Review. In particular, this paper organises this debate by highlighting the specific impacts prospected by the literature for each competitive dimension.`,
    tags: ['additive manufacturing', '3D printing', 'production systems', 'operations strategy', 'competitive dimensions', 'manufacturing technology', 'industrial engineering']
  },
  {
    id: 'Dresch2018',
    title: `Inducing Brazilian manufacturing SMEs productivity with Lean tools`,
    journal: 'International Journal of Productivity and Performance Management',
    year: 2019,
    authors: `Dresch, Aline and Veit, Douglas Rafael and Nascimento de Lima, Pedro and Lacerda, Daniel Pacheco and Collatto, Dalila Cisco`,
    doi: '10.1108/IJPPM-10-2017-0248',
    featured: false,
    abstract: `Purpose
The purpose of this paper is to present a method for assisting micro and small companies of the industrial sector with the adoption of Lean practices.

Design/methodology/approach
The paper outlines the method construction steps, which used a design science research approach.

Findings
This research led to the structuring of a method for implementing Lean Manufacturing tools in micro and small companies of the industrial sector. The developed method contributed to the knowledge in Lean Manufacturing by systematizing its tools in a heuristic approach that can be applied to an operation using overall equipment effectiveness (OEE) as a guiding indicator.

Practical implications
This method can be used to guide the implementation of Lean tools in SMEs industries.

Originality/value
The originality of this paper lies in the adoption of an operation-focused approach only (rather than an approach that begins with the mapping of an entire process) and the use of OEE as the basis for prioritization of improvements to be performed and operational control.`,
    tags: ['Lean Manufacturing', 'small and medium enterprises', 'productivity improvement', 'overall equipment effectiveness', 'industrial engineering', 'operations management', 'process improvement']
  },
  {
    id: 'Lima2019',
    title: `Do Socioeconomic Contextual Factors Influence SMEs Service Quality? A cross-sector and cross-city SERVPERF analysis`,
    journal: 'International Journal of Business Performance Management',
    year: 2019,
    authors: `Nascimento de Lima, Pedro and Dresch, Aline and Lacerda, Daniel Pacheco`,
    doi: '10.1504/IJBPM.2019.101998',
    featured: false,
    abstract: `There is an increasing body of knowledge on service quality relationship with many contextual factors including culture, firm size and public vs. private settings. However, local socio-economic factors influence towards SMEs service quality is still unknown. We conducted statistical analyses to observe the relationship between contextual socio-economic factors of an SME's city and its service's quality performance using a SERVPERF survey database of more than 3,000 Brazilian SMEs. While service performance did not linearly correlate with the analysed socio-economic factors, a closer look at the data shows significant differences in service performance among groups of SMEs on highly developed and underdeveloped cities from the other cities. The paper discusses theoretical and managerial implications derived from these findings and proposes new research questions to generate data-backed knowledge to support SMEs service quality improvement.`,
    tags: ['service quality', 'small and medium enterprises', 'socioeconomic factors', 'SERVPERF', 'customer satisfaction', 'business performance', 'service management']
  },
  {
    id: 'tegner2016lean',
    title: `Lean office e BPM: proposição e aplicação de método para a redução de desperdícios em áreas administrativas`,
    journal: 'Revista Produção Online',
    year: 2016,
    authors: `Tegner, Mateus Girardi and Nascimento de Lima, Pedro and Veit, Douglas Rafael and Neto, Secundino Luis Henrique Corcini`,
    doi: '10.14488/1676-1901.v16i3.2308',
    featured: false,
    tags: ['Lean Office', 'Business Process Management', 'process improvement', 'administrative processes', 'waste reduction', 'methodology', 'case study', 'operations management']
  },
  {
    id: 'rodriguesPesquisaOperacionalProgramacao2014',
    title: `Pesquisa operacional - programação linear passo a passo - do entendimento do problema à interpretação da solução`,
    journal: 'Unisinos',
    year: 2014,
    authors: `Rodrigues, Luis H. and Ahlert, Fabiano and Pacheco Lacerda, Daniel and Riehs Camargo, Luis Felipe and Nascimento de Lima, Pedro`,
    url: 'https://www.unisinos.br/editora/pesquisa-operacional-programacao-linear-passo-a-passo',
    featured: false,
    tags: ['operations research', 'linear programming', 'optimization', 'decision-making', 'mathematical modeling']
  },
  {
    id: 'santos_simulacao_2016',
    title: `Simulação de Carregamento de Caminhões em uma Indústria Metalúrgica`,
    journal: 'Anais do I SIGEPRO - Simpósio Gaúcho de Engenharia de Produção',
    year: 2016,
    authors: `Santos, A. S. and Nascimento de Lima, Pedro and Wunsch, G. and Brasil, J. E. S.`,
    doi: undefined,
    featured: false,
    tags: ['simulation', 'truck loading', 'metal industry', 'operations research', 'industrial engineering']
  },
  {
    id: 'nascimentodelima_ergonomia_2015',
    title: `Ergonomia e Segurança no Setor Aeronáutico: A contribuição do Diagnóstico Participativo de Riscos em um ambiente de Manutenção de Aeronaves`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Vieira, D. C. and Tegner, M. G. and Heck, I. and Luz, F. R.`,
    doi: undefined,
    featured: false,
    tags: ['ergonomics', 'occupational safety', 'aerospace maintenance', 'participatory risk assessment', 'industrial engineering']
  },
  {
    id: 'machado_proposicao_2015',
    title: `Proposição de uma Abordagem Sistêmica para identificar ações alavancadoras para o aumento da Cooperação Interdepartamental`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Machado, M. S. and Rodrigues, L. H. and Nascimento de Lima, Pedro and Morandi, M. I. W. M.`,
    doi: undefined,
    featured: false,
    tags: ['interdepartmental cooperation', 'systems approach', 'organizational behavior', 'industrial engineering', 'operations management']
  },
  {
    id: 'nascimentodelima_lean_2015',
    title: `Lean Office na prática: Proposição e Aplicação de Método à luz do Gerenciamento de Processos`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Tegner, M. G. and Corcini Neto, S. L. H. and Veit, D. R.`,
    doi: undefined,
    featured: false,
    tags: ['Lean Office', 'Business Process Management', 'process improvement', 'administrative processes', 'waste reduction', 'methodology', 'case study', 'operations management']
  },
  {
    id: 'nascimentodelima_minimizando_2015',
    title: `Minimizando Custos de Manutenção: Uma alternativa para o Nivelamento de Recursos de um Cronograma de Manutenção Preventiva utilizando Programação Linear e a Engenharia de Confiabilidade`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Calderaro, D. R. and Goldmeyer, D. B. and Rodrigues, L. H. and Morandi, M. I. W. M.`,
    doi: undefined,
    featured: false,
    tags: ['maintenance scheduling', 'preventive maintenance', 'linear programming', 'reliability engineering', 'cost minimization', 'operations research']
  },
  {
    id: 'nascimentodelima_melhora_2015',
    title: `O que Melhora a Operação do Serviço de uma Pequena Empresa? Ferramentas para a Melhoria de Operações de Serviço e aplicação em seis empresas de São Leopoldo - RS no contexto do Projeto Negócio a Negócio Etapa 3`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Tegner, M. G.`,
    doi: undefined,
    featured: false,
    tags: ['service operations', 'small business', 'operations improvement', 'service quality', 'process improvement', 'case study']
  }
];