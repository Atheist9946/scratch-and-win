// Color combinations for cards and fullscreen view
const colorCombinations = [
    { bg: "#000000", text: "#ffffff" }, // White on Black
    { bg: "#0D47A1", text: "#ffffff" }, // White on Navy
    { bg: "#E3F2FD", text: "#0D47A1" }, // Dark on Light Blue
    { bg: "#FFF9C4", text: "#000000" }, // Black on Light Yellow
    { bg: "#121212", text: "#e0e0e0" }, // Light Gray on Dark
    { bg: "#2E7D32", text: "#ffffff" }, // White on Dark Green
    { bg: "#CD5C5C", text: "#FFFFFF" }, // IndianRed
    { bg: "#F08080", text: "#000000" }, // LightCoral
    { bg: "#FF8C00", text: "#000000" }, // DarkOrange
    { bg: "#F0E68C", text: "#000000" }, // Khaki
    { bg: "#2E8B57", text: "#FFFFFF" }, // SeaGreen
    { bg: "#4682B4", text: "#FFFFFF" }, // SteelBlue
    { bg: "#4169E1", text: "#FFFFFF" }, // RoyalBlue
    { bg: "#BA55D3", text: "#000000" }, // MediumOrchid
    { bg: "#663399", text: "#FFFFFF" }, // RebeccaPurple
    { bg: "#BC8F8F", text: "#000000" }, // RosyBrown
    { bg: "#A0522D", text: "#FFFFFF" }, // Sienna
    { bg: "#D3D3D3", text: "#000000" }, // LightGray
    { bg: "#696969", text: "#FFFFFF" }, // DimGray
    { bg: "#6A0DAD", text: "#FFFFFF" }, // Deep Purple
    { bg: "#000080", text: "#F5F5F5" }, // Navy Blue
    { bg: "#36454F", text: "#FFFFFF" }, // Charcoal
    { bg: "#708090", text: "#FFFFFF" }, // Slate Gray
    { bg: "#FFFFF0", text: "#333333" }, // Ivory
    { bg: "#F5FFFA", text: "#2E8B57" }, // Mint Cream
    { bg: "#E6E6FA", text: "#4B0082" }, // Lavender
    { bg: "#FFDAB9", text: "#8B4513" }, // Peach Puff
    { bg: "#B0E0E6", text: "#00008B" }, // Powder Blue
    { bg: "#2F4F4F", text: "#E0FFFF" }, // Dark Slate
    { bg: "#010203", text: "#F8F8FF" }, // Rich Black
    { bg: "#191970", text: "#ADD8E6" }, // Midnight Blue
    { bg: "#556B2F", text: "#FFEBCD" }, // Dark Olive
    { bg: "#FFFF99", text: "#FF0000" }, // Canary Yellow
    { bg: "#DC143C", text: "#FFFFFF" }, // Crimson
    { bg: "#228B22", text: "#FFD700" }, // Forest Green
    { bg: "#7851A9", text: "#FFE5B4" }, // Royal Purple
    { bg: "#E2725B", text: "#3D2B1F" }, // Terracotta
    { bg: "#9DC183", text: "#2F4F4F" }, // Sage Green
    { bg: "#C2B280", text: "#654321" }, // Sandstone
    { bg: "#008080", text: "#FFE4C4" }, // Deep Teal
    { bg: "#58427C", text: "#FFD1DC" }, // Cyber Grape
    { bg: "#FF8243", text: "#000080" }, // Mango Tango
    { bg: "#A50B5E", text: "#FFD700" }, // Jazzberry Jam
    { bg: "#7FFFD4", text: "#8B0000" }, // Aquamarine
    { bg: "#005A9C", text: "#FFFFFF" }, // WCAG Blue
    { bg: "#FFC000", text: "#000000" }, // WCAG Yellow
    { bg: "#4B830D", text: "#FFFFFF" }, // WCAG Green
    { bg: "#E81123", text: "#FFFFFF" }  // WCAG Red
];

// Initial Data (stored as objects with optional image URL and required text)
let prizes = JSON.parse(localStorage.getItem("scratchPrizes")) || [
    { text: "Congratulations! You won Prize 1", image: "https://via.placeholder.com/100" },
    { text: "Congratulations! You won Prize 2", image: "https://via.placeholder.com/100" },
];

// Comments data
let comments = JSON.parse(localStorage.getItem("comments")) || [];

// Notification data
let notification = JSON.parse(localStorage.getItem("notification")) || {
    text: "Welcome to Scratch & Win! Check back daily for new prizes.",
    updated: new Date().toLocaleString()
};

// Alert settings
let alertSettings = JSON.parse(localStorage.getItem("alertSettings")) || {
    enabled: true,
    displayTime: 5
};

// Disclaimer settings
let disclaimerAccepted = localStorage.getItem("disclaimerAccepted") === "true";
let disclaimerContent = localStorage.getItem("disclaimerContent") || 
    "This is a placeholder for the Site Disclaimer content. You should include any legal disclaimers about your website's content here. For now, this is just sample text to show how the disclaimer would look with content.";

// Default colors based on the provided scheme
let cardColorBefore = "#F06292"; // Bright Pink
let cardColorAfter = "#FFC1E3"; // Light Pink
let revealedTextColor = "#B71C1C"; // Deep Red
let revealedFontSize = 14; // Default revealed font size
let revealAnimation = "flip"; // Default reveal animation (changed to flip)

// Default theme colors
const defaultColors = {
    bgColor: "#FFEBEE",
    textColor: "#6A1B9A",
    titleColor: "#E91E63",
    buttonColor: "#E91E63",
    buttonHoverColor: "#C2185B",
    sidebarBgColor: "#FFEBEE",
    sidebarTextColor: "#CD5C5C",
    contentBgColor: "#FCE4EC",
    formBgColor: "#FCE4EC",
    formTextColor: "#6A1B9A",
    revealedTextColor: "#B71C1C"
};

// Current theme colors (initialize with defaults)
let currentColors = JSON.parse(localStorage.getItem("themeColors")) || {...defaultColors};

let usedPrizes = []; // Track used prizes
let isGameActive = true; // Track if game can be played

// Scroll variables
let scrollInterval = null;
let scrollDirection = null;
const SCROLL_SPEED = 30; // pixels per interval
const SCROLL_INTERVAL = 50; // milliseconds

// DOM Elements
const container = document.getElementById("container");
const adminPanel = document.getElementById("admin-panel");
const loginForm = document.getElementById("login-form");
const scrollButtons = document.getElementById("scroll-buttons");
const refreshButton = document.getElementById("refresh-button");
const notificationElement = document.getElementById("notification");
const disclaimerModal = document.getElementById("disclaimerModal");
const disclaimerContentElement = document.getElementById("disclaimerContent");
const disclaimerPageContent = document.getElementById("disclaimerPageContent");
const notificationsContent = document.getElementById("notificationsContent");
const recentComments = document.getElementById("recentComments");
const adminCommentsList = document.getElementById("adminCommentsList");
const notificationAlert = document.getElementById("notificationAlert");
const selectAllComments = document.getElementById("selectAllComments");
const fullscreenOverlay = document.getElementById("fullscreen-overlay");
const fullscreenImage = document.getElementById("fullscreen-image");
const fullscreenText = document.getElementById("fullscreen-text");
const closeFullscreen = document.querySelector(".close-fullscreen");

/* INITIALIZATION */
function initialize() {
    // Load disclaimer content
    disclaimerContentElement.innerHTML = disclaimerContent;
    disclaimerPageContent.innerHTML = disclaimerContent;
    
    // Load notification
    notificationsContent.innerHTML = `<p><strong>${notification.updated}</strong><br>${notification.text}</p>`;
    
    // Load recent comments
    updateRecentComments();
    
    // Apply theme colors
    applyThemeColors();
    
    // Show disclaimer modal if not accepted
    if (!disclaimerAccepted) {
        setTimeout(() => {
            showModal('disclaimerModal');
        }, 500);
    } else if (alertSettings.enabled) {
        // Show notification alert after disclaimer
        setTimeout(() => {
            showAlert('notificationAlert', alertSettings.displayTime * 1000);
        }, 1000);
    }
    
    // Create scratch cards
    createScratchCards();
    toggleScrollButtons(true);
    refreshButton.style.display = "block";
    
    // Set up fullscreen overlay close button
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
    
    // Prevent default touch behavior on scroll buttons to avoid conflicts
    const scrollUpBtn = document.getElementById('scroll-up-btn');
    const scrollDownBtn = document.getElementById('scroll-down-btn');
    
    if (scrollUpBtn && scrollDownBtn) {
        scrollUpBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
        scrollDownBtn.addEventListener('touchstart', function(e) {
            e.preventDefault();
        });
    }
}

/* SCROLLING FUNCTIONS */
function startScrolling(direction) {
    // Clear any existing interval
    stopScrolling();
    
    // Set the direction
    scrollDirection = direction;
    
    // Start scrolling immediately
    scrollContainer();
    
    // Set up interval for continuous scrolling
    scrollInterval = setInterval(scrollContainer, SCROLL_INTERVAL);
}

function scrollContainer() {
    if (scrollDirection === 'up') {
        container.scrollBy({ top: -SCROLL_SPEED, behavior: 'instant' });
    } else if (scrollDirection === 'down') {
        container.scrollBy({ top: SCROLL_SPEED, behavior: 'instant' });
    }
}

function stopScrolling() {
    if (scrollInterval) {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }
    scrollDirection = null;
}

/* FULLSCREEN FUNCTIONS */
function showFullscreen(imageSrc, text, bgColor, textColor) {
    fullscreenOverlay.style.backgroundColor = bgColor;
    fullscreenText.style.color = textColor;
    
    if (imageSrc) {
        fullscreenImage.src = imageSrc;
        fullscreenImage.style.display = 'block';
    } else {
        fullscreenImage.style.display = 'none';
    }
    
    fullscreenText.textContent = text;
    fullscreenOverlay.classList.add('active');
    
    // Prevent scrolling when fullscreen is active
    document.body.style.overflow = 'hidden';
}

function closeFullscreenView() {
    fullscreenOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
}

/* MODAL FUNCTIONS */
function showModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function acceptDisclaimer() {
    disclaimerAccepted = true;
    localStorage.setItem("disclaimerAccepted", "true");
    closeModal('disclaimerModal');
    
    if (alertSettings.enabled) {
        setTimeout(() => {
            showAlert('notificationAlert', alertSettings.displayTime * 1000);
        }, 500);
    }
}

/* ALERT FUNCTIONS */
function showAlert(alertId, duration) {
    const alert = document.getElementById(alertId);
    alert.style.display = "block";
    
    if (duration) {
        setTimeout(() => {
            alert.style.display = "none";
        }, duration);
    }
}

function closeAlert(alertId) {
    document.getElementById(alertId).style.display = "none";
}

/* SIDEBAR FUNCTIONS */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Show selected page
    const page = document.getElementById(pageId);
    page.classList.add('active-page');
    
    // Close sidebar
    closeNav();
    
    // Close admin login/panel if open
    if (loginForm.style.display === "block" || adminPanel.style.display === "block") {
        loginForm.style.display = "none";
        adminPanel.style.display = "none";
    }
    
    // If showing home page, create scratch cards
    if (pageId === 'home') {
        isGameActive = true;
        createScratchCards();
        toggleScrollButtons(true);
        refreshButton.style.display = "block";
    } else {
        isGameActive = false;
        toggleScrollButtons(false);
        refreshButton.style.display = "none";
        
        // Update content for specific pages
        if (pageId === 'comments') {
            updateRecentComments();
        } else if (pageId === 'notifications') {
            notificationsContent.innerHTML = `<p><strong>${notification.updated}</strong><br>${notification.text}</p>`;
        }
    }
}

function showAdminLogin() {
    // Close any open pages
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.classList.remove('active-page');
    });
    
    // Close sidebar
    closeNav();
    
    // Show login form
    showLogin();
}

// Function to toggle password visibility
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    if (input.type === "password") {
        input.type = "text";
    } else {
        input.type = "password";
    }
}

// Function to save prizes to localStorage
function savePrizes() {
    localStorage.setItem("scratchPrizes", JSON.stringify(prizes));
}

// Function to show/hide scroll buttons
function toggleScrollButtons(show) {
    if (show) {
        scrollButtons.style.display = "flex"; // Show scroll buttons
    } else {
        scrollButtons.style.display = "none"; // Hide scroll buttons
    }
}

// Show login form and hide scroll buttons
function showLogin() {
    loginForm.style.display = "block";
    adminPanel.style.display = "none";
    isGameActive = false; // Disable game when login form is open
    toggleScrollButtons(false); // Hide scroll buttons
    container.innerHTML = ""; // Clear scratch cards
    refreshButton.style.display = "none"; // Hide refresh button
}

// Close login form and show scroll buttons
function closeLogin() {
    loginForm.style.display = "none";
    showPage('home'); // Show home page after closing login form
}

/* COMMENT FUNCTIONS */
function addComment() {
    const name = document.getElementById("commentName").value.trim();
    const text = document.getElementById("commentText").value.trim();
    
    if (name && text) {
        const newComment = {
            id: Date.now(),
            name: name,
            text: text,
            date: new Date().toLocaleString()
        };
        
        comments.unshift(newComment); // Add to beginning of array
        localStorage.setItem("comments", JSON.stringify(comments));
        
        // Clear form
        document.getElementById("commentName").value = "";
        document.getElementById("commentText").value = "";
        
        // Update comments display
        updateRecentComments();
        
        // Show notification
        showNotification("Comment added successfully!");
    } else {
        alert("Please enter both name and comment text.");
    }
}

function updateRecentComments() {
    recentComments.innerHTML = "";
    adminCommentsList.innerHTML = "";
    
    if (comments.length === 0) {
        recentComments.innerHTML = "<p>No comments yet. Be the first to comment!</p>";
        adminCommentsList.innerHTML = "<p>No comments to display.</p>";
        return;
    }
    
    // Display recent comments (up to 5)
    const displayComments = comments.slice(0, 5);
    displayComments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <div class="comment-author">${comment.name}</div>
            <div class="comment-date">${comment.date}</div>
            <div class="comment-text">${comment.text}</div>
        `;
        recentComments.appendChild(commentDiv);
    });
    
    // Display all comments in admin panel with checkboxes
    comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `
            <input type="checkbox" class="comment-checkbox" value="${comment.id}">
            <div class="comment-author">${comment.name}</div>
            <div class="comment-date">${comment.date}</div>
            <div class="comment-text">${comment.text}</div>
        `;
        adminCommentsList.appendChild(commentDiv);
    });
}

function toggleSelectAllComments() {
    const checkboxes = document.querySelectorAll('.comment-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.checked = selectAllComments.checked;
    });
}

function deleteSelectedComments() {
    const checkboxes = document.querySelectorAll('.comment-checkbox:checked');
    if (checkboxes.length === 0) {
        alert("Please select at least one comment to delete.");
        return;
    }
    
    if (confirm(`Are you sure you want to delete ${checkboxes.length} comment(s)?`)) {
        const idsToDelete = Array.from(checkboxes).map(cb => parseInt(cb.value));
        comments = comments.filter(comment => !idsToDelete.includes(comment.id));
        localStorage.setItem("comments", JSON.stringify(comments));
        updateRecentComments();
        selectAllComments.checked = false;
        showNotification(`${checkboxes.length} comment(s) deleted successfully.`);
    }
}

/* NOTIFICATION FUNCTIONS */
function updateNotification() {
    const text = document.getElementById("notificationText").value.trim();
    if (text) {
        notification = {
            text: text,
            updated: new Date().toLocaleString()
        };
        localStorage.setItem("notification", JSON.stringify(notification));
        notificationsContent.innerHTML = `<p><strong>${notification.updated}</strong><br>${notification.text}</p>`;
        showNotification("Notification updated successfully!");
    } else {
        alert("Please enter notification text.");
    }
}

function showNotification(message) {
    notificationElement.textContent = message;
    notificationElement.style.display = "block";
    setTimeout(() => {
        notificationElement.style.display = "none";
    }, 3000);
}

/* ADMIN FUNCTIONS */
function adminLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple hash function for demonstration
    const hashPassword = (pass) => {
        return pass.split("").reduce((a, b) => {
            a = ((a << 5) - a) + b.charCodeAt(0);
            return a & a;
        }, 0);
    };

    if (username === "admin" && hashPassword(password) === hashPassword("1234")) {
        loginForm.style.display = "none";
        adminPanel.style.display = "block";
        isGameActive = false; // Disable game when in admin panel
        toggleScrollButtons(false); // Hide scroll buttons
        container.innerHTML = ""; // Clear scratch cards
        refreshButton.style.display = "none"; // Hide refresh button
        
        // Load admin data
        updateDeleteDropdown();
        loadColorSettings();
        document.getElementById("notificationText").value = notification.text;
        updateRecentComments();
        
        // Load alert settings
        document.getElementById("enableAlertCheckbox").checked = alertSettings.enabled;
        document.getElementById("alertDisplayTime").value = alertSettings.displayTime;
        
        // Load reveal animation setting
        document.getElementById("revealAnimation").value = revealAnimation;
    } else {
        alert("Invalid credentials!");
    }
}

function adminLogout() {
    adminPanel.style.display = "none";
    showPage('home'); // Show home page after logout
}

function addPrize() {
    const imageUpload = document.getElementById("imageUpload");
    const prizeText = document.getElementById("prizeText").value.trim();

    if (!prizeText) {
        alert("Please enter prize text.");
        return;
    }

    if (prizeText.length > 1000) {
        alert("Prize text must be 1000 characters or less.");
        return;
    }

    if (imageUpload.files.length > 0) {
        const file = imageUpload.files[0];
        const reader = new FileReader();

        reader.onload = function (e) {
            prizes.push({ text: prizeText, image: e.target.result });
            savePrizes(); // Save to localStorage
            updateDeleteDropdown();
            
            // Show notification
            showNotification("Prize added successfully!");
            
            // Clear form fields
            imageUpload.value = "";
            document.getElementById("prizeText").value = "";
        };

        reader.readAsDataURL(file);
    } else {
        // Add prize with text only
        prizes.push({ text: prizeText, image: null });
        savePrizes();
        updateDeleteDropdown();
        showNotification("Text prize added successfully!");
        document.getElementById("prizeText").value = "";
    }
}

function deletePrize() {
    const select = document.getElementById("deletePrizeSelect");
    const selectedText = select.value;

    if (confirm(`Are you sure you want to delete "${selectedText}"?`)) {
        prizes = prizes.filter(item => item.text !== selectedText);
        savePrizes(); // Save to localStorage
        updateDeleteDropdown();
        showNotification("Prize deleted successfully!");
    }
}

function updateDeleteDropdown() {
    const select = document.getElementById("deletePrizeSelect");
    select.innerHTML = "";
    prizes.forEach(item => {
        const option = document.createElement("option");
        option.value = item.text;
        option.textContent = item.text.length > 50 ? item.text.substring(0, 47) + "..." : item.text;
        select.appendChild(option);
    });
}

function loadColorSettings() {
    // Set the color pickers and hex values
    for (const [key, value] of Object.entries(currentColors)) {
        document.getElementById(key).value = value;
        document.getElementById(`${key}Hex`).value = value;
    }
    
    // Also load the other settings
    document.getElementById("cardColorBefore").value = cardColorBefore;
    document.getElementById("cardColorAfter").value = cardColorAfter;
    document.getElementById("revealedTextSize").value = revealedFontSize;
    document.getElementById("revealAnimation").value = revealAnimation;
    document.getElementById("revealedTextColor").value = revealedTextColor;
    document.getElementById("revealedTextColorHex").value = revealedTextColor;
}

function applyColorSettings() {
    // Update currentColors object
    for (const key in defaultColors) {
        currentColors[key] = document.getElementById(key).value;
        document.getElementById(`${key}Hex`).value = currentColors[key];
    }
    
    // Save to localStorage
    localStorage.setItem("themeColors", JSON.stringify(currentColors));
    
    // Apply the colors to the UI immediately
    applyThemeColors();
    
    // Show notification
    showNotification("Color settings saved and applied!");
}

function applyThemeColors() {
    document.body.style.backgroundColor = currentColors.bgColor;
    document.body.style.color = currentColors.textColor;
    
    // Update all h1 elements (titles)
    const titles = document.querySelectorAll('h1');
    titles.forEach(title => {
        title.style.color = currentColors.titleColor;
    });
    
    // Update buttons
    const buttons = document.querySelectorAll('.btn:not(.secondary-btn)');
    buttons.forEach(button => {
        button.style.backgroundColor = currentColors.buttonColor;
    });
    
    // Update sidebar
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.style.backgroundColor = currentColors.sidebarBgColor;
    }
    
    // Update sidebar links
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.style.color = currentColors.sidebarTextColor;
        link.style.borderBottomColor = currentColors.sidebarTextColor;
    });
    
    // Update page content background
    const pageContents = document.querySelectorAll('.page-content');
    pageContents.forEach(content => {
        content.style.backgroundColor = currentColors.contentBgColor;
    });
    
    // Update forms
    const forms = document.querySelectorAll('.login-form, .admin-panel');
    forms.forEach(form => {
        form.style.backgroundColor = currentColors.formBgColor;
        form.style.color = currentColors.formTextColor;
    });
    
    // Update revealed text color
    revealedTextColor = document.getElementById("revealedTextColor").value;
}

function resetColors() {
    if (confirm("Are you sure you want to reset all colors to default?")) {
        // Reset currentColors to defaults
        currentColors = {...defaultColors};
        
        // Update the form inputs
        for (const [key, value] of Object.entries(defaultColors)) {
            document.getElementById(key).value = value;
            document.getElementById(`${key}Hex`).value = value;
        }
        
        // Also reset the other color settings
        cardColorBefore = "#F06292";
        cardColorAfter = "#FFC1E3";
        revealedTextColor = "#B71C1C";
        revealedFontSize = 14;
        revealAnimation = "flip";
        
        document.getElementById("cardColorBefore").value = cardColorBefore;
        document.getElementById("cardColorAfter").value = cardColorAfter;
        document.getElementById("revealedTextColor").value = revealedTextColor;
        document.getElementById("revealedTextColorHex").value = revealedTextColor;
        document.getElementById("revealedTextSize").value = revealedFontSize;
        document.getElementById("revealAnimation").value = revealAnimation;
        
        // Save to localStorage
        localStorage.setItem("themeColors", JSON.stringify(currentColors));
        
        // Apply the default colors
        applyThemeColors();
        
        // Show notification
        showNotification("Colors reset to defaults!");
    }
}

function applySettings() {
    // Update card appearance
    cardColorBefore = document.getElementById("cardColorBefore").value;
    cardColorAfter = document.getElementById("cardColorAfter").value;
    revealedFontSize = parseInt(document.getElementById("revealedTextSize").value);
    revealAnimation = document.getElementById("revealAnimation").value;
    revealedTextColor = document.getElementById("revealedTextColor").value;
    
    // Update alert settings
    alertSettings = {
        enabled: document.getElementById("enableAlertCheckbox").checked,
        displayTime: parseInt(document.getElementById("alertDisplayTime").value)
    };
    localStorage.setItem("alertSettings", JSON.stringify(alertSettings));
    
    // Apply color settings too
    applyColorSettings();
    
    // Show notification
    showNotification("All settings saved! Changes will apply when you return to the game.");
}

/* SCRATCH CARD FUNCTIONS */
function createScratchCards() {
    if (!isGameActive) return; // Don't create cards if game is not active
    
    container.innerHTML = ""; // Clear previous cards
    usedPrizes = []; // Reset used prizes

    // Shuffle prizes array
    const shuffledPrizes = shuffleArray(prizes);

    // Display only 30 cards
    for (let i = 0; i < 30 && i < shuffledPrizes.length; i++) {
        const prize = shuffledPrizes[i];
        const card = document.createElement("div");
        card.classList.add("scratch-card");
        card.style.backgroundColor = cardColorBefore;
        card.setAttribute("role", "button");
        card.setAttribute("aria-label", "Scratch to reveal");

        // Create card inner container for flip animation
        const cardInner = document.createElement("div");
        cardInner.className = "card-inner";
        card.appendChild(cardInner);

// Card front (cover) - Show default image instead of text
    const cardFront = document.createElement("div");
    cardFront.className = "card-front";
    
    // Add default image to card front
    const defaultImage = document.createElement("img");
    defaultImage.src = "xyz.png"; // Your default image path
    defaultImage.alt = "Scratch to reveal";
    defaultImage.style.width = "80%";
    defaultImage.style.height = "80%";
    defaultImage.style.objectFit = "contain";
    cardFront.appendChild(defaultImage);
    
    cardInner.appendChild(cardFront);

        // Card back (content)
        const cardBack = document.createElement("div");
        cardBack.className = "card-back";
        
        const resultText = document.createElement("div");
        resultText.className = "result-text";
        resultText.textContent = prize.text;
        resultText.style.fontSize = revealedFontSize + "px";
        
        const resultImage = prize.image ? document.createElement("img") : null;
        if (resultImage) {
            resultImage.src = prize.image;
            resultImage.alt = prize.text;
            resultImage.className = "result-image";
        }
        
        // Create fullscreen button
        const fullscreenBtn = document.createElement("div");
        fullscreenBtn.className = "fullscreen-btn";
        fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
        fullscreenBtn.style.display = 'none';

        const resultDiv = document.createElement("div");
        resultDiv.classList.add("result");
        if (resultImage) resultDiv.appendChild(resultImage);
        resultDiv.appendChild(resultText);
        cardBack.appendChild(resultDiv);
        cardBack.appendChild(fullscreenBtn);
        cardInner.appendChild(cardBack);

        // Set up click event based on reveal animation type
        if (revealAnimation === "scratch") {
            createScratchCard(card, cardBack, fullscreenBtn, prize);
        } else if (revealAnimation === "tap") {
            createTapCard(card, cardBack, fullscreenBtn, prize);
        } else {
            // Default to flip animation
            createFlipCard(card, cardInner, cardBack, fullscreenBtn, prize);
        }

        container.appendChild(card);
    }
}

function createFlipCard(card, cardInner, cardBack, fullscreenBtn, prize) {
    // Randomly select a color combination
    const colorCombo = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    
    // Apply colors to card back
    cardBack.style.backgroundColor = colorCombo.bg;
    const resultText = cardBack.querySelector('.result-text');
    if (resultText) {
        resultText.style.color = colorCombo.text;
    }
    
    card.addEventListener("click", function() {
        if (!isGameActive) return;
        if (card.classList.contains("revealed")) return;
        
        // Add to used prizes
        usedPrizes.push(prize);
        
        // Flip the card
        card.classList.add("revealed");
        
        // Show fullscreen button after revealing
        fullscreenBtn.style.display = 'flex';
        
        // Set up fullscreen click
        fullscreenBtn.addEventListener("click", function(e) {
            e.stopPropagation();
            showFullscreen(prize.image, prize.text, colorCombo.bg, colorCombo.text);
        });
        
        // Set up text expansion
        setupTextExpansion(resultText, fullscreenBtn);
    });
}

function createScratchCard(card, resultDiv, fullscreenBtn, prize) {
    const canvas = document.createElement("canvas");
    canvas.width = card.offsetWidth;
    canvas.height = card.offsetHeight;
    card.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "silver";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let isScratching = false;
    let totalScratched = 0;
    const scratchThreshold = (canvas.width * canvas.height) * 0.5;

    function scratch(e) {
        if (!isGameActive) return; // Don't allow scratching if game is not active
        if (!isScratching) return;

        const rect = canvas.getBoundingClientRect();
        const x = (e.clientX || e.touches[0].clientX) - rect.left;
        const y = (e.clientY || e.touches[0].clientY) - rect.top;

        ctx.globalCompositeOperation = "destination-out";
        ctx.beginPath();
        ctx.arc(x, y, 15, 0, 2 * Math.PI);
        ctx.fill();

        totalScratched += 100;
        if (totalScratched >= scratchThreshold) {
            revealCard(card, canvas, resultDiv, fullscreenBtn, prize);
        }
    }

    // Event Listeners
    canvas.addEventListener("mousedown", () => {
        if (isGameActive) isScratching = true;
    });
    canvas.addEventListener("mouseup", () => (isScratching = false));
    canvas.addEventListener("mousemove", scratch);

    canvas.addEventListener("touchstart", () => {
        if (isGameActive) isScratching = true;
    });
    canvas.addEventListener("touchend", () => (isScratching = false));
    canvas.addEventListener("touchmove", (e) => {
        e.preventDefault();
        scratch(e.touches[0]);
    });

    setupCardInteractions(resultDiv, fullscreenBtn, prize);
}

function createTapCard(card, resultDiv, fullscreenBtn, prize) {
    card.addEventListener("click", function() {
        if (!isGameActive) return;
        
        // Create a fill animation
        const fillDiv = document.createElement("div");
        fillDiv.style.position = "absolute";
        fillDiv.style.top = "0";
        fillDiv.style.left = "0";
        fillDiv.style.width = "0";
        fillDiv.style.height = "100%";
        fillDiv.style.backgroundColor = cardColorAfter;
        fillDiv.style.transition = "width 0.5s ease-in-out";
        fillDiv.style.zIndex = "1";
        
        card.appendChild(fillDiv);
        
        // Trigger the fill animation
        setTimeout(() => {
            fillDiv.style.width = "100%";
        }, 10);
        
        // After animation completes, reveal the prize
        setTimeout(() => {
            revealCard(card, null, resultDiv, fullscreenBtn, prize);
            card.removeChild(fillDiv);
        }, 600);
    });
    
    setupCardInteractions(resultDiv, fullscreenBtn, prize);
}

function revealCard(card, canvas, resultDiv, fullscreenBtn, prize) {
    if (canvas) {
        canvas.style.opacity = 0;
    }
    
    // Randomly select a color combination
    const colorCombo = colorCombinations[Math.floor(Math.random() * colorCombinations.length)];
    
    // Apply colors to the card
    card.style.backgroundColor = colorCombo.bg;
    const textElement = resultDiv.querySelector('.result-text');
    if (textElement) {
        textElement.style.color = colorCombo.text;
    }
    
    usedPrizes.push(prize); // Add to used prizes
    
    // Show fullscreen button after revealing
    fullscreenBtn.style.display = 'flex';
    
    // Update fullscreen button click to use the same colors
    fullscreenBtn.onclick = function(e) {
        e.stopPropagation();
        showFullscreen(prize.image, prize.text, colorCombo.bg, colorCombo.text);
    };
}

function setupTextExpansion(textElement, fullscreenBtn) {
    // Add double click event to text for expanding
    let lastClick = 0;
    textElement.addEventListener("click", function(e) {
        const now = new Date().getTime();
        if (now - lastClick < 300) { // Double click
            e.stopPropagation();
            this.classList.add("expanded");
            // Hide image when text is expanded
            const img = this.parentElement.querySelector('img');
            if (img) img.style.display = "none";
            // Hide fullscreen button
            fullscreenBtn.style.display = "none";
            // Prevent body scrolling
            document.body.style.overflow = "hidden";
        }
        lastClick = now;
    });

    // Close expanded text when clicking the close button
    textElement.addEventListener("click", function(e) {
        if (this.classList.contains("expanded")) {
            // Check if click is on the pseudo-element (close button)
            const rect = this.getBoundingClientRect();
            const closeBtnRight = rect.right - 20;
            const closeBtnTop = rect.top + 20;
            
            if (e.clientX >= closeBtnRight - 30 && e.clientX <= closeBtnRight &&
                e.clientY >= closeBtnTop && e.clientY <= closeBtnTop + 30) {
                this.classList.remove("expanded");
                // Show image again
                const img = this.parentElement.querySelector('img');
                if (img) img.style.display = "block";
                // Show fullscreen button again
                fullscreenBtn.style.display = "flex";
                // Allow body scrolling again
                document.body.style.overflow = "auto";
            }
        }
    });
}

function setupCardInteractions(resultDiv, fullscreenBtn, prize) {
    const resultText = resultDiv.querySelector('.result-text');
    if (resultText) {
        setupTextExpansion(resultText, fullscreenBtn);
    }

    // Add click event to fullscreen button
    fullscreenBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        showFullscreen(prize.image, prize.text);
    });
}

// Shuffle Array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Reset Cards
function resetCards() {
    if (isGameActive) {
        createScratchCards();
    }
}

// Initialize
initialize();