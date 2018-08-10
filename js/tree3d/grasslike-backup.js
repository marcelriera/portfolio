
var rand_factor = 0.1;
var f = 50;

function setup() {
  var c = createCanvas($(document).width()-50, 900);
  c.parent('tree_p5');
  stroke(0, 120, 0, 30);
  var initialPos = createVector(width/2, height);
  var initialFrac = createVector(0,-100);
  recursiveDraw(initialPos, initialFrac);
}

function recursiveDraw(pos, v){
  if (v.mag() < 7)
    return;
  line(pos.x, pos.y, pos.x + v.x, pos.y + v.y);
  var nextPos = createVector(pos.x + v.x, pos.y + v.y);
  var size = v.mag();
  var v1 = v.copy();
  v1.x += f * (random(rand_factor*2) - rand_factor);
  v1.y += f * (random(rand_factor*2) - rand_factor);
  v1.setMag(size * (0.8 + (random(rand_factor*2) - rand_factor)));
  recursiveDraw(nextPos, v1);
  var v2 = v.copy();
  v2.x += f * (random(rand_factor*2) - rand_factor);
  v2.y += f * (random(rand_factor*2) - rand_factor);
  v2.setMag(size * (0.8 + (random(rand_factor*2) - rand_factor)));
  recursiveDraw(nextPos, v2);
}
