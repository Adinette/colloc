$(document).ready(function () {
    // Gérer le clic sur le SVG
    $("#toggleSidebar").click(function () {
        // Montrer ou cacher le sidebar en fonction de son état actuel
        $("#sidebar").toggleClass("d-none");
    });
});
