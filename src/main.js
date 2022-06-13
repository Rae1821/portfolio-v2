
const button = document.querySelector('svg.w-6');

button.addEventListener('click', function() {
    let mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('block');
   
});