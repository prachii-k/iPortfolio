// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})

document.addEventListener('DOMContentLoaded', function() {
    // Get form fields and error containers
    const nameField = document.getElementById('name');
    const emailField = document.getElementById('email');
    const subjectField = document.getElementById('subject');
    const messageField = document.getElementById('projectDetails');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('projectDetailsError');

    // Validation function for each field
    function validateField(field, errorElement, validationFn) {
        field.addEventListener('input', function() {
            const errorMessage = validationFn(field.value);
            if (errorMessage) {
                errorElement.textContent = errorMessage;
                errorElement.style.display = 'block';
            } else {
                errorElement.style.display = 'none';
            }
        });
    }

    // Define validation rules for each field
    function validateName(value) {
        // Name should only contain letters and spaces (no numbers or symbols)
        const nameRegex = /^[A-Za-z\s]+$/;
        return value.trim() && nameRegex.test(value) ? '' : 'Name must only contain letters and spaces.';
    }

    function validateEmail(value) {
        const emailRegex = /\S+@\S+\.\S+/;
        return value.trim() && emailRegex.test(value) ? '' : 'Please enter a valid email address.';
    }

    function validateSubject(value) {
        return value.trim() ? '' : 'Subject is required.';
    }

    function validateMessage(value) {
        return value.trim() ? '' : 'Message is required.';
    }

    // Attach validation to each field
    validateField(nameField, nameError, validateName);
    validateField(emailField, emailError, validateEmail);
    validateField(subjectField, subjectError, validateSubject);
    validateField(messageField, messageError, validateMessage);

    // Handle form submission (after field validation)
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault();

        // Check for any validation errors before submitting
        const isValid = [
            nameError.style.display === 'none',
            emailError.style.display === 'none',
            subjectError.style.display === 'none',
            messageError.style.display === 'none'
        ].every(Boolean);

        if (isValid) {
            const name = nameField.value;
            const email = emailField.value;
            const subject = subjectField.value;
            const projectDetails = messageField.value;

            // Handle form data, e.g., send to server or display
            console.log({ name, email, subject, projectDetails });

            // Optionally reset the form or show success message
            document.getElementById('contactForm').reset();
        } else {
            alert('Form has errors. Please fix them before submitting.');
        }
    });
});