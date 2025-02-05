document.addEventListener("DOMContentLoaded", function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            if (this.hash !== "") {
                e.preventDefault();
                let target = document.querySelector(this.hash);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            }
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }
        
        alert("Form submitted successfully!");
        this.reset();
    });
});
