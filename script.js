let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const typed = new Typed('.multiple-text',  {
    strings: ["Student","Developer","Tech Enthusiast","Builder","Problem Solver","Creator"],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1200,
    loop: true,
 });

 const sections = document.querySelectorAll(
".home, .about, .services , .contact , .footer"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } 
    else {
      entry.target.classList.remove("active");
    }

  });
}, { threshold: 0.4 });

sections.forEach(section => {
  observer.observe(section);
});
