let gallery = document.getElementById("gallery");
let contaner = document.querySelector(".icontaner");
gallery.addEventListener("click", () => {
  if (contaner.style.display === "block") {
    contaner.style.display = "none";
    gallery.style.background = "#00ffff94";
    dokhar.style.display='block'
    wellcom.style.display='block'
    homegif.style.display='block'
  } else {
    contaner.style.display = "block";
    gallery.style.background = "green";
    wellcom.style.display='none'
    dokhar.style.display='none'
    homegif.style.display='none'

  }
});
let homegif =document.getElementById('homegif')
  const dokhar = document.getElementById('dokhar')
  const wellcom = document.querySelector('.rang')


setTimeout(() => {
  dokhar.style.transition='0.20s ease-in'
  dokhar.style.translate=('0 68px')
}, 3000);
setTimeout(() => {
  wellcom.style.transition='0.40s ease-in'
  wellcom.style.translate=('0 120px')
}, 2500);
let gifts = document.querySelector(".gifts");
let gifbtn = document.getElementById("giftbtn");
let canvajhadi = document.getElementById("canvas");
let clicke = document.querySelector(".click");
let ifram = document.getElementById("ifram");
let leftBack = document.querySelector(".leftBack");
let home = document.getElementById('home')

function refresh(){
  window.location.reload()
}
home.addEventListener('click',refresh)
leftBack.addEventListener("click", () => {
    if ((gifts.style.display === "none", tvvideo.pause())) {
    } else {
      gifts.style.display = "none";

    }
  });

  gifbtn.addEventListener("click", () => {
    if (gifts.style.display === "block") {
      tvvideo.pause();
      gifts.style.display = "none";
    gifbtn.style.background = "#00ffff94";

    } else {
      gifts.style.display = "block";
      // tvvideo.play ();
      gifbtn.style.background = "green";
    }
  });
   let openi =document.querySelector('.open')
   setTimeout(() => {
    openi.style.display='none'
   }, 1450);

clicke.addEventListener("click", () => {
    if (canvajhadi.style.display === "block") {
    } else {
      gif.style.display='block'
      canvajhadi.style.display = "block";
      ifram.style.translate = "0px -418px";
      setTimeout(() => {
        tvvideo.play();
      }, 100);
    }
  });
let gif =document.getElementById('gif')
  tvvideo.addEventListener("click", () => {
    if (tvvideo.style.opacity === "1") {
      tvvideo.style.opacity = "2";
      tvvideo.play();
    } else {
      tvvideo.pause();
      tvvideo.style.opacity = "1";
    }
  });


// yeha se chamkila patti ka phul jhadi
let W = window.innerWidth;
let H = window.innerHeight;
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
const maxConfettis = 150;
const particles = [];

const possibleColors = [
  "DodgerBlue",
  "OliveDrab",
  "Gold",
  "Pink",
  "SlateBlue",
  "LightBlue",
  "Gold",
  "Violet",
  "PaleGreen",
  "SteelBlue",
  "SandyBrown",
  "Chocolate",
  "Crimson",
];

function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function confettiParticle() {
  this.x = Math.random() * W; // x
  this.y = Math.random() * H - H; // y
  this.r = randomFromTo(11, 33); // radius
  this.d = Math.random() * maxConfettis + 11;
  this.color =
    possibleColors[Math.floor(Math.random() * possibleColors.length)];
  this.tilt = Math.floor(Math.random() * 33) - 11;
  this.tiltAngleIncremental = Math.random() * 0.03 + 0.02;
  this.tiltAngle = 0;

  this.draw = function () {
    context.beginPath();
    context.lineWidth = this.r / 3;
    context.strokeStyle = this.color;
    context.moveTo(this.x + this.tilt + this.r / 3, this.y);
    context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
    return context.stroke();
  };
}

function Draw() {
  const results = [];

  // Magical recursive functional love
  requestAnimationFrame(Draw);

  context.clearRect(0, 0, W, window.innerHeight);

  for (var i = 0; i < maxConfettis; i++) {
    results.push(particles[i].draw());
  }

  let particle = {};
  let remainingFlakes = 0;
  for (var i = 0; i < maxConfettis; i++) {
    particle = particles[i];

    particle.tiltAngle += particle.tiltAngleIncremental;
    particle.y += (Math.cos(particle.d) + 0.8 + particle.r / 4.5) / 4;
    particle.tilt = Math.sin(particle.tiltAngle - i / 30) * 22;

    if (particle.y <= H) remainingFlakes++;

    // If a confetti has fluttered out of view,
    // bring it back to above the viewport and let if re-fall.
    if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
      particle.x = Math.random() * W;
      particle.y = -30;
      particle.tilt = Math.floor(Math.random() * 2) - 20;
    }
  }

  return results;
}

window.addEventListener(
  "resize",
  function () {
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  },
  false
);

// Push new confetti objects to `particles[]`
for (var i = 0; i < maxConfettis; i++) {
  particles.push(new confettiParticle());
}

// Initialize
canvas.width = W;
canvas.height = H;
Draw();
Draw();
