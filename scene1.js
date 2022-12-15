// let t1 = 255;
// let t2 = 255;
let c9 = 255;
let c10 = 255;
let c11 = 255;
let c12 = 255;
let a9,a10,a11,a12 = false;
// let w = 82.5;
//
// let photo = [];


//
// function preload() {
//   // s0 = loadImage("s0.png");
//   // me = loadImage("me.png");
//   s1_1 = loadImage("s1_1.png");
//   s1_2 = loadImage("s1_2.png");
//   s1_3 = loadImage("s1_3.png");
//   s1_4 = loadImage("s1_4.png");
//     s1_41 = loadImage("s1_41.png");
//
//   s1_5 = loadImage("s1_5.png");
//   hill1 = loadImage("hill1.png");
//
//   photo[9] = loadImage("s1_p1.jpg");
//   photo[10] = loadImage("s1_p2.jpg");
//    photo[11] = loadImage("s1_p3.jpg");
//   photo[12] = loadImage("s1_p4.jpg");
// }



function scene1() {
  // bodySize(2);
  background("#e0fafc");
  noStroke();
  // console.log("scene 1");
  image(hill1, 295, 183, 640, 686);
  fill("#f9e8b2");
  rect(300, 337, 600, 166);
  push();
  // tint(255, t2);
  image(s1_5, 164, 190, 328, 179);
  pop();
  // if (end1(321.5, 133.5, 25)) {
  //   sceneNum++;
  //   this.x = 235;
  //   this.y = 210;
  //   console.log("bumped");
  // } else {
  //   console.log("safe");
  // }

  let d = dist(me1.x, me1.y, 271, 200);

  if (me1.x > 410) {
    fill(230);
    // rect(398, 143, 402, 173);
    t2 -= 10;
    image(s1_3, 201, 209, 402, 173);
  }

  if (me1.x > 200) {

    t1 -= 20;
    image(s1_2, 435, 276, 328, 188);
  }

  if (d < 140) {

    image(s1_4, 184, 261, 260, 125);
  }

  fill(100);
  // rect(271, 200, 87, 96);
  push();
  tint(255, t1);
  image(s1_1, 312, 240, 94, 103);
  pop();

  me1.body();
  me1.move();
   if (d < 120) {

    image(s1_41, 300, 200, 600, 400);
  }

  fill("#3a2e0f");
  rect(300, 462.5, 600, 125);
  for (var x = 0; x <= width; x = x + 18) {
    fill("#dcf2f9");
    rect(x, 409, 8, 5);
    rect(x, 517, 8, 5);
  }

  push();
  // tint(255, c1);
  image(photo[9], w, 463, 125, 90);
  fill(175, 167, 144, c9);
  rect(w, 463, 125, 90);

  pop();

  push();
  // tint(255, c2);
  image(photo[10], w + 145, 463, 125, 90);
  fill(175, 167, 144, c10);
  rect(w + 145, 463, 125, 90);
  pop();

  push();
  // tint(255, c3);
  image(photo[11], w + 290, 463, 125, 90);
  fill(175, 167, 144, c11);
  rect(w + 290, 463, 125, 90);
  pop();

  push();
  // tint(255, c4);
  image(photo[12], w + 435, 463, 125, 90);
  fill(175, 167, 144, c12);
  rect(w + 435, 463, 125, 90);
  pop();
  // tint(255,255);

  if (a9) {
    c9 = c9 - 10;
  }

  if (a10) {
    c10 = c10 - 10;
  }

  push();
  s2Color = color("#EBE9B7");
  s2Color.setAlpha(128 + 128 * sin(millis() / 300));
  fill(s2Color);
  // fill(100);
  if (me1.x > 410) {
    ellipse(77, 255, 7);
    ellipse(330, 214, 7);
    ellipse(207, 212,7);
    ellipse(560, 252, 7);
  }
  pop();

  if (a9) {
    c9 = c9 - 10;
  }

  if (a10) {
    c10 = c10 - 10;
  }

  if (a11) {
    c11 = c11 - 10;
  }

  if (a12) {
    c12 = c12 - 10;
  }


}
