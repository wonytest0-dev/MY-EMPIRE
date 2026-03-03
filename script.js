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