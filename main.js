let nav = document.querySelector(".fixed-menu");
nav.addEventListener('click', function(event){
  let clickTarget = event.target;
  let activeBtn = document.querySelector('.active');
  if (clickTarget.classList.contains('nav-link') ){
      clickTarget.classList.add('active');
      activeBtn.classList.remove('active');

      let mobile = document.querySelector('.mobile-menu');
      if (!mobile.classList.contains('hide')){
          mobile.classList.add('hide'); 
      } else {
        body.classList.remove('hide')
      }
      
  }
    let body = document.querySelector('body');
  let mobileMenu = document.querySelector('.mobile-menu');
  if (!body.classList.contains('odd-scroll') &&
      !mobileMenu.classList.contains('hide')){
    body.classList.add('off-scroll');
  } else {
    body.classList.remove('off-scroll')
  }
});

let mobileMenu = document.querySelector('.mobile-menu');
 if (!mobileMenu.classList.contains('hide')){
  console.log('2')
  let clickTarget1 = document.querySelector('.nav-link')
  clickTarget1.addEventListener('click', function(){
    mobileMenu.classList.add('hide')
  })
 }

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

document.querySelector('.mobile-button') .addEventListener('click', function(event) {
  document.querySelector('.mobile-menu') .classList.toggle('hide')
  document.querySelector('.mobile-button').style.display='none'
});


 