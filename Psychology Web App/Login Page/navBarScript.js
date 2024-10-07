let navTabs = document.querySelectorAll(".menu-tabs ul li");

navTabs.forEach((item) => {
    item.addEventListener("click", (e) => {
        const dropdownInfo = item.querySelector(".dropdown-info");

        if (dropdownInfo.style.height && dropdownInfo.style.height !== "0px") {
            dropdownInfo.style.opacity = "0";
            dropdownInfo.style.height = "0";
        } else {
            dropdownInfo.style.height = `${dropdownInfo.scrollHeight}px`;
            setTimeout(() => {
                dropdownInfo.style.opacity = "1"; // Fade in text
            }, 100);
        }
    })
})

let menuBtn = document.querySelector(".right-side button");
let menu = document.querySelector(".menu");
let body = document.querySelector("body");

menuBtn.addEventListener("click", () => {
    const currentRight = window.getComputedStyle(menu).right;

    if (currentRight == "0px") {
        menu.style.right = "-100%";
    } else {
        menu.style.right = "0";
    }
})

let closeBtn = document.querySelector(".menu button")

closeBtn.addEventListener("click", () => {
    menu.style.right = "-100%";

    navTabs.forEach((item) => {
        const dropdownInfo = item.querySelector(".dropdown-info");

        dropdownInfo.style.opacity = "0";
        dropdownInfo.style.height = "0";
    })
})

body.addEventListener("click", (e) => {
    const menuIsOpen = window.getComputedStyle(menu).right === "0px";

    if (menuIsOpen && !menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.style.right = "-100%";

        navTabs.forEach((item) => {
            const dropdownInfo = item.querySelector(".dropdown-info");
            dropdownInfo.style.opacity = "0";
            dropdownInfo.style.height = "0";
        });
    }
});
