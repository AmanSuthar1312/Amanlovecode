document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const themeText = document.getElementById('theme-text');
    
    // Check for saved preference or use system preference
    const currentTheme = localStorage.getItem('theme') || 
                        (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    
    // Apply current theme
    if (currentTheme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        toggle.checked = true;
        themeText.textContent = 'Light Mode';
    }
    
    // Toggle theme on switch
    toggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeText.textContent = 'Light Mode';
        } else {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'dark');
            themeText.textContent = 'Dark Mode';
        }
    });
    
    // Watch for system theme changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
        const newTheme = e.matches ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        toggle.checked = (newTheme === 'light');
        themeText.textContent = newTheme === 'light' ? 'Light Mode' : 'Dark Mode';
        localStorage.setItem('theme', newTheme);
    });
});