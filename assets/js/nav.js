// Toggle menú mobile
const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const menuItemsWithSubmenu = document.querySelectorAll('.has-submenu');
const allMenuLinks = document.querySelectorAll('.menu a'); // Todos los links del menú

// Función para cerrar el menú mobile
function closeMenu() {
    hamburger.classList.remove('active');
    mainNav.classList.remove('active');
    menuItemsWithSubmenu.forEach(item => {
        item.classList.remove('active');
    });
}

// Toggle hamburguesa
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mainNav.classList.toggle('active');
});

// Toggle submenús en mobile
menuItemsWithSubmenu.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', (e) => {
        if (window.innerWidth <= 1024) {
            e.preventDefault();
            item.classList.toggle('active');
        }
    });
});

// Cerrar menú al hacer clic en CUALQUIER link (incluyendo submenús)
allMenuLinks.forEach(link => {
    // Solo cerrar si NO es un link padre de submenu
    if (!link.parentElement.classList.contains('has-submenu') ||
        link.parentElement.parentElement.classList.contains('submenu')) {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 1024) {
                closeMenu();
            }
        });
    }
});

// Cerrar menú al hacer click fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.header-wrapper')) {
        closeMenu();
    }
});

// Cerrar menú al redimensionar la ventana a desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
        closeMenu();
    }
});
