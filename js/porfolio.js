let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
// let intro = document.querySelector('.intro');
// intro.addEventListener("mouseover",()=>{
//     mouseCursor.classList.add("intorgrow");
// })
// intro.addEventListener("mouseleave",()=>{
//     mouseCursor.classList.remove("intorgrow");
// })
// let burger = document.querySelector('.burger');
// burger.addEventListener("mousemove",()=>{
//     mouseCursor.classList.add("burgrow");
// })
// burger.addEventListener("mouseleave",()=>{
//     mouseCursor.classList.remove("burgrow");
// })

// let sidebar = document.querySelector('.sidebar');
// sidebar.addEventListener("mousemove",()=>{
//     mouseCursor.classList.add("sidegrow");
// })
// sidebar.addEventListener("mouseleave",()=>{
//     mouseCursor.classList.remove("sidegrow");
// })








let preloader = document.getElementById("preloader");

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {

    $('#preloader').delay(100).animate({top: '-110%'}, 3000, $.bez([0.19,1,0.22,1]));
    $('.p').animate({opacity: '0'}, 3000, $.bez([0.19,1,0.22,1]));
   

    TweenMax.from(".title", 2, {
         delay: 1.8,
              y: 10,
              opacity: 0,
              ease: Expo.easeInOut
        })
   });



   //  func : scrollbar
let progess = document.getElementById('progessbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function(){
    let progressHeight = (window.pageYOffset/totalHeight)*100;
    progess.style.height = progressHeight + "%";
  }

  //  func : Audio effect
  let audio1 = document.getElementById("audio1");


$("ul li a").mouseenter(function() {
  audio3.play();
});
 
  // Click events
 function toggleClassName(){ 
     audio1.play();
    let burger = document.querySelector(".burger");
    burger.classList.toggle('active');
    let sidebar = document.querySelector(".sidebar");
    sidebar.classList.toggle('action');
    let animatebar = document.querySelector(".animatebar");
    animatebar.classList.toggle('action');
 }


const flightPath = {
    curviness:1.25,
    values: [
      {x: 0, y: 30},
      {x: 0, y: 40},
      {x: 20, y: 60},
      {x: 30, y: 70},
      {x: 100, y: 140},
      {x: 120, y: 160},
      {x: 160, y: 200},
      {x: 10, y: 250},
      {x: -120, y: 300},
      {x: -110, y: 350},
      {x: -110, y: 380},
      {x: -120, y: 400},
      {x: -130, y: 410},
      {x: -140, y: 420},
      {x: -150, y: 430},
      {x: -490, y: 430},
      {x: -500, y: 460},
      {x: -550, y: 510},
      {x: -530, y: 540},
      {x: -510, y: 560},
      {x: -400, y: 590},
      {x: -300, y: 600},
      {x: -200, y: 700},
      {x: -300, y: 750},

  

 
    ]
};
const textPath = {
    values: [
        {x:-10, y:0},
        {x:-20, y:0},
        {x:-30, y:0},
        {x:-40, y:0},
        {x:-50, y:0},
        {x:-60, y:0},
        {x:-70, y:0},
        {x:-80, y:0},
        {x:-90, y:0},
        {x:-100, y:0},
        {x:-110, y:0},
        {x:-120, y:0},
        {x:-130, y:0},
    ]
};

const textPath1 = {
    values: [
        {x:-900, y:0},
    ]
};
const imgPath = {
    values: [
        {x:10, y:0},
    ]
};

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.scrollup',0.01,{
      bezier: textPath,
      ease: Power1.easeInOut
    })
    
  );

tween.add(
    TweenLite.to('.get1',0.1,{
      bezier: textPath1,
      ease: Power1.easeInOut
    })
    
  ); 
  tween.add(
    TweenLite.to('.phimg',0.1,{
      bezier: imgPath,
      ease: Power1.easeInOut
    })
    
  ); 

tween.add(
  TweenLite.to('.aavvi',1,{
    bezier: flightPath,
    ease: Power1.easeInOut
  })

  
);

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: "#first",
    duration: 10000,
    triggerHook: 0

})
  .setTween(tween)
  // .addIndicators()
  .setPin("#first")
  .addTo(controller);





 

   