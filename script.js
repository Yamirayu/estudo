const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 600;

const keys = {};

const playerImages = {
  idle: new Image(),
  right: new Image(),
  jump: new Image(),
  fall: new Image()
};

playerImages.idle.src = "idle.png";
playerImages.right.src = "right.png";
playerImages.jump.src = "jump.png";
playerImages.fall.src = "fall.png";

const player = {
  x: 100,
  y: 500,
  width: 40,
  height: 40,
  speed: 5,
  velocityY: 0,
  gravity: 0.5,
  jumpForce: -12,
  grounded: false,
  onPlatform: null,
  state: "idle"
};

const platforms = [
  { x: 0, y: 400, width: 1000 },
  { x: 0, y: 300, width: 1000 },
  { x: 0, y: 500, width: 1000 },
  { x: 0, y: 100, width: 1000 },
  { x: 0, y: 200, width: 1000 }
];

document.addEventListener("keydown", (e) => {
  keys[e.key.toLowerCase()] = true;

  if ((e.key === "w" || e.key === "ArrowUp") && player.grounded) {
    player.velocityY = player.jumpForce;
    player.grounded = false;
    player.onPlatform = null;
  }

  if ((e.key === "s" || e.key === "ArrowDown") && player.onPlatform) {
    player.velocityY = 1;
    player.onPlatform = null;
    player.grounded = false;
  }
});

document.addEventListener("keyup", (e) => {
  keys[e.key.toLowerCase()] = false;
});

function update() {
  if (keys["a"] || keys["arrowleft"]) player.x -= player.speed;
  if (keys["d"] || keys["arrowright"]) player.x += player.speed;

  player.velocityY += player.gravity;
  player.y += player.velocityY;

  if (player.y + player.height >= canvas.height) {
    player.y = canvas.height - player.height;
    player.velocityY = 0;
    player.grounded = true;
    player.onPlatform = null;
  } else {
    player.grounded = false;
  }

  for (let plat of platforms) {
    const withinX = player.x + player.width > plat.x && player.x < plat.x + plat.width;
    const touchingY = player.y + player.height <= plat.y + player.velocityY &&
                      player.y + player.height + player.velocityY >= plat.y;

    const descendo = keys["s"] || keys["arrowdown"];

    if (withinX && touchingY && player.velocityY >= 0 && !descendo) {
      player.y = plat.y - player.height;
      player.velocityY = 0;
      player.grounded = true;
      player.onPlatform = plat;
    }
  }

  // Atualiza estado visual do personagem
  if (player.velocityY < 0) {
    player.state = "jump";
  } else if (player.velocityY > 1) {
    player.state = "fall";
  } else if (keys["a"] || keys["arrowleft"] || keys["d"] || keys["arrowright"]) {
    player.state = "right";
  } else {
    player.state = "idle";
  }
}

function drawPlayer() {
  const img = playerImages[player.state] || playerImages.idle;
  ctx.drawImage(img, player.x, player.y, player.width, player.height);
}

function drawPlatforms() {
  ctx.fillStyle = "#00ffff";
  for (let plat of platforms) {
    ctx.fillRect(plat.x, plat.y, plat.width, 5);
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  update();
  drawPlatforms();
  drawPlayer();
  requestAnimationFrame(gameLoop);
}

gameLoop();
