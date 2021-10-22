const activeNav = document.querySelectorAll(".nav_link");


activeNav.forEach(function(item) {
    item.addEventListener("click", function() {
        let currentNav = item;

        activeNav.forEach(function(item) {
            item.classList.remove('active');
        });
        currentNav.classList.add('active');
    });
});

