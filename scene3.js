var c1 = 255;
var c2 = 255;
var c3 = 255;
var c4 = 255;

let a1,
  a2,
  a3,
  a4 = false;
let c31 = 0;
let c32 = 0;

let s3_1, s3_2, s3_3, s3_4, s3_p1, river;

function scene3() {
  // if (end1(321.5, 133.5, 25)) {
  //   sceneNum++;
  //   this.x = 35;
  //   this.y = 210;
  //   console.log("bumped");
  // } else {
  //   console.log("safe");
  // }

  background("#dcf2f9");
  noStroke();
  fill("#3a2e0f");
  rect(300, 462.5, 600, 125);
  for (var x = 0; x <= width; x = x + 18) {
    fill("#dcf2f9");
    rect(x, 409, 8, 5);
    rect(x, 517, 8, 5);
  }

  if (me1.x > 200) {
    image(s3_1, 183, 301, 367, 244);
    image(s3_4, 310, 338, 182, 121);
  }
    image(hill3, 300, 190, 600, 400);

  image(s3_3, 300, 201, 600, 400);
  image(s3_2, 165, 290, 332, 221);

  //river
  image(river, 300, 200, 615, 400);

  //waterfall



  //film
  push();
  // tint(255, c1);
  image(photo[1], w, 463, 125, 90);
  fill(175, 167, 144, c1);
  rect(w, 463, 125, 90);

  pop();

  push();
  // tint(255, c2);
  image(photo[2], w + 145, 463, 125, 90);
  fill(175, 167, 144, c2);
  rect(w + 145, 463, 125, 90);
  pop();

  push();
  // tint(255, c3);
  image(photo[3], w + 290, 463, 125, 90);
  fill(175, 167, 144, c3);
  rect(w + 290, 463, 125, 90);
  pop();

  push();
  // tint(255, c4);
  image(photo[4], w + 435, 463, 125, 90);
  fill(175, 167, 144, c4);
  rect(w + 435, 463, 125, 90);
  pop();
  // tint(255,255);

  if (a1) {
    c1 = c1 - 10;
  }

  if (a2) {
    c2 = c2 - 10;

    // photoS.play();
  }
  if (a3) {
    c3 = c3 - 10;
  }

  if (a4) {
    c4 = c4 - 10;
  }

  push();
  squareColor = color("#dcf2f9");
  squareColor.setAlpha(128 + 128 * sin(millis() / 300));
  fill(squareColor);
  // fill(100);
  ellipse(165, 314, 7);
  if (me1.x > 300) {
    ellipse(310, 284, 7);
    ellipse(110, 214, 7);
  }
  ellipse(505, 256, 7);
  pop();

  me1.body();
  me1.move();

  //waterfall
  if (me1.x > 100) {
    c31 += 10;
    push();
    tint(255, c31);
    image(water, 335, 255, 106, 287);
    pop();
  }
  if (c31 > 200) {
    c31 = 200;
  }

    //animal
  if (me1.x > 290) {
    c32 += 10;
    push();

    tint(255, c32);
    image(s3_4, 480, 338, 182, 121);
    pop();
  }
}
