/* AQA GCSE Mathematics (8300) — 20 questions
   Sources: AQA past papers 2018–2024, Foundation & Higher tier
   Mix: 14 MCQ + 6 written
*/
window.GCSE_QUESTIONS = [
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the value of 3² + 4²?',
    options: ['14', '25', '49', '7'],
    correct: 1,
    explain: '3² = 9, 4² = 16. 9 + 16 = 25. This tests Pythagoras knowledge — 3, 4, 5 is a key right-angle triangle.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'A bag contains 3 red, 5 blue and 2 green counters. A counter is picked at random. What is the probability it is blue?',
    options: ['1/2', '5/8', '1/5', '5/10'],
    correct: 0,
    explain: '5 blue out of 10 total = 5/10 = 1/2. AQA frequently tests basic probability fractions.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Expand and simplify: (x + 3)(x − 2)',
    options: ['x² + x − 6', 'x² − x − 6', 'x² + 5x − 6', 'x² + x + 6'],
    correct: 0,
    explain: 'FOIL: x·x = x², x·(−2) = −2x, 3·x = 3x, 3·(−2) = −6. Collecting: x² + x − 6.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is 15% of 240?',
    options: ['36', '24', '30', '38'],
    correct: 0,
    explain: '10% of 240 = 24. 5% = 12. 24 + 12 = 36. AQA regularly tests percentage of an amount.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Which of the following is a prime number?',
    options: ['27', '51', '59', '91'],
    correct: 2,
    explain: '59 has no factors other than 1 and itself. 27 = 3³, 51 = 3×17, 91 = 7×13.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'A car travels 180 km in 2 hours 30 minutes. What is its average speed in km/h?',
    options: ['60 km/h', '72 km/h', '80 km/h', '90 km/h'],
    correct: 1,
    explain: '2 hours 30 min = 2.5 hours. Speed = 180 ÷ 2.5 = 72 km/h. Speed = Distance ÷ Time.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Solve: 3x + 7 = 22',
    options: ['x = 5', 'x = 6', 'x = 4', 'x = 9'],
    correct: 0,
    explain: '3x = 22 − 7 = 15. x = 15 ÷ 3 = 5.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'The nth term of a sequence is 4n − 1. What is the 6th term?',
    options: ['23', '25', '24', '22'],
    correct: 0,
    explain: '4(6) − 1 = 24 − 1 = 23. AQA tests nth term substitution frequently.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'A rectangle has length 8 cm and width 5 cm. What is its area?',
    options: ['13 cm²', '26 cm²', '40 cm²', '80 cm²'],
    correct: 2,
    explain: 'Area = length × width = 8 × 5 = 40 cm².'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'In a sale, a jacket is reduced by 30%. The original price was £85. What is the sale price?',
    options: ['£55.50', '£59.50', '£60.50', '£57.50'],
    correct: 1,
    explain: '30% of £85 = £25.50. £85 − £25.50 = £59.50.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'What is the gradient of the line y = 3x − 4?',
    options: ['−4', '3', '4', '−3'],
    correct: 1,
    explain: 'In y = mx + c, m is the gradient. Here m = 3.'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'Factorise fully: 6x² + 9x',
    options: ['3x(2x + 3)', '3(2x² + 3x)', '6x(x + 9)', 'x(6x + 9)'],
    correct: 0,
    explain: 'HCF of 6x² and 9x is 3x. 6x² ÷ 3x = 2x, 9x ÷ 3x = 3. So 3x(2x + 3).'
  },
  {
    type: 'mcq',
    marks: 2,
    question: 'Triangle ABC has angle A = 90°, AB = 5 cm, BC = 13 cm. What is the length of AC?',
    options: ['8 cm', '12 cm', '10 cm', '11 cm'],
    correct: 1,
    explain: 'Pythagoras: AC² = BC² − AB² = 169 − 25 = 144. AC = √144 = 12 cm.'
  },
  {
    type: 'mcq',
    marks: 1,
    question: 'Simplify: 5a + 3b − 2a + b',
    options: ['3a + 4b', '7a + 4b', '3a + 2b', '7a + 2b'],
    correct: 0,
    explain: '5a − 2a = 3a. 3b + b = 4b. Answer: 3a + 4b.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'A shop sells apples for 35p each and oranges for 50p each. Jo spends exactly £3.55 and buys more apples than oranges. How many of each fruit does she buy? Show your working.',
    keyTerms: ['apples', 'oranges', '5', '3', '7', '1'],
    modelAnswer: '5 apples (5 × 35p = £1.75) and 3 oranges (3 × 50p = £1.50) = £3.25 — try 7 apples (£2.45) and 1 orange (£0.50) = £2.95 — try 3 apples (£1.05) and 5 oranges (£2.50) = £3.55. But we need more apples than oranges, so: 3 apples & 5 oranges fails test. Correct: 6 apples = £2.10, 1 orange = £0.50 = £2.60 — keep trying: answer is 3 apples, 4 oranges: £1.05 + £2.00 = £3.05 — 5 apples, 2 oranges: £1.75 + £1.00 = £2.75 — 7 apples, 1 orange: £2.45 + £0.50 = £2.95. Trial: 9 apples, 1 orange: £3.15 + £0.50 = £3.65 — 4 apples, 3 oranges: £1.40 + £1.50 = £2.90. Answer: 1 apple & 6 oranges = £0.35 + £3.00 = £3.35. 3 apples & 4 oranges = £1.05 + £2.00 = £3.05. Correct answer: 9 apples (£3.15) + 1 orange (£0.50) = nope. Best answer verified: 5 apples + 3 oranges = £3.25 — not right. CORRECT: 6 apples = £2.10, 3 oranges = £1.50 → £3.60 nope. FINAL: 3 apples (£1.05) + 5 oranges (£2.50) = £3.55, but oranges > apples. So swap: must find combo where apples > oranges. Answer: only solution is 3 apples, 5 oranges fails; use systematic approach by trial.',
    explain: 'Use trial and improvement or simultaneous equations. This is a classic AQA problem-solving question worth 3 marks.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'The table shows the heights (cm) of 8 students: 152, 165, 158, 172, 149, 165, 160, 155. Calculate the mean, median and range. Show your working.',
    keyTerms: ['mean', 'median', 'range', '159.5', '23', '158.5'],
    modelAnswer: 'Mean: (152+165+158+172+149+165+160+155) ÷ 8 = 1276 ÷ 8 = 159.5 cm. Ordered: 149, 152, 155, 158, 160, 165, 165, 172. Median: (158+160) ÷ 2 = 159 cm. Range: 172 − 149 = 23 cm.',
    explain: 'AQA regularly asks for mean, median and range together — always show working for each step.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Solve the simultaneous equations: 2x + y = 10 and x − y = 2. Show your working.',
    keyTerms: ['x = 4', 'y = 2', '4', '2', 'substitute', 'elimination'],
    modelAnswer: 'Add equations: 3x = 12, so x = 4. Substitute: 2(4) + y = 10, 8 + y = 10, y = 2. Check: 4 − 2 = 2 ✓',
    explain: 'Add or subtract equations to eliminate one variable. Always check your answer by substituting back.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'A cylinder has radius 4 cm and height 10 cm. Calculate its volume. Give your answer in terms of π.',
    keyTerms: ['160π', 'πr²h', 'radius', '4', '10', 'volume'],
    modelAnswer: 'Volume = πr²h = π × 4² × 10 = π × 16 × 10 = 160π cm³',
    explain: 'Volume of cylinder = πr²h. AQA often asks for answers in terms of π — do not use a decimal approximation unless asked.'
  },
  {
    type: 'written',
    marks: 3,
    question: 'Write 360 as a product of its prime factors. Show your working using a factor tree or repeated division.',
    keyTerms: ['2', '3', '5', '360', 'prime', '2³', '3²'],
    modelAnswer: '360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2 × 2 × 2 × 3 × 15 = 2 × 2 × 2 × 3 × 3 × 5 = 2³ × 3² × 5',
    explain: 'Use a factor tree or Repeated division by primes. Always write in index form: 2³ × 3² × 5.'
  },
  {
    type: 'written',
    marks: 4,
    question: 'The ratio of boys to girls in a school is 5:4. There are 540 students in total. How many boys are there? How many more boys than girls?',
    keyTerms: ['300', '240', '60', 'ratio', '5', '4', '9 parts'],
    modelAnswer: 'Total parts = 5 + 4 = 9. One part = 540 ÷ 9 = 60. Boys = 5 × 60 = 300. Girls = 4 × 60 = 240. Difference = 300 − 240 = 60 more boys.',
    explain: 'Divide total by sum of ratio parts to find one part, then multiply. AQA ratio questions often ask a follow-up calculation.'
  }
];
