// ===============================
// NAVBAR
// ===============================


const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");


window.addEventListener("scroll", ()=>{


    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }


});




// Mobile menu

hamburger.addEventListener("click", ()=>{


    navLinks.classList.toggle("active");

    hamburger.classList.toggle("open");


});




// Close menu after clicking link

document.querySelectorAll(".nav-links a")
.forEach(link=>{


    link.addEventListener("click", ()=>{

        navLinks.classList.remove("active");

        hamburger.classList.remove("open");

    });


});








// ===============================
// PROJECT FILTER
// ===============================


const filterButtons = document.querySelectorAll(".filter-btn");

const projectGroups = document.querySelectorAll(".projects");



filterButtons.forEach(button=>{


    button.addEventListener("click", ()=>{


        const category = button.dataset.category;



        // remove active buttons

        filterButtons.forEach(btn=>{

            btn.classList.remove("active");

        });



        button.classList.add("active");




        // hide projects

        projectGroups.forEach(group=>{


            group.classList.remove("active");


        });



        // show selected projects

        document
        .querySelector("." + category)
        .classList.add("active");



    });



});








// ===============================
// TYPED JS
// ===============================



document.addEventListener("DOMContentLoaded", ()=>{


new Typed("#hero-titles",{


    strings:[

        "Web Developer",
        "Annotator",
        "Graphic Designer",
        "Photographer",
        "Logo Designer",
        "UI/UX Designer"

    ],


    typeSpeed:70,

    backSpeed:40,

    loop:true,


});






new Typed("#my-names",{


    strings:[

        "My name is James Lochek Solomon. I create digital solutions through technology and creativity.",

        "Let's work together and build something meaningful."

    ],



    typeSpeed:40,

    backSpeed:20,

    loop:true,


});



});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================


const reveals = document.querySelectorAll(".reveal");



const revealOnScroll = ()=>{


    reveals.forEach(element=>{


        const position =
        element.getBoundingClientRect().top;


        const screen =
        window.innerHeight;



        if(position < screen - 100){

            element.classList.add("show");

        }


    });


};



window.addEventListener(
"scroll",
revealOnScroll
);



revealOnScroll();
