let menuBtn = document.getElementById('menus');
let links = document.getElementById('links');

menuBtn.addEventListener('click',function(){
   links.classList.toggle('active')
})