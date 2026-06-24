// State
let currentMode = 'en'; // 'en' = Learning English, 'zh' = Learning Chinese
let currentLevelIndex = -1;
let currentItemIndex = 0;
let isQuizMode = false;
let quizQuestions = [];
let currentQuizIndex = 0;
let currentDialogueIndex = -1;

// DOM Elements
const modeToggle = document.getElementById('mode-toggle');
const levelsView = document.getElementById('level-selector');
const learningView = document.getElementById('learning-view');
const translatorView = document.getElementById('translator-view');
const levelsGrid = document.getElementById('levels-grid');
const flashcard = document.getElementById('flashcard');
const currentLevelTitle = document.getElementById('current-level-title');

// Nav Elements
const navLearn = document.getElementById('nav-learn');
const navTranslate = document.getElementById('nav-translate');
const navDialogues = document.getElementById('nav-dialogues');

// Card Containers
const flashcardContainer = document.getElementById('flashcard-container');
const quizContainer = document.getElementById('quiz-container');
const cardControls = document.getElementById('card-controls');

// Quiz Elements
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');

// Buttons
const backBtn = document.getElementById('back-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const playEnBtn = document.getElementById('play-en-btn');
const playZhBtn = document.getElementById('play-zh-btn');

// Dialogue Elements
const dialoguesSelector = document.getElementById('dialogues-selector');
const dialogueChatView = document.getElementById('dialogue-chat-view');
const dialoguesGrid = document.getElementById('dialogues-grid');
const currentDialogueTitle = document.getElementById('current-dialogue-title');
const chatContainer = document.getElementById('chat-container');
const backDialogueBtn = document.getElementById('back-dialogue-btn');

// Translator Elements
const transInput = document.getElementById('trans-input');
const transOutput = document.getElementById('trans-output');
const startMicBtn = document.getElementById('start-mic-btn');
const micStatus = document.getElementById('mic-status');
const translateBtn = document.getElementById('translate-btn');
const playTransBtn = document.getElementById('play-trans-btn');

// Speech Recognition instance
let recognition = null;

// Initialize
function init() {
    renderLevels();
    renderDialogues();
    setupEventListeners();
    setupSpeechRecognition();
    
    // Set initial mode
    modeToggle.value = currentMode;
}

function setupEventListeners() {
    modeToggle.addEventListener('change', (e) => {
        currentMode = e.target.value;
        if (currentLevelIndex !== -1) {
            renderCard();
        }
        if (currentDialogueIndex !== -1) {
            startDialogue(currentDialogueIndex); // Re-render chat based on mode
        }
    });

    // Navigation
    navLearn.addEventListener('click', () => switchTab('learn'));
    navTranslate.addEventListener('click', () => switchTab('translate'));
    navDialogues.addEventListener('click', () => switchTab('dialogues'));

    backBtn.addEventListener('click', showLevels);
    backDialogueBtn.addEventListener('click', showDialogues);
    
    prevBtn.addEventListener('click', () => {
        if (currentItemIndex > 0) {
            currentItemIndex--;
            renderCard();
        }
    });

    nextBtn.addEventListener('click', () => {
        const items = curriculum[currentLevelIndex].items;
        if (currentItemIndex < items.length - 1) {
            currentItemIndex++;
            renderCard();
        } else if (currentItemIndex === items.length - 1 && !isQuizMode) {
            // End of flashcards, start quiz
            startQuiz();
        }
    });

    playEnBtn.addEventListener('click', () => {
        if (currentLevelIndex === -1) return;
        const item = curriculum[currentLevelIndex].items[currentItemIndex];
        speakText(item.english, 'en-US');
    });

    playZhBtn.addEventListener('click', () => {
        if (currentLevelIndex === -1) return;
        const item = curriculum[currentLevelIndex].items[currentItemIndex];
        speakText(item.chinese, 'zh-CN');
    });

    // Translator
    startMicBtn.addEventListener('click', toggleMic);
    translateBtn.addEventListener('click', performTranslation);
    playTransBtn.addEventListener('click', playTranslationAudio);
}

function switchTab(tab) {
    navLearn.classList.remove('active');
    navTranslate.classList.remove('active');
    navDialogues.classList.remove('active');

    levelsView.classList.add('hidden');
    learningView.classList.add('hidden');
    translatorView.classList.add('hidden');
    dialoguesSelector.classList.add('hidden');
    dialogueChatView.classList.add('hidden');

    if (tab === 'learn') {
        navLearn.classList.add('active');
        if (currentLevelIndex === -1) {
            levelsView.classList.remove('hidden');
        } else {
            learningView.classList.remove('hidden');
        }
    } else if (tab === 'translate') {
        navTranslate.classList.add('active');
        translatorView.classList.remove('hidden');
    } else if (tab === 'dialogues') {
        navDialogues.classList.add('active');
        if (currentDialogueIndex === -1) {
            dialoguesSelector.classList.remove('hidden');
        } else {
            dialogueChatView.classList.remove('hidden');
        }
    }
}

// ---- LEARNING SYSTEM ----
function renderLevels() {
    levelsGrid.innerHTML = '';
    curriculum.forEach((level, index) => {
        const card = document.createElement('div');
        card.className = 'level-card';
        card.innerHTML = `
            <h3>${level.title}</h3>
            <p>${level.description}</p>
        `;
        card.addEventListener('click', () => startLevel(index));
        levelsGrid.appendChild(card);
    });
}

function showLevels() {
    currentLevelIndex = -1;
    isQuizMode = false;
    flashcardContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    cardControls.classList.remove('hidden');
    
    levelsView.classList.remove('hidden');
    learningView.classList.add('hidden');
}

function startLevel(index) {
    currentLevelIndex = index;
    currentItemIndex = 0;
    isQuizMode = false;
    currentLevelTitle.textContent = curriculum[index].title;
    
    levelsView.classList.add('hidden');
    learningView.classList.remove('hidden');
    
    flashcardContainer.classList.remove('hidden');
    quizContainer.classList.add('hidden');
    cardControls.classList.remove('hidden');
    
    renderCard();
}

function renderCard() {
    const item = curriculum[currentLevelIndex].items[currentItemIndex];
    
    // Update button states
    prevBtn.disabled = currentItemIndex === 0;
    
    if (currentItemIndex === curriculum[currentLevelIndex].items.length - 1) {
        nextBtn.textContent = "Start Quiz 📝";
    } else {
        nextBtn.textContent = "Next";
    }

    // Animate card transition
    flashcard.style.transform = 'scale(0.9) translateY(20px)';
    flashcard.style.opacity = '0';
    
    setTimeout(() => {
        const imgUrl = `https://loremflickr.com/400/300/${item.imageKeyword || item.english.split(' ')[0]}`;
        
        if (currentMode === 'en') {
            // Learning English (Target audience: Chinese learners)
            flashcard.innerHTML = `
                <img src="${imgUrl}" alt="${item.english}" class="card-image" onerror="this.style.display='none'"/>
                <div class="visual">${item.emoji || ''}</div>
                <div class="main-word">${item.english}</div>
                <div class="breakdown">[ ${item.breakdown} ]</div>
                <div class="translation">${item.chinese}</div>
                <div class="details">
                    <p>💡 ${item.detailsZh}</p>
                    ${item.exampleEn ? `<p class="example"><em>例句 (Example): ${item.exampleEn}</em><br/><span style="opacity: 0.8">(${item.exampleZh})</span></p>` : ''}
                </div>
            `;
        } else {
            // Learning Chinese (Target audience: English learners)
            flashcard.innerHTML = `
                <img src="${imgUrl}" alt="${item.english}" class="card-image" onerror="this.style.display='none'"/>
                <div class="visual">${item.emoji || ''}</div>
                <div class="main-word">${item.chinese}</div>
                <div class="breakdown">${item.pinyin}</div>
                <div class="translation">${item.english}</div>
                <div class="details">
                    <p>💡 ${item.detailsEn}</p>
                    ${item.exampleZh ? `<p class="example"><em>Example: ${item.exampleZh}</em><br/><span style="opacity: 0.8">(${item.exampleEn})</span></p>` : ''}
                </div>
            `;
        }
        flashcard.style.transform = 'scale(1) translateY(0)';
        flashcard.style.opacity = '1';
    }, 200);
}

// ---- DIALOGUES SYSTEM ----
function renderDialogues() {
    dialoguesGrid.innerHTML = '';
    dialogues.forEach((dialogue, index) => {
        const card = document.createElement('div');
        card.className = 'level-card';
        card.innerHTML = `
            <div style="font-size: 2.5rem; margin-bottom: 0.5rem">${dialogue.emoji}</div>
            <h3>${dialogue.title}</h3>
            <p>${dialogue.description}</p>
        `;
        card.addEventListener('click', () => startDialogue(index));
        dialoguesGrid.appendChild(card);
    });
}

function showDialogues() {
    currentDialogueIndex = -1;
    dialogueChatView.classList.add('hidden');
    dialoguesSelector.classList.remove('hidden');
}

function startDialogue(index) {
    currentDialogueIndex = index;
    const dialogue = dialogues[index];
    currentDialogueTitle.textContent = dialogue.title;
    
    dialoguesSelector.classList.add('hidden');
    dialogueChatView.classList.remove('hidden');
    
    chatContainer.innerHTML = '';
    
    // We alternate speakers for visual effect (left vs right)
    const speakers = [...new Set(dialogue.lines.map(l => l.speaker))];
    
    dialogue.lines.forEach((line) => {
        const bubble = document.createElement('div');
        const isSpeakerA = line.speaker === speakers[0];
        bubble.className = `chat-bubble ${isSpeakerA ? 'left' : 'right'}`;
        
        let primaryText, secondaryText, pinyinText;
        if (currentMode === 'en') {
            primaryText = line.english;
            secondaryText = line.chinese;
            pinyinText = '';
        } else {
            primaryText = line.chinese;
            secondaryText = line.english;
            pinyinText = line.pinyin;
        }

        bubble.innerHTML = `
            <div class="speaker-name">${line.speaker}</div>
            <div class="chat-primary">${primaryText}</div>
            ${pinyinText ? `<div class="chat-pinyin">${pinyinText}</div>` : ''}
            <div class="chat-secondary">${secondaryText}</div>
            <div class="chat-play-hint">🔊</div>
        `;

        bubble.addEventListener('click', () => {
            // Play both lines, target language first
            if (currentMode === 'en') {
                speakText(line.english, 'en-US');
            } else {
                speakText(line.chinese, 'zh-CN');
            }
        });

        chatContainer.appendChild(bubble);
    });
}

// ---- QUIZ SYSTEM ----
function startQuiz() {
    isQuizMode = true;
    currentQuizIndex = 0;
    flashcardContainer.classList.add('hidden');
    cardControls.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    
    // Generate questions for this level
    const items = curriculum[currentLevelIndex].items;
    quizQuestions = items.map(item => {
        // Create 3 random wrong options from anywhere in curriculum
        const allItems = curriculum.flatMap(l => l.items);
        const wrongItems = allItems.filter(i => i.english !== item.english).sort(() => 0.5 - Math.random()).slice(0, 3);
        
        const options = [item, ...wrongItems].sort(() => 0.5 - Math.random());
        
        return {
            correct: item,
            options: options
        };
    });
    
    renderQuizQuestion();
}

function renderQuizQuestion() {
    if (currentQuizIndex >= quizQuestions.length) {
        // Quiz Complete
        quizQuestion.textContent = "Level Complete! 🎉";
        quizOptions.innerHTML = `<button class="btn primary" onclick="showLevels()">Back to Levels</button>`;
        return;
    }
    
    const q = quizQuestions[currentQuizIndex];
    
    if (currentMode === 'en') {
        quizQuestion.textContent = `What is the translation for "${q.correct.chinese}"?`;
    } else {
        quizQuestion.textContent = `What is the translation for "${q.correct.english}"?`;
    }
    
    quizOptions.innerHTML = '';
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = currentMode === 'en' ? opt.english : opt.chinese;
        
        btn.addEventListener('click', () => {
            // Check answer
            if (opt.english === q.correct.english) {
                btn.classList.add('correct');
                setTimeout(() => {
                    currentQuizIndex++;
                    renderQuizQuestion();
                }, 1000);
            } else {
                btn.classList.add('wrong');
            }
        });
        
        quizOptions.appendChild(btn);
    });
}

let voices = [];

function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
        return;
    }
    voices = window.speechSynthesis.getVoices();
}

if ('speechSynthesis' in window) {
    populateVoiceList();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoiceList;
    }
}

function speakText(text, lang) {
    const isChinese = lang.startsWith('zh');

    if ('speechSynthesis' in window) {
        // Cancel any currently playing speech to avoid overlapping
        window.speechSynthesis.cancel();
        
        // Some browsers fail to load voices immediately, try fetching again if empty
        if (voices.length === 0) {
            voices = window.speechSynthesis.getVoices();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = lang;
        utterance.rate = 0.85;
        
        let nativeVoiceFound = false;

        // Find an explicit voice for the target language
        if (voices.length > 0) {
            // Try exact language match first (e.g., 'zh-CN' or 'en-US')
            let voice = voices.find(v => v.lang === lang || v.lang.replace('_', '-') === lang);
            
            // If no exact match, fallback to the language prefix (e.g., 'zh' or 'en')
            if (!voice) {
                const targetLangPrefix = lang.split('-')[0];
                voice = voices.find(v => v.lang.startsWith(targetLangPrefix) || v.lang.replace('_', '-').startsWith(targetLangPrefix) || v.name.toLowerCase().includes(targetLangPrefix === 'zh' ? 'chinese' : 'english'));
            }
            
            if (voice) {
                utterance.voice = voice;
                nativeVoiceFound = true;
            }
        }

        // If it is Chinese text but the user has NO Chinese voice installed locally,
        // it will try to read it in English and play silence. We catch this and use a fallback audio stream.
        if (isChinese && !nativeVoiceFound) {
            console.log("No native Chinese voice found. Using online fallback.");
            const fallbackUrl = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(text)}&tl=zh-CN&client=tw-ob`;
            const audio = new Audio(fallbackUrl);
            audio.play().catch(e => {
                // If network blocks it, try the native broken way just in case
                setTimeout(() => window.speechSynthesis.speak(utterance), 50);
            });
            return; // Exit early since we used the Audio object
        }

        // Small timeout hack: Some browsers (like Chrome/Safari) fail to play audio 
        // if speak() is called instantly after cancel(). A 50ms delay fixes this.
        setTimeout(() => {
            window.speechSynthesis.speak(utterance);
        }, 50);
    } else {
        alert("Sorry, your browser doesn't support text to speech.");
    }
}

// ---- TRANSLATOR SYSTEM ----
function setupSpeechRecognition() {
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (window.SpeechRecognition) {
        recognition = new window.SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        recognition.onstart = function() {
            micStatus.textContent = "Listening...";
            startMicBtn.classList.add('recording');
            startMicBtn.textContent = "🛑 Stop Listening";
        };
        
        recognition.onresult = function(event) {
            const transcript = event.results[0][0].transcript;
            transInput.value = transcript;
            performTranslation();
        };
        
        recognition.onerror = function(event) {
            micStatus.textContent = "Error: " + event.error;
            resetMicBtn();
        };
        
        recognition.onend = function() {
            micStatus.textContent = "Ready";
            resetMicBtn();
        };
    } else {
        startMicBtn.disabled = true;
        micStatus.textContent = "Speech Recognition not supported in this browser.";
    }
}

function toggleMic() {
    if (!recognition) return;
    
    if (startMicBtn.classList.contains('recording')) {
        recognition.stop();
    } else {
        // Set recognition language based on mode
        recognition.lang = currentMode === 'en' ? 'en-US' : 'zh-CN';
        recognition.start();
    }
}

function resetMicBtn() {
    startMicBtn.classList.remove('recording');
    startMicBtn.textContent = "🎤 Start Listening";
}

async function performTranslation() {
    const text = transInput.value.trim();
    if (!text) return;
    
    transOutput.textContent = "Translating...";
    
    // Free translation API (MyMemory)
    // langpair format: source|target
    const langpair = currentMode === 'en' ? 'en|zh-CN' : 'zh-CN|en';
    
    try {
        const response = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${langpair}`);
        const data = await response.json();
        
        if (data && data.responseData && data.responseData.translatedText) {
            transOutput.textContent = data.responseData.translatedText;
        } else {
            transOutput.textContent = "Translation failed.";
        }
    } catch (error) {
        transOutput.textContent = "Error connecting to translation service.";
        console.error(error);
    }
}

function playTranslationAudio() {
    const text = transOutput.textContent;
    if (!text || text.includes("Translating...") || text.includes("Error")) return;
    
    // The output is the opposite language of the input
    const lang = currentMode === 'en' ? 'zh-CN' : 'en-US';
    speakText(text, lang);
}

// Start app
document.addEventListener('DOMContentLoaded', init);
