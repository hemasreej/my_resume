// JavaScript for handling the hover effect on list items
document.addEventListener('DOMContentLoaded', function () {
    const listItems = document.querySelectorAll('li');

    listItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });
});
// JavaScript for handling the accordion effect on project sections
document.addEventListener('DOMContentLoaded', function () {
    const projectTitles = document.querySelectorAll('.project h3');

    projectTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            const projectContent = this.parentElement;
            projectContent.classList.toggle('expanded');

            // Collapse other projects when one is expanded
            projectTitles.forEach(function (otherTitle) {
                if (otherTitle !== title) {
                    otherTitle.parentElement.classList.remove('expanded');
                }
            });
        });
    });
});
// JavaScript for handling the scroll-to-top button
document.addEventListener('DOMContentLoaded', function () {
    const scrollButton = document.getElementById('scroll-to-top');

    // Show/hide the scroll-to-top button based on scroll position
    window.addEventListener('scroll', function () {
        if (window.scrollY > 200) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    // Smooth scroll to the top when the button is clicked
    scrollButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
// JavaScript for handling the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileNav = document.getElementById('mobile-nav');

    // Toggle the mobile navigation menu when the button is clicked
    mobileMenuButton.addEventListener('click', function () {
        mobileNav.classList.toggle('open');
    });

    // Close the mobile navigation menu when a menu item is clicked
    const mobileNavItems = document.querySelectorAll('#mobile-nav a');
    mobileNavItems.forEach(function (item) {
        item.addEventListener('click', function () {
            mobileNav.classList.remove('open');
        });
    });
});
