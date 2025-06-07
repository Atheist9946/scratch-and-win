// Color combinations - now using gradients
const gradientSchemes = [
    { front: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', back: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', name: "Purple to Pink" },
    { front: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)', back: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)', name: "Green to Sunset" },
    { front: 'linear-gradient(135deg, #a6c0fe 0%, #f68084 100%)', back: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', name: "Soft Blue to Pink" },
    { front: 'linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)', back: 'linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)', name: "Teal to Lavender" },
    { front: 'linear-gradient(135deg, #c471f5 0%, #fa71cd 100%)', back: 'linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)', name: "Violet to Rose" },
    { front: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', back: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)', name: "Peach to Coral" },
    { front: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)', back: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)', name: "Blue to Aqua" },
    { front: 'linear-gradient(135deg, #ffc3a0 0%, #ffafbd 100%)', back: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', name: "Sunrise to Sunset" },
    { front: 'linear-gradient(135deg, #ff758c 0%, #ff7eb3 100%)', back: 'linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)', name: "Red to Purple" },
    { front: 'linear-gradient(135deg, #ff8177 0%, #ff867a 100%)', back: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)', name: "Warm Flames" }
];

// Community cards data
let cards = [];
let currentCardIndex = 0;
let likedCardsFront = JSON.parse(localStorage.getItem('likedCardsFront')) || [];
let likedCardsBack = JSON.parse(localStorage.getItem('likedCardsBack')) || [];
let savedCards = JSON.parse(localStorage.getItem('savedCardsP')) || [];
let isFlipping = false;
let currentUser = "@user" + Math.floor(Math.random() * 1000);
let currentCardForComments = null;
let currentSideForComments = null; // 'front' or 'back'

// DOM elements
const cardsOverlay = document.getElementById('cardsOverlay');
const card = document.getElementById('card');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const cardContentFront = document.getElementById('cardContentFront');
const cardContentBack = document.getElementById('cardContentBack');
const cardAuthorFront = document.getElementById('cardAuthorFront');
const cardAuthorBack = document.getElementById('cardAuthorBack');
const cardDateFront = document.getElementById('cardDateFront');
const cardDateBack = document.getElementById('cardDateBack');
const userNicknameFront = document.getElementById('userNicknameFront');
const userNicknameBack = document.getElementById('userNicknameBack');
const likeBtnFront = document.getElementById('likeBtnFront');
const likeBtnBack = document.getElementById('likeBtnBack');
const saveBtnFront = document.getElementById('saveBtnFront');
const saveBtnBack = document.getElementById('saveBtnBack');
const commentBtnFront = document.getElementById('commentBtnFront');
const commentBtnBack = document.getElementById('commentBtnBack');
const commentsCountFront = document.getElementById('commentsCountFront');
const commentsCountBack = document.getElementById('commentsCountBack');
const likeCountFront = document.getElementById('likeCountFront');
const likeCountBack = document.getElementById('likeCountBack');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const closeBtn = document.getElementById('closeBtn');
const swipeHint = document.getElementById('swipeHint');
const flipSound = document.getElementById('flipSound');
const commentsSection = document.getElementById('commentsSection');
const commentsContainer = document.getElementById('commentsContainer');
const commentInput = document.getElementById('commentInput');
const commentSubmit = document.getElementById('commentSubmit');
const closeCommentsBtn = document.getElementById('closeCommentsBtn');
const commentCardPreviewContent = document.getElementById('commentCardPreviewContent');
const commentCardDate = document.getElementById('commentCardDate');

// Initialize
function init() {
    loadCardsFromLocalStorage();
    
    // Event listeners
    card.addEventListener('click', handleCardClick);
    likeBtnFront.addEventListener('click', () => handleLikeClick('front'));
    likeBtnBack.addEventListener('click', () => handleLikeClick('back'));
    saveBtnFront.addEventListener('click', handleSaveClick);
    saveBtnBack.addEventListener('click', handleSaveClick);
    commentBtnFront.addEventListener('click', () => handleCommentClick('front'));
    commentBtnBack.addEventListener('click', () => handleCommentClick('back'));
    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);
    closeBtn.addEventListener('click', hideCards);
    closeCommentsBtn.addEventListener('click', hideComments);
    commentSubmit.addEventListener('click', addComment);
    commentInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') addComment();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyDown);
    
    cardsOverlay.addEventListener('click', hideSwipeHint);
}

function loadCardsFromLocalStorage() {
    const codeLCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    
    if (codeLCards.length > 0) {
        cards = codeLCards
            .filter(card => card.nickname !== currentUser)
            .map(card => ({
                ...card,
                nickname: card.author === "You" ? card.nickname : card.author,
                backContent: card.backContent || generateBackContent(card.content),
                // Initialize separate like and comment systems for each side
                likesFront: card.likesFront || 0,
                likesBack: card.likesBack || 0,
                commentsFront: card.commentsFront || [],
                commentsBack: card.commentsBack || []
            }));
        
        if (cards.length === 0) {
            cards = [createDefaultCard()];
        }
    } else {
        cards = [createDefaultCard()];
    }
    
    loadCard(currentCardIndex);
}

function generateBackContent(frontContent) {
    const responses = [
        "Reflect on this thought...",
        "What does this mean to you?",
        "Consider the opposite perspective...",
        "How does this make you feel?",
        "What action does this inspire?",
        "Imagine if...",
        "What's the deeper meaning here?"
    ];
    
    return responses[Math.floor(Math.random() * responses.length)];
}

function createDefaultCard() {
    return {
        id: Date.now().toString(),
        content: "No cards available yet",
        backContent: "Create your own cards to see them here",
        author: "Play2Love",
        date: new Date().toLocaleDateString(),
        likesFront: 0,
        likesBack: 0,
        nickname: "@play2love",
        commentsFront: [
            {
                id: "1",
                user: "@user635",
                text: "Front side comment",
                date: new Date().toISOString(),
                likes: 1,
                likedBy: ["@user1"]
            }
        ],
        commentsBack: [
            {
                id: "2",
                user: "@user635",
                text: "Back side comment",
                date: new Date().toISOString(),
                likes: 0,
                likedBy: []
            }
        ],
        allowComments: true,
        fontStyle: "font-roboto"
    };
}

function getRandomGradientScheme() {
    return gradientSchemes[Math.floor(Math.random() * gradientSchemes.length)];
}

function applyRandomGradientScheme() {
    const gradientScheme = getRandomGradientScheme();
    cardFront.style.background = gradientScheme.front;
    cardBack.style.background = gradientScheme.back;
}

function loadCard(index) {
    const currentCard = cards[index];
    
    // Front side content
    cardContentFront.textContent = currentCard.content;
    cardAuthorFront.textContent = `— ${currentCard.author}`;
    cardDateFront.textContent = currentCard.date;
    likeCountFront.textContent = currentCard.likesFront;
    userNicknameFront.textContent = currentCard.nickname || currentCard.author;
    commentsCountFront.textContent = currentCard.commentsFront ? currentCard.commentsFront.length : 0;
    
    // Back side content (different from front)
    cardContentBack.textContent = currentCard.backContent || currentCard.content;
    cardAuthorBack.textContent = `— ${currentCard.author}`;
    cardDateBack.textContent = currentCard.date;
    likeCountBack.textContent = currentCard.likesBack;
    userNicknameBack.textContent = currentCard.nickname || currentCard.author;
    commentsCountBack.textContent = currentCard.commentsBack ? currentCard.commentsBack.length : 0;
    
    // Update like and save buttons
    likeBtnFront.textContent = likedCardsFront.includes(currentCard.id) ? '❤️' : '🤍';
    likeBtnBack.textContent = likedCardsBack.includes(currentCard.id) ? '❤️' : '🤍';
    saveBtnFront.textContent = savedCards.includes(currentCard.id) ? '📌' : '🔖';
    saveBtnBack.textContent = savedCards.includes(currentCard.id) ? '📌' : '🔖';
    
    // Apply random gradient schemes
    applyRandomGradientScheme();
    
    // Apply font style
    cardContentFront.className = `card-content ${currentCard.fontStyle || ''}`;
    cardContentBack.className = `card-content ${currentCard.fontStyle || ''}`;
}

function playFlipSound() {
    try {
        flipSound.currentTime = 0; // Rewind to start
        flipSound.play().catch(e => {
            console.log("Audio play failed:", e);
            // Fallback sound
            const beep = new Audio('data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU...');
            beep.play();
        });
    } catch (e) {
        console.log("Sound error:", e);
    }
}

function handleCardClick(e) {
    if (e.target.closest('.card-actions')) return;
    if (isFlipping) return;
    
    isFlipping = true;
    playFlipSound();
    
    // Start the flip animation with throw style
    card.classList.toggle('flipped');
    
    // Change the gradient of the side that will be hidden after flip
    setTimeout(() => {
        if (card.classList.contains('flipped')) {
            // Will show back side, so update front side gradient
            applyRandomGradientScheme();
        } else {
            // Will show front side, so update back side gradient
            applyRandomGradientScheme();
        }
    }, 250); // Halfway through the flip animation
    
    setTimeout(() => isFlipping = false, 500);
}

function handleLikeClick(side) {
    const currentCard = cards[currentCardIndex];
    
    if (side === 'front') {
        if (likedCardsFront.includes(currentCard.id)) {
            const index = likedCardsFront.indexOf(currentCard.id);
            likedCardsFront.splice(index, 1);
            currentCard.likesFront--;
            likeBtnFront.textContent = '🤍';
        } else {
            likedCardsFront.push(currentCard.id);
            currentCard.likesFront++;
            likeBtnFront.textContent = '❤️';
        }
        likeCountFront.textContent = currentCard.likesFront;
        localStorage.setItem('likedCardsFront', JSON.stringify(likedCardsFront));
    } else {
        if (likedCardsBack.includes(currentCard.id)) {
            const index = likedCardsBack.indexOf(currentCard.id);
            likedCardsBack.splice(index, 1);
            currentCard.likesBack--;
            likeBtnBack.textContent = '🤍';
        } else {
            likedCardsBack.push(currentCard.id);
            currentCard.likesBack++;
            likeBtnBack.textContent = '❤️';
        }
        likeCountBack.textContent = currentCard.likesBack;
        localStorage.setItem('likedCardsBack', JSON.stringify(likedCardsBack));
    }
    
    updateCardInLocalStorage(currentCard);
}

function handleSaveClick(e) {
    e.stopPropagation();
    const currentCard = cards[currentCardIndex];
    
    if (savedCards.includes(currentCard.id)) {
        const index = savedCards.indexOf(currentCard.id);
        savedCards.splice(index, 1);
        saveBtnFront.textContent = '🔖';
        saveBtnBack.textContent = '🔖';
    } else {
        savedCards.push(currentCard.id);
        saveBtnFront.textContent = '📌';
        saveBtnBack.textContent = '📌';
    }
    localStorage.setItem('savedCardsP', JSON.stringify(savedCards));
}

function handleCommentClick(side) {
    const currentCard = cards[currentCardIndex];
    if (!currentCard.allowComments) {
        alert("Comments are disabled for this card");
        return;
    }
    
    currentCardForComments = currentCard;
    currentSideForComments = side;
    loadComments(currentCard, side);
    commentsSection.classList.add('active');
}

function hideComments() {
    commentsSection.classList.remove('active');
    commentInput.value = '';
}

function loadComments(card, side) {
    commentsContainer.innerHTML = '';
    
    // Add card preview (sticky at top)
    const cardPreviewContainer = document.createElement('div');
    cardPreviewContainer.className = 'card-preview-container';
    cardPreviewContainer.innerHTML = `
        <div class="card-preview">
            <div class="card-preview-content ${card.fontStyle || ''}">${
                side === 'front' ? card.content : card.backContent
            }</div>
            <div class="card-preview-meta">
                <span>— ${card.author}</span>
                <span>${card.date}</span>
            </div>
        </div>
    `;
    commentsContainer.appendChild(cardPreviewContainer);
    
    // Add comments section
    const commentsList = document.createElement('div');
    commentsList.className = 'comments-list';
    
    const comments = side === 'front' ? card.commentsFront : card.commentsBack;
    
    if (!comments || comments.length === 0) {
        commentsList.innerHTML = '<p style="text-align: center; color: #666; padding: 20px;">No comments yet</p>';
        commentsContainer.appendChild(commentsList);
        return;
    }
    
    comments.forEach(comment => {
        const commentEl = document.createElement('div');
        commentEl.className = 'comment';
        commentEl.innerHTML = `
            <div class="comment-user">
                <span>${comment.user}</span>
                <span>${new Date(comment.date).toLocaleDateString()}</span>
            </div>
            <div class="comment-text">${comment.text}</div>
            <div class="comment-actions">
                <div class="comment-like" onclick="toggleCommentLike('${card.id}', '${comment.id}', '${side}')">
                    <span class="heart">${comment.likedBy && comment.likedBy.includes(currentUser) ? '❤️' : '🤍'}</span>
                    <span class="comment-like-count">${comment.likes || 0}</span>
                </div>
            </div>
        `;
        commentsList.appendChild(commentEl);
    });
    
    commentsContainer.appendChild(commentsList);
}

function addComment() {
    const text = commentInput.value.trim();
    if (!text) return;
    
    const currentCard = currentCardForComments || cards[currentCardIndex];
    const side = currentSideForComments;
    
    const newComment = {
        id: Date.now().toString(),
        user: currentUser,
        text: text,
        date: new Date().toISOString(),
        likes: 0,
        likedBy: []
    };
    
    if (side === 'front') {
        if (!currentCard.commentsFront) currentCard.commentsFront = [];
        currentCard.commentsFront.unshift(newComment);
        commentsCountFront.textContent = currentCard.commentsFront.length;
    } else {
        if (!currentCard.commentsBack) currentCard.commentsBack = [];
        currentCard.commentsBack.unshift(newComment);
        commentsCountBack.textContent = currentCard.commentsBack.length;
    }
    
    updateCardInLocalStorage(currentCard);
    loadComments(currentCard, side);
    commentInput.value = '';
    commentsContainer.scrollTop = document.querySelector('.card-preview-container').offsetHeight;
}

function toggleCommentLike(cardId, commentId, side) {
    const card = cards.find(c => c.id === cardId);
    let comments, comment;
    
    if (side === 'front') {
        comments = card.commentsFront;
    } else {
        comments = card.commentsBack;
    }
    
    comment = comments.find(c => c.id === commentId);
    
    if (!comment) return;
    
    const userIndex = comment.likedBy.indexOf(currentUser);
    const likeElement = document.querySelector(`.comment-like[onclick="toggleCommentLike('${cardId}', '${commentId}', '${side}')"] .heart`);
    const likeCountElement = document.querySelector(`.comment-like[onclick="toggleCommentLike('${cardId}', '${commentId}', '${side}')"] .comment-like-count`);
    
    if (userIndex === -1) {
        comment.likes++;
        comment.likedBy.push(currentUser);
        likeElement.textContent = '❤️';
    } else {
        comment.likes--;
        comment.likedBy.splice(userIndex, 1);
        likeElement.textContent = '🤍';
    }
    
    likeCountElement.textContent = comment.likes;
    updateCardInLocalStorage(card);
}

function updateCardInLocalStorage(updatedCard) {
    const codeLCards = JSON.parse(localStorage.getItem('savedCards')) || [];
    const index = codeLCards.findIndex(card => card.id === updatedCard.id);
    
    if (index !== -1) {
        codeLCards[index] = updatedCard;
        localStorage.setItem('savedCards', JSON.stringify(codeLCards));
    }
}

function showNextCard() {
    if (isFlipping) return;
    
    isFlipping = true;
    playFlipSound();
    
    // Flip card back first if it's flipped
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => {
            currentCardIndex = (currentCardIndex + 1) % cards.length;
            loadCard(currentCardIndex);
            isFlipping = false;
        }, 500);
    } else {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        loadCard(currentCardIndex);
        isFlipping = false;
    }
}

function showPrevCard() {
    if (isFlipping) return;
    
    isFlipping = true;
    playFlipSound();
    
    // Flip card back first if it's flipped
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => {
            currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
            loadCard(currentCardIndex);
            isFlipping = false;
        }, 500);
    } else {
        currentCardIndex = (currentCardIndex - 1 + cards.length) % cards.length;
        loadCard(currentCardIndex);
        isFlipping = false;
    }
}

function showCards() {
    loadCardsFromLocalStorage();
    cardsOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideCards() {
    cardsOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
    }
}

function hideSwipeHint() {
    swipeHint.style.opacity = '0';
    setTimeout(() => swipeHint.style.display = 'none', 300);
}

function handleKeyDown(e) {
    if (!cardsOverlay.classList.contains('active')) return;
    
    if (e.key === 'ArrowDown') showNextCard();
    else if (e.key === 'ArrowUp') showPrevCard();
    else if (e.key === 'Escape') hideCards();
}

init();
window.toggleCommentLike = toggleCommentLike;