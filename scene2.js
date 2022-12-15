
var a = 124;
let c5 = 255;
let c6 = 255;
let c7 = 255;
let c8 = 255;
let a5,
  a6,a7,a8 = false;


let hill2c =0;
  let c21 = 255;
  let c22 = 255;

particles1 = [];
particles2 = [];



// function preload() {
//   // desert = loadImage("desert.jpg");
//   // me = loadImage("me.png");
//   s2_1 = loadImage("s2_1.png");
//   s2_2 = loadImage("s2_2.png");
//   s2_3 = loadImage("s2_3.png");
//   s2_4 = loadImage("s2_4.png");
//   s2_5 = loadImage("s2_5.png");
//   s2_6 = loadImage("s2_6.png");
//   s2_house = loadImage("s2_house.png");
//   s2_deer = loadImage("s2_deer.png");
//   s2_water = loadImage("s2_water.png");
//   s2_grass = loadImage("s2_grass.png");
//   hill2 = loadImage("hill2'.png");
//
//   photo[5] = loadImage("s2_p1.jpg");
//   photo[6] = loadImage("s2_p2.jpg");
//   photo[8] = loadImage("s2_p3.jpg");
//   photo[7] = loadImage("s2_p4.jpg");
// }

function scene2() {

   // sound2.play();
  background("#5A746F");

  fill("#3a2e0f");
  rect(300, 462.5, 600, 125);
  for (var x = 0; x <= width; x = x + 18) {
    fill("#5A746F");
    rect(x, 409, 8, 5);
    rect(x, 517, 8, 5);
  }
  noStroke();
  // fill(200, 100);
  // rect(118, 199, 238, 401);
  let d1 = dist(me1.x, me1.y, 350, 200);
  // let c2 = 255;

  // tint(255, 255);
  // rect(281, 161, 128, 323);
  image(s2_3, 261, 161, 128, 323);
  image(s2_2, 380, 125, 364, 250);


if(me1.x>150){
  hill2c += 10;
  push()
  // tint(255,hill2c);
      image(hill2, 300, 200, 600, 400);
pop()
}

    if (d1 < 140) {
    image(s2_house, 243, 228, 221, 145);
  }
  let d2 = dist(me1.x, me1.y, 404, 210);
  // tint(255, c);
  // image(s2_6, 451, 124, 312, 274);

  if (d2 < 110) {
    c21 -= 10;
  }
  else if (d2>=110){
    c21 +=10;
  }
  //right
  // fill(160, c);
  // rect(451, 124, 312, 274);
  push()
  tint(255, c21);
  image(s2_6, 451, 124, 312, 274);
pop()
  if (a > 690) {
    a = 124;
  }

  if (me1.x > 390 && me1.x < 450) {

    //waterfall
    // fill(140, 100);
    // rect(535, 166, 130, 335);
    // tint(255, 255);
    // image(s2_water, 445, 166, 130, 335);


     for (let i = 0; i < 5; i++) {
    let p = new Particle1();
    particles1.push(p);
  }
  for (let i = particles1.length - 1; i >= 0; i--) {
    particles1[i].update();
    particles1[i].show();
    if (particles1[i].finished()) {
      // remove this particle
      particles1.splice(i, 1);
    }
  }


    //deer
    fill(140, 100);
    // rect(a++, 247, 215, 258);
    // tint(255, 255);
    image(s2_deer, a++, 247, 125, 150);

    push();
    s2Color = color("#ACDDA2");
    s2Color.setAlpha(128 + 128 * sin(millis() / 300));
    fill(s2Color);
    // fill(100);
    ellipse(100, 345, 7);
    ellipse(330, 214, 7);
    ellipse(475, 260, 7);
    ellipse(560, 138, 7);
    pop();
  } else {
    fill(140, 0);
  }

  //left
  // tint(255, 255);
  image(s2_4, 119, 199, 238, 401);
  push();
  me1.body();
  me1.move();
  pop();
  //center
  // fill(130, 100);
  // rect(317, 214, 503, 384);
  image(s2_5, 317, 214, 503, 384);

  if (d1 < 130) {
    c22 = c22-10;
  }
   else if (d1>=130){
    c22 +=10;
  }
  //front
  // fill(90, c);
  // rect(300, 186, 354, 430);
  push()
  tint(255, c22);
  image(s2_1, 300, 186, 354, 430);
  pop()

  //film
  push();
  // tint(255, c1);
  image(photo[5], w, 463, 125, 90);
  fill(175, 167, 144, c5);
  rect(w, 463, 125, 90);

  pop();

  push();
  // tint(255, c2);
  image(photo[6], w + 145, 463, 125, 90);
  fill(175, 167, 144, c6);
  rect(w + 145, 463, 125, 90);
  pop();

  push();
  // tint(255, c3);
  image(photo[7], w + 290, 463, 125, 90);
  fill(175, 167, 144, c7);
  rect(w + 290, 463, 125, 90);
  pop();

  push();
  // tint(255, c4);
  image(photo[8], w + 435, 463, 125, 90);
  fill(175, 167, 144, c8);
  rect(w + 435, 463, 125, 90);
  pop();
  // tint(255,255);

  if (a5) {
    c5 = c5 - 10;
  }

  if (a6) {
    c6 = c6 - 10;
  }

  if (a7) {
    c7 = c7 - 10;
  }

  if (a8) {
    c8 = c8 - 10;
  }




 if(c21<0){
   c21=0;
 }
  else if(c21>255){
    c21=255;
  }

 if(c22<0){
   c22=0;
 }
  else if(c22>255){
    c22=255;
  }

}

// function mousePressed() {
//   let d21 = dist(mouseX, mouseY, 100, 345);
//   if (d21 < 20) {
//     a5 = true;
//   }
//
//   let d22 = dist(mouseX, mouseY, 330, 214);
//   if (d22 < 20) {
//     a6 = true;
//   }
//
//   let d23 = dist(mouseX, mouseY, 475, 260);
//   if (d23 < 20) {
//     a7 = true;
//   }
//
//   let d24 = dist(mouseX, mouseY, 560, 138);
//   if (d24 < 20) {
//     a8 = true;
//   }
// }




class Particle1 {

  constructor() {
    this.x = 448;
    this.y = 166;
    this.vx = random(-0.2, 0.3);
    this.vy = random(4, 1);
    this.alpha = 255;
  }

  finished() {
    return this.alpha < 0;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.alpha -= 6;
  }


  show() {
    noStroke();
    //stroke(255);
    fill(240, this.alpha);
    ellipse(this.x, this.y,3,19);
  }

}
