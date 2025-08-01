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
}

/**
 * Sample publications data
 * featured flag controls whether it appears on the homepage
 */
export const publications: Publication[] = [
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
    id: 'nascimento_de_lima_triple-effect_2025',
    title: `The triple-effect of colorectal cancer screening: reducing deaths, government spending and mortality disparities`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2025,
    authors: `Nascimento De Lima, Pedro and Bartholomew, Lillian and May, Folasade P and Coronado, Gloria D and Rutter, Carolyn M`,
    doi: '10.1093/jnci/djaf202',
    featured: true
  },
  {
    id: 'harlass_benefits_2025',
    title: `Benefits of colorectal cancer screening using FIT with varying positivity thresholds by age and sex`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2025,
    authors: `Harlass, Matthias and Knudsen, Amy B and Nieboer, Daan and van Duuren, Luuk A and Kuntz, Karen M and Rutter, Carolyn M and Nascimento de Lima, Pedro and Collier, Nicholson and Ozik, Jonathan and Hahn, Anne I and Alarid-Escudero, Fernando and Zauber, Ann G and Inadomi, John M and Meester, Reinier G S and Lansdorp Vogelaar, Iris`,
    doi: '10.1093/jnci/djaf149',
    featured: false
  },
  {
    id: 'griswold_assessing_2025',
    title: `Assessing Bias and Precision in State Policy Evaluations: A Comparative Analysis of Time-Varying Estimators Using Policy Simulations`,
    journal: 'arXiv',
    year: 2025,
    authors: `Griswold, Max and Griffin, Beth Ann and Rubinstein, Max and Liu, Mincen and Schuler, Megan and Stone, Elizabeth and Lima, Pedro Nascimento de and Stein, Bradley D. and Stuart, Elizabeth A.`,
    doi: '10.48550/arXiv.2503.20882',
    featured: false
  },
  {
    id: 'nascimento_de_lima_stress-testing_2025',
    title: `Stress-testing US colorectal cancer screening guidelines: Decennial colonoscopy from age 45 is robust to natural history uncertainty and colonoscopy sensitivity assumptions`,
    journal: 'Medical Decision Making',
    year: 2025,
    authors: `Nascimento de Lima, Pedro and Maerzluft, Christopher and Ozik, Jonathan and Collier, Nicholson and Rutter, Carolyn M.`,
    doi: '10.1177/0272989X251334373',
    featured: false
  },
  {
    id: 'nascimento_de_lima_case_2025',
    title: `The Case For Sustaining Wastewater Surveillance Capabilities In The US`,
    journal: 'Health Affairs Forefront',
    year: 2025,
    authors: `Nascimento de Lima, Pedro and Williams, Adeline and Willis, Henry H. and Faherty, Laura J.`,
    doi: '10.1377/forefront.20250417.144021',
    featured: false
  },
  {
    id: 'optic-wheels',
    title: `OPTIC R Repository and Tutorial for Creating Policy Wheel Data Visualizations`,
    journal: 'RAND Tool',
    year: 2025,
    authors: `Joshua Eagan, Beth Ann Griffin, Max Griswold, Hanna Han, Pedro Nascimento de Lima, Seema Choksy Pessar, Rosalie Liccardo Pacula, Bradley D. Stein`,
    doi: '10.7249/TLA3054-1',
    code: 'https://github.com/randcorporation/optic-policy-wheels',
    featured: false
  },
  {
    id: 'optic-package',
    title: `optic: Simulation Tool for Causal Inference Using Longitudinal Data`,
    journal: 'R Package',
    year: 2023,
    authors: `Beth Ann Griffin, Pedro Nascimento de Lima, Max Griswold, Adam Scherling, Joseph D. Pane, Geoffrey E. Grimm`,
    doi: '10.7249/TLA1975-2',
    code: 'https://github.com/randcorporation/optic/',
    featured: false
  },
  {
    id: 'r6sim',
    title: `R6Sim: Encapsulated OOP base classes for simulation modeling studies in R`,
    journal: 'R Package',
    year: 2024,
    authors: `Pedro Nascimento de Lima`,
    url: 'https://randcorporation.github.io/R6Sim/',
    code: 'https://github.com/RANDCorporation/R6Sim',
    featured: false
  },
  {
    id: 'gerbil_package',
    title: `gerbil: Generalized Efficient Regression-Based Imputation with Latent Processes`,
    journal: 'R Package',
    year: 2023,
    authors: 'Michael Robbins [aut, cre], Max Griswold [ctb], Pedro Nascimento de Lima',
    url: 'https://cran.r-project.org/web/packages/gerbil/index.html',
    doi: '',
    code: 'https://cran.r-project.org/web/packages/gerbil/index.html',
    featured: false
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
    featured: false
  },
  {
    id: 'nascimento_de_lima_cost_effectiveness_2025',
    title: `Cost-Effectiveness of Noninvasive Colorectal Cancer Screening in Community Clinics`,
    journal: 'JAMA Network Open',
    year: 2025,
    authors: `Pedro Nascimento de Lima and Matrajt, Laura and Coronado, Gloria and Escaron, Anne L. and Rutter, Carolyn M.`,
    doi: '10.1001/jamanetworkopen.2024.54938',
    featured: true
  },
  {
    id: 'hotton_frontiers_2025',
    title: `Incorporating social determinants of health into agent-based models of HIV transmission: methodological challenges and future directions`,
    journal: 'Frontiers in Epidemiology',
    year: 2025,
    authors: `Hotton, Anna L. and Nascimento de Lima, Pedro and Fadikar, Arindam and Collier, Nicholson T. and Khanna, Aditya S. and Motley, Darnell N. and Tatara, Eric and Rimer, Sara and Almirol, Ellen and Pollack, Harold A. and Schneider, John A. and Lempert, Robert J. and Ozik, Jonathan`,
    doi: '10.3389/fepid.2025.1533119',
    featured: false
  },
  {
    id: 'vardavasCostBenefitAnalysisComprehensive2024',
    title: `Cost-Benefit Analysis of Comprehensive Military Eye Examination Policies`,
    journal: 'RAND Report',
    year: 2024,
    authors: `Vardavas, Raffaele and Armour, Philip and Katragadda, Sai Prathyush and Pujol-Mitchell, Toyya and Pedro Nascimento de Lima and Fateh, Baqir and Hernandez, Helin and Yi, Stacey and Rojas Aguilera, Javier and Gadwah-Meaden, Catria`,
    doi: '10.7249/RRA2188-1',
    featured: false
  },
  {
    id: 'fahertyEffectsNonpharmaceuticalInterventions2024',
    title: `Effects of non-pharmaceutical interventions on COVID-19 transmission: rapid review of evidence from Italy, the United States, the United Kingdom, and China`,
    journal: 'Frontiers in Public Health',
    year: 2024,
    authors: `Faherty, Laura J. and Pedro Nascimento de Lima and Lim, Jing Zhi and Roberts, Derek and Karr, Sarah and Lawson, Emily and Willis, Henry H.`,
    doi: '10.3389/fpubh.2024.1426992',
    featured: false
  },
  {
    id: 'vardavasModelingDisruptiveImpact2024',
    title: `Modeling the Disruptive Impact of the COVID-19 Pandemic on Nurses' Supply and Wages`,
    journal: 'RAND Working Paper',
    year: 2024,
    authors: `Vardavas, Raffaele and Pedro Nascimento de Lima and Baker, Lawrence and Crowley, Christina and Carman, Katherine Grace and Abir, Mahshid`,
    doi: '10.7249/WRA1444-1',
    featured: false
  },
  {
    id: 'doi:10.1177/0272989X241255618',
    title: `Emulator-Based Bayesian Calibration of the CISNET Colorectal Cancer Models`,
    journal: 'Medical Decision Making',
    year: 2024,
    authors: `Carlos Pineda-Antunez and Claudia Seguin and Luuk A. van Duuren and Amy B. Knudsen and Barak Davidi and Pedro Nascimento de Lima and Carolyn Rutter and Karen M. Kuntz and Iris Lansdorp-Vogelaar and Nicholson Collier and Jonathan Ozik and Fernando Alarid-Escudero`,
    doi: '10.1177/0272989X241255618',
    featured: false,
    code: `https://github.com/NCI-CISNET-Colorectal/baycann_cisnet_crc`
  },
  {
    id: 'nascimentodelimaCharacteristicsCosteffectiveBlood2024',
    title: `Characteristics of a cost-effective blood test for colorectal cancer screening`,
    journal: 'JNCI: Journal of the National Cancer Institute',
    year: 2024,
    authors: `Pedro Nascimento de Lima and Van Den Puttelaar, Rosita and Knudsen, Amy B and Hahn, Anne I and Kuntz, Karen M and Ozik, Jonathan and Collier, Nicholson and Alarid-Escudero, Fernando and Zauber, Ann G and Inadomi, John M and Lansdorp-Vogelaar, Iris and Rutter, Carolyn M`,
    doi: '10.1093/jnci/djae124',
    featured: false
  },
  {
    id: 'nascimentodelimaValueEnvironmentalSurveillance2024',
    title: `The Value of Environmental Surveillance for Pandemic Response`,
    journal: 'Scientific Reports',
    year: 2024,
    authors: `Pedro Nascimento de Lima and Karr, Sarah and Lim, Jing Zhi and Vardavas, Raffaele and Roberts, Derek and Kessler, Abigail and Awan, Jalal and Faherty, Laura J. and Willis, Henry H.`,
    doi: '10.1038/s41598-024-79952-5',
    featured: false,
    code: `https://github.com/RANDCorporation/value-of-env-surveillance`
  },
  {
    id: 'VANDENPUTTELAAR2024',
    title: `Effectiveness and Cost-Effectiveness of Colorectal Cancer Screening With a Blood Test That Meets the Centers for Medicare & Medicaid Services Coverage Decision`,
    journal: 'Gastroenterology',
    year: 2024,
    authors: `Rosita van den Puttelaar and Pedro Nascimento de Lima and Amy B. Knudsen and Carolyn M. Rutter and Karen M. Kuntz and Lucie de Jonge and Fernando Alarid Escudero and David Lieberman and Ann G. Zauber and Anne I. Hahn and John M. Inadomi and Iris Lansdorp-Vogelaar`,
    doi: '10.1053/j.gastro.2024.02.012',
    featured: true
  },
  {
    id: 'LIEBERMAN2024',
    title: `Commentary: Liquid Biopsy for Average-Risk Colorectal Cancer Screening`,
    journal: 'Clinical Gastroenterology and Hepatology',
    year: 2024,
    authors: `David A. Lieberman and Aasma Shaukat and Folasade P. May and John M. Carethers and Iris Lansdorp-Vogelaar and Uri Ladabaum and Timothy R. Church and Anjelica Davis and Chyke A. Doubeni and John M. Inadomi and Richard C. Wender and Pedro Nascimento de Lima and Rosita van den Puttelaar`,
    doi: '10.1016/j.cgh.2024.01.034',
    featured: true
  },
  {
    id: 'Nowak2024.02.19.24303020',
    title: `The cost of myopic pandemic response`,
    journal: 'medRxiv',
    year: 2024,
    authors: `Sarah Nowak and Pedro Nascimento de Lima and Raffaele Vardavas`,
    doi: '10.1101/2024.02.19.24303020',
    featured: false
  },
  {
    id: 'NascimentodeLima2023Pandemic',
    title: `Co-Designing Capabilities for a Robust Pandemic Response: Stakeholder Engagement for Visioning, Backcasting, and Evaluating New Decision-Support Capabilities`,
    journal: 'RAND Working Paper',
    year: 2023,
    authors: `Nascimento de Lima and Stevens, Abby and Vardavas, Raffaele and Ozik, Jonathan and Lempert, Robert J.`,
    doi: '10.7249/WRA3085-1',
    featured: false
  },
  {
    id: 'NascimentodeLima2023AMS',
    title: `Modeling America's Racial Wealth Disparities: Mathematical Models Help Chart Pathways for Closing Racial Wealth Gaps`,
    journal: 'Notices of the American Mathematical Society',
    year: 2023,
    authors: `Nascimento de Lima and Lamb, Jonathan and Osoba, Osonde and Welburn, Jonathan`,
    doi: '10.1090/noti2743',
    featured: false,
    code: `https://github.com/RANDCorporation/racial-wealth-gap`
  },
  {
    id: 'Griffin2023',
    title: `Identifying Optimal Methods for Addressing Confounding Bias When Estimating the Effects of State-level Policies`,
    journal: 'Epidemiology',
    year: 2023,
    authors: `Griffin, Beth Ann and Schuler, Megan S and Stone, Elizabeth M and Patrick, Stephen W and Stein, Bradley D and Nascimento de Lima, Pedro and Griswold, Max and Scherling, Adam and Stuart, Elizabeth A`,
    doi: '10.1097/EDE.0000000000001659',
    featured: false
  },
  {
    id: 'SelectiveOpenessLima2023',
    title: `Selective Openness in the Additive Manufacturing Industry: An Exploratory Modeling Analysis`,
    journal: 'Industrial Engineering and Operations Management',
    year: 2023,
    authors: ` Nascimento de Lima, Pedro and Teixeira, Rafael and Wolf Motta Morandi, Maria I and Lacerda, Daniel Pacheco and Popper, Steven W`,
    doi: '10.1007/978-3-031-47058-5_19',
    featured: false
  },
  {
    id: 'Rutter2023',
    title: `Black-White disparities in colorectal cancer outcomes: a simulation study of screening benefit`,
    journal: 'JNCI Monographs',
    year: 2023,
    authors: `Rutter, Carolyn M. and Nascimento de Lima, Pedro and Maerzluft, Christopher E and May, Folasade P and Murphy, Caitlin C`,
    doi: '10.1093/jncimonographs/lgad019',
    featured: false
  },
  {
    id: 'VandenBerg2023',
    title: `NordICC Trial Results in Line With Expected Colorectal Cancer Mortality Reduction After Colonoscopy: A Modeling Study`,
    journal: 'Gastroenterology',
    year: 2023,
    authors: `van den Berg, Danica M.N. and Nascimento de Lima, Pedro and Knudsen, Amy B. and Rutter, Carolyn M. and Weinberg, David and Lansdorp-Vogelaar, Iris and Zauber, Ann G. and Hahn, Anne I. and Escudero, Fernando Alarid and Maerzluft, Christopher E. and Katsara, Alexandra and Kuntz, Karen M. and John, M.Inadomi and Collier, Nicholson and Ozik, Jonathan and van Duuren, Luuk A. and van den Puttelaar, Rosita and Harlass, Matthias and Seguin, Claudia Leigh and Davidi, Barak and Pineda-Antunez, Carlos and Feuer, Eric J. and de Jonge, Lucie`,
    doi: '10.1053/j.gastro.2023.06.035',
    featured: false
  },
  {
    id: 'Osoba2023',
    title: `Exploring Intergenerational Wealth Transfer Dynamics with Agent-Based Models`,
    journal: 'RAND Working Paper',
    year: 2023,
    authors: `Osoba, Osonde A and Welburn, Jonathan W and Lamb, Jonathan and Nascimento de Lima, Pedro and Kumar, Krishna B`,
    doi: '10.7249/WRA1259-8',
    featured: false
  },
  {
    id: 'NascimentodeLima2023',
    title: `Projected long-term effects of colorectal cancer screening disruptions following the COVID-19 pandemic`,
    journal: 'eLife',
    year: 2023,
    authors: `Nascimento de Lima, Pedro and van den Puttelaar, Rosita and Hahn, Anne I and Harlass, Matthias and Collier, Nicholson and Ozik, Jonathan and Zauber, Ann G and Lansdorp-Vogelaar, Iris and Rutter, Carolyn M`,
    doi: '10.7554/eLife.85264',
    featured: false,
    code: `https://github.com/c-rutter/unequal-recovery-covid-19`
  },
  {
    id: 'Nowak2023',
    title: `Optimal non-pharmaceutical pandemic response strategies depend critically on time horizons and costs`,
    journal: 'Scientific Reports',
    year: 2023,
    authors: `Nowak, Sarah A and Nascimento de Lima, Pedro and Vardavas, Raffaele`,
    doi: '10.1038/s41598-023-28936-y',
    featured: false
  },
  {
    id: 'NascimentodeLima2022',
    title: `Robust Decision Making in Health Policy: Applications to COVID-19 and Colorectal Cancer`,
    journal: 'Pardee RAND Dissertation',
    year: 2022,
    authors: `Nascimento de Lima, Pedro`,
    doi: '10.7249/RGSDA2531-1',
    featured: false
  },
  {
    id: 'Welburn2022',
    title: `Overcoming Compound Racial Inequity: Policies and Costs for Closing the Black-White Wealth Gap`,
    journal: 'RAND Report',
    year: 2022,
    authors: `Welburn, Jonathan W. and Nascimento de Lima, Pedro and Kumar, Krishna B. and Osoba, Osonde A. and Lamb, Jonathan`,
    doi: '10.7249/RRA1259-2',
    featured: false,
    code: `https://github.com/RANDCorporation/racial-wealth-gap`
  },
  {
    id: 'NascimentodeLima2021a',
    title: `Reopening California: Seeking robust, non-dominated COVID-19 exit strategies`,
    journal: 'PLOS ONE',
    year: 2021,
    authors: `Nascimento de Lima, Pedro and Lempert, Robert and Vardavas, Raffaele and Baker, Lawrence and Ringel, Jeanne and Rutter, Carolyn M and Ozik, Jonathan and Collier, Nicholson`,
    doi: '10.1371/journal.pone.0259166',
    featured: true,
    code: `https://github.com/RANDCorporation/covid-19-reopening-california`
  },
  {
    id: 'Rutter2021',
    title: `Too Good to Be True? Evaluation of Colonoscopy Sensitivity Assumptions Used in Policy Models`,
    journal: 'Cancer Epidemiology Biomarkers & Prevention',
    year: 2022,
    authors: `Rutter, Carolyn M. and Nascimento de Lima, Pedro and Lee, Jeffrey K. and Ozik, Jonathan`,
    doi: '10.1158/1055-9965.EPI-21-1001',
    featured: false
  },
  {
    id: 'NascimentodeLima2021b',
    title: `Reopening Under Uncertainty: Stress-Testing California's COVID-19 Exit Strategy`,
    journal: 'RAND Perspective',
    year: 2021,
    authors: `Nascimento de Lima, Pedro and Vardavas, Raffaele and Baker, Lawrence and Ringel, Jeanne and Lempert, Robert J. and Rutter, Carolyn M and Ozik, Jonathan`,
    doi: '10.7249/PEA1080-1',
    featured: false
  },
  {
    id: 'Vardavas2021a',
    title: `Could periodic nonpharmaceutical intervention strategies produce better COVID-19 health and economic outcomes?`,
    journal: 'Journal on Policy and Complex Systems',
    year: 2021,
    authors: `Vardavas, Raffaele and Nascimento de Lima, Pedro and Baker, Lawrence`,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9109618/',
    featured: false
  },
  {
    id: 'Vardavas2021b',
    title: `Modeling Infectious Behaviors: The Need to Account for Behavioral Adaptation in COVID-19 Models`,
    journal: 'Journal on Policy and Complex Systems',
    year: 2021,
    authors: `Vardavas, Raffaele and Nascimento de Lima, Pedro and Davis, Paul K and Parker, Andrew M and Baker, Lawrence`,
    url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9109616/',
    featured: false
  },
  {
    id: 'covid_allegheny_tool',
    title: `Vulnerability, Inequity, and COVID-19: A Portrait of the Pandemic in Allegheny County`,
    journal: 'RAND Tool',
    year: 2021,
    authors: `Evan D. Peet, Linnea Warren May, Jordan R. Fischbach, Christine Campigotto, Tichakunda Mangono, Colleen M. McCullough, Tiffany L. Gary-Webb, Robert Gradeck, Jared Kohler, Maria Gardner, Pedro Nascimento de Lima, Jason Beery, Lindsay Coome, Bettina Hammer, Jeanne S. Ringel, Noble Maseru, Fred Brown, Dara Mendez`,
    doi: '10.7249/TLA1080-1-v2',
    url: 'https://www.rand.org/pubs/tools/TLA1080-1-v2.html',
    featured: false
  },
  {
    id: 'Vardavas2020',
    title: `The Health and Economic Impacts of Nonpharmaceutical Interventions to Address COVID-19: A Decision Support Tool for State and Local Policymakers`,
    journal: 'RAND Tool',
    year: 2020,
    authors: `Vardavas, Raffaele and Strong, Aaron and Bouey, Jennifer and Welburn, Jonathan and Nascimento de Lima, Pedro and Baker, Lawrence and Zhu, Keren and Priest, Michelle and Hu, Lynn and Ringel, Jeanne`,
    doi: '10.7249/tla173-1',
    featured: true
  },
  {
    id: 'diet_tool',
    title: `How Would a Better Diet Affect Health and Economic Outcomes in the United States?`,
    journal: 'RAND Tool',
    year: 2020,
    authors: `Pedro Nascimento de Lima, PhuongGiang Nguyen, Patricia M. Herman, Roland Sturm`,
    url: 'https://www.rand.org/pubs/tools/TL363.html',
    doi: '10.7249/TL363',
    featured: false
  },
  {
    id: 'Veit2019',
    title: `The impacts of Additive Manufacturing on production systems`,
    journal: 'International Joint Conference ICIEOM',
    year: 2019,
    authors: `Veit, Douglas Rafael and Larcerda, Daniel Pacheco and Morandi, Maria Isabel Wolf Motta and Dresch, Aline and Nascimento de Lima, Pedro`,
    doi: '10.1007/978-3-319-93488-4',
    featured: false
  },
  {
    id: 'Dresch2018',
    title: `Inducing Brazilian manufacturing SMEs productivity with Lean tools`,
    journal: 'International Journal of Productivity and Performance Management',
    year: 2019,
    authors: `Dresch, Aline and Veit, Douglas Rafael and Nascimento de Lima, Pedro and Lacerda, Daniel Pacheco and Collatto, Dalila Cisco`,
    doi: '10.1108/IJPPM-10-2017-0248',
    featured: false
  },
  {
    id: 'Lima2019',
    title: `Do Socioeconomic Contextual Factors Influence SMEs Service Quality? A cross-sector and cross-city SERVPERF analysis`,
    journal: 'International Journal of Business Performance Management',
    year: 2019,
    authors: `Nascimento de Lima, Pedro and Dresch, Aline and Lacerda, Daniel Pacheco`,
    doi: '10.1504/IJBPM.2019.101998',
    featured: false
  },
  {
    id: 'tegner2016lean',
    title: `Lean office e BPM: proposição e aplicação de método para a redução de desperdícios em áreas administrativas`,
    journal: 'Revista Produção Online',
    year: 2016,
    authors: `Tegner, Mateus Girardi and Nascimento de Lima, Pedro and Veit, Douglas Rafael and Neto, Secundino Luis Henrique Corcini`,
    doi: '10.14488/1676-1901.v16i3.2308',
    featured: false
  },
  {
    id: 'rodriguesPesquisaOperacionalProgramacao2014',
    title: `Pesquisa operacional - programação linear passo a passo - do entendimento do problema à interpretação da solução`,
    journal: 'Unisinos',
    year: 2014,
    authors: `Rodrigues, Luis H. and Ahlert, Fabiano and Pacheco Lacerda, Daniel and Riehs Camargo, Luis Felipe and Nascimento de Lima, Pedro`,
    url: 'https://www.unisinos.br/editora/pesquisa-operacional-programacao-linear-passo-a-passo',
    featured: false
  },
  {
    id: 'santos_simulacao_2016',
    title: `Simulação de Carregamento de Caminhões em uma Indústria Metalúrgica`,
    journal: 'Anais do I SIGEPRO - Simpósio Gaúcho de Engenharia de Produção',
    year: 2016,
    authors: `Santos, A. S. and Nascimento de Lima, Pedro and Wunsch, G. and Brasil, J. E. S.`,
    doi: null,
    featured: false
  },
  {
    id: 'nascimentodelima_ergonomia_2015',
    title: `Ergonomia e Segurança no Setor Aeronáutico: A contribuição do Diagnóstico Participativo de Riscos em um ambiente de Manutenção de Aeronaves`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Vieira, D. C. and Tegner, M. G. and Heck, I. and Luz, F. R.`,
    doi: null,
    featured: false
  },
  {
    id: 'machado_proposicao_2015',
    title: `Proposição de uma Abordagem Sistêmica para identificar ações alavancadoras para o aumento da Cooperação Interdepartamental`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Machado, M. S. and Rodrigues, L. H. and Nascimento de Lima, Pedro and Morandi, M. I. W. M.`,
    doi: null,
    featured: false
  },
  {
    id: 'nascimentodelima_lean_2015',
    title: `Lean Office na prática: Proposição e Aplicação de Método à luz do Gerenciamento de Processos`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Tegner, M. G. and Corcini Neto, S. L. H. and Veit, D. R.`,
    doi: null,
    featured: false
  },
  {
    id: 'nascimentodelima_minimizando_2015',
    title: `Minimizando Custos de Manutenção: Uma alternativa para o Nivelamento de Recursos de um Cronograma de Manutenção Preventiva utilizando Programação Linear e a Engenharia de Confiabilidade`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Calderaro, D. R. and Goldmeyer, D. B. and Rodrigues, L. H. and Morandi, M. I. W. M.`,
    doi: null,
    featured: false
  },
  {
    id: 'nascimentodelima_melhora_2015',
    title: `O que Melhora a Operação do Serviço de uma Pequena Empresa? Ferramentas para a Melhoria de Operações de Serviço e aplicação em seis empresas de São Leopoldo - RS no contexto do Projeto Negócio a Negócio Etapa 3`,
    journal: 'XXXV - Encontro Nacional de Engenharia de Produção - ENEGEP',
    year: 2015,
    authors: `Nascimento de Lima, Pedro and Tegner, M. G.`,
    doi: null,
    featured: false
  }
];