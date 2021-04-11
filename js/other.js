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

 const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector("#sc");
  setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    hr.style.transform = `rotateZ(${hh+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
  })

  const darkbtn = document.querySelector(".dark").onclick = function fun(){
    document.body.style.background = '#dfe6ff';
    document.body.style.transition = '1s';
    document.querySelector('.dark').style.display = 'none';
    document.querySelector('.light').style.display = 'block';
    document.querySelector('.clock').style.background = '#fff url(../media/images/clock2.png)';
    document.querySelector('.clock').style.transition = '1.5s';
    document.querySelector('.clock').style.backgroundSize = 'cover';
    document.querySelector('.clock').style.border= '4px solid #e3f6ff';

  }
  const lightbtn = document.querySelector(".light").onclick = function fun(){
    document.body.style.background = '#091921';
    document.body.style.transition = '1s';
    document.querySelector('.dark').style.display = 'block';
    document.querySelector('.light').style.display = 'none';
    document.querySelector('.clock').style.background = '#091921 url(../media/images/clock.png)';
    document.querySelector('.clock').style.transition = '1.5s';
    document.querySelector('.clock').style.backgroundSize = 'cover';
    document.querySelector('.clock').style.border= '4px solid #091921';
  }

  const flightPath = {
      curviness:1.25,
      autoRotate: true,
      values: [
        {x: 0, y: -30},
        {x: 100, y: -10},
        {x:300, y: 10}, 
        {x:500,y:100},
        {x:750,y:-100},
        {x:350, y:-60},
        {x:600,y:100},
        {x:800,y:0},
        {x:window.innerWidth, y:-250}
   
      ]
  };
  const tween = new TimelineLite();

  tween.add(
    TweenLite.to('.paper-plane',1,{
      bezier: flightPath,
      ease: Power1.easeInOut
    })
  );
  const controller = new ScrollMagic.Controller();

  const scene = new ScrollMagic.Scene({
      triggerElement: ".animationbox3",
      duration: 5000,
      triggerHook: 0

  })
    .setTween(tween)
    // .addIndicators()
    .setPin(".animationbox3")
    .addTo(controller);


 

