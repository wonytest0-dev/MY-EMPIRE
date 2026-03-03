document.addEventListener("DOMContentLoaded", function() {

    const hamburger = document.getElementById("hamburger");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");
    const menuGroups = document.querySelectorAll(".menu-group");

    // Hamburger click
    hamburger.addEventListener("click", function() {
        hamburger.classList.toggle("active");
        sideMenu.classList.toggle("active");
        overlay.classList.toggle("active");
    });

    // Overlay click close
    overlay.addEventListener("click", function() {
        hamburger.classList.remove("active");
        sideMenu.classList.remove("active");
        overlay.classList.remove("active");
    });

    // Submenu toggle
    menuGroups.forEach(group => {
        const link = group.querySelector("a");

        link.addEventListener("click", function(e) {
            e.preventDefault();

            menuGroups.forEach(item => {
                if (item !== group) {
                    item.classList.remove("active");
                }
            });

            group.classList.toggle("active");
        });
    });

});
document.addEventListener("DOMContentLoaded", function() {

    const assistive = document.getElementById("hamburger");

    let isDragging = false;
    let offsetX, offsetY;

    // DESKTOP
    assistive.addEventListener("mousedown", function(e) {
        isDragging = true;
        offsetX = e.clientX - assistive.getBoundingClientRect().left;
        offsetY = e.clientY - assistive.getBoundingClientRect().top;
    });

    document.addEventListener("mousemove", function(e) {
        if (!isDragging) return;

        assistive.style.left = (e.clientX - offsetX) + "px";
        assistive.style.top = (e.clientY - offsetY) + "px";
        assistive.style.right = "auto";
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
    });

    // MOBILE
    assistive.addEventListener("touchstart", function(e) {
        const touch = e.touches[0];
        offsetX = touch.clientX - assistive.getBoundingClientRect().left;
        offsetY = touch.clientY - assistive.getBoundingClientRect().top;
    });

    assistive.addEventListener("touchmove", function(e) {
        const touch = e.touches[0];

        assistive.style.left = (touch.clientX - offsetX) + "px";
        assistive.style.top = (touch.clientY - offsetY) + "px";
        assistive.style.right = "auto";
    });

});
