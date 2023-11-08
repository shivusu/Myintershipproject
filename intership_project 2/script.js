document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registration-form");
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const password = form.querySelector("#password").value;
        const confirmPassword = form.querySelector("#confirm-password").value;

        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
        } else {
            // Here, you can send the registration data to the server for processing.
            // You can also perform email format validation and password strength requirements here.
            form.submit();
           alert("thankyou");
        }
    });
});
