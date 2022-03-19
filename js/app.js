let menuBtn = document.getElementById('menus');
let links = document.getElementById('links');

menuBtn.addEventListener('click',function(){
   links.classList.toggle('active')
})

// filter image
let myBtn = document.querySelector('.btns')
let filterImages = document.querySelectorAll('.img');

window.onload = () => {
    myBtn.addEventListener('click',function(e){
        let selectedItem = e.target.classList;
        if(selectedItem.contains("butn")){
            // changing the active button
            let activeBtn = myBtn.querySelector('.active');
            activeBtn.classList.remove('active')
            e.target.classList.add('active')
            // getting the data-attribute
            let filterName = e.target.getAttribute('data-name');
            // console.log(filterName)
            // filtering the images as data-name
            filterImages.forEach(image =>{
                let filImg =image.getAttribute('data-name');
                // if the user selected buton data-name is equal to 
                // the image data-name or 'all'
                if(filImg == filterName || filterName == "all"){
                    image.classList.remove('hide')
                    image.classList.add('show')
                }else{
                    image.classList.remove('show')
                    image.classList.add('hide')
                }
            });
        }
    });
}

// fixed to top
let pop = document.querySelector('.pop');
window.addEventListener('scroll', ()=>{
    let hei = 300
    let srcol = window.pageYOffset;
    console.log(srcol)
    if(srcol > hei){
        pop.style.display = 'flex'
    }else{
        pop.style.display = 'none'
    }
})