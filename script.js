const PASSWORD="03052025";
let current=0;

/* 🌌 BACKGROUND IMAGES */
const bgImages=[
  "assets/bg/bg1.jpg","assets/bg/bg2.jpg","assets/bg/bg3.jpg",
  "assets/bg/bg4.jpg","assets/bg/bg5.jpg","assets/bg/bg6.jpg",
  "assets/bg/bg7.jpg","assets/bg/bg8.jpg","assets/bg/bg9.jpg",
  "assets/bg/bg10.jpg","assets/bg/bg11.jpg","assets/bg/bg12.jpg",
  "assets/bg/bg13.jpg","assets/bg/bg14.jpg","assets/bg/bg15.jpg"
];

const bgSlider=document.getElementById("bgSlider");
bgImages.forEach((src,i)=>{
  const img=document.createElement("img");
  img.src=src;
  img.style.animationDelay=`${i*2.4}s`;
  bgSlider.appendChild(img);
});

/* INTRO */
setTimeout(()=>{
  intro.style.display="none";
  lockScreen.classList.remove("hidden");
},5000);

/* PASSWORD */
enterBtn.onclick=()=>{
  if(password.value!==PASSWORD){
    lockScreen.classList.add("hidden");
    jokeScreen.classList.remove("hidden");
  }else{
    lockScreen.classList.add("hidden");
    successJokeScreen.classList.remove("hidden");
  }
};

function backToLogin(){
  jokeScreen.classList.add("hidden");
  lockScreen.classList.remove("hidden");
}

function startStory(){
  successJokeScreen.classList.add("hidden");
  story.classList.remove("hidden");
  bgMusic.play();
  startHearts();
  startLanguages();
}

/* 🔁 INFINITE SLIDES */
function updateSlide(){
  document.querySelector(".slides")
    .style.transform=`translateX(-${current*100}vw)`;
}

function nextSlide(){
  const total=document.querySelector(".slides").children.length;
  current=(current+1)%total;
  updateSlide();
}

function prevSlide(){
  const total=document.querySelector(".slides").children.length;
  current=(current-1+total)%total;
  updateSlide();
}

document.addEventListener("keydown",e=>{
  if(e.key==="ArrowRight") nextSlide();
  if(e.key==="ArrowLeft") prevSlide();
});

/* HEARTS */
function startHearts(){
  setInterval(()=>{
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="❤";
    h.style.left=Math.random()*100+"vw";
    h.style.animationDuration=(4+Math.random()*4)+"s";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),8000);
  },300);
}

/* LANGUAGES */
function startLanguages(){
  const words=["Happy Anniversary","Joyeux Anniversaire","Feliz Aniversario","ርሑስ ቐዳማይ ዓመት ሕፅይተይ"];
  setInterval(()=>{
    const s=document.createElement("span");
    s.innerText=words[Math.floor(Math.random()*words.length)];
    s.style.left=Math.random()*100+"vw";
    languages.appendChild(s);
    setTimeout(()=>s.remove(),8000);
  },900);
}