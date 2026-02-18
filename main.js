'use strict';

const defaultWords = [
  { "word": "const", "japanese": "定数" },
  { "word": "let", "japanese": "変数（ブロックスコープ）" },
  { "word": "function", "japanese": "関数" },
  { "word": "return", "japanese": "戻り値、返す" },
  { "word": "if", "japanese": "もし〜なら" },
  { "word": "else", "japanese": "さもなければ" },
  { "word": "switch", "japanese": "切り替え" },
  { "word": "case", "japanese": "場合" },
  { "word": "break", "japanese": "中断、脱出" },
  { "word": "for", "japanese": "繰り返す（回数指定）" },
  { "word": "while", "japanese": "〜の間繰り返す" },
  { "word": "do", "japanese": "実行する" },
  { "word": "continue", "japanese": "次のループへ" },
  { "word": "try", "japanese": "試行する" },
  { "word": "catch", "japanese": "例外を捕捉する" },
  { "word": "finally", "japanese": "最終処理" },
  { "word": "throw", "japanese": "例外を投げる" },
  { "word": "async", "japanese": "非同期" },
  { "word": "await", "japanese": "待機" },
  { "word": "promise", "japanese": "プロミス（非同期処理の状態）" },
  { "word": "fetch", "japanese": "データ取得" },
  { "word": "json", "japanese": "ジェイソン（データ形式）" },
  { "word": "console", "japanese": "コンソール" },
  { "word": "log", "japanese": "ログ出力" },
  { "word": "error", "japanese": "エラー" },
  { "word": "warn", "japanese": "警告" },
  { "word": "debug", "japanese": "デバッグ" },
  { "word": "document", "japanese": "ドキュメント（DOM）" },
  { "word": "window", "japanese": "ウィンドウ" },
  { "word": "getElementById", "japanese": "IDで要素を取得" },
  { "word": "querySelector", "japanese": "セレクタで要素を取得" },
  { "word": "querySelectorAll", "japanese": "全ての要素を取得" },
  { "word": "createElement", "japanese": "要素を作成" },
  { "word": "appendChild", "japanese": "子要素を追加" },
  { "word": "removeChild", "japanese": "子要素を削除" },
  { "word": "innerHTML", "japanese": "内部HTML" },
  { "word": "textContent", "japanese": "テキスト内容" },
  { "word": "style", "japanese": "スタイル" },
  { "word": "classList", "japanese": "クラスリスト" },
  { "word": "add", "japanese": "追加" },
  { "word": "remove", "japanese": "削除" },
  { "word": "toggle", "japanese": "切り替え" },
  { "word": "addEventListener", "japanese": "イベントを追加" },
  { "word": "removeEventListener", "japanese": "イベントを削除" },
  { "word": "preventDefault", "japanese": "既定動作の防止" },
  { "word": "stopPropagation", "japanese": "イベント伝播の停止" },
  { "word": "event", "japanese": "イベント" },
  { "word": "target", "japanese": "ターゲット（対象）" },
  { "word": "value", "japanese": "値" },
  { "word": "type", "japanese": "型、タイプ" },
  { "word": "string", "japanese": "文字列" },
  { "word": "number", "japanese": "数値" },
  { "word": "boolean", "japanese": "真偽値" },
  { "word": "array", "japanese": "配列" },
  { "word": "object", "japanese": "オブジェクト" },
  { "word": "null", "japanese": "ヌル（空）" },
  { "word": "undefined", "japanese": "未定義" },
  { "word": "map", "japanese": "マップ（配列操作）" },
  { "word": "filter", "japanese": "フィルタ（抽出）" },
  { "word": "reduce", "japanese": "畳み込み" },
  { "word": "forEach", "japanese": "各要素に対して実行" },
  { "word": "push", "japanese": "末尾に追加" },
  { "word": "pop", "japanese": "末尾を削除" },
  { "word": "shift", "japanese": "先頭を削除" },
  { "word": "unshift", "japanese": "先頭に追加" },
  { "word": "splice", "japanese": "切り継ぎ" },
  { "word": "slice", "japanese": "切り取り" },
  { "word": "join", "japanese": "結合" },
  { "word": "split", "japanese": "分割" },
  { "word": "sort", "japanese": "並べ替え" },
  { "word": "reverse", "japanese": "反転" },
  { "word": "indexOf", "japanese": "位置を探す" },
  { "word": "includes", "japanese": "含むかどうか" },
  { "word": "find", "japanese": "見つける" },
  { "word": "length", "japanese": "長さ" },
  { "word": "Math", "japanese": "数学オブジェクト" },
  { "word": "random", "japanese": "乱数" },
  { "word": "floor", "japanese": "切り捨て" },
  { "word": "ceil", "japanese": "切り上げ" },
  { "word": "round", "japanese": "四捨五入" },
  { "word": "abs", "japanese": "絶対値" },
  { "word": "Date", "japanese": "日付オブジェクト" },
  { "word": "now", "japanese": "現在時刻" },
  { "word": "getTime", "japanese": "タイムスタンプ取得" },
  { "word": "setTimeout", "japanese": "タイマー（一度）" },
  { "word": "setInterval", "japanese": "タイマー（繰り返し）" },
  { "word": "clearTimeout", "japanese": "タイマー停止" },
  { "word": "clearInterval", "japanese": "繰り返し停止" },
  { "word": "localStorage", "japanese": "ローカルストレージ" },
  { "word": "sessionStorage", "japanese": "セッションストレージ" },
  { "word": "getItem", "japanese": "項目を取得" },
  { "word": "setItem", "japanese": "項目を設定" },
  { "word": "callback", "japanese": "コールバック" },
  { "word": "closure", "japanese": "クロージャ" },
  { "word": "class", "japanese": "クラス" },
  { "word": "constructor", "japanese": "コンストラクタ" },
  { "word": "extends", "japanese": "継承" },
  { "word": "super", "japanese": "親クラスの参照" },
  { "word": "this", "japanese": "自インスタンスの参照" },
  { "word": "import", "japanese": "インポート" },
  { "word": "export", "japanese": "エクスポート" }
];

{
  let DATA_URL = 'words.json';

  let wordList = [];
  let currentWordObj;
  let loc = 0;
  let wordsTyped = 0;
  const MAX_WORDS = 20;
  let startTime;
  let isPlaying = false;

  const target = document.getElementById('target');
  const japanese = document.getElementById('japanese');
  const result = document.getElementById('result');
  const startButton = document.getElementById('start-button');
  const body = document.body;

  // 新規追加要素
  const gradeBtns = document.querySelectorAll('.grade-btn');
  const customUrlInput = document.getElementById('custom-url');
  const loadCustomBtn = document.getElementById('load-custom');

  // 単語データのバリデーション
  function validateData(data) {
    if (!Array.isArray(data)) return false;
    return data.every(item =>
      typeof item.word === 'string' &&
      typeof item.japanese === 'string' &&
      item.word.length > 0
    );
  }

  // 単語データの取得
  async function loadWords(url) {
    try {
      // const response = await fetch(url);
      // if (!response.ok) throw new Error('ネットワークエラーが発生しました');

      // const data = await response.json();
      const data = defaultWords;

      if (!validateData(data)) {
        throw new Error('JSONの形式が正しくありません (wordとjapaneseの配列が必要です)');
      }

      wordList = data;
      DATA_URL = url;
      japanese.classList.remove('error-text');
      japanese.textContent = 'データ読み込み完了！';
      target.textContent = 'Ready?';

      // ボタンの選択状態を更新
      gradeBtns.forEach(btn => {
        if (btn.dataset.url === url) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });

    } catch (e) {
      console.error('Failed to load words:', e);
      japanese.classList.add('error-text');
      japanese.textContent = '読み込めませんでした';
      target.textContent = 'ERROR';
      wordList = [];
    }
  }

  function setWord() {
    if (wordList.length === 0) return;

    // 20問終わったら終了
    if (wordsTyped >= MAX_WORDS || wordsTyped >= wordList.length) {
      finishGame();
      return;
    }

    currentWordObj = wordList[wordsTyped];

    target.textContent = currentWordObj.word;
    japanese.textContent = `[${wordsTyped + 1}/${Math.min(MAX_WORDS, wordList.length)}] ${currentWordObj.japanese}`;
    loc = 0;
    updateTargetDisplay();
  }

  function updateTargetDisplay() {
    const word = currentWordObj.word;
    target.innerHTML = '';
    for (let i = 0; i < word.length; i++) {
      const span = document.createElement('span');
      span.textContent = word[i];
      if (i < loc) {
        span.className = 'typed';
      }
      target.appendChild(span);
    }
  }

  function startGame() {
    if (isPlaying) return;

    if (wordList.length === 0) {
      loadWords(DATA_URL).then(() => {
        if (wordList.length > 0) start();
      });
    } else {
      start();
    }
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function start() {
    isPlaying = true;
    loc = 0;
    wordsTyped = 0;
    startTime = Date.now();
    result.textContent = '';
    body.classList.add('playing');
    body.classList.remove('finished');
    startButton.style.visibility = 'hidden';


    // 単語リストをシャッフル
    shuffle(wordList);

    // 結果リストをクリア
    const listContainer = document.getElementById('result-list');
    if (listContainer) {
      listContainer.remove();
    }

    setWord();
  }

  // イベントリスナー
  startButton.addEventListener('click', startGame);

  // 難易度切り替え
  gradeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (isPlaying) return;
      loadWords(btn.dataset.url);
    });
  });

  // カスタムURL読み込み
  loadCustomBtn.addEventListener('click', () => {
    if (isPlaying) return;
    const url = customUrlInput.value.trim();
    if (url) {
      loadWords(url);
    } else {
      japanese.textContent = 'URLを入力してください';
    }
  });

  window.addEventListener('keydown', e => {
    if (!isPlaying) return;

    if (e.key === currentWordObj.word[loc]) {
      loc++;
      updateTargetDisplay();

      if (loc === currentWordObj.word.length) {
        // 正解した瞬間に読み上げ
        speakWord(currentWordObj.word);

        wordsTyped++;
        setWord();
      }
    }
  });

  // 音声読み上げ
  function speakWord(text) {
    if ('speechSynthesis' in window) {
      // 既存の読み上げをキャンセルして即座に次の単語を読み上げる
      speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'en-US';
      utterance.rate = 1.0; // 読み上げ速度
      speechSynthesis.speak(utterance);
    }
  }

  function finishGame() {
    isPlaying = false;
    const elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
    result.textContent = `Finished! Time: ${elapsedTime}s`;
    body.classList.remove('playing');
    body.classList.add('finished');
    startButton.textContent = 'RETRY';
    startButton.style.visibility = 'visible';

    // 終了後に単語一覧を表示
    showWordList();
  }

  function showWordList() {
    const listContainer = document.createElement('div');
    listContainer.id = 'result-list';

    const ul = document.createElement('ul');
    ul.className = 'word-result-list';

    // 出題された単語のみを表示
    const playedWords = wordList.slice(0, wordsTyped);
    playedWords.forEach(obj => {
      const li = document.createElement('li');
      li.textContent = `${obj.word} : ${obj.japanese}`;
      ul.appendChild(li);
    });

    listContainer.appendChild(ul);
    document.getElementById('game-container').appendChild(listContainer);
  }

  // 初期読み込み
  loadWords(DATA_URL);
}