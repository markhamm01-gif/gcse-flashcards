/* AQA GCSE Maths — Paper 1: Non-Calculator (8300/1) */
window.GCSE_QUESTIONS = [

  {
    type: 'mcq',
    question: 'What is 15% of 340?',
    options: ['34', '51', '48', '46'],
    correct: 1,
    marks: 1,
    explain: '10% of 340 = 34. 5% = 17. So 15% = 34 + 17 = 51.'
  },

  {
    type: 'mcq',
    question: 'Simplify the fraction 36/48.',
    options: ['3/4', '4/5', '2/3', '5/6'],
    correct: 0,
    marks: 1,
    explain: 'HCF of 36 and 48 is 12. 36 ÷ 12 = 3, 48 ÷ 12 = 4. Simplified = 3/4.'
  },

  {
    type: 'mcq',
    question: 'What is the value of 3² + 4²?',
    options: ['25', '14', '49', '24'],
    correct: 0,
    marks: 1,
    explain: '3² = 9, 4² = 16. 9 + 16 = 25. Note: this also equals 5², which is the 3-4-5 Pythagorean triple.'
  },

  {
    type: 'mcq',
    question: 'Expand and simplify: 3(x + 4) + 2(x − 1)',
    options: ['5x + 10', '5x + 14', '6x + 10', '5x + 6'],
    correct: 0,
    marks: 2,
    explain: '3(x + 4) = 3x + 12. 2(x − 1) = 2x − 2. Adding: 5x + 10.'
  },

  {
    type: 'mcq',
    question: 'What is the gradient of the line y = 3x − 7?',
    options: ['−7', '3', '7', '−3'],
    correct: 1,
    marks: 1,
    explain: 'In y = mx + c, the gradient is m. Here m = 3, so the gradient is 3.'
  },

  {
    type: 'written',
    question: 'Show that the sum of any two consecutive odd numbers is always even. Use algebra in your answer.',
    keyTerms: ['2n', 'odd', 'consecutive', 'even', 'sum', 'algebraic', 'proof', 'divisible'],
    modelAnswer: 'Let the first odd number be 2n + 1. The next consecutive odd number is 2n + 3. Their sum = (2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1), which is divisible by 4 and therefore always even.',
    marks: 3,
    explain: 'AQA non-calculator papers frequently include algebraic proof questions. The key is to use 2n + 1 to represent an odd number and show the result is always divisible by 2.'
  },

  {
    type: 'mcq',
    question: 'What is √144?',
    options: ['11', '12', '13', '14'],
    correct: 1,
    marks: 1,
    explain: '12 × 12 = 144, so √144 = 12.'
  },

  {
    type: 'mcq',
    question: 'A bag contains 3 red, 5 blue and 2 green counters. A counter is chosen at random. What is the probability it is blue?',
    options: ['1/2', '1/3', '1/5', '5/10'],
    correct: 0,
    marks: 1,
    explain: 'Total counters = 10. P(blue) = 5/10 = 1/2.'
  },

  {
    type: 'mcq',
    question: 'Solve: 4x + 3 = 19',
    options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
    correct: 1,
    marks: 2,
    explain: '4x = 19 − 3 = 16. x = 16 ÷ 4 = 4.'
  },

  {
    type: 'written',
    question: 'A rectangle has a length of (2x + 3) cm and a width of 4 cm. The perimeter is 38 cm. Find the value of x.',
    keyTerms: ['perimeter', 'equation', 'expand', 'solve', '2x', 'length', 'width', 'x = 3'],
    modelAnswer: 'Perimeter = 2(length + width) = 2(2x + 3 + 4) = 2(2x + 7) = 4x + 14. Setting equal to 38: 4x + 14 = 38. 4x = 24. x = 6.',
    marks: 4,
    explain: 'AQA often combines perimeter with forming and solving equations. Set up 2(l + w) = 38, expand, then solve for x.'
  },

  {
    type: 'mcq',
    question: 'What is 0.35 written as a fraction in its simplest form?',
    options: ['35/100', '7/20', '3/5', '7/10'],
    correct: 1,
    marks: 1,
    explain: '0.35 = 35/100. HCF of 35 and 100 is 5. 35 ÷ 5 = 7, 100 ÷ 5 = 20. Simplified = 7/20.'
  },

  {
    type: 'mcq',
    question: 'Which of the following is a prime number?',
    options: ['27', '33', '41', '49'],
    correct: 2,
    marks: 1,
    explain: '41 is a prime number — it has no factors other than 1 and itself. 27 = 3³, 33 = 3 × 11, 49 = 7².'
  },

  {
    type: 'mcq',
    question: 'What is the nth term of the sequence 5, 8, 11, 14, …?',
    options: ['3n + 2', '5n', '3n + 5', '2n + 3'],
    correct: 0,
    marks: 2,
    explain: 'The common difference is 3, so the nth term starts with 3n. When n = 1: 3(1) + 2 = 5. Check: n = 2 gives 8 ✓. Nth term = 3n + 2.'
  },

  {
    type: 'written',
    question: 'Calculate the area of a triangle with base 9 cm and perpendicular height 6 cm.',
    keyTerms: ['area', 'triangle', 'half', 'base', 'height', '27', 'cm²', 'formula'],
    modelAnswer: 'Area = ½ × base × height = ½ × 9 × 6 = ½ × 54 = 27 cm².',
    marks: 2,
    explain: 'Area of a triangle = ½bh. Always include the correct units (cm²).'
  },

  {
    type: 'mcq',
    question: 'Write 360 as a product of its prime factors.',
    options: ['2³ × 3² × 5', '2² × 3² × 5', '2⁴ × 3 × 5', '2³ × 3 × 5²'],
    correct: 0,
    marks: 2,
    explain: '360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2 × 2 × 2 × 9 × 5 = 2³ × 3² × 5.'
  },

  {
    type: 'mcq',
    question: 'The angles in a triangle are x°, (x + 20)° and (x + 40)°. What is the value of x?',
    options: ['30', '40', '60', '45'],
    correct: 1,
    marks: 2,
    explain: 'Angles in a triangle sum to 180°. x + (x + 20) + (x + 40) = 180. 3x + 60 = 180. 3x = 120. x = 40.'
  },

  {
    type: 'written',
    question: 'A shop reduces a price by 20%. The sale price is £48. What was the original price?',
    keyTerms: ['original', 'percentage', 'reverse', '80%', '60', 'divide', 'multiplier', 'price'],
    modelAnswer: 'After a 20% reduction, the sale price is 80% of the original. Let original = P. 0.8P = 48. P = 48 ÷ 0.8 = 60. The original price was £60.',
    marks: 3,
    explain: 'Reverse percentage problems require finding 100% when a percentage reduction has been applied. Divide the given value by the decimal multiplier (0.8).'
  },

  {
    type: 'mcq',
    question: 'Which of the following is the correct factorisation of x² − 9?',
    options: ['(x − 3)(x + 3)', '(x − 9)(x + 1)', '(x − 3)²', '(x + 9)(x − 1)'],
    correct: 0,
    marks: 2,
    explain: 'x² − 9 is a difference of two squares: a² − b² = (a − b)(a + b). Here a = x, b = 3, so x² − 9 = (x − 3)(x + 3).'
  },

  {
    type: 'mcq',
    question: 'What is the mean of: 4, 7, 9, 12, 8?',
    options: ['7', '8', '9', '10'],
    correct: 1,
    marks: 1,
    explain: 'Sum = 4 + 7 + 9 + 12 + 8 = 40. Mean = 40 ÷ 5 = 8.'
  },

  {
    type: 'written',
    question: 'Describe how to find the Highest Common Factor (HCF) of 48 and 60 using prime factorisation.',
    keyTerms: ['prime', 'factor', 'HCF', 'common', '12', '48', '60', 'Venn', 'intersection'],
    modelAnswer: '48 = 2⁴ × 3. 60 = 2² × 3 × 5. The HCF is found by multiplying the common prime factors using the lowest powers: 2² × 3 = 12. So HCF(48, 60) = 12.',
    marks: 3,
    explain: 'AQA expects students to use prime factor trees or repeated division, then identify the common factors to calculate HCF.'
  }

];
