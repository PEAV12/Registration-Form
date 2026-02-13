document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function (event) {

        const firstName = document.getElementById("fName").value.trim();
        const middleName = document.getElementById("mName").value.trim();
        const lastName = document.getElementById("lName").value.trim();
        const course = document.getElementById("course").value;
        const gender = document.getElementById("gender").value;
        const birthDate = document.querySelector("input[type='date']").value;
        const email = document.getElementById("Email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const password = document.getElementById("passw").value;
        const confirmPassword = document.getElementById("repassw").value;

        const namePattern = /^[A-Za-z\s]+$/;
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const contactPattern = /^09\d{9}$/;  // PH format example (09XXXXXXXXX)

        if (!namePattern.test(firstName)) {
            alert("First Name must consist of letters only.");
            event.preventDefault();
            return;
        }

        if (middleName !== "" && !namePattern.test(middleName)) {
            alert("Middle Name must consist of letters only.");
            event.preventDefault();
            return;
        }

        if (!namePattern.test(lastName)) {
            alert("Last Name must consist of letters only.");
            event.preventDefault();
            return;
        }

        if (course === "default") {
            alert("Please select a Course.");
            event.preventDefault();
            return;
        }

        if (gender === "default") {
            alert("Please select Gender");
            event.preventDefault();
            return;
        }

        if (birthDate === "") {
            alert("Please enter your Date of Birth");
            event.preventDefault();
            return;
        }


        if (!emailPattern.test(email)) {
            alert("Please enter a valid Email Address.");
            event.preventDefault();
            return;
        }

        if (!contactPattern.test(contact)) {
            alert("Contact number must be 11 digits and start with 09.");
            event.preventDefault();
            return;
        }

        // PASSWORD LENGTH
        if (password.length < 8) {
            alert("Password must be at least 8 characters long.");
            event.preventDefault();
            return;
        }

        // PASSWORD MATCH
        if (password !== confirmPassword) {
            alert("Woops! Passwords do not match.");
            event.preventDefault();
            return;
        }

    });

});