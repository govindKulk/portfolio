const  navToggle = document.querySelector(".nav-toggle");

const navLinks = document.querySelectorAll(".nav-link")
navToggle.addEventListener('click',() => {
    document.body.classList.toggle('nav-open');
})

//You can also use link =>{} instead of (link) => {} since parameter is only one
 
navLinks.forEach((link)=>{link.addEventListener('click', ()=>{
    document.body.classList.remove('nav-open');
})})