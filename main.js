let nav = document.querySelector(".fixed-menu");

nav.addEventListener('click', function(event){
   let clickTarget = event.target;
   let activeBtn = document.querySelector('.active');
   
   if (clickTarget.classList.contains('nav-link')){
       clickTarget.classList.add('active');
       activeBtn.classList.remove('active');
   }
});

let classLink = '.main-link';
window.onscroll = function() {
 let h = document.documentElement.clientHeight;
 if (window.scrollY >= h*3.5 ){
   classLink = '.comments-link';
 }
 else if (window.scrollY >= h*2.5){
   classLink = '.works-link';
 }
 else if (window.scrollY >= h*1.5 ){
   classLink = '.skills-link';
 }
 else if (window.scrollY >= h){
   classLink = '.about-link';
 }
 else{
   classLink = '.main-link';
 }
 let activeBtn = document.querySelector('.active');
 let newActiveBtn = document.querySelector(classLink);
 if (!newActiveBtn.classList.contains('active')){
   newActiveBtn.classList.add('active');
   activeBtn.classList.remove('active')
 }
};
