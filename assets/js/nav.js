const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const menuItemsWithSubmenu = document.querySelectorAll('.has-submenu');
const allMenuLinks = document.querySelectorAll('.menu a'); // Todos los links del menú

function closeMenu() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    menuItemsWithSubmenu.forEach(item => {
        item.classList.remove('active');
    });
}

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
});

menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

allMenuLinks.forEach(link => {
    if (!link.parentElement.classList.contains('has-submenu') ||
        link.parentElement.parentElement.classList.contains('submenu')) {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                closeMenu();
            }
        });
    }
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-wrapper')) {
        closeMenu();
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMenu();
    }
});
