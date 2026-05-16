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
  let attempts    = 0;   // tracks attempts on current question (max 2)
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
    attempts = 0;
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

    // Clear any feedback panel from the previous question
    const oldPanel = document.getElementById('feedback-panel');
    if (oldPanel) oldPanel.remove();
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

      // Live word counter
      const counter = document.createElement('div');
      counter.id        = 'word-counter';
      counter.className = 'word-counter';
      counter.textContent = '0 words (minimum 10 required)';

      // Friendly error message (hidden by default)
      const errorMsg = document.createElement('div');
      errorMsg.id        = 'word-error';
      errorMsg.className = 'word-error';
      errorMsg.textContent = '✏️ Please write at least 10 words before submitting your answer.';
      errorMsg.style.display = 'none';

      ta.addEventListener('input', () => {
        const wordCount = countWords(ta.value);
        counter.textContent = wordCount + ' word' + (wordCount === 1 ? '' : 's') +
          (wordCount < 10 ? ' (minimum 10 required)' : ' ✓');
        counter.classList.toggle('word-counter-ok', wordCount >= 10);
        if (wordCount >= 10) errorMsg.style.display = 'none';
      });

      const btn = document.createElement('button');
      btn.className   = 'submit-btn';
      btn.textContent = 'Submit Answer';
      btn.id          = 'submit-written';
      btn.addEventListener('click', () => submitWritten(q));

      wrap.appendChild(ta);
      wrap.appendChild(counter);
      wrap.appendChild(errorMsg);
      wrap.appendChild(btn);
      area.appendChild(wrap);
    }
  }

  // ── MCQ selection ──
  function selectMCQ(btn, idx, q) {
    if (answered) return;
    attempts++;

    const allBtns = document.querySelectorAll('.option-btn');

    if (idx === q.correct) {
      // Correct answer
      answered = true;
      stopTimer();
      allBtns.forEach(b => b.disabled = true);
      btn.style.borderColor = '#2e7d32';
      btn.style.background  = '#e8f5e9';
      btn.style.color       = '#2e7d32';
      btn.style.fontWeight  = '700';
      if (attempts === 1) score++; // only award point for first-attempt correct
      recordResult(q, true, q.options[idx]);
      showFeedback(true, attempts === 1, null, true);

    } else {
      // Wrong answer
      btn.classList.add('selected-wrong');
      btn.disabled = true;

      if (attempts === 1) {
        // First wrong attempt — show hint, let them try again
        showFeedback(false, false, null, false);
      } else {
        // Second wrong attempt — lock everything, show correct answer
        answered = true;
        stopTimer();
        allBtns.forEach(b => b.disabled = true);
        // Highlight the correct option
        allBtns.forEach(b => {
          if (parseInt(b.dataset.idx) === q.correct) {
            b.style.borderColor = '#2e7d32';
            b.style.background  = '#e8f5e9';
            b.style.color       = '#2e7d32';
            b.style.fontWeight  = '700';
          }
        });
        recordResult(q, false, q.options[idx]);
        showFeedback(false, false, q.options[q.correct], true);
      }
    }
  }

  // ── Written answer submit ──
  function submitWritten(q) {
    if (answered) return;

    const ta  = document.getElementById('written-input');
    const val = (ta ? ta.value : '').trim();

    // Word count gate — must have at least 10 words
    if (countWords(val) < 10) {
      const errorMsg = document.getElementById('word-error');
      if (errorMsg) errorMsg.style.display = 'block';
      return; // Don't submit — stay on question
    }

    attempts++;
    stopTimer(); // stop timer once they've made an attempt

    const correct = markWritten(val, q.keyTerms);
    const submitBtn = document.getElementById('submit-written');

    if (correct) {
      // Correct answer — lock and move on
      answered = true;
      if (submitBtn) submitBtn.disabled = true;
      if (ta) ta.disabled = true;
      if (attempts === 1) score++;
      recordResult(q, true, val);
      showFeedback(true, attempts === 1, null, true);

    } else if (attempts === 1) {
      // First wrong attempt — show hint, let them try again
      // Leave textarea and button enabled for second attempt
      showFeedback(false, false, null, false);

    } else {
      // Second wrong attempt — lock everything and reveal model answer
      answered = true;
      if (submitBtn) submitBtn.disabled = true;
      if (ta) ta.disabled = true;
      recordResult(q, false, val);
      showFeedback(false, false, q.modelAnswer, true);
    }
  }

  // ── Feedback panel ──
  // correct      : was the answer correct?
  // firstAttempt : was this their first try?
  // revealAnswer : string to show as the correct answer (or null)
  // showNext     : whether to show the Next Question button
  function showFeedback(correct, firstAttempt, revealAnswer, showNext) {
    // Remove any existing feedback panel
    const existing = document.getElementById('feedback-panel');
    if (existing) existing.remove();

    const panel = document.createElement('div');
    panel.id        = 'feedback-panel';
    panel.className = 'feedback-panel ' + (correct ? 'feedback-correct' : 'feedback-wrong');

    if (correct && firstAttempt) {
      panel.innerHTML = '<strong>✅ Correct — well done!</strong>';
    } else if (correct && !firstAttempt) {
      panel.innerHTML = '<strong>✅ Correct on your second attempt — good work!</strong>';
    } else if (!correct && !showNext) {
      // First wrong attempt hint
      panel.innerHTML = '<strong>❌ Not quite.</strong> Have another look and try again.';
    } else {
      // Second wrong attempt — reveal answer
      panel.innerHTML = '<strong>❌ Not correct.</strong>' +
        (revealAnswer ? '<div class="feedback-answer"><span>✓ Answer:</span> ' + escHtml(revealAnswer) + '</div>' : '');
    }

    if (showNext) {
      const nextBtn = document.createElement('button');
      nextBtn.className   = 'next-btn';
      nextBtn.textContent = 'Next Question →';
      nextBtn.addEventListener('click', advance);
      panel.appendChild(nextBtn);
    }

    // Insert after the answer area
    const area = document.getElementById('answer-area');
    area.parentNode.insertBefore(panel, area.nextSibling);
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
          showFeedback(false, false, q.type === 'mcq' ? q.options[q.correct] : q.modelAnswer, true);
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

    // ── Summary stats strip ──
    const summaryEl = document.getElementById('res-summary-stats');
    summaryEl.innerHTML = '';

    const correct  = questions.length - wrongItems.length;
    const msgEl    = document.createElement('div');
    msgEl.className = 'res-summary-msg';

    if (wrongItems.length === 0) {
      msgEl.innerHTML = '🎉 <strong>Perfect score!</strong> Every question answered correctly.';
      msgEl.classList.add('res-summary-perfect');
    } else {
      // Areas to improve: first 3 wrong question snippets
      const areas = wrongItems.slice(0, 3).map(w => {
        const snippet = w.question.replace(/<[^>]+>/g, '').slice(0, 60);
        return '• ' + snippet + (snippet.length >= 60 ? '…' : '');
      }).join('<br>');

      msgEl.innerHTML =
        '<strong>' + correct + ' correct</strong> and <strong>' + wrongItems.length + ' to review</strong>.' +
        (wrongItems.length > 0
          ? '<div class="res-areas"><span>Areas to focus on:</span><br>' + areas + '</div>'
          : '');
    }
    summaryEl.appendChild(msgEl);

    // ── Detail feedback section ──
    const reviewEl = document.getElementById('review-list');
    reviewEl.innerHTML = '';

    if (wrongItems.length === 0) {
      // Hide detail toggle entirely on a perfect score
      const toggleRow = document.getElementById('review-toggle-row');
      if (toggleRow) toggleRow.style.display = 'none';
    } else {
      // Show the toggle row
      const toggleRow = document.getElementById('review-toggle-row');
      if (toggleRow) toggleRow.style.display = 'flex';

      const h = document.createElement('h3');
      h.textContent = 'Questions to review (' + wrongItems.length + ')';
      reviewEl.appendChild(h);

      wrongItems.forEach((item, i) => {
        const div = document.createElement('div');
        div.className = 'review-item';

        const explainId = 'explain-' + i;
        const hasExplain = !!item.explain;

        div.innerHTML =
          '<div class="ri-q">Q' + (i + 1) + '. ' + item.question + '</div>' +
          '<div class="ri-your">Your answer: ' + escHtml(item.userAnswer) + '</div>' +
          '<div class="ri-correct">✓ Model answer: ' + escHtml(item.correct) + '</div>' +
          (hasExplain
            ? '<button class="ri-toggle" onclick="toggleExplain(\'' + explainId + '\', this)">Show explanation</button>' +
              '<div class="ri-explain" id="' + explainId + '" style="display:none">' + escHtml(item.explain) + '</div>'
            : '');

        reviewEl.appendChild(div);
      });
    }
  }

  // ── Public: toggle detail feedback section ──
  window.toggleDetailFeedback = function () {
    const section  = document.getElementById('review-section');
    const btn      = document.getElementById('btn-detail-toggle');
    const expandBtn = document.getElementById('btn-expand-all');
    const isHidden = section.style.display === 'none';

    section.style.display   = isHidden ? 'block' : 'none';
    expandBtn.style.display = isHidden ? 'inline-block' : 'none';
    btn.textContent = isHidden ? '📋 Hide Detailed Feedback' : '📋 View Detailed Feedback';
  };

  // ── Public: expand/collapse all explanations at once ──
  window.toggleAllExplanations = function () {
    const btn      = document.getElementById('btn-expand-all');
    const explains = document.querySelectorAll('.ri-explain');
    const toggles  = document.querySelectorAll('.ri-toggle');
    const expanding = btn.textContent.includes('Show');

    explains.forEach(el => { el.style.display = expanding ? 'block' : 'none'; });
    toggles.forEach(el  => { el.textContent   = expanding ? 'Hide explanation' : 'Show explanation'; });
    btn.textContent = expanding ? 'Hide All Explanations' : 'Show All Explanations';
  };

  // ── Public: toggle a single explanation ──
  window.toggleExplain = function (id, btn) {
    const el = document.getElementById(id);
    if (!el) return;
    const isHidden = el.style.display === 'none';
    el.style.display = isHidden ? 'block' : 'none';
    btn.textContent  = isHidden ? 'Hide explanation' : 'Show explanation';
  };

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
  function countWords(str) {
    return (str || '').trim().split(/\s+/).filter(w => w.length > 0).length;
  }

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

  // ── Copy results to clipboard ──
  window.copyResults = function () {
    const pct   = Math.round((score / questions.length) * 100);
    const grade = calcGrade(pct);
    const date  = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

    let text = '📚 GCSE Quiz Results\n';
    text += '─────────────────────\n';
    text += 'Subject : ' + subjectName + '\n';
    text += 'Date    : ' + date + '\n';
    text += 'Score   : ' + score + ' / ' + questions.length + ' (' + pct + '%)\n';
    text += 'Grade   : ' + grade + '\n';

    if (wrongItems.length === 0) {
      text += '\n🎉 Perfect score — every question correct!\n';
    } else {
      text += '\nQuestions to review (' + wrongItems.length + '):\n';
      wrongItems.forEach((item, i) => {
        const q = item.question.replace(/<[^>]+>/g, ''); // strip any HTML tags
        text += '\n' + (i + 1) + '. ' + q + '\n';
        text += '   Your answer  : ' + item.userAnswer + '\n';
        text += '   Model answer : ' + item.correct + '\n';
        if (item.explain) text += '   Explanation  : ' + item.explain + '\n';
      });
    }

    text += '\n─────────────────────\n';
    text += 'Revision tool: https://markhamm01-gif.github.io/gcse-flashcards/';

    const showConfirm = () => {
      const confirm = document.getElementById('copy-confirm');
      if (confirm) {
        confirm.style.display = 'block';
        setTimeout(() => { confirm.style.display = 'none'; }, 3000);
      }
    };

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(showConfirm).catch(() => fallbackCopy(text, showConfirm));
    } else {
      fallbackCopy(text, showConfirm);
    }
  };

  function fallbackCopy(text, callback) {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity  = '0';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); callback(); } catch (e) { /* silent fail */ }
    document.body.removeChild(ta);
  }

  // ── Start ──
  document.addEventListener('DOMContentLoaded', init);
})();
