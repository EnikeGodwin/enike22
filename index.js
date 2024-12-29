

let reservation = document.querySelector('.reservation')
let reservationDisplay = document.querySelector('.reservation-display')
function reserveButtonEffect(){
  reservation.classList.add('reserve');
  reservationDisplay.style.margin = '60px 24px'
  reservationDisplay.style.transition = 'margin 1.5s ease-in-out' 

  setTimeout(() => {
    reservationDisplay.style.margin = '60px -1800px'
    reservation.classList.remove('reserve');
  }, 20000);
  
}
function initialize(){
  reservationDisplay.style.margin = '60px -1800px'
  reservation.classList.remove('reserve');
  
}

contentInfo()
function contentInfo() {
  let caption = document.querySelector('.caption')
  
  let initialText =
  `
  John Akhagbeme
  `
  

  let index = 0 
  captionText()
 function captionText(){
   if(index < initialText.length){
     console.log(caption)
    caption.textContent += initialText[index] +''; 
     index++
     if (index == 20) {
      // alert('hi')
      at()
   function at(){
    let at = document.querySelector('.at')
    at.style.display = 'block'
    let age = document.querySelector('.age-container')
    age.style.display = 'block'
  }
   }
     setTimeout(captionText, 300);
     return
    }
  }
}
    
    
let scrollEffect1 = document.querySelector(".scrolling-image");

      let angle = 0;
      scrollingEffect();
 
      function scrollingEffect() {
        angle += 1;
        scrollEffect1.style.transform = `rotate(${angle}deg)`;

        requestAnimationFrame(scrollingEffect);
      }
function buttonEffect(){
  let map = document.querySelector(".footer-map");
  map.style.height = "45vh"
  map.style.width = "100%"
  map.style.margin = "10px 10px"
  map.style.display = "block"
  // map.style.marginLeft = "-1000px"
  map.style.transition = "margin 1s ease-in-out"
  map.style.transition = "height 1s ease-in-out"
  map.style.transition = "width 1s ease-in-out"
  
  setTimeout(() => {
    // map.style.margin = "0px -1000px"
    map.style.width = "1%"
    map.style.height = "1vh"
    map.style.margin = "105px 5px"
  }, 12000);

} 

let timerCount = document.querySelector('.timer-text')
let cat = document.querySelector('.cat')
let dateElem = document.querySelector('.timer')
let expectedDate = new Date('2025/12:59:59 ').getTime()
// console.log(expectedDate.innerHTML)
setInterval(() => {
  let newDate = new Date().getTime()
  let distance = expectedDate - newDate

  console.log(expectedDate)
  console.log(newDate)
  console.log(distance)

  let day = Math.floor(distance / (1000 * 60 * 60 * 24))
  let hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / ( 1000 * 60 * 60))

  let minute = Math.floor((distance %  (1000 * 60 * 60)) / (1000 * 60))

  let seconds = Math.floor((distance % (1000 * 60)) / (1000))
  
  dateElem.innerHTML = `0${day} Days : ${hour} Hours : ${minute} Minutes : ${seconds} Seconds`

  // if ( `${hour}` <= '0' && `${minute}` <= '0' &&  `${seconds}` <= '0') {
  //   cat.style.display = 'block'
  //   // dateElem.innerHTML = 'THis Event Is Ongoing'
  //   timerCount.style.display = 'block'
  //   timerCount.innerHTML = 'This event has already started'
  //   dateElem.style.display = 'none'
  // }
    
  // console.log(`${minute}`)
  // console.log(dateElem)
}, 1000);

    


