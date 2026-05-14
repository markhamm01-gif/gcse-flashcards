/* AQA GCSE Physics (8463) — 20 questions
   Sources: AQA past papers 2018–2024, Paper 1 & Paper 2
   Mix: 14 MCQ + 6 written
*/
window.GCSE_QUESTIONS = [
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the unit of electrical resistance?',
    options: ['Ampere (A)', 'Volt (V)', 'Ohm (Ω)', 'Watt (W)'],
    correct: 2,
    explain: 'Resistance is measured in Ohms (Ω). V = IR (Ohm\'s Law) — voltage = current × resistance.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A lamp has a resistance of 10 Ω and carries a current of 2 A. What is the voltage across the lamp?',
    options: ['5 V', '12 V', '20 V', '0.2 V'],
    correct: 2,
    explain: 'V = IR = 2 × 10 = 20 V. Ohm\'s Law: voltage = current × resistance.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which type of wave requires a medium to travel through?',
    options: ['Electromagnetic waves', 'Transverse waves', 'Longitudinal (mechanical) waves', 'Radio waves'],
    correct: 2,
    explain: 'Longitudinal/mechanical waves (e.g. sound) require a medium. Electromagnetic waves (light, radio, X-rays) can travel through a vacuum.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the equation for kinetic energy?',
    options: ['KE = mgh', 'KE = ½mv²', 'KE = mv', 'KE = Fd'],
    correct: 1,
    explain: 'Kinetic energy = ½ × mass × velocity². KE = ½mv². The unit is joules (J).'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A ball of mass 2 kg is moving at 5 m/s. What is its kinetic energy?',
    options: ['10 J', '25 J', '50 J', '5 J'],
    correct: 1,
    explain: 'KE = ½mv² = ½ × 2 × 5² = ½ × 2 × 25 = 25 J.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which part of the electromagnetic spectrum has the highest frequency?',
    options: ['Radio waves', 'Visible light', 'X-rays', 'Gamma rays'],
    correct: 3,
    explain: 'The EM spectrum in order of increasing frequency: radio, microwave, infrared, visible, ultraviolet, X-ray, gamma. Gamma rays have the highest frequency and shortest wavelength.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What happens to the resistance of a light-dependent resistor (LDR) as light intensity increases?',
    options: ['Resistance increases', 'Resistance decreases', 'Resistance stays the same', 'Resistance becomes zero'],
    correct: 1,
    explain: 'As light intensity increases, the resistance of an LDR decreases. More light → more charge carriers released → lower resistance.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A force of 15 N acts on an object of mass 3 kg. What is the acceleration produced? (F = ma)',
    options: ['45 m/s²', '5 m/s²', '18 m/s²', '0.2 m/s²'],
    correct: 1,
    explain: 'F = ma → a = F/m = 15 ÷ 3 = 5 m/s². Newton\'s Second Law.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the difference between a series and a parallel circuit?',
    options: [
      'In series, current splits between branches; in parallel it does not',
      'In series, components share voltage; in parallel each component gets the full supply voltage',
      'In parallel, all components have the same current; in series they share it',
      'There is no difference in terms of current'
    ],
    correct: 1,
    explain: 'In a series circuit all components share the supply voltage and carry the same current. In a parallel circuit each branch receives the full supply voltage and current splits between branches.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the half-life of a radioactive substance?',
    options: [
      'The time for all the atoms to decay',
      'The time for the activity to fall to half its original value',
      'Half the age of the substance',
      'The time for the substance to become non-radioactive'
    ],
    correct: 1,
    explain: 'Half-life is the time taken for the activity (or number of radioactive nuclei) to halve. It is constant for a given isotope.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A radioactive sample has an initial activity of 800 Bq. Its half-life is 2 hours. What is the activity after 6 hours?',
    options: ['100 Bq', '200 Bq', '400 Bq', '50 Bq'],
    correct: 0,
    explain: '6 hours = 3 half-lives. 800 > 400 → 200 → 100 Bq. Each half-life halves the activity.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which type of nuclear radiation is most penetrating?',
    options: ['Alpha (α)', 'Beta (β)', 'Gamma (γ)', 'Neutron radiation'],
    correct: 2,
    explain: 'Gamma radiation is the most penetrating (needs thick lead or concrete to absorb). Alpha is least penetrating (stopped by paper or skin).'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is meant by the term "specific heat capacity"?',
    options: [
      'The energy needed to melt 1 kg of a substance',
      'The energy needed to raise the temperature of 1 kg of a substance by 1°C',
      'The energy released when 1 kg of fuel burns',
      'The energy stored in 1 kg of a compressed spring'
    ],
    correct: 1,
    explain: 'Specific heat capacity (c) is the energy required to raise the temperature of 1 kg of a substance by 1°C (or 1 K). Q = mcΔT.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A transformer has 200 turns on the primary coil and 1000 turns on the secondary coil. The primary voltage is 12 V. What is the secondary voltage?',
    options: ['2.4 V', '60 V', '240 V', '120 V'],
    correct: 1,
    explain: 'Vₛ/Vₚ = Nₛ/Nₚ → Vₛ = 12 × (1000/200) = 12 × 5 = 60 V. This is a step-up transformer.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'A student measures the speed of sound by standing 200 m from a wall and clapping. The echo returns after 1.2 seconds. Calculate the speed of sound. Show your working and give the correct unit.',
    keyTerms: ['speed', 'distance', 'time', '400', '1.2', 'm/s', '333'],
    modelAnswer: 'The sound travels to the wall and back, so total distance = 200 × 2 = 400 m. Speed = distance ÷ time = 400 ÷ 1.2 = 333 m/s (to 3 s.f.). The speed of sound in air is approximately 330–340 m/s.',
    explain: 'Key error students make: forgetting to double the distance (sound goes there AND back). Speed = distance/time = 400/1.2 ≈ 333 m/s.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Explain how a step-up transformer works and why transformers are used in the National Grid.',
    keyTerms: ['alternating current', 'primary', 'secondary', 'turns', 'voltage', 'current', 'power loss', 'National Grid'],
    modelAnswer: 'A transformer works by electromagnetic induction. Alternating current in the primary coil creates a changing magnetic field in the iron core. This induces an alternating voltage in the secondary coil. A step-up transformer has more turns on the secondary coil, increasing voltage. In the National Grid, step-up transformers increase voltage and reduce current for long-distance transmission, reducing energy lost as heat in the cables (P = I²R).',
    explain: 'AC in primary → changing magnetic field → induced voltage in secondary; more turns = higher voltage; National Grid: high voltage = low current = less power loss.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'Describe the life cycle of a star similar in mass to our Sun, from nebula to its final state.',
    keyTerms: ['nebula', 'protostar', 'main sequence', 'red giant', 'white dwarf', 'gravity', 'fusion', 'helium'],
    modelAnswer: 'A star begins as a nebula (cloud of gas and dust). Gravity causes it to collapse, forming a protostar. Nuclear fusion begins — hydrogen nuclei fuse to form helium, releasing energy. This is the main sequence stage (longest stage). When hydrogen runs out, the outer layers expand forming a red giant. The core contracts into a white dwarf, which eventually cools to a black dwarf.',
    explain: 'Nebula → protostar → main sequence (H→He fusion) → red giant → white dwarf → black dwarf. AQA frequently tests this sequence.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Explain why moving the secondary coil further from the primary coil in an experiment reduces the induced voltage, using the concept of magnetic field lines.',
    keyTerms: ['magnetic field', 'flux', 'field lines', 'weaker', 'distance', 'induced', 'core', 'overlap'],
    modelAnswer: 'The primary coil produces a magnetic field. As the secondary coil moves further away, fewer magnetic field lines (magnetic flux) pass through it. The rate of change of flux linkage is reduced. By Faraday\'s law, a smaller induced EMF (voltage) is produced in the secondary coil. An iron core concentrates the field lines and improves flux linkage.',
    explain: 'Fewer field lines through secondary → smaller change in flux linkage → smaller induced EMF. Iron core improves coupling.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'A cyclist and their bike have a combined mass of 80 kg. They accelerate from rest to 12 m/s over 8 seconds. Calculate (a) the acceleration and (b) the force needed. Then calculate the kinetic energy at 12 m/s.',
    keyTerms: ['1.5', 'm/s²', '120 N', 'KE', '5760 J', 'acceleration', 'force', 'kinetic energy'],
    modelAnswer: '(a) a = (v − u)/t = (12 − 0)/8 = 1.5 m/s². (b) F = ma = 80 × 1.5 = 120 N. KE = ½mv² = ½ × 80 × 12² = » × 80 × 144 = 5760 J.',
    explain: 'Three steps: a = Δv/t; F = ma; KE = ½mv². AQA often combines these in one question to test multiple equations.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Describe how energy is transferred in a coal-fired power station from burning coal to electricity reaching a home. Include at least three energy transfers.',
    keyTerms: ['chemical', 'thermal', 'kinetic', 'electrical', 'steam', 'turbine', 'generator', 'transmission'],
    modelAnswer: 'Coal is burned, releasing chemical energy as thermal (heat) energy. Water is heated to produce steam. The steam drives a turbine — thermal energy is transferred to kinetic energy. The turbine spins a generator — kinetic energy is transferred to electrical energy. Electricity is transmitted through the National Grid at high voltage to homes, where it is stepped down by a transformer.',
    explain: 'Chemical → thermal → kinetic (turbine) → electrical (generator� → transmitted via National Grid. Each transfer should be named.'
  }
];
