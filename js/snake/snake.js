
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xv = 1;
  this.yv = 0;
  this.tail = new Array();

  this.update = function() {
    if (this.eat(food)) {
      food.randomize();
      this.grow();
    }
    this.tail[this.tail.length-1] = createVector(this.x, this.y);
    this.x += this.xv;
    this.y += this.yv;

    for (var i=0; i<this.tail.length-1; i++) {
      this.tail[i] = this.tail[i+1];
      if (this.tail[i].x === this.x && this.tail[i].y === this.y)
        status = 'loose';
    }

    if (this.x >= width/r) this.x = 0;
    else if (this.x < 0) this.x = width/r;
    else if (this.y >= height/r) this.y = 0;
    else if (this.y < 0) this.y = height/r;

  }

  this.show = function() {
    fill(255);
    noStroke();
    for (var i=0; i<this.tail.length; i++)
      rect(this.tail[i].x * r, this.tail[i].y * r, r, r);
    rect(this.x * r, this.y * r, r, r);
  }

  this.dir = function(x, y) {
    if (this.xv + x != 0 && this.yv + y != 0) {
      this.xv = x;
      this.yv = y;
    }
  }

  this.eat = function(f) {
    if (this.x === f.x && this.y === f.y)
      return true;
    return false;
  }

  this.grow = function() {
    var b = createVector(this.x, this.y);
    this.tail.unshift(b);
  }

  this.restart = function() {
    this.x = 0;
    this.y = 0;
    this.xv = 1;
    this.yv = 0;
    this.tail = new Array();
    food.randomize();
  }
}


function Food() {
  this.x = floor(random(width/r));
  this.y = floor(random(height/r));

  this.show = function() {
    fill(119, 255, 119);
    rect(this.x * r, this.y * r, r, r);
  }

  this.randomize = function() {
    this.x = floor(random(width/r));
    this.y = floor(random(height/r));
  }
}
