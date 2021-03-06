const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const sideFruit = document.getElementById("current-fruit");

const pop = new Audio();
pop.src = "./sounds/pop.wav";
pop.volume = 0.1;

class GameObject {
  constructor(x, y, width, height, img, fruitName) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.img = img;
    this.speedX = 0;
    this.speedY = 1.5;
    this.fruitName = fruitName;
  }
  // updates the position of the fruits which are objects of GameObject class
  //called inside the update invoked inside the "update()"" method inside the Game class
  //(requestAnimationFrame)
  updatePosition() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
  // generate new images with updated position of the fruit objects invoked in the updateRainItems
  //inside the forEach for every fruit
  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}
// address list of the images for the rain of fruits which is used to randomly generate new
//fruits used as the source for the fruitImage.src =""

//sound adresses to call the fruit to click on matching with the fruit clicked on
//If clicked on correct fruit, fruit disapears and next fruit is called
class Game {
  constructor() {
    this.fruits = [];
    this.frames = 0;
    this.score = 0;
    this.animationId;
    this.count = 0;
    this.fruitList = [
      { name: "strawberry", path: "./images/strawberry.png" },
      { name: "apple", path: "./images/apple.png" },
      { name: "banana", path: "./images/banana.png" },
      { name: "blackberry", path: "./images/blackberry.png" },
      { name: "cherry", path: "./images/cherry.png" },
      { name: "grapes", path: "./images/grapes.png" },
      { name: "kiwi", path: "./images/kiwi.png" },
      { name: "lemon", path: "./images/lemon.png" },
      { name: "orange", path: "./images/orange.png" },
      { name: "pear", path: "./images/pear.png" },
      { name: "watermelon", path: "./images/watermelon.png" },
      { name: "pineapple", path: "./images/pineapple.png" },
    ];
    this.soundList = [
      { name: "strawberry", path: "./sounds/strawberry.mp3" },
      { name: "apple", path: "./sounds/apple.mp3" },
      { name: "banana", path: "./sounds/banana.mp3" },
      { name: "blackberry", path: "./sounds/blackberry.mp3" },
      { name: "cherry", path: "./sounds/cherry.mp3" },
      { name: "grapes", path: "./sounds/grapes.mp3" },
      { name: "kiwi", path: "./sounds/kiwi.mp3" },
      { name: "lemon", path: "./sounds/lemon.mp3" },
      { name: "orange", path: "./sounds/orange.mp3" },
      { name: "pear", path: "./sounds/pear.mp3" },
      { name: "watermelon", path: "./sounds/watermelon.mp3" },
      { name: "pineapple", path: "./sounds/pineapple.mp3" },
    ];
    this.yaySounds = [
      "./sounds/victory.mp3",
      "./sounds/good_job.mp3",
      "./sounds/winner_sound.mp3",
    ];
  }
  //method to splice called fruit if clicked on correctly
  removeFruit = (x, y) => {
    const disagreeSound = new Audio();
    disagreeSound.src = "./sounds/disagree.mp3";
    
    const sounds = new Audio();
    sounds.src = this.soundList[this.count].path;
    let soundName = this.soundList[this.count].name;
    sounds.play();
    //random audio for 3 the "good job" sounds played everytime correct fruit is clicked on
    let randomYay = Math.floor(Math.random() * this.yaySounds.length);
    const goodJobSounds = new Audio();
    goodJobSounds.src = this.yaySounds[randomYay];
    //loop to check if click is the same pixel as the called fruit, if so, fruit is spliced
    this.fruits.forEach((fruit, index) => {
      if (
        parseInt(x) >= parseInt(fruit.x) &&
        parseInt(x) <= parseInt(fruit.x + 80) &&
        parseInt(y) >= parseInt(fruit.y) &&
        parseInt(y) <= parseInt(fruit.y + 80)
      ) {
        if (soundName == fruit.fruitName) {
          this.fruits.splice(index, 1);
          this.count++;
          goodJobSounds.play();
        }else {
          disagreeSound.play()
        }
      }
    });
  };
  // This is the most most important block in which all the fruits are randomly drawn and positions are updated
  // And background images are drawn as well as the time frames for generation of new fruits and display of fruit 
  // to be clicked to the left of the canvas
  updateRainItems = () => {
    this.frames++;

    ctx.fillStyle = "PaleTurquoise";  // blue central background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const bgImg = new Image(); // top background image
    bgImg.src = "./images/fruits-background.png";
    const background = new GameObject(0, -20, 900, 580, bgImg);
    background.draw();

    const bottomBgImg = new Image(); // bottom background image
    bottomBgImg.src = "./images/background-flowers.png";
    const bottomBackground = new GameObject(0, 340, 900, 450, bottomBgImg);
    bottomBackground.draw();

    let randomFruit = Math.floor(Math.random() * this.fruitList.length); //random number to used as index for the fruit list
    const fruitImage = new Image();
    fruitImage.src = this.fruitList[randomFruit].path; //assiging the source of the fruit with random number index

    this.fruits.forEach((fruit) => { //loops through the fruits to draw and update position
      fruit.updatePosition();
      fruit.draw();
    });

    if (this.frames % 40 === 0) { // sets time frame for the side fruit display
      sideFruit.src = this.fruitList[this.count].path
    }

    if (this.frames % 340 === 0) { // sets time frame for the call out of the fruit to be clicked on
      const sound = new Audio();
      sound.src = this.soundList[this.count].path;
      sound.play();
      }

    if (this.frames % 20 === 0) { // sests time frame for the number of fruits generated per second
      const originY = 0;

      const maxX = canvas.width;
      const randomX = Math.floor(Math.random() * (maxX - 60));
      const fruit = new GameObject(
        randomX,
        originY,
        80,
        80,
        fruitImage,
        this.fruitList[randomFruit].name
      );

      this.fruits.push(fruit);
      this.score += 5;
    }
  };

  checkGameCompleted = () => { // completion of the game if all called fruits where clicked on
    if (this.count == 12) {
      let yaySoundCheering = new Audio();
      yaySoundCheering.src = "./sounds/kids-cheering.mp3";

      yaySoundCheering.play(); //plays a YAY sound when game completed

      ctx.fillStyle = "purple";
      ctx.font = "60px Verdana";
      ctx.fillText("CONGRATULATIONS!", 130, 300); // prints congratulatios when game completed

      cancelAnimationFrame(this.animationId);
    }
  };

  clear = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clears the canvas before redrwawing all images at given tiem frame
  };

  updateGame = () => { // important blobk to generate movement on the canvas with "requestAnimationFrame"
    this.clear();
    this.updateRainItems();
    this.animationId = requestAnimationFrame(this.updateGame);
    this.checkGameCompleted();
  };
}

window.onload = () => { // loads the entire game when page is loaded
  const game = new Game();
  document.getElementById("start-button").onclick = () => { // displays the canvas when button is clicked
    game.updateGame();
  };

  function removeFruitCursorPosition(canvas, event) { 
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;// sets the coordinates of mouse on canvas and matches with fruit coordinates
    const y = event.clientY - rect.top;
    game.removeFruit(x, y); //invokes the method to make fruits disappear when clicked on
  }
  
  canvas.addEventListener("click", function (e) { // detects the click on the canvas
    removeFruitCursorPosition(canvas, e); //invokes the function to match the coordinates of fruit with mouse postion
    pop.play(); // plays a pop sound for every click on the canvas
  });
};
