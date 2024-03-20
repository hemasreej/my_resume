document.addEventListener('DOMContentLoaded', function () {
    // Improved hover effect handling
    const hoverableElements = document.querySelectorAll('section, .project h3, header');
    
    hoverableElements.forEach(function (element) {
        element.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });
        
        element.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });

    // Enhanced accordion effect for projects and potentially other sections
    const accordions = document.querySelectorAll('.accordion-title');

    accordions.forEach(function (accordion) {
        accordion.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('expanded');
            // Optionally collapse others
            let current = this;
            accordions.forEach(function (item) {
                if (item !== current) {
                    item.nextElementSibling.classList.remove('expanded');
                }
            });
        });
    });

    // Scroll-to-top button enhancement
    const scrollButton = document.createElement('button');
    scrollButton.textContent = '↑';
    scrollButton.id = 'scroll-to-top';
    document.body.appendChild(scrollButton);
    scrollButton.style.display = 'none'; // Hide button initially
    scrollButton.style.position = 'fixed';
    scrollButton.style.bottom = '20px';
    scrollButton.style.right = '20px';

    window.addEventListener('scroll', function () {
        if (window.scrollY > 500) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Dynamic mobile navigation (If applicable in the future)
    const mobileMenuButton = document.querySelector('#mobile-menu-button');
    const mobileNav = document.querySelector('#mobile-nav');

    if (mobileMenuButton && mobileNav) {
        mobileMenuButton.addEventListener('click', function () {
            mobileNav.classList.toggle('open');
        });

        document.querySelectorAll('#mobile-nav a').forEach(function (navItem) {
            navItem.addEventListener('click', function () {
                mobileNav.classList.remove('open');
            });
        });
    }
});
