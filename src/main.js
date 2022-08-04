
//Toggle mobile nave menu on click
const button = document.querySelector('svg.w-6');

button.addEventListener('click', function() {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
   
});


//Scroll To Top Button 

//Get the button
let mybutton = document.getElementById("btn-back-to-top");


//When user scrolls down 20px from top of page show button 
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if(
        document.body.scrollTop > 20 || 
        document.documentElement.scrollTop > 20
        ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

//When user clicks button, scroll to top of page 
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0; //For safari
    document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE, and Opera
}




