const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
    if (window.scrollY >= 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// typed js

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#hero-titles', {
        strings: [
            'Web Developer',
            'Annotator',
            'Graphic Designer',
            'Photograper',
            'Logo Designer',
            'Web Designer.'
        ],
        typeSpeed: 100,
        loop: true,
        loopCount: Infinity,
        typeSpeed: 50,
        backDelay:2000,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('#my-names', {
        strings: [
            'My names are James Lochek Solomon and I am a creative in a variety pof fields in the creative industry ',
            'Lets work together from evey end.'
        ],
        typeSpeed: 100,
        loop: true,
        loopCount: Infinity,
        typeSpeed: 200,
        backDelay:2000,
    });
});


