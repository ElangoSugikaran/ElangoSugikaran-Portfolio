// Dark Mode Toggle System
// (function() {
//     // Check for saved theme preference or default to 'light'
//     const currentTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     // Function to toggle theme
//     function toggleTheme() {
//         const theme = document.documentElement.getAttribute('data-theme');
//         const newTheme = theme === 'light' ? 'dark' : 'light';
        
//         document.documentElement.setAttribute('data-theme', newTheme);
//         localStorage.setItem('theme', newTheme);
//     }

//     // Expose toggle function globally
//     window.toggleDarkMode = toggleTheme;
// })();


//  <!-- Dark Mode Toggle Script -->
//     <script>
//         // Dark mode toggle functionality
//         const darkModeToggle = document.getElementById('darkModeToggle');
//         const modeIcon = document.getElementById('modeIcon');
//         const htmlElement = document.documentElement;

//         // Check for saved theme preference or default to light mode
//         const currentTheme = localStorage.getItem('theme') || 'light';
//         htmlElement.setAttribute('data-theme', currentTheme);
        
//         // Set initial icon
//         if (currentTheme === 'dark') {
//             modeIcon.classList.remove('fa-moon');
//             modeIcon.classList.add('fa-sun');
//         }

//         // Toggle theme on button click
//         darkModeToggle.addEventListener('click', function() {
//             const currentTheme = htmlElement.getAttribute('data-theme');
//             const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
//             // Update theme
//             htmlElement.setAttribute('data-theme', newTheme);
//             localStorage.setItem('theme', newTheme);
            
//             // Update icon with animation
//             modeIcon.style.transform = 'rotate(360deg)';
            
//             setTimeout(() => {
//                 if (newTheme === 'dark') {
//                     modeIcon.classList.remove('fa-moon');
//                     modeIcon.classList.add('fa-sun');
//                 } else {
//                     modeIcon.classList.remove('fa-sun');
//                     modeIcon.classList.add('fa-moon');
//                 }
//                 modeIcon.style.transform = 'rotate(0deg)';
//             }, 250);
//         });
//     </script>

// Dark Mode Toggle System
(function() {
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Function to toggle theme
    function toggleTheme() {
        const theme = document.documentElement.getAttribute('data-theme');
        const newTheme = theme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Update icon if exists
        updateIcon(newTheme);
    }

    // Function to update icon
    function updateIcon(theme) {
        const modeIcon = document.getElementById('modeIcon');
        if (modeIcon) {
            modeIcon.style.transform = 'rotate(360deg)';
            setTimeout(() => {
                if (theme === 'dark') {
                    modeIcon.classList.remove('fa-moon');
                    modeIcon.classList.add('fa-sun');
                } else {
                    modeIcon.classList.remove('fa-sun');
                    modeIcon.classList.add('fa-moon');
                }
                modeIcon.style.transform = 'rotate(0deg)';
            }, 250);
        }
    }

    // Set initial icon on page load
    document.addEventListener('DOMContentLoaded', function() {
        updateIcon(currentTheme);
    });

    // Expose toggle function globally
    window.toggleDarkMode = toggleTheme;
})();