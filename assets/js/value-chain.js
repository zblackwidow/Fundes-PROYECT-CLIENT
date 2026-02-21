// Click toggle: activate/deactivate an item
document.querySelectorAll('.chain .item').forEach(function (item) {
    item.addEventListener('click', function () {
        var isActive = item.classList.contains('active');
        document.querySelectorAll('.chain .item').forEach(function (i) {
            i.classList.remove('active');
        });
        if (!isActive) item.classList.add('active');
    });
});

// Fluid sizing: recalculates --s based on container width
function resizeChain() {
    var chain = document.getElementById('chain');
    if (!chain) return;

    var isMobile = window.innerWidth <= 600;
    if (isMobile) {
        chain.style.setProperty('--s', '220px');
        return;
    }

    // Desktop/tablet: 4 circles + 3 gaps (gap = s*0.178) + padding (s*0.214 * 2)
    // total = s * (4 + 0.534 + 0.428) = s * 4.962
    // Use chain.clientWidth (= parent content area, excluding parent padding)
    var containerW = chain.clientWidth || window.innerWidth;
    var s = containerW / 4.962;
    s = Math.min(280, Math.max(120, s));
    chain.style.setProperty('--s', s + 'px');
}

resizeChain();
window.addEventListener('resize', resizeChain);
