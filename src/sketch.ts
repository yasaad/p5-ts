import p5 from "p5";

const sketch = function (p: p5) {
  let img: p5.Image;
  const imgSize = 150;
  let position: p5.Vector;
  let velocity: p5.Vector;

  function setGradient(c1: p5.Color, c2: p5.Color) {
    // noprotect
    p.noFill();
    for (var y = 0; y < p.height; y++) {
      var inter = p.map(y, 0, p.height, 0, 1);
      var c = p.lerpColor(c1, c2, inter);
      p.stroke(c);
      p.line(0, y, p.width, y);
    }
    p.noFill();
  }

  p.preload = () => {
    img = p.loadImage("/p5-js.png");
  };

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.textAlign(p.CENTER, p.CENTER);
    position = p.createVector(0, 0);
    velocity = p.createVector(4, 5);
  };

  p.draw = () => {
    let c1 = p.color(255, 204, 0);
    let c2 = p.color(50, 200, 100);
    setGradient(c1, c2);
    if (position.x + imgSize + velocity.x >= p.width || position.x + velocity.x < 0) {
      velocity.x *= -1;
    }
    if (position.y + imgSize + velocity.y >= p.height || position.y + velocity.y < 0) {
      velocity.y *= -1;
    }
    position.add(velocity);
    p.image(img, position.x, position.y, imgSize, imgSize, 15, 24, 450, 430);

    p.fill(0);
    p.stroke(0);
    p.textSize(70);
    p.text("Welcome to p5.js", p.width / 2, p.height / 2);
  };
};

new p5(sketch);
