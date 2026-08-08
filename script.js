document.addEventListener('DOMContentLoaded', () => {
    
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function switchPage(targetId) {
        navLinks.forEach(nav => {
            if (nav.getAttribute('data-target') === targetId) {
                nav.classList.add('active');
            } else {
                nav.classList.remove('active');
            }
        });

        pages.forEach(page => {
            if(page.id === targetId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 
            const targetId = link.getAttribute('data-target');
            switchPage(targetId);
        });
    });

    const readMoreBtn = document.getElementById('read-more-btn');
    if(readMoreBtn) {
        readMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('about');
        });
    }

    const viewProjectsBtn = document.getElementById('view-projects-btn');
    if(viewProjectsBtn) {
        viewProjectsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            switchPage('activities');
        });
    }

    const themeToggle = document.getElementById('theme-toggle');
    
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        if (document.body.classList.contains('dark-mode')) {
            themeToggle.innerHTML = '☀️ Light Mode';
        } else {
            themeToggle.innerHTML = '🌙 Dark Mode';
        }
    });
});