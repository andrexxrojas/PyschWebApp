let legendBtn = document.querySelector(".legend-btn")
let sortBtn = document.querySelector(".sort-btn")
let dropdownArr = document.querySelectorAll(".dropdown-info")

// When legend button clicked:
legendBtn.addEventListener("click", (e) => {
    const dropdownInfo = document.querySelector(".legend-btn .dropdown-info");
    const currentDisplay = window.getComputedStyle(dropdownInfo).display;

    sortBtn.querySelector(".dropdown-info").style.display = "none";

    if (currentDisplay === "none") {
        dropdownInfo.style.display = "flex";
    } else {
        dropdownInfo.style.display = "none";
    }
})


// When sort button clicked:
sortBtn.addEventListener("click", (e) => {
    const dropdownInfo = document.querySelector(".sort-btn .dropdown-info");
    const currentDisplay = window.getComputedStyle(dropdownInfo).display;

    legendBtn.querySelector(".dropdown-info").style.display = "none";

    if (currentDisplay === "none") {
        dropdownInfo.style.display = "flex";
    } else {
        dropdownInfo.style.display = "none";
    }
})

// When sort option clicked
let sortOption = sortBtn.querySelectorAll(".dropdown-info small");

sortOption.forEach((option) => {
    option.addEventListener("click", (e) => {
        console.log(e.target.textContent);
        sortBtn.querySelector(".sort-option").textContent = e.target.textContent;
    });
});

// If anything clicked outside while dropdown active:
document.addEventListener("click", (e) => {
    if (!legendBtn.contains(e.target) && !sortBtn.contains(e.target)) {
        dropdownArr.forEach((item) => {
            item.style.display = "none";
        });
    }
});

// When Client Folder Clicked
document.addEventListener("DOMContentLoaded", () => {
    let clientFolder = document.querySelectorAll(".folder-container .folder")

    clientFolder.forEach((item) => {
        let closeOverlayBtn = item.querySelector(".client-info-overlay .client-info-container .client-nav .right-side .close-btn")
        let clientOverlay = item.querySelector(".client-info-overlay")

        let clientInfoBtn = item.querySelector(".client-info-container .client-nav .client-info-btn")
        let clientInfoMenu = item.querySelector(".client-info-container .client-info")
        let clientInfoMenuCloseBtn =  item.querySelector(".client-info-container .client-info .close-btn")
        let clientInfoContainer = item.querySelector(".client-info-container")

        // Open folder overlay
        item.addEventListener("click", (e) => {
            clientOverlay.style.display = "flex"
        })

        // Close overlay
        closeOverlayBtn.addEventListener("click", (e) => {
            e.stopPropagation();  // Prevent the click from bubbling up to the overlay itself
            clientOverlay.style.display = "none"
        })

        clientOverlay.addEventListener("click", (e) => {
            if (!clientInfoContainer.contains(e.target)) {
                e.stopPropagation();
                clientInfoMenu.style.right = "-40%";
                clientOverlay.style.display = "none";
            }
        })

        // Show client info
        clientInfoBtn.addEventListener("click", () => {
            const currentRight = window.getComputedStyle(clientInfoMenu).right;

            if (currentRight == "0px") {
                clientInfoMenu.style.right = "-40%";
            } else {
                clientInfoMenu.style.right = "0";
            }

            console.log("clicked");
        })

        // Close client info
        clientInfoMenuCloseBtn.addEventListener("click", () => {
            clientInfoMenu.style.right = "-40%";
        })

        clientInfoContainer.addEventListener("click", (e) => {
            const currentRight = window.getComputedStyle(clientInfoMenu).right;

            if (currentRight == "0px" && !clientInfoMenu.contains(e.target)) {
                clientInfoMenu.style.right = "-40%";
            }
        })
    })
})


// When New Button is Clicked
let newClientOverlay = document.querySelector(".new-client-overlay")
let newClientBtn = document.querySelector(".controls-container .client-controls .new-btn")

newClientBtn.addEventListener("click", () => {
    if (newClientOverlay.style.display = "none") {
        newClientOverlay.style.display = "flex"
    }
})

// Closing New Client Overlay
let newClientOverlayCloseBtn = document.querySelector(".new-client-container .client-nav .close-btn")
let newClientContainer = document.querySelector(".new-client-overlay .new-client-container")

newClientOverlayCloseBtn.addEventListener("click", () => {
    newClientOverlay.style.display = "none"
})

newClientOverlay.addEventListener("click", (e) => {
    if (!newClientContainer.contains(e.target)) {
        newClientOverlay.style.display = "none"
    }
})

// Closing Notifications Menu
let notifMenu = document.querySelector(".notifications-menu")
let notifMenuCloseBtn = document.querySelector(".notifications-menu .close-btn")

notifMenuCloseBtn.addEventListener("click", () => {
    notifMenu.style.right = "-250px";
})

// Opening Notifications Menu
let notificationsBtn = document.querySelector(".notifications-btn")

notificationsBtn.addEventListener("click", () => {
    notifMenu.style.right = "0";
})