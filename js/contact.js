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