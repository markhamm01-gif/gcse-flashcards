/* AQA GCSE Chemistry (8462) — 20 questions
   Sources: AQA past papers 2018–2024, Paper 1 & Paper 2
   Mix: 14 MCQ + 6 written
*/
window.GCSE_QUESTIONS = [
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the relative charge of a neutron?',
    options: ['+1', '−1', '0', '+2'],
    correct: 2,
    explain: 'Neutrons have no charge (0). Protons have charge +1, electrons have charge −1.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'An element has atomic number 11 and mass number 23. How many neutrons does it have?',
    options: ['11', '23', '12', '34'],
    correct: 2,
    explain: 'Neutrons = mass number − atomic number = 23 − 11 = 12. This element is sodium (Na).'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which type of bonding is found in sodium chloride (NaCl)?',
    options: ['Covalent bonding', 'Metallic bonding', 'Ionic bonding', 'Hydrogen bonding'],
    correct: 2,
    explain: 'Sodium chloride is an ionic compound — Na⁺ and Cl⁻ ions held together by electrostatic attraction in a giant ionic lattice.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which of the following is a property of metals?',
    options: [
      'They are brittle and shatter when hit',
      'They are good conductors of electricity and heat',
      'They have low melting points',
      'They do not react with acids'
    ],
    correct: 1,
    explain: 'Metals are good conductors of electricity and heat due to delocalised electrons in the metallic lattice.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'What is produced when an acid reacts with a metal carbonate?',
    options: [
      'Salt + water',
      'Salt + water + carbon dioxide',
      'Salt + hydrogen',
      'Metal oxide + water'
    ],
    correct: 1,
    explain: 'Acid + metal carbonate → salt + water + carbon dioxide. E.g. HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which gas is produced when zinc reacts with dilute sulfuric acid?',
    options: ['Oxygen', 'Carbon dioxide', 'Sulfur dioxide', 'Hydrogen'],
    correct: 3,
    explain: 'Zinc + sulfuric acid → zinc sulfate + hydrogen. Zn + H₂SO₄ → ZnSO₄ + H₂. Hydrogen makes a squeaky pop with a lit splint.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What does the pH scale measure?',
    options: [
      'The concentration of salt in a solution',
      'The strength of an acid or alkali — the concentration of H⁺ ions',
      'The temperature of a reaction',
      'The amount of dissolved oxygen in water'
    ],
    correct: 1,
    explain: 'pH measures the concentration of hydrogen ions (H⁺). pH 7 = neutral, below 7 = acidic, above 7 = alkaline.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'During electrolysis of copper sulfate solution using copper electrodes, what happens at the cathode?',
    options: [
      'Copper is deposited (gained)',
      'Oxygen is released',
      'Copper dissolves into solution',
      'Hydrogen gas is produced'
    ],
    correct: 0,
    explain: 'At the cathode (negative electrode), Cu²⁺ ions gain electrons and are deposited as copper metal. Cu²⁺ + 2e⁻ → Cu.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'In a displacement reaction, iron is added to copper sulfate solution. Which observation confirms that a reaction has occurred?',
    options: [
      'The solution remains blue and no change is visible',
      'A brown/orange solid forms and the blue colour fades',
      'The iron dissolves without any colour change',
      'Gas bubbles are produced'
    ],
    correct: 1,
    explain: 'Iron displaces copper: Fe + CuSO₄ → FeSO₄ + Cu. Copper (brown/orange solid) forms on the iron, and the blue colour of CuSO₄ fades as iron sulfate (pale green) forms.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the formula for calculating percentage yield?',
    options: [
      '(theoretical yield ÷ actual yield) × 100',
      '(actual yield ÷ theoretical yield) × 100',
      '(actual yield − theoretical yield) × 100',
      'actual yield × theoretical yield'
    ],
    correct: 1,
    explain: 'Percentage yield = (actual yield ÷ theoretical yield) × 100. It is always ≤ 100% due to incomplete reactions, losses during transfer, etc.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which process separates a soluble solid from a solution?',
    options: ['Filtration', 'Distillation', 'Crystallisation', 'Chromatography'],
    correct: 2,
    explain: 'Crystallisation is used to obtain a pure solid from a solution — the solution is heated to evaporate the solvent, then cooled to allow crystals to form.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'Carbon dioxide levels in the atmosphere have increased since the Industrial Revolution. What is the main human cause?',
    options: [
      'Increased volcanic activity',
      'Burning fossil fuels and deforestation',
      'More animals breathing',
      'The oceans releasing CO₂'
    ],
    correct: 1,
    explain: 'Burning fossil fuels releases CO₂ stored millions of years ago. Deforestation reduces photosynthesis, leaving more CO₂ in the atmosphere.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the molecular formula of methane?',
    options: ['C₂H₆', 'CH₄', 'C₃H₈', 'C₂H₄'],
    correct: 1,
    explain: 'Methane is CH₄ — the simplest alkane. It has one carbon atom with four hydrogen atoms bonded by single covalent bonds.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Group 1 metals (alkali metals) react with water. What two products are always formed?',
    options: [
      'Metal oxide and hydrogen',
      'Metal hydroxide and hydrogen',
      'Metal carbonate and oxygen',
      'Metal chloride and water'
    ],
    correct: 1,
    explain: 'E.g. 2Na + 2H₂O → 2NaOH + H₂. All Group 1 metals produce a metal hydroxide (alkaline solution) and hydrogen gas.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'A student performs a titration to find the concentration of an unknown sodium hydroxide solution using 0.1 mol/dm³ hydrochloric acid. The average titre is 24.0 cm³ of HCl to neutralise 25.0 cm³ of NaOH. Calculate the concentration of the NaOH solution. Show all working. (HCl + NaOH → NaCl + H₂O)',
    keyTerms: ['moles', '0.0024', 'concentration', '0.096', 'mol/dm³', '25'],
    modelAnswer: 'Moles of HCl = concentration × volume = 0.1 × (24.0/1000) = 0.0024 mol. From equation, moles of NaOH = moles of HCl = 0.0024 mol (1:1 ratio). Concentration of NaOH = moles ÷ volume = 0.0024 ÷ (25.0/1000) = 0.096 mol/dm³.',
    explain: 'AQA 4-mark calculation: moles of acid → moles of alkali (ratio) → concentration of alkali. Show each step clearly.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Explain why ionic compounds have high melting points but can only conduct electricity when molten or dissolved in water.',
    keyTerms: ['ions', 'electrostatic', 'lattice', 'free', 'conduct', 'molten', 'dissolved'],
    modelAnswer: 'Ionic compounds have a giant ionic lattice held together by strong electrostatic forces of attraction between oppositely charged ions. A lot of energy is needed to break these bonds, giving high melting points. In the solid state, ions are fixed in position and cannot move, so they cannot conduct electricity. When molten or dissolved, the ions are free to move and carry charge, allowing conduction.',
    explain: 'Three points: strong electrostatic forces → high melting point; ions fixed in solid → no conduction; ions free when molten/dissolved → conduction possible.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe how crude oil is separated into useful fractions by fractional distillation. Include the role of boiling point in the separation.',
    keyTerms: ['fractional distillation', 'boiling point', 'fractions', 'condense', 'temperature', 'hydrocarbons', 'column'],
    modelAnswer: 'Crude oil is heated and vaporised, then fed into a fractionating column which is hot at the bottom and cooler at the top. Different hydrocarbons have different boiling points. Shorter chain hydrocarbons (lower boiling points) rise higher in the column and condense near the top. Longer chain hydrocarbons (higher boiling points) condense lower in the column. Each fraction is collected at a different level.',
    explain: 'AQA wants: heated and vaporised; column with temperature gradient; fractions condense at different levels; shorter chains = lower boiling point = higher up column.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'What is meant by the term "rate of reaction"? Describe how increasing temperature affects the rate of a reaction and explain why, using collision theory.',
    keyTerms: ['rate', 'frequency', 'collisions', 'energy', 'activation energy', 'particles', 'temperature', 'faster'],
    modelAnswer: 'Rate of reaction is the speed at which reactants are converted to products (change in amount ÷ time). Increasing temperature increases the kinetic energy of particles. They move faster, so collisions are more frequent. More collisions have energy greater than or equal to the activation energy, so more successful collisions occur per second, increasing the rate of reaction.',
    explain: 'Rate = change/time; temperature → kinetic energy → more frequent AND more energetic collisions → more exceed activation energy → faster rate.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe the Haber process for making ammonia. Include the conditions used and explain why these conditions are chosen.',
    keyTerms: ['nitrogen', 'hydrogen', 'ammonia', '450', 'pressure', '200 atm', 'iron catalyst', 'reversible', 'compromise'],
    modelAnswer: 'The Haber process reacts nitrogen (from the air) with hydrogen (from natural gas) to make ammonia: N₂ + 3H₂ ⇌ 2NH₃. Conditions: temperature ~450°C, pressure ~200 atmospheres, iron catalyst. Higher pressure favours ammonia (fewer moles of gas on product side) but is expensive. Higher temperature speeds up the reaction but shifts equilibrium left (exothermic), reducing yield. 450°C is a compromise between speed and yield. The iron catalyst increases rate without affecting equilibrium.',
    explain: '450°C compromise; 200 atm increases yield; iron catalyst speeds up reaction; N₂ + H₂ sources; reversible reaction — all needed for 4 marks.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'A sample of water is tested using cobalt chloride paper and then anhydrous copper sulfate. Describe what you would observe in each test if water is present, and explain what each result shows.',
    keyTerms: ['cobalt chloride', 'blue to pink', 'copper sulfate', 'white to blue', 'water', 'present'],
    modelAnswer: 'Cobalt chloride paper: changes from blue to pink in the presence of water. This shows water is present. Anhydrous copper sulfate: changes from white to blue when water is added. This also confirms the presence of water. Both are chemical tests for water — neither alone confirms the water is pure.',
    explain: 'Cobalt chloride: blue → pink; anhydrous copper sulfate: white → blue. Both indicate presence of water. AQA often asks for both tests together.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Explain how the greenhouse effect works and why an enhanced greenhouse effect is a concern for scientists.',
    keyTerms: ['greenhouse gases', 'CO2', 'methane', 'infrared', 'atmosphere', 'temperature', 'global warming', 'radiation'],
    modelAnswer: 'The Sun emits short-wave radiation that passes through the atmosphere and warms the Earth\'s surface. The Earth re-emits longer-wave infrared radiation. Greenhouse gases (CO₂, methane, water vapour) absorb this infrared radiation and re-emit it in all directions, including back to Earth. This keeps the Earth warm — the greenhouse effect. Human activities (burning fossil fuels, deforestation) have increased greenhouse gas concentrations, trapping more heat and causing global temperatures to rise (enhanced greenhouse effect), leading to climate change.',
    explain: 'Short-wave in → Earth absorbs → infrared emitted → greenhouse gases absorb and re-emit → warming. Enhanced = more gases = more warming = climate change.'
  }
];
