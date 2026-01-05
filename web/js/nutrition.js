/*type*/
document.querySelectorAll('.type').forEach((typeDiv, index) => {
    typeDiv.addEventListener('click', function () {
        // Remove active from all types
        document.querySelectorAll('.type').forEach(t => t.classList.remove('active'));

        // Add active to clicked type
        this.classList.add('active');

        // Hide all introduce divs
        document.querySelectorAll('.introduce').forEach(intro => {
            intro.style.display = 'none';
        });

        // Show corresponding introduce div
        const introduceDiv = document.querySelectorAll('.introduce')[index];
        if (introduceDiv) {
            introduceDiv.style.display = 'flex';
        }

        // For screens larger than 786px - show explain div
        if (window.innerWidth > 786) {
            // Hide all introduce divs
            document.querySelectorAll('.introduce').forEach(intro => {
                intro.style.display = 'none';
            });

            // Show corresponding introduce div
            const introduceDiv = document.querySelectorAll('.introduce')[index];
            if (introduceDiv) {
                introduceDiv.style.display = 'flex';
            }
        } else {
            // For screens 786px or smaller - toggle text-mobile
            const textMobileDiv = document.querySelectorAll('.text-mobile')[index];
            const isVisible = textMobileDiv.style.display === 'flex';

            // Hide all text-mobile divs
            document.querySelectorAll('.text-mobile').forEach(mobile => {
                mobile.style.display = 'none';
            });

            // Toggle the clicked text-mobile
            if (!isVisible) {
                textMobileDiv.style.display = 'flex';
            }
        }
    });
});

// Set first type as active on load
window.addEventListener('load', function () {
    document.querySelector('.type')?.classList.add('active');

    // Show first intro, hide rest
    document.querySelectorAll('.introduce').forEach((intro, index) => {
        intro.style.display = index === 0 ? 'flex' : 'none';
    });
});