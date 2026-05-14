/* AQA GCSE Biology (8461) — 20 questions
   Sources: AQA past papers 2018–2024, Paper 1 & Paper 2
   Mix: 14 MCQ + 6 written
*/
window.GCSE_QUESTIONS = [
  {
    type: 'mcq',
    marks: 1,
    question: 'Which organelle is responsible for producing ATP through aerobic respiration?',
    options: ['Ribosome', 'Mitochondria', 'Nucleus', 'Chloroplast'],
    correct: 1,
    explain: 'Mitochondria are the site of aerobic respiration, producing ATP. AQA Paper 1 Topic 1.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the role of phloem in a plant?',
    options: ['Transport water from roots to leaves', 'Transport glucose from leaves to the rest of the plant', 'Absorb mineral ions from the soil', 'Carry out photosynthesis'],
    correct: 1,
    explain: 'Phloem transports dissolved sugars (sucrose) from leaves to other parts. Xylem carries water and minerals.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which of the following correctly describes osmosis?',
    options: [
      'Movement of solute from high to low concentration through a membrane',
      'Movement of water from high water potential to low water potential through a partially permeable membrane',
      'Active transport of water against a concentration gradient',
      'Diffusion of ions through a channel protein'
    ],
    correct: 1,
    explain: 'Osmosis is the net movement of water molecules through a partially permeable membrane from a region of high water potential (dilute solution) to low water potential (concentrated solution).'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the product of anaerobic respiration in animal cells?',
    options: ['Ethanol and carbon dioxide', 'Lactic acid', 'Glucose and oxygen', 'Carbon dioxide and water'],
    correct: 1,
    explain: 'In animal cells, anaerobic respiration produces lactic acid. In plants and yeast it produces ethanol and CO₂.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which blood component is responsible for clotting?',
    options: ['Red blood cells', 'White blood cells', 'Platelets', 'Plasma'],
    correct: 2,
    explain: 'Platelets (thrombocytes) are cell fragments that clump together at a wound to form a clot and prevent blood loss.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A student investigates the effect of light intensity on the rate of photosynthesis. Which variable should be kept constant to make it a fair test?',
    options: ['The colour of light used', 'The concentration of carbon dioxide', 'The distance from the light source', 'The number of bubbles counted'],
    correct: 1,
    explain: 'CO₂ concentration must be kept constant as it is also a limiting factor of photosynthesis. The independent variable is light intensity.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Where does fertilisation occur in the female reproductive system?',
    options: ['Uterus', 'Ovary', 'Fallopian tube (oviduct)', 'Cervix'],
    correct: 2,
    explain: 'Fertilisation takes place in the fallopian tube (oviduct). The fertilised egg then travels to the uterus for implantation.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What does a vaccine contain to stimulate the immune system?',
    options: ['Live, virulent pathogens', 'Antibodies produced in a lab', 'Dead or weakened pathogens (antigens)', 'White blood cells'],
    correct: 2,
    explain: 'Vaccines contain dead or weakened forms of a pathogen (or their antigens). This stimulates the immune system to produce memory cells without causing disease.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which hormone controls blood glucose levels by stimulating cells to take up glucose?',
    options: ['Glucagon', 'Adrenaline', 'Insulin', 'Oestrogen'],
    correct: 2,
    explain: 'Insulin is released by the pancreas when blood glucose is too high. It causes liver and muscle cells to convert glucose to glycogen.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A plant cell is placed in a solution with a lower water potential than the cell. What will happen?',
    options: [
      'Water enters the cell by osmosis — the cell becomes turgid',
      'Water leaves the cell by osmosis — the cell becomes plasmolysed',
      'Solute enters the cell by active transport',
      'The cell membrane bursts'
    ],
    correct: 1,
    explain: 'Water moves from high to low water potential. The cell (higher water potential) loses water, causing the cytoplasm to shrink away from the cell wall — plasmolysis.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is meant by the term "biodiversity"?',
    options: [
      'The number of individuals in a single species',
      'The variety of different species and ecosystems in an area',
      'The ability of a species to adapt to its environment',
      'The number of food chains in an ecosystem'
    ],
    correct: 1,
    explain: 'Biodiversity refers to the variety of living organisms, including different species, genetic variation within species, and ecosystems.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'In a genetics cross, two heterozygous parents (Tt × Tt) produce offspring. What proportion of offspring will be tall (T is dominant)?',
    options: ['1/4', '1/2', '3/4', 'All of them'],
    correct: 2,
    explain: 'Tt × Tt gives TT, Tt, Tt, tt. Three out of four genotypes have at least one T allele (dominant), so 3/4 are tall.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which process produces gametes (sex cells) in humans?',
    options: ['Mitosis', 'Meiosis', 'Binary fission', 'Budding'],
    correct: 1,
    explain: 'Meiosis produces haploid gametes (sperm and egg cells) with half the normal chromosome number. Mitosis produces identical diploid body cells.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the function of stomata in a leaf?',
    options: [
      'To absorb water from the atmosphere',
      'To allow gas exchange — CO₂ in, O₂ out during photosynthesis',
      'To carry out photosynthesis',
      'To transport glucose to the roots'
    ],
    correct: 1,
    explain: 'Stomata are pores in the leaf surface that allow gas exchange. Guard cells control their opening and closing.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe how the human body responds to an infection by a new pathogen. Include the role of lymphocytes and memory cells in your answer.',
    keyTerms: ['lymphocytes', 'antibodies', 'antigen', 'memory cells', 'pathogen', 'immune response'],
    modelAnswer: 'When a pathogen enters the body, its antigens are detected by lymphocytes (white blood cells). Lymphocytes produce specific antibodies that bind to the antigens, destroying or disabling the pathogen. Some lymphocytes become memory cells, which remain in the blood. If the same pathogen is encountered again, memory cells rapidly produce large amounts of antibodies, preventing illness.',
    explain: 'AQA mark scheme requires: antigens detected, antibodies produced (complementary/specific), pathogen destroyed, memory cells formed, faster secondary response.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Explain how the structure of a red blood cell is adapted to its function of carrying oxygen.',
    keyTerms: ['haemoglobin', 'biconcave', 'nucleus', 'surface area', 'oxygen', 'flexible'],
    modelAnswer: 'Red blood cells have a biconcave disc shape, which increases surface area for oxygen absorption. They have no nucleus, leaving more space for haemoglobin — the protein that carries oxygen. Their flexible membrane allows them to squeeze through narrow capillaries.',
    explain: 'Three marks: biconcave shape → large surface area; no nucleus → more haemoglobin; flexible → fits through capillaries.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe the carbon cycle. Include photosynthesis, respiration and decomposition in your answer.',
    keyTerms: ['photosynthesis', 'respiration', 'decomposition', 'carbon dioxide', 'glucose', 'atmosphere', 'combustion'],
    modelAnswer: 'Plants remove CO₂ from the atmosphere through photosynthesis, converting it to glucose. Animals eat plants and use the carbon compounds for respiration, releasing CO₂ back to the atmosphere. When organisms die, decomposers break down organic matter, releasing CO₂ through respiration. Combustion of fossil fuels also releases CO₂ into the atmosphere.',
    explain: 'AQA wants: CO₂ absorbed by photosynthesis; carbon passed through food chains; CO₂ returned by respiration, decomposition and combustion.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'A student observes that plants grow taller when given fertiliser containing nitrates. Explain why nitrates are important for plant growth.',
    keyTerms: ['nitrates', 'amino acids', 'proteins', 'nitrogen', 'growth', 'chlorophyll'],
    modelAnswer: 'Nitrates are absorbed from the soil by root hair cells. Plants use nitrates to make amino acids, which are then used to make proteins. Proteins are essential for cell growth and division. Without sufficient nitrates, plants show stunted growth and yellow leaves (chlorosis) due to lack of chlorophyll.',
    explain: 'Nitrates → amino acids → proteins → growth. Also link to chlorophyll for full marks.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe the process of natural selection using an example. Explain how a population of bacteria can become resistant to an antibiotic.',
    keyTerms: ['variation', 'selection pressure', 'resistant', 'survive', 'reproduce', 'mutation', 'antibiotic', 'inherited'],
    modelAnswer: 'Within a population of bacteria, there is natural variation — some bacteria have a mutation that makes them resistant to an antibiotic. When antibiotic is applied, non-resistant bacteria are killed (selection pressure). Resistant bacteria survive and reproduce, passing on the resistance gene. Over generations, the resistant allele increases in frequency until most bacteria are resistant. This is natural selection.',
    explain: 'AQA 4-mark answer needs: variation exists; selection pressure applied; resistant survive and reproduce; resistant allele passed on to offspring.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Explain how the kidneys maintain water balance (osmoregulation) in the body. Include the role of ADH.',
    keyTerms: ['ADH', 'kidney', 'water', 'blood plasma', 'reabsorption', 'dilute', 'concentrated', 'pituitary'],
    modelAnswer: 'If blood plasma becomes too concentrated (dehydrated), the pituitary gland releases more ADH (antidiuretic hormone). ADH causes the kidney tubules to become more permeable, so more water is reabsorbed into the blood. This produces small amounts of concentrated urine. When water levels are restored, less ADH is released and more dilute urine is produced.',
    explain: 'ADH released by pituitary; increases permeability of kidney tubules; more water reabsorbed; concentrated urine produced — all needed for full marks.'
  }
];
