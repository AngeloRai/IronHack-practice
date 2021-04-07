const canvas = document.getElementById("the-canvas");
const ctx = canvas.getContext("2d");


class Component {
  constructor(x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.speedX = 0;
    this.speedY = 0;
    this.img = new Image()
  }

  update() {
    
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  
}

class Game {
  constructor(player) {
    this.player = player;
    this.animationId;
    this.obstacles = [];
    this.frames = 0;
    this.score = 0;
  }

  startGame = () => {
    this.updateGameArea();
  };

  // Usando arrow function para não criar um novo escopo dentro desse método e o this continuar apontando para a própria classe
  updateGameArea = () => {
    this.clear();

    this.player.newPos();
    this.player.update();
       

    this.animationId = requestAnimationFrame(this.updateGameArea);

    this.checkGameOver();
  };



  clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }



window.addEventListener("load", () => {
  const player = new Component(0, 110, 30, 30, "red");

  const game = new Game(player);

  game.startGame();

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowUp":
        if (difficulty !== "easy") {
          return (game.player.speedY -= 2);
        }
        return (game.player.speedY = -2);
      case "ArrowDown":
        if (difficulty !== "easy") {
          return (game.player.speedY += 2);
        }
        return (game.player.speedY = 2);
      case "ArrowRight":
        if (difficulty !== "easy") {
          return (game.player.speedX += 2);
        }
        return (game.player.speedX = 2);
      case "ArrowLeft":
        if (difficulty !== "easy") {
          return (game.player.speedX -= 2);
        }
        return (game.player.speedX = -2);
    }
  });

  document.addEventListener("keyup", () => {
    game.player.speedX = 0;
    game.player.speedY = 0;
  });
});