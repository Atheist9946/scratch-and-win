document.addEventListener('DOMContentLoaded', () => {
  // Check authentication
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = '/user';
    return;
  }

  // Load cards
  loadCards();

  // Event listeners
  document.getElementById('createCardBtn').addEventListener('click', createCard);
});

async function loadCards() {
  try {
    const response = await fetch('/api/cards', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    
    if (!response.ok) throw new Error('Failed to load cards');
    
    const cards = await response.json();
    renderCards(cards);
  } catch (error) {
    console.error('Error loading cards:', error);
    showNotification('Failed to load cards', false);
  }
}

async function createCard() {
  const content = document.getElementById('cardContent').value.trim();
  const fontStyle = document.getElementById('fontStyle').value;
  const allowComments = document.getElementById('allowComments').checked;

  if (!content) {
    showNotification('Please enter card content!', false);
    return;
  }

  try {
    const response = await fetch('/api/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ content, fontStyle, allowComments })
    });

    if (!response.ok) throw new Error('Failed to create card');
    
    const newCard = await response.json();
    showNotification('Card created successfully!');
    document.getElementById('cardContent').value = '';
    loadCards(); // Refresh the list
  } catch (error) {
    console.error('Error creating card:', error);
    showNotification('Failed to create card', false);
  }
}

function renderCards(cards) {
  const cardsList = document.getElementById('cardsList');
  cardsList.innerHTML = '';

  if (cards.length === 0) {
    cardsList.innerHTML = '<div class="no-cards">No cards created yet</div>';
    return;
  }

  cards.forEach(card => {
    const cardItem = document.createElement('div');
    cardItem.className = 'card-item';
    cardItem.innerHTML = `
      <div class="card-item-content ${card.expanded ? '' : 'collapsed'} ${card.fontStyle || ''}">
        ${card.content}
      </div>
      ${card.content.length > 150 ? `<div class="show-more" onclick="toggleCardExpansion('${card._id}')">
        ${card.expanded ? 'Show less' : 'Show more'}
      </div>` : ''}
      
      <div class="card-item-meta">
        <span>${new Date(card.createdAt).toLocaleDateString()}</span>
        <div class="card-item-actions">
          <button class="action-btn like ${card.likes.includes(userId) ? 'active' : ''}" onclick="toggleCardLike('${card._id}')">
            <span class="action-icon">${card.likes.includes(userId) ? '❤️' : '🤍'}</span>
            <span>${card.likes.length || 0}</span>
          </button>
          <button class="action-btn ${card.commentsExpanded ? 'active' : ''}" onclick="toggleCommentsSection('${card._id}')">
            <span class="action-icon">💬</span>
            <span>${card.comments ? card.comments.length : 0}</span>
          </button>
          <button class="action-btn ${savedCards.includes(card._id) ? 'active' : ''}" onclick="toggleSave('${card._id}')">
            <span class="action-icon">🔖</span>
          </button>
          ${card.author._id === userId ? `
            <button class="action-btn delete" onclick="deleteCard('${card._id}')">
              <span class="action-icon">🗑️</span>
            </button>
          ` : ''}
          <button class="action-btn ${card.allowComments ? 'active' : ''}" onclick="toggleCardComments('${card._id}')">
            <span class="comment-toggle-icon ${card.allowComments ? '' : 'locked'}">
              <i class="fa-solid fa-comment"></i>
            </span>
          </button>
        </div>
      </div>
      
      <div class="comments-section" id="comments-section-${card._id}">
        <!-- Comments will be rendered here -->
      </div>
    `;
    cardsList.appendChild(cardItem);
  });
}