/* =========================================
   DEVdut KHASTAGIR
   PORTFOLIO JAVASCRIPT
========================================= */


/* ================================
   CUSTOM CURSOR
================================ */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

if (window.innerWidth > 700) {

    let mouseX = 0;
    let mouseY = 0;

    let followerX = 0;
    let followerY = 0;

    document.addEventListener("mousemove", (e) => {

        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

    });


    function animateCursor() {

        followerX += (mouseX - followerX) * 0.12;
        followerY += (mouseY - followerY) * 0.12;

        follower.style.left = `${followerX}px`;
        follower.style.top = `${followerY}px`;

        requestAnimationFrame(animateCursor);
    }

    animateCursor();


    const interactiveElements = document.querySelectorAll(
        "a, button, input, textarea"
    );

    interactiveElements.forEach((element) => {

        element.addEventListener("mouseenter", () => {

            follower.style.width = "60px";
            follower.style.height = "60px";

        });

        element.addEventListener("mouseleave", () => {

            follower.style.width = "38px";
            follower.style.height = "38px";

        });

    });

}


/* ================================
   MOBILE MENU
================================ */

const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const mobileLinks = document.querySelectorAll(".mobile-menu a");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");
    document.body.classList.toggle("menu-open");

});


mobileLinks.forEach((link) => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");

    });

});


/* ================================
   SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* ================================
   CONTACT FORM
================================ */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please complete all fields.";

        formMessage.classList.add("show");

        return;

    }


    /*
        FRONTEND DEMO

        The form currently does not send email.

        To make it actually send messages,
        connect it to a backend or service such as:

        - Formspree
        - EmailJS
        - Web3Forms
        - Your own PHP backend
    */


    formMessage.textContent =
        "Thanks! Your message has been prepared successfully.";

    formMessage.classList.add("show");

    contactForm.reset();

});


/* ================================
   SMOOTH ANCHOR OFFSET
================================ */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (
            targetId === "#" ||
            !document.querySelector(targetId)
        ) {
            return;
        }

        event.preventDefault();

        const target = document.querySelector(targetId);

        const headerOffset = 70;

        const targetPosition =
            target.getBoundingClientRect().top +
            window.scrollY -
            headerOffset;

        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });

    });

});


/* ================================
   PROJECT IMAGE PARALLAX
================================ */

const projects = document.querySelectorAll(".project-image");

if (window.innerWidth > 700) {

    projects.forEach((project) => {

        project.addEventListener("mousemove", (event) => {

            const rect = project.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) /
                rect.width -
                0.5;

            const y =
                (event.clientY - rect.top) /
                rect.height -
                0.5;

            const placeholder =
                project.querySelector(".project-placeholder");

            if (placeholder) {

                placeholder.style.transform =
                    `translate(${x * 12}px, ${y * 12}px)`;

            }

        });


        project.addEventListener("mouseleave", () => {

            const placeholder =
                project.querySelector(".project-placeholder");

            if (placeholder) {

                placeholder.style.transform =
                    "translate(0, 0)";

            }

        });

    });

}


/* ================================
   HEADER SCROLL EFFECT
================================ */

const header = document.querySelector(".header");

let previousScroll = 0;

window.addEventListener("scroll", () => {

    const currentScroll = window.scrollY;

    if (currentScroll > 100) {

        header.style.background =
            "rgba(10, 10, 10, 0.75)";

        header.style.backdropFilter =
            "blur(15px)";

    } else {

        header.style.background =
            "transparent";

        header.style.backdropFilter =
            "none";

    }

    previousScroll = currentScroll;

});
