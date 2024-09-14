document.addEventListener('DOMContentLoaded', function () {

    // Function to handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevents the form from submitting by default

        // Validate form fields
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const collegeName = document.getElementById('business-name').value;
        const promotionIdea = document.getElementById('goals').value;
        const preferredDate = document.getElementById('date').value;

        if (!name || !email || !phone || !collegeName || !promotionIdea || !preferredDate) {
            alert("Please fill out all required fields.");
            return;
        }

        // Basic email validation
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Basic phone validation (10 digits)
        if (!validatePhone(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Success message (You can submit the form via AJAX if needed)
        alert("Form submitted successfully!");
    });

    // Helper function to validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Helper function to validate phone number
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    // Handle checkbox selections dynamically
    const checkboxGroup = document.querySelector('.checkbox-group');
    checkboxGroup.addEventListener('change', function (event) {
        const selected = Array.from(checkboxGroup.querySelectorAll('input[type="checkbox"]:checked'));
        if (selected.length > 0) {
            console.log("Selected platforms:", selected.map(checkbox => checkbox.nextSibling.textContent.trim()));
        }
    });

    // Handle account verification button click
    const verifyButton = document.querySelector('.verify-btn');
    verifyButton.addEventListener('click', function (event) {
        event.preventDefault();
        const socialMediaLink = document.getElementById('website').value;
        if (!socialMediaLink) {
            alert("Please enter a website or social media profile link to verify.");
        } else {
            alert("Verification process initiated for: " + socialMediaLink);
            // Redirect to verification page (if needed)
            window.open(verifyButton.href, '_blank');
        }
    });

});
