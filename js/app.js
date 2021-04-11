let mouseCursor = document.querySelector(".cursor");
window.addEventListener('mousemove',cursor);
function cursor(e){
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';
}
let intro = document.querySelector('.intro');
intro.addEventListener("mouseover",()=>{
    mouseCursor.classList.add("intorgrow");
})
intro.addEventListener("mouseleave",()=>{
    mouseCursor.classList.remove("intorgrow");
})
let burger = document.querySelector('.burger');
burger.addEventListener("mousemove",()=>{
    mouseCursor.classList.add("burgrow");
})
burger.addEventListener("mouseleave",()=>{
    mouseCursor.classList.remove("burgrow");
})

let sidebar = document.querySelector('.sidebar');
sidebar.addEventListener("mousemove",()=>{
    mouseCursor.classList.add("sidegrow");
})
sidebar.addEventListener("mouseleave",()=>{
    mouseCursor.classList.remove("sidegrow");
})

let enterme = document.getElementById("enterme");
let enterc = document.getElementById("enterc");
let preloader = document.getElementById("preloader");
let para = document.getElementById("para");


paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
    };

    Pace.on('done', function() {
    enterme.style.visibility = "visible";
    enterc.style.visibility = "visible";

//     preloader.addEventListener('keyup',(e)=>{
//     audio4.play();
//        if(e.keyCode == 13){
//         $('#preloader').delay(100).animate({top: '-100%'}, 3000, $.bez([0.19,1,0.22,1]));
//         enterme.style.visibility = "hidden";
//         enterc.style.visibility = "hidden";
//         para.style.visibility = "hidden";
//        }
//    })

   enterme.onclick = function(){
    audio4.play();
    $('#preloader').delay(100).animate({top: '-100%'}, 3000, $.bez([0.19,1,0.22,1]));
        enterme.style.visibility = "hidden";
        enterc.style.visibility = "hidden";
        para.style.visibility = "hidden";
   }
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
  let audio2 = document.getElementById("audio2");
  let audio3 = document.getElementById("audio3");
  let audio4 = document.getElementById("audio4");



  function playbutton(){
    audio2.play();
  }

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

 //Type event using jquery library
 let typed = new Typed(".typing", {
    strings: ["Web Developer", "UI designer", "Graphic Designer", "Video editor", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
