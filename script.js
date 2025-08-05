// --- Interactive Feature 1: ISO Standard Selection Details ---
document.getElementById("standardSelect").addEventListener("change", function() {
    const standardDetails = document.getElementById("standardDetails");
    const value = this.value;

    let description = "";
    switch (value) {
        case "ISO 9001":
            description = "ISO 9001 focuses on Quality Management Systems to ensure consistent product/service quality.";
            break;
        case "ISO 14001":
            description = "ISO 14001 sets out criteria for Environmental Management Systems, reducing environmental impact.";
            break;
        case "ISO 22000":
            description = "ISO 22000 is for Food Safety Management, ensuring food is safe at every step of the supply chain.";
            break;
        case "ISO 45001":
            description = "ISO 45001 is for Occupational Health and Safety, preventing work-related injuries and illnesses.";
            break;
        default:
            description = "";
    }

    standardDetails.innerHTML = description ? `<p>${description}</p>` : "";
});

// --- Interactive Feature 2: Light/Dark Mode Toggle ---
document.getElementById("toggleMode").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// --- Event Handling for FAQ Toggle ---
let faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach(q => {
    q.addEventListener("click", function() {
        this.nextElementSibling.classList.toggle("faq-answer-visible");
        if (this.nextElementSibling.style.display === "block") {
            this.nextElementSibling.style.display = "none";
        } else {
            this.nextElementSibling.style.display = "block";
        }
    });
});

// --- Custom Form Validation ---
document.getElementById("isoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validateForm();
});

// Custom Form Validation Function
function validateForm() {
    const companyName = document.getElementById("companyName").value.trim();
    const email = document.getElementById("email").value.trim();
    const messageDiv = document.getElementById("formMessage");
    let message = "";

    // Check Company Name
    if (companyName === "") {
        message += "Company Name is required.<br>";
    }

    // Validate Email with Regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        message += "Please enter a valid email address.<br>";
    }

    // Display Validation Result
    if (message === "") {
        messageDiv.innerHTML = "<span style='color:green;'>Application Submitted Successfully! ✅</span>";
    } else {
        messageDiv.innerHTML = `<span style='color:red;'>${message}</span>`;
    }
}

// --- Input Focus/Blur Highlighting ---
let inputs = document.querySelectorAll("input, select");
inputs.forEach(input => {
    input.addEventListener("focus", function() {
        this.style.backgroundColor = "#e6ffe6";
    });
    input.addEventListener("blur", function() {
        this.style.backgroundColor = "white";
    });
});
