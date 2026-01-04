// Toggle sidebar filter on mobile
const filterToggle = document.getElementById('filter-toggle');
const sidebar = document.querySelector('.sidebar');

if (filterToggle && sidebar) {
    filterToggle.addEventListener('click', function () {
        sidebar.classList.toggle('active');

        // Optional: Add overlay
        let overlay = document.querySelector('.sidebar-overlay');
        if (!overlay) {
            overlay = document.createElement('div');
            overlay.className = 'sidebar-overlay';
            document.body.appendChild(overlay);

            // Close sidebar when clicking overlay
            overlay.addEventListener('click', function () {
                sidebar.classList.remove('active');
                overlay.classList.remove('active');
            });
        }
        overlay.classList.toggle('active');
    });
}