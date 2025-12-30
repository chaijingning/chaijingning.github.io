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

/*explain*/
function setupTypeClickHandlers() {
    // Only apply on screens 1080px or smaller
    if (window.innerWidth <= 1080) {
        document.querySelectorAll('.type').forEach((typeDiv, index) => {
            typeDiv.style.cursor = 'pointer';
            typeDiv.addEventListener('click', function () {
                // Hide all introduce divs
                document.querySelectorAll('.introduce').forEach(intro => {
                    intro.style.display = 'none';
                });

                // Show the corresponding introduce div
                const introduceDiv = document.querySelectorAll('.introduce')[index];
                if (introduceDiv) {
                    introduceDiv.style.display = 'flex';
                }
            });
        });
    }
}

// Initialize on page load
window.addEventListener('load', function () {
    // Show the first intro on page load
    document.querySelectorAll('.introduce').forEach((intro, index) => {
        intro.style.display = index === 0 ? 'flex' : 'none';
    });

    setupTypeClickHandlers();
});

// Re-setup on window resize
window.addEventListener('resize', function () {
    setupTypeClickHandlers();
});

/*type click handler*/
document.querySelectorAll('.type').forEach((typeDiv, index) => {
    typeDiv.addEventListener('click', function () {
        const introduceDiv = document.querySelectorAll('.introduce')[index];
        const textMobile = this.nextElementSibling;

        // For screens 786px or smaller
        if (window.innerWidth <= 786) {
            // Toggle active class on this type
            this.classList.toggle('active');

            // Toggle the corresponding text-mobile div
            if (textMobile && textMobile.classList.contains('text-mobile')) {
                const isVisible = textMobile.style.display === 'flex';
                textMobile.style.display = isVisible ? 'none' : 'flex';
            }
        }
        // For screens larger than 786px
        else {
            // Toggle active class on this type
            const isActive = this.classList.contains('active');
            this.classList.toggle('active');

            // Toggle the corresponding introduce div
            if (introduceDiv) {
                if (isActive) {
                    introduceDiv.style.display = 'none';
                } else {
                    introduceDiv.style.display = 'flex';
                }
            }
        }
    });
});

// Set first type as active on load for screens larger than 786px
window.addEventListener('load', function () {
    if (window.innerWidth > 786) {
        document.querySelector('.type')?.classList.add('active');

        // Show first intro, hide rest
        document.querySelectorAll('.introduce').forEach((intro, index) => {
            intro.style.display = index === 0 ? 'flex' : 'none';
        });
    } else {
        // Hide all text-mobile on load
        document.querySelectorAll('.text-mobile').forEach(text => {
            text.style.display = 'none';
        });
    }
});