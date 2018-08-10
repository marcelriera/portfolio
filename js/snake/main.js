
var r = 15;
var snake;
var food;
var once = true;

var status;

function setup() {
  var c = createCanvas(300,360);
  c.parent('snake_p5');
  frameRate(12);
  snake = new Snake();
  food = new Food();
  status = 'menu';
}

function draw() {
  background(51);
  switch (status) {
    case 'menu':
      snake.show();
      food.show();
      showMenu();
      break;
    case 'play':
      snake.update();
      snake.show();
      food.show();
      once = true;
      break;
    case 'loose':
      snake.show();
      food.show();
      showGameOver();
  }
}

function keyPressed() {
  switch (status) {
    case 'menu':
      if (keyCode === ENTER) {
        status = 'play';
      }
      break;
    case 'play':
      if (once == false)
        return false;
      switch (key) {
        case 'W': snake.dir(0, -1); break;
        case 'S': snake.dir(0, 1); break;
        case 'A': snake.dir(-1, 0); break;
        case 'D': snake.dir(1,0); break;
      }
      once = false;
      break;
    case 'loose':
      if (keyCode === ENTER) {
        console.log('here');
        snake.restart();
        food.randomize();
        status = 'play';
      }
      break;
  }
  return false;
}

function showMenu() {
  fill(120,255,120, 200);
  noStroke();
  rect(0, 140, 300, 80);
  textSize(18);
  textStyle(BOLD);
  fill(255);
  text("Press Enter to play",150-82,185)
}

function showGameOver() {
  fill(120,255,120, 170);
  noStroke();
  rect(0, 140, 300, 80);
  textSize(18);
  textStyle(BOLD);
  fill(255);
  text("Game over",150-46,175)
  textSize(14);
  textStyle(BOLD);
  text("Press Enter to try again",150-78,195);
}
