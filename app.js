const questions = [
  {
    "day": "DAY 1 · 순서",
    "q": "르모어 호텔 체크인 이후 일정표에 적힌 순서를 가장 정확히 나열한 것은?",
    "options": [
      "환전 → 포장 → 꽌옥응온 → 담시장·롯데마트 → 그릭 수플라키",
      "담시장·롯데마트 → 환전 → 포장 → 꽌옥응온 → 그릭 수플라키",
      "포장 → 환전 → 담시장·롯데마트 → 그릭 수플라키 → 꽌옥응온",
      "포장 → 담시장·롯데마트 → 환전 → 꽌옥응온 → 그릭 수플라키"
    ],
    "answer": 2,
    "explanation": "체크인 다음에는 반미·CCCP 포장, 환전, 담시장·롯데마트, 그릭 수플라키 포장, 꽌옥응온 순으로 적혀 있습니다."
  },
  {
    "day": "DAY 1 · 세부 메모",
    "q": "반미와 코코넛커피 포장 일정에서 “먹을 예정”이라고 따로 적힌 사람은?",
    "options": [
      "권민지",
      "여자 마사지사",
      "별도 표기 없음",
      "호아드라이버"
    ],
    "answer": 0,
    "explanation": "메모에는 “권민지는 먹을건데 다들 안 먹어도 됨”이라고 적혀 있습니다."
  },
  {
    "day": "DAY 1 · 준비물",
    "q": "환전 동선과 함께 당장 사기로 한 물건은 무엇인가요?",
    "options": [
      "모기약",
      "수영복",
      "환전 지갑",
      "선크림"
    ],
    "answer": 3,
    "explanation": "진도스포츠와 약국에 들러 바로 사용할 선크림을 사는 메모가 있습니다."
  },
  {
    "day": "DAY 1 · 쇼핑",
    "q": "시내쇼핑 메모에 함께 적힌 매장 조합은?",
    "options": [
      "척칩 · CCCP · 안토이",
      "슈렉 · 악어샵 · 옷가게",
      "김빈 · 김청 · 목 식당",
      "세일링클럽 · 해피비치 · 짜오마오1"
    ],
    "answer": 1,
    "explanation": "시내쇼핑 항목에는 슈렉, 악어샵, 옷가게 등이 적혀 있습니다."
  },
  {
    "day": "DAY 1 · 이동",
    "q": "판랑 투어 출발과 관련한 공항 합류 방식으로 적힌 것은?",
    "options": [
      "르모어 호텔 로비에서 전원 집합",
      "아미아나 리조트에서 차량 탑승",
      "투어 픽업을 이용하거나 공항에서 함께 출발",
      "각자 택시로 판랑에 바로 이동"
    ],
    "answer": 2,
    "explanation": "깜란 공항 항목에는 “투어 픽업 or 공항에서 같이 출발”이라고 적혀 있습니다."
  },
  {
    "day": "DAY 1 · 구분",
    "q": "다음 중 DAY 1의 “점심”이 아니라 “점저”로 표시된 곳은?",
    "options": [
      "꽌옥응온",
      "CCCP",
      "그릭 수플라키",
      "반미 판"
    ],
    "answer": 0,
    "explanation": "그릭 수플라키는 점심 포장이고, 꽌옥응온은 점저로 구분되어 있습니다."
  },
  {
    "day": "DAY 2 · 순서",
    "q": "DAY 2 오전부터 리조트 체크인까지의 순서로 맞는 것은?",
    "options": [
      "온시스파 → 르모어 체크아웃 → 담시장 → 안토이 → 아미아나 체크인",
      "르모어 체크아웃 → 안토이 → 온시스파 → 아미아나 체크인 → 담시장",
      "안토이 → 담시장 → 르모어 체크아웃 → 온시스파 → 아미아나 체크인",
      "르모어 체크아웃 → 온시스파 → 안토이 → 담시장 → 아미아나 체크인"
    ],
    "answer": 3,
    "explanation": "일정표 기재 순서는 르모어 체크아웃, 온시스파, 안토이, 담시장, 아미아나 체크인입니다."
  },
  {
    "day": "DAY 2 · 스파",
    "q": "온시스파 관련 메모를 모두 반영한 것은?",
    "options": [
      "커플룸을 요청하고, 리조트에서 바로 이동한다",
      "여자 마사지사를 요청하고, 짐을 맡긴 뒤 식사하러 간다",
      "예약 없이 방문하고, 스파에서 점심을 먹는다",
      "남자 마사지사를 요청하고, 식사 후 짐을 찾는다"
    ],
    "answer": 1,
    "explanation": "09:00 예약, 여자 마사지사 요청, 짐을 맡겨두고 밥을 먹으러 간다는 메모가 있습니다."
  },
  {
    "day": "DAY 2 · 식사",
    "q": "안토이 메뉴에 붙은 주의 메모는 무엇인가요?",
    "options": [
      "코코넛커피는 권민지만 주문",
      "킹크랩은 2층에서만 주문 가능",
      "곱창쌀국수는 호불호가 있을 수 있음",
      "배달은 2시간 이상 걸림"
    ],
    "answer": 2,
    "explanation": "안토이 항목에는 “곱창쌀국수 호불호”라고 적혀 있습니다."
  },
  {
    "day": "DAY 2 · 배달",
    "q": "DAY 2 저녁을 시내에서 배달할 경우 예상 소요시간은?",
    "options": [
      "보통 1시간",
      "보통 30분",
      "보통 2시간",
      "시간 정보 없음"
    ],
    "answer": 0,
    "explanation": "배달K 메모에 시내 배달은 보통 1시간이 걸린다고 적혀 있습니다."
  },
  {
    "day": "DAY 2 · 시간 추론",
    "q": "아미아나 리조트에 14시에 체크인한 뒤, 일정표상 바로 이어지는 시간 지정 일정은?",
    "options": [
      "요가 07:00",
      "공항 00:00 이전 도착",
      "온시스파 09:00",
      "티아워 15:00~16:00"
    ],
    "answer": 3,
    "explanation": "DAY 2에는 아미아나 리조트 14시 체크인 다음으로 티아워 15:00~16:00이 적혀 있습니다."
  },
  {
    "day": "DAY 3 · 원칙",
    "q": "DAY 3 아미아나 리조트 일정의 기본 방침은?",
    "options": [
      "체크아웃 후 리조트로 돌아오지 않는다",
      "저녁 전까지 리조트 밖으로 나가지 않는다",
      "점심 전까지 시내쇼핑을 끝낸다",
      "오후에는 판랑 투어를 간다"
    ],
    "answer": 1,
    "explanation": "아미아나 리조트 항목에 “저녁 전까지 리조트에서 안 나가요”라고 적혀 있습니다."
  },
  {
    "day": "DAY 3 · 동선",
    "q": "DAY 3 리조트 일정의 흐름을 앞에서부터 맞게 나열한 것은?",
    "options": [
      "조식 → 요가 → 티아워 → 물놀이 → 점심 → 낮잠",
      "요가 → 물놀이 → 조식 → 낮잠 → 점심 → 티아워",
      "요가 → 조식 → 물놀이 → 점심 → 티아워 → 낮잠",
      "물놀이 → 조식 → 요가 → 점심 → 낮잠 → 티아워"
    ],
    "answer": 2,
    "explanation": "일정표에는 요가, 조식, 물놀이, 점심, 티아워, 낮잠 순으로 배치되어 있습니다."
  },
  {
    "day": "DAY 3 · 점심",
    "q": "DAY 3 점심 선택지로 적힌 조합은?",
    "options": [
      "리조트 식사 또는 배달K",
      "짜오마오1 또는 피자 포피스",
      "반미 판 또는 그릭 수플라키",
      "안토이 또는 꽌옥응온"
    ],
    "answer": 0,
    "explanation": "DAY 3 점심은 리조트에서 먹거나 배달K를 이용하는 선택지입니다."
  },
  {
    "day": "DAY 3 · 저녁 예약",
    "q": "목 해산물 식당 이용 시 추가로 기억해야 할 예약 메모는?",
    "options": [
      "호텔을 통해 예약, 포장만 가능",
      "전화 예약 필수, 반드시 야외석",
      "예약 불필요, 1층 창가석",
      "카카오톡 예약 필수, 반드시 2층"
    ],
    "answer": 3,
    "explanation": "페이지 3 상단의 이어지는 메모에 “카톡예약 필수. 꼭 2층! 쾌적함”이라고 적혀 있습니다."
  },
  {
    "day": "DAY 3 · 야간",
    "q": "해산물 저녁 이후 후보로 적힌 펍 두 곳은?",
    "options": [
      "CCCP 또는 척칩",
      "세일링클럽 또는 해피비치",
      "슈렉 또는 악어샵",
      "김빈 또는 김청"
    ],
    "answer": 1,
    "explanation": "DAY 3 펍 후보는 세일링클럽 또는 해피비치입니다."
  },
  {
    "day": "DAY 3 · 휴식",
    "q": "DAY 3의 낮잠은 일정표상 어느 활동 사이의 휴식으로 배치되어 있나요?",
    "options": [
      "해산물 저녁과 펍 사이",
      "공항 도착과 출국 사이",
      "리조트 내 낮 활동과 목 해산물 식당 저녁 사이",
      "요가와 조식 사이"
    ],
    "answer": 2,
    "explanation": "DAY 3의 리조트 활동·티아워 이후 낮잠이 있고, 그 다음에 목 해산물 식당 저녁 일정이 이어집니다."
  },
  {
    "day": "DAY 4-5 · 식도락 순서",
    "q": "마지막 날 식사·간식 순서로 맞는 것은?",
    "options": [
      "짜오마오1 → 척칩 → 피자 포피스 나트랑",
      "짜오마오1 → 피자 포피스 → 척칩",
      "척칩 → 짜오마오1 → 피자 포피스 나트랑",
      "피자 포피스 → 척칩 → 짜오마오1"
    ],
    "answer": 0,
    "explanation": "DAY 4-5에는 점심 짜오마오1, 간식 척칩, 저녁 피자 포피스 순으로 적혀 있습니다."
  },
  {
    "day": "DAY 4-5 · 시내",
    "q": "리조트 체크아웃 뒤 시내 일정에서 사전에 필요하다고 적힌 것은?",
    "options": [
      "렌터카와 통역 예약",
      "요가 수업과 수영장 예약",
      "환전소와 병원 예약",
      "짐 맡길 곳과 마사지 예약"
    ],
    "answer": 3,
    "explanation": "시내 항목에는 “짐 맡기기 / 마사지 예약 필요”라고 적혀 있습니다."
  },
  {
    "day": "전체 일정 · 날짜",
    "q": "2026년 8월 29일에 함께 포함되는 일정 조합은?",
    "options": [
      "요가 · 조식 · 라군풀 · 목 해산물 식당",
      "아미아나 체크아웃 · 시내 · 짜오마오1 · 척칩 · 피자 포피스 · 귀국",
      "대구 출발 · 르모어 체크인 · 환전 · 네일",
      "판랑 투어 · 온시스파 · 안토이 · 담시장"
    ],
    "answer": 1,
    "explanation": "8월 29일은 DAY 4-5로, 리조트 체크아웃 후 시내 일정과 마지막 식사, 공항 이동 및 귀국이 포함됩니다."
  }
];

const $ = (selector) => document.querySelector(selector);
const startScreen = $('#start-screen');
const quizScreen = $('#quiz-screen');
const resultScreen = $('#result-screen');
const startForm = $('#start-form');
const playerNameInput = $('#player-name');
const currentPlayer = $('#current-player');
const questionCounter = $('#question-counter');
const progressPercent = $('#progress-percent');
const progressBar = $('#progress-bar');
const questionDay = $('#question-day');
const questionText = $('#question-text');
const optionsEl = $('#options');
const prevBtn = $('#prev-btn');
const nextBtn = $('#next-btn');
const reviewBtn = $('#review-btn');
const restartBtn = $('#restart-btn');
const reviewSection = $('#review-section');
const reviewList = $('#review-list');
const scoreTableBody = $('#score-table-body');
const emptyScores = $('#empty-scores');
const exportBtn = $('#export-btn');


let playerName = '';
let currentIndex = 0;
let answers = Array(questions.length).fill(null);

function renderQuestion() {
  const item = questions[currentIndex];
  const percent = Math.round(((currentIndex + 1) / questions.length) * 100);
  questionCounter.textContent = `${currentIndex + 1} / ${questions.length}`;
  progressPercent.textContent = `${percent}%`;
  progressBar.style.width = `${percent}%`;
  questionDay.textContent = item.day;
  questionText.textContent = item.q;
  optionsEl.innerHTML = '';
  item.options.forEach((option, index) => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `option${answers[currentIndex] === index ? ' selected' : ''}`;
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option}</span>`;
    btn.addEventListener('click', () => { answers[currentIndex] = index; renderQuestion(); });
    optionsEl.appendChild(btn);
  });
  prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
  nextBtn.disabled = answers[currentIndex] === null;
  nextBtn.textContent = currentIndex === questions.length - 1 ? '결과 보기' : '다음';
}

function startQuiz(name) {
  playerName = name.trim(); currentIndex = 0; answers = Array(questions.length).fill(null);
  currentPlayer.textContent = playerName;
  startScreen.classList.add('hidden'); resultScreen.classList.add('hidden'); quizScreen.classList.remove('hidden'); reviewSection.classList.add('hidden');
  renderQuestion(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

async function finishQuiz() {
  const correct = questions.reduce((sum, q, i) => sum + (answers[i] === q.answer ? 1 : 0), 0);
  const score = correct * 5; const accuracy = Math.round((correct / questions.length) * 100);
  nextBtn.disabled = true;
  nextBtn.textContent = '저장 중...';
  const saved = await saveScore({ name: playerName, score, correct, total: questions.length });
  $('#result-name').textContent = playerName; $('#result-score').textContent = score; $('#correct-count').textContent = correct;
  $('#wrong-count').textContent = questions.length - correct; $('#accuracy').textContent = `${accuracy}%`;
  $('.score-ring').style.setProperty('--score-deg', `${score * 3.6}deg`);
  const resultEmoji = $('#result-emoji'); const message = $('#result-message');
  if (score === 100) { resultEmoji.textContent = '🧠'; message.textContent = '고난도 일정까지 완벽합니다. 총무 확정입니다.'; }
  else if (score >= 80) { resultEmoji.textContent = '🔥'; message.textContent = '세부 메모와 동선까지 거의 정확합니다.'; }
  else if (score >= 60) { resultEmoji.textContent = '🌴'; message.textContent = '기본 일정은 충분합니다. 순서 문제만 다시 확인하세요.'; }
  else { resultEmoji.textContent = '🗺️'; message.textContent = '2탄은 어렵습니다. 해설로 세부 동선을 복습하세요.'; }
  if (!saved) message.textContent += ' 다만 공용 순위표 저장에 실패했습니다.';
  quizScreen.classList.add('hidden'); resultScreen.classList.remove('hidden'); renderReview(); await renderScores(); window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderReview() {
  reviewList.innerHTML = '';
  questions.forEach((q, i) => {
    const item = document.createElement('div'); item.className = 'review-item';
    const isCorrect = answers[i] === q.answer; const userAnswer = answers[i] === null ? '미응답' : q.options[answers[i]];
    item.innerHTML = `<div class="review-number">Q${i + 1} · ${q.day}</div><div class="review-question">${q.q}</div><div class="review-answer">내 답: <span class="${isCorrect ? 'answer-correct' : 'answer-wrong'}">${userAnswer}</span><br>정답: <span class="answer-correct">${q.options[q.answer]}</span><div class="review-explanation">${q.explanation}</div></div>`;
    reviewList.appendChild(item);
  });
}

const SUPABASE_URL = 'https://ahdzioosokzyskhxibai.supabase.co';
const SUPABASE_KEY = 'sb_publishable_uAPybrzg3LGpxLfEvNjGrQ_YiudSXrE';
const QUIZ_VERSION = 'nha-trang-quiz-2';
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
    detectSessionInUrl: false
  }
});
let cachedScores = [];

async function getScores() {
  const { data, error } = await supabaseClient
    .from('quiz_scores')
    .select('name, score, correct_count, total_questions, created_at')
    .eq('quiz_version', QUIZ_VERSION)
    .order('score', { ascending: false })
    .order('created_at', { ascending: true })
    .limit(200);

  if (error) throw error;
  cachedScores = data || [];
  return cachedScores;
}

async function saveScore(score) {
  try {
    const { error } = await supabaseClient
      .from('quiz_scores')
      .insert({
        quiz_version: QUIZ_VERSION,
        name: score.name.trim(),
        score: score.score,
        correct_count: score.correct,
        total_questions: score.total
      });

    if (error) throw error;
    return true;
  } catch (error) {
    console.error(error);
    const message = error?.message || error?.details || String(error);
    alert(`점수 저장 실패: ${message}`);
    return false;
  }
}

async function renderScores() {
  scoreTableBody.innerHTML = '<tr><td colspan="5">순위표 불러오는 중...</td></tr>';
  emptyScores.classList.add('hidden');
  try {
    const scores = await getScores();
    scoreTableBody.innerHTML = '';
    emptyScores.classList.toggle('hidden', scores.length > 0);
    scores.forEach((s, index) => {
      const row = document.createElement('tr');
      const date = new Date(s.created_at).toLocaleString('ko-KR', { year:'2-digit', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit' });
      const medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1;
      row.innerHTML = `<td><span class="rank-badge">${medal}</span></td><td>${escapeHtml(s.name)}</td><td>${s.score}점</td><td>${s.correct_count}/${s.total_questions}</td><td>${date}</td>`;
      scoreTableBody.appendChild(row);
    });
  } catch (error) {
    console.error(error);
    const message = error?.message || String(error);
    scoreTableBody.innerHTML = `<tr><td colspan="5">공용 순위표 불러오기 실패: ${escapeHtml(message)}</td></tr>`;
  }
}
function escapeHtml(str) { return String(str).replace(/[&<>'"]/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#039;','"':'&quot;'}[ch])); }
async function exportCsv() {
  let scores;
  try { scores = await getScores(); } catch { return alert('점수 기록을 불러오지 못했습니다.'); }
  if (!scores.length) return alert('저장할 기록이 없습니다.');
  const rows = [['이름','점수','정답수','총문제수','응시일시'], ...scores.map(s => [s.name, s.score, s.correct_count, s.total_questions, new Date(s.created_at).toLocaleString('ko-KR')])];
  const csv = '\uFEFF' + rows.map(row => row.map(value => `"${String(value).replace(/"/g, '""')}"`).join(',')).join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' }); const url = URL.createObjectURL(blob); const a = document.createElement('a');
  a.href = url; a.download = `나트랑_퀴즈2_공용점수_${new Date().toISOString().slice(0,10)}.csv`; a.click(); URL.revokeObjectURL(url);
}
startForm.addEventListener('submit', e => { e.preventDefault(); if (playerNameInput.value.trim()) startQuiz(playerNameInput.value); });
prevBtn.addEventListener('click', () => { if (currentIndex > 0) { currentIndex--; renderQuestion(); } });
nextBtn.addEventListener('click', () => { if (answers[currentIndex] === null) return; if (currentIndex < questions.length - 1) { currentIndex++; renderQuestion(); } else finishQuiz(); });
reviewBtn.addEventListener('click', () => { reviewSection.classList.toggle('hidden'); reviewBtn.textContent = reviewSection.classList.contains('hidden') ? '오답 확인' : '오답 닫기'; if (!reviewSection.classList.contains('hidden')) reviewSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); });
restartBtn.addEventListener('click', () => startQuiz(playerName)); exportBtn.addEventListener('click', exportCsv);
renderScores();
