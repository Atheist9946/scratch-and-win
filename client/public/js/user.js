// Add this at the top of your existing user.js (with other DOM elements)
const loginEmailInput = document.getElementById("login-email"); // Add this to your HTML if missing
const loginPasswordInput = document.getElementById("login-password");

// Replace your existing userLogin() function with this:
async function userLogin() {
    const email = loginEmailInput.value;
    const password = loginPasswordInput.value;

    if (!email || !password) {
        alert("Please enter both email and password!");
        return;
    }

    try {
        const response = await fetch('http://localhost:3000/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Login failed');
        }

        // Successful login
        localStorage.setItem('token', data.token);
        currentUser = data.user; // Assuming your backend returns user data
        
        // Update UI
        loginForm.style.display = "none";
        userPanel.style.display = "block";
        userNickname.textContent = currentUser.nickname || currentUser.email.split('@')[0];
        gameControls.style.display = "none";
        userIcon.style.display = "none";
        logoutIcon.style.display = "none";
        exitIcon.style.display = "none";
        
        // Load user data
        loadUserSettings();

    } catch (error) {
        console.error('Login error:', error);
        alert(error.message || "Login failed. Please try again.");
    }
}

// Update your form event listener (replace any existing login form submit handler)
document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    await userLogin();
});

// Update your logout function to clear the token
function userLogout() {
    localStorage.removeItem('token');
    currentUser = null;
    userPanel.style.display = "none";
    loginForm.style.display = "block";
    signupForm.style.display = "none";
    container.innerHTML = "";
    container.style.display = "none";
    gameControls.style.display = "none";
    userIcon.style.display = "block";
    logoutIcon.style.display = "none";
    exitIcon.style.display = "none";
}