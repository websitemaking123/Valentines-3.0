const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// YES button grows every second 💖
let scale = 1;
setInterval(() => {
  scale += 0.05;
  yesBtn.style.transform = `scale(${scale})`;
}, 1000);

// Move NO button around the screen 😈
function moveNoButton() {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Move every 800ms
setInterval(moveNoButton, 800);

// Extra safety: run away when hovered
noBtn.addEventListener("mouseenter", moveNoButton);

// YES click message
yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      display:flex;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:linear-gradient(135deg,#ff9a9e,#fad0c4);
      font-family:'Comic Sans MS', cursive;
      text-align:center;
      color:#ff2f68;
    ">
      <h1>YAY!!! 💘💘💘<br>You just made me the happiest 😍</h1>
    </div>
  `;
});
