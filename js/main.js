// Cards
const cards = document.querySelectorAll('.card-block');
for(let i = 0; i < cards.length; i++){
  const card = cards[i];
  card.addEventListener('mousemove', rotate);
    card.addEventListener('mouseout', stopRotate)
}

function rotate(e){
  const cardItem = this.querySelector('.card-item');
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform = 'rotateX('+-(e.offsetY - halfHeight) / 7+'deg) rotateY('+(e.offsetX - halfHeight) / 7+'deg)';
}
function stopRotate(){
  const cardItem = this.querySelector('.card-item');
  cardItem.style.transform = 'rotate(0)';
}

// owlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    autoplay:false,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:2
        }
    }
})