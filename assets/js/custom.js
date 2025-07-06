var interval = null;

function show_loading_box() {
    jQuery(".eco-box").css("display", "none");
    clearInterval(interval);
}
jQuery('document').ready(function() {

    interval = setInterval(show_loading_box, 1000);
});


// Wrap the code in a document ready function to ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the current page URL
    var currentPageUrl = window.location.href;

    // Select the menu item with the matching href attribute
    var menuItem = document.querySelector('nav a[href="' + currentPageUrl + '"]');

    // Add a custom class to the selected menu item
    if (menuItem) {
        menuItem.classList.add('current-menu-item');
    }
});