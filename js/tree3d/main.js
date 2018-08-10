
var rand_factor = 0.1;
var f = 50;

function setup() {
  var c = createCanvas($('header').width(), 1000);
  console.log($('header').width());
  console.log($('header').css('width'));
  c.parent('tree_p5');

  var n = 40;

  var initialFrac = createVector(0,-60, 0);
  for (var i=1; i<=n; i++) {
    var initialPos = createVector((width/(n+1))*i, height+140);
    recursiveDraw(initialPos, initialFrac)
  }
  stroke(60, 120, 0, 25);
  recursiveTreeDraw(createVector(width/2, height-150), createVector(0,-100,0));
}


function recursiveDraw(pos, v){
  if (v.mag() < 7)
    return;

  var b = v.z * 10;
  stroke(20, 130-b, 0, 15);
  line(pos.x, pos.y, pos.x+v.x, pos.y+v.y);

  var nextPos = createVector(pos.x + v.x, pos.y + v.y, pos.z + v.z);
  var size = v.mag();

  brightness(v.z);
  var v1 = v.copy();
  v1.x += f * (random(rand_factor*2) - rand_factor);
  v1.y += f * (random(rand_factor*2) - rand_factor);
  v1.z += f * (random(rand_factor*2) - rand_factor);
  v1.setMag(size * (0.8 + (random(rand_factor*2) - rand_factor)));
  recursiveDraw(nextPos, v1);

  var v2 = v.copy();
  v2.x += f * (random(rand_factor*2) - rand_factor);
  v2.y += f * (random(rand_factor*2) - rand_factor);
  v2.z += f * (random(rand_factor*2) - rand_factor);
  v2.setMag(size * (0.8 + (random(rand_factor*2) - rand_factor)));
  recursiveDraw(nextPos, v2);
}

function recursiveTreeDraw(pos, v){
  if (v.mag() < 5)
    return;
  line(pos.x, pos.y, pos.x + v.x, pos.y + v.y);
  var nextPos = createVector(pos.x + v.x, pos.y + v.y);
  recursiveTreeDraw(nextPos, v.copy().rotate(radians(random(30))).mult(0.65 + (random(0.32))));
  recursiveTreeDraw(nextPos, v.copy().rotate(radians(random(30)*-1)).mult(0.65 + (random(0.32))));
}
