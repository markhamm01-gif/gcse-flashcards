/* ===== GCSE Exam Quiz Engine — quiz.js ===== */

(function () {
  'use strict';

  // ── State ──
  let questions   = [];
  let current     = 0;
  let score       = 0;
  let wrongItems  = [];
  let timerInterval = null;
  let timeLeft    = 0;
  let totalTime   = 0;
  let answered    = false;
  let subjectName = '';
  let subjectKey  = '';

  // ── Seconds per mark (AQA standard: 1 mark ≈ 1 min, capped for MCQ) ──
  function timeForQuestion(q) {
    if (q.type === 'mcq') {
      // MCQ: 60s base + 15s per mark above 1, max 120s
      return Math.min(60 + (q.marks - 1) * 15, 120);
    } else {
      // Written: 60s per mark, max 300s (5 min)
      return Math.min(q.marks * 60, 300);
    }
  }

  // ── Boot ──
  function init() {
    const params = new URLSearchParams(window.location.search);
    subjectKey  = params.get('subject') || '';
    subjectName = params.get('name')    || 'Quiz';

    const titleEl = document.getElementById('quiz-subject-title');
    if (titleEl) titleEl.textContent = subjectName;
    document.title = subjectName + ' — GCSE Quiz';

    // Load the question file for this subject
    const script = document.createElement('script');
    script.src = 'questions/' + subjectKey + '.js';
    script.onload  = () => startQuiz(window.GCSE_QUESTIONS);
    script.onerror = () => showError('Could not load questions for ' + subjectName);
    document.head.appendChild(script);
  }

  function startQuiz(qs) {
    if (!qs || !qs.length) { showError('No questions found.'); return; }
    questions  = shuffle(qs).slice(0, 20);
    current    = 0;
    score      = 0;
    wrongItems = [];
    showQuestion();
  }

  // ── Render question ──
  function showQuestion() {
    answered = false;
    const q = questions[current];
    totalTime = timeForQuestion(q);
    timeLeft  = totalTime;

    document.getElementById('q-number').textContent  = 'Question ' + (current + 1) + ' of ' + questions.length;
    document.getElementById('q-subject').textContent = subjectName + ' · AQA';
    document.getElementById('q-text').innerHTML      = q.question + '<span class="q-marks">' + q.marks + ' mark' + (q.marks > 1 ? 's' : '') + '</span>';

    updateProgress();
    renderAnswerArea(q);
    startTimer(q);

    document.getElementById('timeup-notice').style.display = 'none';
  }

  function renderAnswerArea(q) {
    const area = document.getElementById('answer-area');
    area.innerHTML = '';

    if (q.type === 'mcq') {
      const ul = document.createElement('ul');
      ul.className = 'options-list';
      q.options.forEach((opt, i) => {
        const li  = document.createElement('li');
        const btn = document.createElement('button');
        btn.className   = 'option-btn';
        btn.textContent = opt;
        btn.dataset.idx = i;
        btn.addEventListener('click', () => selectMCQ(btn, i, q));
        li.appendChild(btn);
        ul.appendChild(li);
      });
      area.appendChild(ul);
    } else {
      // Written answer
      const wrap = document.createElement('div');
      wrap.className = 'written-wrap';

      const ta = document.createElement('textarea');
      ta.id          = 'written-input';
      ta.placeholder = 'Write your answer here…';
      ta.rows        = 5;

      const btn = document.createElement('button');
      btn.className   = 'submit-btn';
      btn.textContent = 'Submit Answer';
      btn.id          = 'submit-written';
      btn.addEventListener('click', () => submitWritten(q));

      wrap.appendChild(ta);
      wrap.appendChild(btn);
      area.appendChild(wrap);
    }
  }

  // ── MCQ selection ──
  function selectMCQ(btn, idx, q) {
    if (answered) return;
    answered = true;
    stopTimer();

    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    if (idx === q.correct) {
      score++;
      // Brief green flash then advance
      btn.style.borderColor  = '#2e7d32';
      btn.style.background   = '#e8f5e9';
      btn.style.color        = '#2e7d32';
      btn.style.fontWeight   = '700';
      setTimeout(advance, 900);
    } else {
      btn.classList.add('selected-wrong');
      // No reveal — just move on
      setTimeout(advance, 1200);
    }

    recordResult(q, idx === q.correct, q.type === 'mcq' ? q.options[idx] : null);
  }

  // ── Written answer submit ──
  function submitWritten(q) {
    if (answered) return;
    answered = true;
    stopTimer();

    const ta  = document.getElementById('written-input');
    const val = (ta ? ta.value : '').trim();
    const btn = document.getElementById('submit-written');
    if (btn) btn.disabled = true;
    if (ta)  ta.disabled  = true;

    // Self-marking: check key terms
    const correct = markWritten(val, q.keyTerms);
    if (correct) score++;

    recordResult(q, correct, val);
    setTimeout(advance, 600);
  }

  // Simple keyword matching for written answers
  function markWritten(answer, keyTerms) {
    if (!answer || answer.length < 3) return false;
    const lower = answer.toLowerCase();
    let hits = 0;
    keyTerms.forEach(term => {
      if (lower.includes(term.toLowerCase())) hits++;
    });
    // Need at least half the key terms
    return hits >= Math.ceil(keyTerms.length / 2);
  }

  function recordResult(q, correct, userAnswer) {
    if (!correct) {
      wrongItems.push({
        question:  q.question,
        userAnswer: userAnswer || '(no answer / time up)',
        correct:   q.type === 'mcq' ? q.options[q.correct] : q.modelAnswer,
        explain:   q.explain || ''
      });
    }
  }

  // ── Timer ──
  function startTimer(q) {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
      timeLeft--;
      updateTimerDisplay();
      if (timeLeft <= 0) {
        stopTimer();
        if (!answered) {
          answered = true;
          // Disable inputs
          document.querySelectorAll('.option-btn').forEach(b => b.disabled = true);
          const sb = document.getElementById('submit-written');
          const ta = document.getElementById('written-input');
          if (sb) sb.disabled = true;
          if (ta) ta.disabled  = true;

          document.getElementById('timeup-notice').style.display = 'block';
          recordResult(q, false, '(time up)');
          setTimeout(advance, 2000);
        }
      }
    }, 1000);
  }

  function stopTimer() { clearInterval(timerInterval); timerInterval = null; }

  function updateTimerDisplay() {
    const pct   = (timeLeft / totalTime) * 100;
    const fill  = document.getElementById('timer-fill');
    const digits = document.getElementById('timer-digits');
    const warn  = timeLeft <= Math.min(15, totalTime * 0.2);

    if (fill) {
      fill.style.width = pct + '%';
      fill.classList.toggle('warning', warn);
    }
    if (digits) {
      const m = Math.floor(timeLeft / 60);
      const s = timeLeft % 60;
      digits.textContent = m > 0
        ? m + ':' + String(s).padStart(2, '0')
        : timeLeft + 's';
      digits.classList.toggle('warning', warn);
    }
  }

  // ── Progress ──
  function updateProgress() {
    const pct = ((current) / questions.length) * 100;
    const fill = document.getElementById('progress-fill');
    const lbl  = document.getElementById('progress-label');
    if (fill) fill.style.width = pct + '%';
    if (lbl)  lbl.textContent  = current + ' / ' + questions.length + ' done';
  }

  // ── Advance ──
  function advance() {
    current++;
    if (current >= questions.length) {
      showResults();
    } else {
      showQuestion();
    }
  }

  // ── Results ──
  function showResults() {
    stopTimer();
    const pct   = Math.round((score / questions.length) * 100);
    const grade = calcGrade(pct);

    document.getElementById('quiz-screen').style.display    = 'none';
    document.getElementById('results-screen').style.display = 'block';

    document.getElementById('res-subject').textContent = subjectName;
    document.getElementById('res-score').textContent   = score + ' / ' + questions.length;
    document.getElementById('res-pct').textContent     = pct + '% correct';
    document.getElementById('res-grade').textContent   = 'Grade estimate: ' + grade;

    // Wrong answer review
    const reviewEl = document.getElementById('review-list');
    reviewEl.innerHTML = '';

    if (wrongItems.length === 0) {
      reviewEl.innerHTML = '<p style="color:#2e7d32;font-weight:600;">Perfect score! Every answer correct. 🎉</p>';
    } else {
      const h = document.createElement('h3');
      h.textContent = 'Questions you missed (' + wrongItems.length + ')';
      reviewEl.appendChild(h);

      wrongItems.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'review-item';
        div.innerHTML =
          '<div class="ri-q">Q' + (i + 1) + '. ' + item.question + '</div>' +
          '<div class="ri-your">Your answer: ' + escHtml(item.userAnswer) + '</div>' +
          '<div class="ri-correct">✓ Model answer: ' + escHtml(item.correct) + '</div>' +
          (item.explain ? '<div class="ri-explain">' + escHtml(item.explain) + '</div>' : '');
        reviewEl.appendChild(div);
      });
    }
  }

  function calcGrade(pct) {
    if (pct >= 90) return '8–9';
    if (pct >= 78) return '7';
    if (pct >= 65) return '6';
    if (pct >= 52) return '5';
    if (pct >= 40) return '4';
    if (pct >= 28) return '3';
    if (pct >= 16) return '2';
    return '1';
  }

  // ── Helpers ──
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function showError(msg) {
    const el = document.getElementById('quiz-screen');
    if (el) el.innerHTML = '<p style="color:red;padding:20px">' + msg + '</p>';
  }

  // ── Public button handlers (called from HTML) ──
  window.quizRetry = function () {
    document.getElementById('results-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display    = 'block';
    startQuiz(window.GCSE_QUESTIONS);
  };

  window.quizHome = function () {
    window.location.href = 'index.html';
  };

  // ── Start ──
  document.addEventListener('DOMContentLoaded', init);
})();
