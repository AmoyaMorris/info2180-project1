document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.querySelector("#email");
    const message = document.querySelector(".newsletter .message");

    form.noValidate = true;

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = emailInput.value.trim();
        emailInput.value = email;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
        const isValid =
            emailInput.validity.valid && emailPattern.test(email);

        if (!isValid) {
            message.textContent = "Please enter a valid email address.";
            message.classList.add("error");
        } else {
            message.textContent =
                `Thank you! Your email address ${email} has been added to our mailing list!`;

            message.classList.remove("error");
        }
    });
});