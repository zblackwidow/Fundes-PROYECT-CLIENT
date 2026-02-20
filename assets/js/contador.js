function animateCounterVertical(element, target, hasPlus) {
    const duration = 2000;
    const targetStr = target.toString();
    const digits = targetStr.length;

    element.innerHTML = '';

    if (hasPlus) {
        const plusSpan = document.createElement('span');
        plusSpan.textContent = '+';
        element.appendChild(plusSpan);
    }

    for (let i = 0; i < digits; i++) {
        const digitSpan = document.createElement('span');
        digitSpan.style.display = 'inline-block';
        digitSpan.style.overflow = 'hidden';
        digitSpan.style.height = '1em';
        digitSpan.style.verticalAlign = 'top';


        const column = document.createElement('div');
        column.style.transform = 'translateY(0)';
        column.style.transition = `transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;


        const finalDigit = parseInt(targetStr[i]);
        const rotations = 0;
        for (let j = 0; j <= (rotations * 10) + finalDigit; j++) {
            const num = document.createElement('div');
            num.textContent = j % 10;
            num.style.height = '1em';
            num.style.lineHeight = '1em';
            column.appendChild(num);
        }

        digitSpan.appendChild(column);
        element.appendChild(digitSpan);


        setTimeout(() => {
            const offset = (rotations * 10 + finalDigit) * -1;
            column.style.transform = `translateY(${offset}em)`;
        }, 100 + (i * 50));
    }
}


const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');

            const counters = entry.target.querySelectorAll('.metric-number');

            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const hasPlus = counter.textContent.includes('+');

                animateCounterVertical(counter, target, hasPlus);
            });

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const metricsList = document.querySelector('.metrics-list');
if (metricsList) {
    observer.observe(metricsList);
}
