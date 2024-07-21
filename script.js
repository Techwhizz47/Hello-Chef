// script.js
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const navitems2 = document.getElementById('navitems2');
    const overlay = document.getElementById('overlay');

    toggleButton.addEventListener('click', function() {
        // Toggle navitems2 visibility
        navitems2.style.left = '0';
        overlay.style.display = 'block';
        // toggleButton.style.display = 'none'; // Hide toggle button
    });

    overlay.addEventListener('click', function() {
        // Retract navitems2 when clicking outside of it
        navitems2.style.left = '-500px';
        overlay.style.display = 'none';
        toggleButton.style.display = 'block'; // Show toggle button
    });
});



