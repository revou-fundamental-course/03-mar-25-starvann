document.addEventListener("DOMContentLoaded", function () {
    // JavaScript for welcoming speech
    const userName = prompt("Please enter your name:");
    document.getElementById("username").innerText = userName || "Guest";

    // JavaScript for slideshow
    let slideIndex = 0;

    function showSlides() {
        let slides = document.getElementsByClassName("slide");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000);
    }
    showSlides();

    // JavaScript for form validation
    document.getElementById("messageForm").addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name && email && message) {
            document.getElementById("formOutput").innerHTML =
                `<p><strong>Name:</strong> ${name}</p>
                 <p><strong>Email:</strong> ${email}</p>
                 <p><strong>Message:</strong> ${message}</p>`;
        } else {
            alert("Please fill in all fields.");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbarNav = document.querySelector(".navbar-nav");

    menuToggle.addEventListener("click", function () {
        navbarNav.classList.toggle("show");
    });
});
