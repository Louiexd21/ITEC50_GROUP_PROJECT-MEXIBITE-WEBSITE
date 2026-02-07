const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click",() => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

var TrandingSlider = new Swiper('.tranding-slider', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  }, 
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

function filterItems(category){
  const items = document.getElementsByClassName('item');
  // for removing .active class
  const button = document.getElementsByTagName('span');
  for(let i = 0; i<button.length; i++){
      button[i].classList.remove('active');
  }
  // for adding
  const selectedButton = document.getElementById(`${category}Btn`);
  selectedButton.classList.add('active');
  // looping through all items 
  for(let i=0; i< items.length;i++){
      let item = items[i];
      if(item.classList.contains(category)){
          item.style.display = 'block';
      }else{
          item.style.display = 'none';
      }
  }
}

filterItems('unli-wings');