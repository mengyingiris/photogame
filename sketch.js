let sceneNum = 0;
let m = [];
let treeImage = null;
let me1;
let lw = 75;
var a = 124;
let t1=255;
let t2=255;
let bodySize = 1;

// let c1 = 80;
// let c2 = 80;
// let c3 = 80;
// let c4 = 80;
let w = 82.5;
let s0;
let photo = [];

let me, s1_1, s1_2, s1_3, s1_4, s1_5,hill1;


function preload() {
  me = loadImage("me.png");
  s0 = loadImage("s0.png");

  s1_1 = loadImage("s1_1.png");
  s1_2 = loadImage("s1_2.png");
  s1_3 = loadImage("s1_3.png");
  s1_4 = loadImage("s1_4.png");
  s1_5 = loadImage("s1_5.png");
hill1 = loadImage("hill1.png");

  s1_41 = loadImage("s1_41.png");

photo[9] = loadImage("s1_p1.jpg");
photo[10] = loadImage("s1_p2.jpg");
 photo[11] = loadImage("s1_p3.jpg");
photo[12] = loadImage("s1_p4.jpg");

s2_1 = loadImage("s2_1.png");
s2_2 = loadImage("s2_2.png");
s2_3 = loadImage("s2_3.png");
s2_4 = loadImage("s2_4.png");
s2_5 = loadImage("s2_5.png");
s2_6 = loadImage("s2_6.png");
s2_house = loadImage("s2_house.png");
s2_deer = loadImage("s2_deer.png");
s2_water = loadImage("s2_water.png");
s2_grass = loadImage("s2_grass.png");
hill2 = loadImage("hill2'.png");

photo[5] = loadImage("s2_p1.jpg");
photo[6] = loadImage("s2_p2.jpg");
photo[8] = loadImage("s2_p3.jpg");
photo[7] = loadImage("s2_p4.jpg");

s3_1 = loadImage("s3_1.PNG");
 s3_2 = loadImage("s3_2.PNG");
 s3_3 = loadImage("s3_3.PNG");
 s3_4 = loadImage("s3_4.PNG");
 photo[1] = loadImage("s3_p1.JPG");
 photo[2] = loadImage("s3_p2.jpg");
 photo[3] = loadImage("s3_p3.jpg");
 photo[4] = loadImage("s3_p4.jpg");
 river = loadImage("path.png");
   hill3 = loadImage("hill3.png");

 water = loadImage("s2_water.png");
   me = loadImage("me.png");

sound2 = loadSound("forest.mp3");


}
function setup() {
  createCanvas(600, 525);
  me1 = new Me();
  rectMode(CENTER);
  imageMode(CENTER);
}

function draw() {
  switch (sceneNum) {
    case 0:
      scene0();
      break;
    case 1:
      scene1();
      break;
    case 2:
      scene2();
      break;
    case 3:
      scene3();
      break;
  }

  me1.change();
}

// function keyPressed() {
//   mode++;
//   console.log(mode);
// }

function scene0() {
  // bodySize=0.2;
  background(255);
  textSize(25);
  text("start", 300, 200);
  image(s0, 300, 200, 600, 400);
  me1.body();
  me1.move();
}

// function scene1() {
//   // bodySize(2);
//   background("#e0fafc");
//   noStroke();
//   console.log("scene 1");
//   image(hill1, 295, 183, 640, 686);
//   fill("#f9e8b2");
//   rect(300, 337, 600, 166);
//     push()
// tint(255,t2);
//      image(s1_5, 164, 190, 328, 179);
//     pop()
//   // if (end1(321.5, 133.5, 25)) {
//   //   sceneNum++;
//   //   this.x = 235;
//   //   this.y = 210;
//   //   console.log("bumped");
//   // } else {
//   //   console.log("safe");
//   // }
//
//   let d = dist(me1.x, me1.y, 271, 200);
//
//
//   if (me1.x > 420) {
//     fill(230);
//     // rect(398, 143, 402, 173);
//     t2=0;
//     image(s1_3, 201, 209, 402, 173);
//
//   }
//
//   if (me1.x > 200) {
//     // fill(200,t);
//     // rect(435, 225, 328, 110);
//     t1=0;
//     image(s1_2, 435, 259, 328, 188);
//   }
//
//    if (d < 150) {
//     fill(120);
//     // rect(184, 261, 260, 125);
//     image(s1_4, 184, 261, 260, 125);
//   }
//
//   fill(100);
//   // rect(271, 200, 87, 96);
//   push()
//   tint(255,t1);
//   image(s1_1, 312, 240, 94, 103);
//   pop()
// }

function end0(x, y, w) {
  if (me1.x > x && me1.x < x + w && me1.y > y && me1.y < y + w) {
    return true;
  } else {
    return false;
  }
}
function end1(x, y, w) {
  if (me1.x > x && me1.x < x + w && me1.y > y && me1.y < y + w) {
    return true;
  } else {
    return false;
  }
}

function end2(x, y, w) {
  if (me1.x > x && me1.x < x + w && me1.y > y && me1.y < y + w) {
    return true;
  } else {
    return false;
  }
}

function end3(x, y, w) {
  if (me1.x > x && me1.x < x + w && me1.y > y && me1.y < y + w) {
    return true;
  } else {
    return false;
  }
}

class Me {
  constructor() {
    this.x = 35; //x
    this.y = 290;
    this.w = 50;
    this.h = 120;
    this.c = color(10);
    this.s = 1;
  }

  body() {
    fill(this.c);
    //   push();
    //  if(sceneNum==0){
    //    this.s =2;
    //  }
    // pop();
    scale(this.s);
    // ellipse(this.x, this.y, this.w, this.h);
    // tint(255,255);
    image(me,this.x, this.y,46,180);
  }

  move() {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 3;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 3;
    }
    if (keyIsDown(UP_ARROW)) {
      this.y -= 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.y += 3;
    }

  }

  change() {
    if (this.x > width) {
      sceneNum++;
      this.x = 35;
      this.y = 300;
    }

    if (sceneNum > 3) {
      sceneNum = 0;

    }





    if (end1(321.5, 133.5, 25)) {
      sceneNum++;
      this.x = 15;
      this.y = 300;

    }

    if (end2(width - 20, 0, 25, lw)) {
      sceneNum = 1;
      this.x = 215;
      this.y = 300;
    }
    if (end3(width - 20, height - lw, 25, lw)) {
      sceneNum++;
      this.x = 15;
      this.y = height / 2;
    }
    if (this.y > height) {
      this.y = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
  }


}

function mousePressed() {

if (sceneNum ==1){
  let d11 = dist(mouseX, mouseY, 77, 255);
  if (d11 < 20) {
    a9 = true;
  }

  let d12 = dist(mouseX, mouseY, 330, 214);
  if (d12 < 20) {
    a10 = true;
  }

  let d13 = dist(mouseX, mouseY, 207, 212);
  if (d13 < 20) {
    a11 = true;
  }

  let d14 = dist(mouseX, mouseY, 560, 252);
  if (d14 < 20) {
    a12 = true;
  }
}


else if (sceneNum ==2){
  let d21 = dist(mouseX, mouseY, 100, 335);
  if (d21 < 20) {
    a5 = true;
  }

  let d22 = dist(mouseX, mouseY, 330, 214);
  if (d22 < 20) {
    a6 = true;
  }

  let d23 = dist(mouseX, mouseY, 475, 260);
  if (d23 < 20) {
    a7 = true;
  }

  let d24 = dist(mouseX, mouseY, 560, 138);
  if (d24 < 20) {
    a8 = true;
  }
}

else if (sceneNum ==3){
  let d41 = dist(mouseX, mouseY, 165, 314);
 if (d41 < 20) {
   a1 = true;
 }

 let d42 = dist(mouseX, mouseY, 310, 284);
 if (d42 < 20) {
   a2 = true;
 }

 let d43 = dist(mouseX, mouseY, 110, 214);
 if (d43 < 20) {
   a3 = true;
 }

 let d44 = dist(mouseX, mouseY, 505, 256);
 if (d44 < 20) {
   a4 = true;
 }
}

}
