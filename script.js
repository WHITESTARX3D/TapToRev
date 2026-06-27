
let n = document.querySelector('.needle')
let timer
let rotation = 0
let ac
let a
let mtimer
let rt
let lmon = false
let mcol = document.querySelector('.tachometer')
const starts = new Audio('starting.mp3')
const normal = new Audio('normalrev.mp3')
const revst = new Audio('revOn.mp3')
const revnd = new Audio('revdnd.mp3')
const mrev = new Audio('revmax.mp3')
const dial = document.querySelector(".dial-numbers");
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
});
for(let i = 0; i <= 8; i++){
  const num = document.createElement("div");
  num.className = "mark";
//  num.classList.add = `m${i}`
  num.textContent = i;

  const angle = -150 + (i * 37.5); // same sweep as needle
  const radius = 280;

  num.style.transform =
    `rotate(${angle}deg)
     translate(${radius}px)
     rotate(${-angle+90}deg)`;

  dial.appendChild(num);
}
revst.currentTime = 6000
revst.volume = 1
normal.volume = 0.1
function start() {
    let bbox = `    <input class="acc" min="1" max="10" type="range" value='5'>
      <!--Tab to edit-->
    </input>
    <button class='revon'>
     <!--Tab to edit-->
     Rev
   </button>
   <button class="off" onclick="off()">
     <!--Tab to edit-->
     Off 
   </button>`
  document.querySelector('.btns').innerHTML = bbox
  setTimeout(()=> {
n.classList.add('sanima')
  }, 300)
 ac = document.querySelector('.acc')
    let rev = document.querySelector('.revon')
rev.addEventListener('touchstart', revStart)
rev.addEventListener('touchend', revEnd)
starts.play()
setTimeout(() => {
  
  normal.play()
}, 500)
normal.loop = true



}
function off() {
  // Tab to edit
  let ebox = `   <button class="start" onclick="start()">
     <!--Tab to edit-->
     Start 
   </button>`
  document.querySelector('.btns').innerHTML = ebox
  n.classList.remove('sanima')
normal.pause()
  
}
function revStart() {

revst.play()
  revst.playbackRate = ac.value / 10

  timer = setInterval(() => {
      rotation += Number(ac.value)
       a = -150 + rotation
      
      
       
if (a >= 140) {
  n.style.transform = `rotate(150deg)`
  n.style.transform =
    Math.random() > 0.5
      ? 'rotate(150deg)'
      : 'rotate(142deg)';
  if (!lmon) {
    lmon = true
    mtimer = setInterval(() => {
      mrev.play()
    }, 100)
  } 
  } 
  else {
    n.style.transform = `rotate(${a}deg)`
  }
  if (a >= 120) {
    mcol.style.border = '8px solid rgba(255, 32, 0, 0.8)'
  }
  }, 150)
  

  
}

function revEnd() {
  clearInterval(timer)
  
  lmon = false
  clearInterval(mtimer)
mrev.pause()
  revst.currentTime = 0
  
  n.style.transform = 'rotate(-150deg)'
  rotation = 0
  revst.pause()
  revnd.duration = 1000
revnd.play()
mcol.style.border = '5px solid #444'

}
  
  
