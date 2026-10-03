const passwordInput = document.getElementById("password");

passwordInput.addEventListener("input", function () {
    const password = passwordInput.value;

    updateRequirement("length", password.length >= 8);
    updateRequirement("uppercase", /[A-Z]/.test(password));
    updateRequirement("lowercase", /[a-z]/.test(password));
    updateRequirement("number", /[0-9]/.test(password));
    updateRequirement("special", /[^A-Za-z0-9]/.test(password));

    updateStrength(password);
});

function updateRequirement(id, condition) {
    const element = document.getElementById(id);
    const text = element.textContent.substring(2);

    if (condition) {
        element.textContent = "✅ " + text;
    } else {
        element.textContent = "❌ " + text;
    }
}

function updateStrength(password) {
    const fill = document.getElementById("strength-fill");
    const strengthText = document.getElementById("strength-text");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        fill.style.width = "0%";
        strengthText.textContent = "Password Strength: —";
    } else if (score <= 2) {
        fill.style.width = "30%";
        strengthText.textContent = "Password Strength: Weak";
    } else if (score <= 4) {
        fill.style.width = "65%";
        strengthText.textContent = "Password Strength: Medium";
    } else {
        fill.style.width = "100%";
        strengthText.textContent = "Password Strength: Strong";
    }
}

function checkPassword() {
    const password = passwordInput.value;
    const result = document.getElementById("result");

    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    if (password.length === 0) {
        result.textContent = "Please enter a password.";
    } else if (score <= 2) {
        result.textContent = "❌ Weak Password";
    } else if (score <= 4) {
        result.textContent = "⚠️ Medium Password";
    } else {
        result.textContent = "✅ Strong Password";
    }
}



function togglePassword() {
    const password = document.getElementById("password");

    if (password.type === "password") {
        password.type = "text";
    } else {
        password.type = "password";
    }
}