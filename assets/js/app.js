const search = document.getElementById('search')
function toggleshow1(){
  search.classList.add("active");

}
function togglehide1(){
  search.classList.remove("active");




};


$('#slid_carousel').owlCarousel({
  loop:false,
  nav:true,
  margin:5,
  dots:false,
  autoHeight:true,
  responsive:{
      0:{
        items:1
      },
      992:{
          items:2
      },
      
  }
  });
  

  $('#half-carousel').owlCarousel({
    loop:true,
    margin:50,
    dots:false,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1.5
        },
        
    }
})

  
const nav_active = document.querySelectorAll('#nav .nav-list .nav-item')


nav_active.forEach(btn =>{
  btn.addEventListener('click', () => {
    document.querySelector('.nav-item.active').classList.remove("active")
    btn.classList.add("active")
    
  })
})


let a=10
console.log(a);
a= 5
console.log(a);
