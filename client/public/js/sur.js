// Updated color combinations
const colorCombinations = [
    { bg: '#000000', text: '#ffffff' }, // White on Black
    { bg: '#0D47A1', text: '#ffffff' }, // White on Navy
    { bg: '#E3F2FD', text: '#0D47A1' }, // Dark on Light Blue
    { bg: '#FFF9C4', text: '#000000' }, // Black on Light Yellow
    { bg: '#121212', text: '#e0e0e0' }, // Light Gray on Dark
    { bg: '#2E7D32', text: '#ffffff' }, // White on Dark Green
    { bg: '#CD5C5C', text: '#FFFFFF' }, // IndianRed
    { bg: '#F08080', text: '#000000' }, // LightCoral
    { bg: '#FF8C00', text: '#000000' }, // DarkOrange
    { bg: '#F0E68C', text: '#000000' }, // Khaki
    { bg: '#2E8B57', text: '#FFFFFF' }, // SeaGreen
    { bg: '#4682B4', text: '#FFFFFF' }, // SteelBlue
    { bg: '#4169E1', text: '#FFFFFF' }, // RoyalBlue
    { bg: '#BA55D3', text: '#000000' }, // MediumOrchid
    { bg: '#663399', text: '#FFFFFF' }, // RebeccaPurple
    { bg: '#BC8F8F', text: '#000000' }, // RosyBrown
    { bg: '#A0522D', text: '#FFFFFF' }, // Sienna
    { bg: '#D3D3D3', text: '#000000' }, // LightGray
    { bg: '#696969', text: '#FFFFFF' }, // DimGray
    { bg: '#6A0DAD', text: '#FFFFFF' }, // Deep Purple
    { bg: '#000080', text: '#F5F5F5' }, // Navy Blue
    { bg: '#36454F', text: '#FFFFFF' }, // Charcoal
    { bg: '#708090', text: '#FFFFFF' }, // Slate Gray
    { bg: '#FFFFF0', text: '#333333' }, // Ivory
    { bg: '#F5FFFA', text: '#2E8B57' }, // Mint Cream
    { bg: '#E6E6FA', text: '#4B0082' }, // Lavender
    { bg: '#FFDAB9', text: '#8B4513' }, // Peach Puff
    { bg: '#B0E0E6', text: '#00008B' }, // Powder Blue
    { bg: '#2F4F4F', text: '#E0FFFF' }, // Dark Slate
    { bg: '#010203', text: '#F8F8FF' }, // Rich Black
    { bg: '#191970', text: '#ADD8E6' }, // Midnight Blue
    { bg: '#556B2F', text: '#FFEBCD' }, // Dark Olive
    { bg: '#FFFF99', text: '#FF0000' }, // Canary Yellow
    { bg: '#DC143C', text: '#FFFFFF' }, // Crimson
    { bg: '#228B22', text: '#FFD700' }, // Forest Green
    { bg: '#7851A9', text: '#FFE5B4' }, // Royal Purple
    { bg: '#E2725B', text: '#3D2B1F' }, // Terracotta
    { bg: '#9DC183', text: '#2F4F4F' }, // Sage Green
    { bg: '#C2B280', text: '#654321' }, // Sandstone
    { bg: '#008080', text: '#FFE4C4' }, // Deep Teal
    { bg: '#58427C', text: '#FFD1DC' }, // Cyber Grape
    { bg: '#FF8243', text: '#000080' }, // Mango Tango
    { bg: '#A50B5E', text: '#FFD700' }, // Jazzberry Jam
    { bg: '#7FFFD4', text: '#8B0000' }, // Aquamarine
    { bg: '#005A9C', text: '#FFFFFF' }, // WCAG Blue
    { bg: '#FFC000', text: '#000000' }, // WCAG Yellow
    { bg: '#4B830D', text: '#FFFFFF' }, // WCAG Green
    { bg: '#E81123', text: '#FFFFFF' }  // WCAG Red
];

// Game data - will be loaded from localStorage or use default
let tasks = {
    love: {
        english: [
            {text: "Peacock", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Parrot", image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Sparrow", image: "https://images.unsplash.com/photo-1501820489136-04b9a5d0a6b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Pigeon", image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Eagle", image: "https://images.unsplash.com/photo-1497752531616-c3afd9760b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Owl", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Kingfisher", image: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Cuckoo - The cuckoo is a bird known for its distinctive call and brood parasitism, where it lays its eggs in the nests of other bird species.", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Crow", image: "https://images.unsplash.com/photo-1570025533375-4d01f02a80da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Duck", image: "https://images.unsplash.com/photo-1556543696-81820e9daf2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ],
        hindi: [
            {text: "मोर", image: "https://images.unsplash.com/photo-1552728089-57bdde30beb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "तोता", image: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "गौरैया", image: "https://images.unsplash.com/photo-1501820489136-04b9a5d0a6b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "कबूतर", image: "https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "गरुड़", image: "https://images.unsplash.com/photo-1497752531616-c3afd9760b11?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "उल्लू", image: "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "रामचिरैया", image: "https://images.unsplash.com/photo-1470114716159-e389f8712fda?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "कोयल - कोयल एक पक्षी है जो अपनी विशिष्ट आवाज और ब्रूड परजीविता के लिए जानी जाती है, जहां यह अपने अंडे अन्य पक्षियों के घोंसलों में देती है।", image: "https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "कौआ", image: "https://images.unsplash.com/photo-1570025533375-4d01f02a80da?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "बत्तख", image: "https://images.unsplash.com/photo-1556543696-81820e9daf2e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ]
    },
    romantic: {
        english: [
            {text: "Cow", image: "https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Dog", image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Cat", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Goat", image: "https://images.unsplash.com/photo-1548532219-94648c3a76e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Sheep", image: "https://images.unsplash.com/photo-1548532219-94648c3a76e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Horse", image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Pig", image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Rabbit", image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Donkey", image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Chicken", image: "https://images.unsplash.com/photo-1563281578-c9d5f14c6f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ],
        hindi: [
            {text: "गाय", image: "https://images.unsplash.com/photo-1535435734705-4f0f32e27c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "कुत्ता", image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "बिल्ली", image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "बकरी", image: "https://images.unsplash.com/photo-1548532219-94648c3a76e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "भेड़", image: "https://images.unsplash.com/photo-1548532219-94648c3a76e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "घोड़ा", image: "https://images.unsplash.com/photo-1504215680853-026ed2a45def?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "सूअर", image: "https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "खरगोश", image: "https://images.unsplash.com/photo-1556838803-cc94986cb631?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "गधा", image: "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "मुर्गी", image: "https://images.unsplash.com/photo-1563281578-c9d5f14c6f2c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ]
    },
    erotic: {
        english: [
            {text: "Lion", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Tiger", image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Elephant", image: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Bear", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Wolf", image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Fox", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Deer", image: "https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Monkey", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Leopard", image: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "Rhinoceros", image: "https://images.unsplash.com/photo-1581876815208-5e5d0e8b9e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ],
        hindi: [
            {text: "शेर", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "बाघ", image: "https://images.unsplash.com/photo-1559253664-ca249d4608c6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "हाथी", image: "https://images.unsplash.com/photo-1505148230895-d9a785a555fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "भालू", image: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "भेड़िया", image: "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "लोमड़ी", image: "https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "हिरण", image: "https://images.unsplash.com/photo-1553284965-e2815db2e5a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "बंदर", image: "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "तेंदुआ", image: "https://images.unsplash.com/photo-1477764250597-dffe9f601ae8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"},
            {text: "गैंडा", image: "https://images.unsplash.com/photo-1581876815208-5e5d0e8b9e5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"}
        ]
    }
};

// Admin credentials
let adminCredentials = {
    username: "admin",
    password: "password123"
};

// Game state
let currentLevel = 'love';
let currentLanguage = 'english';
let usedTasks = [];
let isAdminLoggedIn = false;
let uploadedImage = null;
let cardPairs = {}; // To track linked English-Hindi card pairs
let currentCardColors = {}; // To store colors for each card

// DOM elements
const cardsContainer = document.getElementById('cards-container');
const levelButtons = document.querySelectorAll('.level-btn');
const refreshButton = document.querySelector('.refresh-btn');
const languageToggle = document.getElementById('language-toggle');
const body = document.body;
const fullscreenOverlay = document.getElementById('fullscreen-overlay');
const fullscreenImage = document.getElementById('fullscreen-image');
const fullscreenText = document.getElementById('fullscreen-text');
const fullscreenTextContainer = document.getElementById('fullscreen-text-container');
const fullscreenLevel = document.getElementById('fullscreen-level');
const closeFullscreen = document.querySelector('.close-fullscreen');
const adminBtn = document.getElementById('admin-btn');
const loginModal = document.getElementById('login-modal');
const closeLogin = document.getElementById('close-login');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const passwordToggle = document.getElementById('password-toggle');
const adminPanel = document.getElementById('admin-panel');
const adminCloseBtn = document.getElementById('admin-close-btn');
const addCardBtn = document.getElementById('add-card-btn');
const cardsList = document.getElementById('cards-list');
const saveAdminBtn = document.getElementById('save-admin-btn');
const surpriseText = document.getElementById('surprise-text');
const imageUploadContainer = document.getElementById('image-upload-container');
const imageUploadInput = document.getElementById('card-image-upload');
const uploadedImagePreview = document.getElementById('uploaded-image-preview');
const englishTextArea = document.getElementById('card-english-text');
const hindiTextArea = document.getElementById('card-hindi-text');
const englishWordCount = document.getElementById('english-word-count');
const hindiWordCount = document.getElementById('hindi-word-count');
const notification = document.getElementById('notification');
const selectAllCards = document.getElementById('select-all-cards');
const deleteSelectedBtn = document.getElementById('delete-selected-btn');
const fullscreenLanguageToggle = document.getElementById('fullscreen-language-toggle');
const closeAppBtn = document.getElementById('close-app-btn');

// Get a random color combination
function getRandomColors() {
    return colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
}

// Apply random background to an element
function applyRandomBackground(element, textElement = null) {
    const colors = getRandomColors();
    element.style.backgroundColor = colors.bg;
    if (textElement) {
        textElement.style.color = colors.text;
    }
    return colors;
}

// Initialize the game
function initGame() {
    // Load data from localStorage if available
    loadFromLocalStorage();
    
    // Initialize card pairs
    initializeCardPairs();
    
    generateCards();
    setupEventListeners();
    renderCardsList();
}

// Load data from localStorage
function loadFromLocalStorage() {
    const savedTasks = localStorage.getItem('scratchAndWinTasks');
    const savedCredentials = localStorage.getItem('scratchAndWinAdminCredentials');
    const savedCardPairs = localStorage.getItem('scratchAndWinCardPairs');
    
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    
    if (savedCredentials) {
        adminCredentials = JSON.parse(savedCredentials);
    }
    
    if (savedCardPairs) {
        cardPairs = JSON.parse(savedCardPairs);
    }
}

// Save data to localStorage
function saveToLocalStorage() {
    localStorage.setItem('scratchAndWinTasks', JSON.stringify(tasks));
    localStorage.setItem('scratchAndWinAdminCredentials', JSON.stringify(adminCredentials));
    localStorage.setItem('scratchAndWinCardPairs', JSON.stringify(cardPairs));
}

// Initialize card pairs to link English and Hindi versions
function initializeCardPairs() {
    cardPairs = {};
    
    for (const level in tasks) {
        cardPairs[level] = {};
        
        // Pair English and Hindi cards by index (assuming they're in the same order)
        const englishCards = tasks[level].english;
        const hindiCards = tasks[level].hindi;
        
        const minLength = Math.min(englishCards.length, hindiCards.length);
        
        for (let i = 0; i < minLength; i++) {
            const englishCard = englishCards[i];
            const hindiCard = hindiCards[i];
            
            // Create a unique ID for the pair (using image if available, otherwise text)
            const pairId = englishCard.image || englishCard.text;
            
            cardPairs[level][pairId] = {
                englishIndex: i,
                hindiIndex: i
            };
        }
    }
}

// Generate cards based on current level and language
function generateCards() {
    cardsContainer.innerHTML = '';
    usedTasks = [];
    currentCardColors = {};
    
    // Get tasks for current level and language
    const levelTasks = tasks[currentLevel][currentLanguage];
    
    // If no tasks available for this level, show message
    if (!levelTasks || levelTasks.length === 0) {
        const noCardsMsg = document.createElement('div');
        noCardsMsg.className = 'no-cards-message';
        noCardsMsg.textContent = 'No cards available for this level.';
        cardsContainer.appendChild(noCardsMsg);
        return;
    }
    
    // Shuffle tasks and pick first 10 (or all if less than 10)
    const shuffledTasks = shuffleArray([...levelTasks]).slice(0, Math.min(10, levelTasks.length));
    
    // Create cards
    shuffledTasks.forEach(task => {
        createCard(task);
    });
}

// Create a single card
function createCard(task) {
    const card = document.createElement('div');
    card.className = 'card';
    
    // Generate a unique ID for this card (using image if available, otherwise text)
    const cardId = task.image || task.text;
    
    // Card inner container for flip animation
    const cardInner = document.createElement('div');
    cardInner.className = 'card-inner';
    
    // Front face (scratch layer) - Using Code A's design
    const cardFront = document.createElement('div');
    cardFront.className = 'card-front';
    
    // Add default image to card front as per Code A
    const defaultImage = document.createElement('img');
    defaultImage.src = "xyz.png"; // Your default image path
    defaultImage.alt = "Scratch to reveal";
    defaultImage.style.width = "80%";
    defaultImage.style.height = "80%";
    defaultImage.style.objectFit = "contain";
    cardFront.appendChild(defaultImage);
    
    // Back face (result)
    const cardBack = document.createElement('div');
    cardBack.className = 'card-back';
    
    const result = document.createElement('div');
    result.className = 'result';
    
    const resultContent = document.createElement('div');
    resultContent.className = 'result-content';
    
    const resultText = document.createElement('div');
    resultText.className = `result-text ${currentLevel}-text`;
    resultText.textContent = task.text;
    
    // Create image or text-only display based on whether image exists
    if (task.image) {
        const resultImage = document.createElement('img');
        resultImage.src = task.image;
        resultImage.alt = "Task image";
        resultImage.className = 'card-image';
        resultContent.appendChild(resultImage);
    }
    
    resultContent.appendChild(resultText);
    result.appendChild(resultContent);
    
    const levelIndicator = document.createElement('div');
    levelIndicator.className = `level-indicator ${currentLevel}-level`;
    levelIndicator.textContent = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
    result.appendChild(levelIndicator);
    
    // Fullscreen button - show for both image and text-only cards
    const fullscreenBtn = document.createElement('div');
    fullscreenBtn.className = 'fullscreen-btn';
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    fullscreenBtn.style.display = 'none'; // Initially hidden
    
    cardBack.appendChild(result);
    cardBack.appendChild(fullscreenBtn);
    
    cardInner.appendChild(cardFront);
    cardInner.appendChild(cardBack);
    card.appendChild(cardInner);
    
    // Add click event to reveal task
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking on the fullscreen button
        if (e.target === fullscreenBtn || fullscreenBtn.contains(e.target)) {
            return;
        }
        
        if (!this.classList.contains('revealed')) {
            this.classList.add('revealed');
            usedTasks.push(task);
            
            // Apply random background and store the colors
            const colors = applyRandomBackground(result, resultText);
            currentCardColors[cardId] = colors;
            
            // Show fullscreen button after a short delay
            setTimeout(() => {
                fullscreenBtn.style.display = 'flex';
            }, 800); // After flip animation completes
        }
    });
    
    // Add click event to fullscreen button
    fullscreenBtn.addEventListener('click', function(e) {
        e.stopPropagation(); // Prevent card click event from firing
        showFullscreen(task, cardId);
    });
    
    cardsContainer.appendChild(card);
}

// Show fullscreen view
function showFullscreen(task, cardId) {
    // Hide image initially
    fullscreenImage.style.display = 'none';
    
    if (task.image) {
        fullscreenImage.src = task.image;
        fullscreenImage.style.display = 'block';
    }
    
    // Always start with English version in fullscreen view
    fullscreenText.textContent = task.text;
    fullscreenText.className = `fullscreen-text ${currentLevel}-text`;
    fullscreenLevel.textContent = currentLevel.charAt(0).toUpperCase() + currentLevel.slice(1);
    fullscreenLevel.className = `fullscreen-level ${currentLevel}-level`;
    fullscreenOverlay.classList.add('active');
    
    // Apply the same background/color as the card
    if (currentCardColors[cardId]) {
        fullscreenTextContainer.style.backgroundColor = currentCardColors[cardId].bg;
        fullscreenText.style.color = currentCardColors[cardId].text;
    } else {
        // If no colors stored (shouldn't happen), apply random ones
        applyRandomBackground(fullscreenTextContainer, fullscreenText);
    }
    
    // Reset the toggle to English (left position)
    fullscreenLanguageToggle.checked = false;
    
    // Store the current task and card ID for language switching
    fullscreenOverlay.dataset.currentTask = JSON.stringify(task);
    fullscreenOverlay.dataset.cardId = cardId;
    
    // Prevent scrolling when fullscreen is active
    document.body.style.overflow = 'hidden';
}

// Close fullscreen view
function closeFullscreenView() {
    fullscreenOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Shuffle array function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Render cards list in admin panel
function renderCardsList() {
    cardsList.innerHTML = '';
    
    // Combine all English cards with their Hindi pairs
    const allCards = [];
    
    for (const level in tasks) {
        const englishCards = tasks[level].english;
        const hindiCards = tasks[level].hindi;
        
        for (let i = 0; i < englishCards.length; i++) {
            const englishCard = englishCards[i];
            let hindiCard = null;
            let hindiIndex = -1;
            
            // Find the matching Hindi card
            if (englishCard.image) {
                // If English card has image, find Hindi card with same image
                hindiIndex = hindiCards.findIndex(card => card.image === englishCard.image);
                if (hindiIndex !== -1) {
                    hindiCard = hindiCards[hindiIndex];
                }
            } else {
                // If no image, try to find by index (less reliable)
                if (i < hindiCards.length) {
                    hindiIndex = i;
                    hindiCard = hindiCards[i];
                }
            }
            
            allCards.push({
                level,
                englishIndex: i,
                englishText: englishCard.text,
                englishImage: englishCard.image,
                hindiIndex,
                hindiText: hindiCard ? hindiCard.text : '',
                hindiImage: hindiCard ? hindiCard.image : null
            });
        }
    }
    
    // Render each card
    allCards.forEach((card, index) => {
        const cardItem = document.createElement('div');
        cardItem.className = 'card-item';
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'card-checkbox';
        checkbox.dataset.index = index;
        
        const cardContent = document.createElement('div');
        cardContent.className = 'card-item-content';
        
        if (card.englishImage) {
            const cardImage = document.createElement('img');
            cardImage.src = card.englishImage;
            cardImage.alt = card.englishText;
            cardContent.appendChild(cardImage);
        } else {
            const noImage = document.createElement('div');
            noImage.textContent = 'Text Only';
            noImage.style.fontStyle = 'italic';
            noImage.style.color = '#888';
            noImage.style.width = '60px';
            noImage.style.height = '60px';
            noImage.style.display = 'flex';
            noImage.style.alignItems = 'center';
            noImage.style.justifyContent = 'center';
            cardContent.appendChild(noImage);
        }
        
        const cardText = document.createElement('div');
        cardText.className = 'card-item-text';
        
        const cardTitle = document.createElement('h4');
        cardTitle.textContent = card.englishText.length > 30 ? 
            card.englishText.substring(0, 30) + '...' : card.englishText;
        
        const cardLevel = document.createElement('div');
        cardLevel.className = `level-badge ${card.level}-badge`;
        cardLevel.textContent = card.level.charAt(0).toUpperCase() + card.level.slice(1);
        
        cardText.appendChild(cardTitle);
        cardText.appendChild(cardLevel);
        
        cardContent.appendChild(cardText);
        
        const cardActions = document.createElement('div');
        cardActions.className = 'card-item-actions';
        
        const previewBtn = document.createElement('button');
        previewBtn.className = 'preview-btn';
        previewBtn.innerHTML = '<i class="fas fa-expand"></i>';
        previewBtn.title = 'Preview';
        previewBtn.addEventListener('click', () => {
            // Show the English version in preview
            const cardId = card.englishImage || card.englishText;
            showFullscreen({
                text: card.englishText,
                image: card.englishImage,
                level: card.level
            }, cardId);
        });
        
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
        deleteBtn.title = 'Delete';
        deleteBtn.addEventListener('click', () => {
            deleteCardPair(card.level, card.englishIndex, card.hindiIndex);
        });
        
        cardActions.appendChild(previewBtn);
        cardActions.appendChild(deleteBtn);
        
        cardItem.appendChild(checkbox);
        cardItem.appendChild(cardContent);
        cardItem.appendChild(cardActions);
        
        cardsList.appendChild(cardItem);
    });
}

// Add a new card
function addNewCard() {
    const englishText = englishTextArea.value.trim();
    const hindiText = hindiTextArea.value.trim();
    const level = document.getElementById('card-level').value;
    
    // Validate inputs
    if (!englishText) {
        showNotification('Please enter English text', true);
        return;
    }
    
    if (!hindiText) {
        showNotification('Please enter Hindi text', true);
        return;
    }
    
    // Add to English
    if (!tasks[level].english) {
        tasks[level].english = [];
    }
    const englishCard = {
        text: englishText,
        image: uploadedImage || null
    };
    tasks[level].english.push(englishCard);
    
    // Add to Hindi
    if (!tasks[level].hindi) {
        tasks[level].hindi = [];
    }
    const hindiCard = {
        text: hindiText,
        image: uploadedImage || null
    };
    tasks[level].hindi.push(hindiCard);
    
    // Update card pairs
    const pairId = englishCard.image || englishCard.text;
    if (!cardPairs[level]) cardPairs[level] = {};
    cardPairs[level][pairId] = {
        englishIndex: tasks[level].english.length - 1,
        hindiIndex: tasks[level].hindi.length - 1
    };
    
    // Save to localStorage
    saveToLocalStorage();
    
    // Clear form
    englishTextArea.value = '';
    hindiTextArea.value = '';
    englishWordCount.textContent = '0/1000 characters';
    hindiWordCount.textContent = '0/1000 characters';
    
    // Reset image upload
    resetImageUpload();
    
    // Update cards list
    renderCardsList();
    
    // Show success notification
    showNotification('Card added successfully!');
    
    // If we're currently viewing this level, regenerate cards
    if (currentLevel === level) {
        generateCards();
    }
}

// Delete a card pair (English and Hindi)
function deleteCardPair(level, englishIndex, hindiIndex) {
    if (confirm('Are you sure you want to delete this card pair?')) {
        // Delete English card
        if (englishIndex >= 0 && englishIndex < tasks[level].english.length) {
            tasks[level].english.splice(englishIndex, 1);
        }
        
        // Delete Hindi card
        if (hindiIndex >= 0 && hindiIndex < tasks[level].hindi.length) {
            tasks[level].hindi.splice(hindiIndex, 1);
        }
        
        // Update card pairs
        initializeCardPairs();
        
        saveToLocalStorage();
        renderCardsList();
        
        // If we're currently viewing this level, regenerate cards
        if (currentLevel === level) {
            generateCards();
        }
        
        showNotification('Card pair deleted successfully!');
    }
}

// Delete selected cards
function deleteSelectedCards() {
    const checkboxes = document.querySelectorAll('.card-checkbox:checked');
    
    if (checkboxes.length === 0) {
        alert('Please select at least one card to delete');
        return;
    }
    
    if (confirm(`Are you sure you want to delete ${checkboxes.length} selected card pairs?`)) {
        // Get all English cards with their Hindi pairs
        const allCards = [];
        
        for (const level in tasks) {
            const englishCards = tasks[level].english;
            const hindiCards = tasks[level].hindi;
            
            for (let i = 0; i < englishCards.length; i++) {
                const englishCard = englishCards[i];
                let hindiCard = null;
                let hindiIndex = -1;
                
                // Find the matching Hindi card
                if (englishCard.image) {
                    // If English card has image, find Hindi card with same image
                    hindiIndex = hindiCards.findIndex(card => card.image === englishCard.image);
                    if (hindiIndex !== -1) {
                        hindiCard = hindiCards[hindiIndex];
                    }
                } else {
                    // If no image, try to find by index (less reliable)
                    if (i < hindiCards.length) {
                        hindiIndex = i;
                        hindiCard = hindiCards[i];
                    }
                }
                
                allCards.push({
                    level,
                    englishIndex: i,
                    hindiIndex
                });
            }
        }
        
        // Sort indices in descending order for safe deletion
        const cardsToDelete = Array.from(checkboxes)
            .map(checkbox => allCards[parseInt(checkbox.dataset.index)])
            .sort((a, b) => b.englishIndex - a.englishIndex);
        
        // Delete the cards
        cardsToDelete.forEach(card => {
            // Delete English card
            if (card.englishIndex >= 0 && card.englishIndex < tasks[card.level].english.length) {
                tasks[card.level].english.splice(card.englishIndex, 1);
            }
            
            // Delete Hindi card
            if (card.hindiIndex >= 0 && card.hindiIndex < tasks[card.level].hindi.length) {
                tasks[card.level].hindi.splice(card.hindiIndex, 1);
            }
        });
        
        // Update card pairs
        initializeCardPairs();
        
        saveToLocalStorage();
        renderCardsList();
        
        // Regenerate cards if we're viewing one of the affected levels
        const affectedLevels = new Set(cardsToDelete.map(card => card.level));
        if (affectedLevels.has(currentLevel)) {
            generateCards();
        }
        
        // Unselect all
        selectAllCards.checked = false;
        
        showNotification(`${checkboxes.length} card pairs deleted successfully!`);
    }
}

// Update admin credentials
function updateAdminCredentials() {
    const newUsername = document.getElementById('admin-username').value;
    const newPassword = document.getElementById('admin-password').value;
    
    if (newUsername) {
        adminCredentials.username = newUsername;
    }
    
    if (newPassword) {
        adminCredentials.password = newPassword;
    }
    
    saveToLocalStorage();
    
    // Clear form
    document.getElementById('admin-username').value = '';
    document.getElementById('admin-password').value = '';
    
    showNotification('Admin settings updated successfully!');
}

// Handle image upload
function handleImageUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    if (!file.type.match('image.*')) {
        showNotification('Please select an image file', true);
        return;
    }
    
    const reader = new FileReader();
    reader.onload = function(e) {
        uploadedImage = e.target.result;
        uploadedImagePreview.src = uploadedImage;
        uploadedImagePreview.style.display = 'block';
        imageUploadContainer.classList.add('has-image');
        
        // Hide upload icon and text
        const uploadIcon = imageUploadContainer.querySelector('.upload-icon');
        const uploadText = imageUploadContainer.querySelector('.upload-text');
        if (uploadIcon) uploadIcon.style.display = 'none';
        if (uploadText) uploadText.style.display = 'none';
    };
    reader.readAsDataURL(file);
}

// Reset image upload
function resetImageUpload() {
    uploadedImage = null;
    uploadedImagePreview.src = '';
    uploadedImagePreview.style.display = 'none';
    imageUploadContainer.classList.remove('has-image');
    
    // Show upload icon and text
    const uploadIcon = imageUploadContainer.querySelector('.upload-icon');
    const uploadText = imageUploadContainer.querySelector('.upload-text');
    if (uploadIcon) uploadIcon.style.display = 'block';
    if (uploadText) uploadText.style.display = 'block';
    
    // Reset file input
    imageUploadInput.value = '';
}

// Update word count
function updateWordCount(textarea, wordCountElement) {
    const text = textarea.value;
    wordCountElement.textContent = `${text.length}/1000 characters`;
}

// Show notification
function showNotification(message, isError = false) {
    notification.textContent = message;
    notification.className = isError ? 'notification error show' : 'notification show';
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Toggle password visibility
function togglePasswordVisibility() {
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        passwordToggle.classList.remove('fa-eye');
        passwordToggle.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password';
        passwordToggle.classList.remove('fa-eye-slash');
        passwordToggle.classList.add('fa-eye');
    }
}

// Close the app and redirect to admin mod code page
function closeApp() {
    window.location.href = "7 admin mod code.html";
}

// Set up event listeners
function setupEventListeners() {
    // Close app button
    closeAppBtn.addEventListener('click', closeApp);
    
    // Level buttons
    levelButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active button
            levelButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Change level
            currentLevel = this.dataset.level;
            
            // Change body theme
            body.className = `${currentLevel}-theme`;
            
            // Generate new cards
            generateCards();
        });
    });
    
    // Refresh button
    refreshButton.addEventListener('click', generateCards);
    
    // Language toggle
    languageToggle.addEventListener('change', function() {
        currentLanguage = this.checked ? 'hindi' : 'english';
        generateCards();
        
        // Update language toggle text
        const languageLabels = document.querySelectorAll('.language-toggle span');
        if (this.checked) {
            languageLabels[0].style.fontWeight = 'normal';
            languageLabels[1].style.fontWeight = 'bold';
        } else {
            languageLabels[0].style.fontWeight = 'bold';
            languageLabels[1].style.fontWeight = 'normal';
        }
    });
    
    // Fullscreen language toggle
    fullscreenLanguageToggle.addEventListener('change', function() {
        const task = JSON.parse(fullscreenOverlay.dataset.currentTask);
        const cardId = fullscreenOverlay.dataset.cardId;
        const level = currentLevel;
        
        if (this.checked) {
            // Find the matching Hindi card
            let hindiCard = null;
            
            if (task.image) {
                // If card has image, find Hindi card with same image
                hindiCard = tasks[level].hindi.find(card => card.image === task.image);
            } else {
                // If no image, try to find by index (less reliable)
                const englishIndex = tasks[level].english.findIndex(card => card.text === task.text);
                if (englishIndex !== -1 && englishIndex < tasks[level].hindi.length) {
                    hindiCard = tasks[level].hindi[englishIndex];
                }
            }
            
            if (hindiCard) {
                fullscreenText.textContent = hindiCard.text;
                if (hindiCard.image) {
                    fullscreenImage.src = hindiCard.image;
                    fullscreenImage.style.display = 'block';
                } else {
                    fullscreenImage.style.display = 'none';
                }
                
                // Maintain the same background/color as the card
                if (currentCardColors[cardId]) {
                    fullscreenTextContainer.style.backgroundColor = currentCardColors[cardId].bg;
                    fullscreenText.style.color = currentCardColors[cardId].text;
                }
            }
        } else {
            // Show English version
            fullscreenText.textContent = task.text;
            if (task.image) {
                fullscreenImage.src = task.image;
                fullscreenImage.style.display = 'block';
            } else {
                fullscreenImage.style.display = 'none';
            }
            
            // Maintain the same background/color as the card
            if (currentCardColors[cardId]) {
                fullscreenTextContainer.style.backgroundColor = currentCardColors[cardId].bg;
                fullscreenText.style.color = currentCardColors[cardId].text;
            }
        }
    });
    
    // Close fullscreen button
    closeFullscreen.addEventListener('click', closeFullscreenView);
    
    // Close fullscreen when clicking on overlay (but not content)
    fullscreenOverlay.addEventListener('click', function(e) {
        if (e.target === this) {
            closeFullscreenView();
        }
    });
    
    // Close fullscreen with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && fullscreenOverlay.classList.contains('active')) {
            closeFullscreenView();
        }
    });
    
    // Admin button click
    adminBtn.addEventListener('click', function() {
        if (isAdminLoggedIn) {
            adminPanel.classList.add('active');
        } else {
            loginModal.classList.add('active');
        }
    });
    
    // Close login modal
    closeLogin.addEventListener('click', function() {
        loginModal.classList.remove('active');
    });
    
    // Login button click
    loginBtn.addEventListener('click', function() {
        const username = usernameInput.value;
        const password = passwordInput.value;
        
        if (username === adminCredentials.username && password === adminCredentials.password) {
            isAdminLoggedIn = true;
            loginModal.classList.remove('active');
            adminPanel.classList.add('active');
            usernameInput.value = '';
            passwordInput.value = '';
        } else {
            showNotification('Invalid username or password', true);
        }
    });
    
    // Password toggle
    passwordToggle.addEventListener('click', togglePasswordVisibility);
    
    // Close admin panel
    adminCloseBtn.addEventListener('click', function() {
        adminPanel.classList.remove('active');
    });
    
    // Add card button
    addCardBtn.addEventListener('click', addNewCard);
    
    // Save admin settings
    saveAdminBtn.addEventListener('click', updateAdminCredentials);
    
    // Image upload
    imageUploadInput.addEventListener('change', handleImageUpload);
    
    // Word count updates
    englishTextArea.addEventListener('input', () => {
        updateWordCount(englishTextArea, englishWordCount);
    });
    
    hindiTextArea.addEventListener('input', () => {
        updateWordCount(hindiTextArea, hindiWordCount);
    });
    
    // Select all cards
    selectAllCards.addEventListener('change', function() {
        const checkboxes = document.querySelectorAll('.card-checkbox');
        checkboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
    });
    
    // Delete selected cards
    deleteSelectedBtn.addEventListener('click', deleteSelectedCards);
}

// Initialize the game when DOM is loaded
document.addEventListener('DOMContentLoaded', initGame);