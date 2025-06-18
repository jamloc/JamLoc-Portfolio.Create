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

// PROJECTS 

const webBtns1 = document.querySelector(".web-btn1");
const webBtns2 = document.querySelector(".web-btn2");
const webBtns3 = document.querySelector(".web-btn3");
const whiteArrow = document.querySelector(".white-arrow");
const blackArrow = document.querySelector(".black-arrow");
const webProjects = document.querySelector(".web-projects");
const graphicProjects = document.querySelector(".graphic-projects");
const videoProjects = document.querySelector(".video-projects");

webBtns1.addEventListener( "click", ()=> {
        whiteArrow.style.display = "none";
        blackArrow.style.transform = "rotate(180deg)";
        blackArrow.style.display = "block";
        webProjects.style.display = "block";
        graphicProjects.style.display = "none";
        videoProjects.style.display = "none";
        webBtns1.classList.add("active")
        webBtns2.classList.remove("active")
        webBtns3.classList.remove("active")
});
webBtns2.addEventListener( "click", ()=> {
        whiteArrow.style.display = "block";
        whiteArrow.style.transform = "rotate(0deg)";
        blackArrow.style.display = "none";
        blackArrow.style.transform = "rotate(0deg)";
        webProjects.style.display = "none";
        graphicProjects.style.display = "block";
        videoProjects.style.display = "none";
        webBtns1.classList.remove("active");
        webBtns2.classList.add("active");
        webBtns3.classList.remove("active");
});
webBtns3.addEventListener( "click", ()=> {
        whiteArrow.style.display = "block";
        whiteArrow.style.transform = "rotate(0deg)";
        blackArrow.style.display = "none";
        blackArrow.style.transform = "rotate(0deg)";
        webProjects.style.display = "none";
        graphicProjects.style.display = "none";
        videoProjects.style.display = "block";
        webBtns1.classList.remove("active");
        webBtns2.classList.remove("active");
        webBtns3.classList.add("active");
});

  const buttons = document.querySelectorAll('.web-btn1, .web-btn2, .web-btn3');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove 'active' from all buttons
      buttons.forEach(btn => btn.classList.remove('active'));

      // Add 'active' to the clicked button
      button.classList.add('active');
    });
  });

// webBtns1.forEach((btn) => {
//     btn.addEventListener("mouseleave", () => {
//         whiteArrow.style.display = "block";
//         whiteArrow.style.transform = "rotate(180deg)";
//         blackArrow.style.display = "none";
//         blackArrow.style.transform = "rotate(180deg)";
//         webProjects.style.display = "none";
//         graphicProjects.style.display = "none";
//         videoProjects.style.display = "none";
//     });
// });



// window.addEventListener('scroll', () => {
//     if (window.scrollY >= 100) {
//         navbar.classList.add('scrolled');
//     } else {
//         navbar.classList.remove('scrolled');
//     }
// });

// hamburger.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     hamburger.classList.toggle('active');
// });



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


