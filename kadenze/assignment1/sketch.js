function setup() {
  createCanvas(1024, 768);
  background(55, 56, 42);
}

function draw() {

  beginShape()
    noStroke();
    fill(74, 104, 76);
    vertex(0,216);
    vertex(78,120);
    vertex(122, 134);
    vertex(14, 375);
  endShape();

  beginShape()
    noStroke();
    fill(97,134, 108);
    vertex(65,469);
    vertex(12,368);
    vertex(122, 134);
    vertex(131,180);
  endShape();

  fill(69, 92, 69);
  quad(125,249,383,102,401,148,117,285);

  fill(80, 127, 92);
  quad(128, 277, 395, 130, 405, 163, 127,325);

  fill(86, 132, 103);
  quad(125, 323, 405,163,427,200,140,420);

  beginShape();
    noStroke();
    fill(71, 168, 133);
    vertex (90, 340);
    vertex (130, 172);
    vertex (142, 401);
    vertex (427, 200);
    vertex (520, 355);
    vertex (80, 600);
  endShape();

  beginShape();
    stroke(65, 125, 92);
    strokeWeight(2);
    fill (152, 170, 135);
    vertex (80, 490);
    vertex (400, 290);
    vertex (435, 400);
    vertex (90, 590);
  endShape();

  beginShape();
    stroke(65, 125, 92);
    strokeWeight(2);
    fill (164, 181, 135);
    vertex (0, 297);
    vertex (55, 451);
    vertex (65,600);
    vertex (308, 654);
    vertex (340, 720);
    vertex (0, 717);
  endShape();

  beginShape();
    fill(48, 163, 126);
    vertex (645, 285);
    vertex (620, 180);
    vertex (1024, 236);
    vertex (1024, 678);
    vertex (850, 691);
  endShape();

  beginShape();
    fill(61, 104, 77);
    vertex (620, 180);
    vertex (586, 98);
    vertex (990, 138);
    vertex (990, 174);
    vertex (1024, 184);
    vertex (1024, 234);
  endShape();

  beginShape();
    noStroke();
    fill(131, 164, 127);
    vertex (646, 292);
    vertex (1024, 388);
    vertex (1024, 502);
    vertex (954, 538);
    vertex (754, 560);
  endShape();

  stroke(62, 121, 93);
  line(638,250,1024,318);
  line(630,208,1024,270);

  noStroke();

  beginShape();
    fill(62, 91, 61);
    vertex (476, 768);
    vertex (520, 710);
    vertex (608, 705);
    vertex (624, 768);
  endShape();

  beginShape();
    fill(58, 160, 113);
    vertex (620, 768);
    vertex (600, 705);
    vertex (726, 700);
    vertex (690, 768);
  endShape();

  beginShape();
    fill(58, 92, 65);
    vertex (726, 700);
    vertex (690, 768);
    vertex (852, 768);
    vertex (832, 690);
  endShape();

  beginShape();
    fill(75, 131, 94);
    vertex (852, 768);
    vertex (832, 690);
    vertex (1024, 674);
    vertex (1024, 768);
  endShape();

  beginShape();
    stroke(120, 150, 117);
    fill (196, 215, 187);
    vertex (12, 600);
    vertex (95, 565);
    vertex (115, 575);
    vertex (645, 285);
    vertex (790, 550);
    vertex (980, 520);
    vertex (915, 600);
    vertex (915, 630);
    vertex (865, 690);
    vertex (340, 720);
    vertex (295, 660);
  endShape();

  noStroke();
  triangle(8, 600, 90, 340 , 92, 616);

  beginShape();
    fill(88, 174, 129);
    vertex (0, 120);
    vertex (296, 150);
    vertex (311, 27);
    vertex (1024, 69);
    vertex (1024, 0);
    vertex (0, 0);
  endShape();

  noStroke();
  fill(98, 122, 94);
  rect(-10, -10 , 80, 80);

  rect(235, -10, 75, 40);

  beginShape();
    noStroke();
    fill(67, 84, 70);
    vertex (994, 136);
    vertex (1024, 136);
    vertex (1024, 0);
    vertex (998, 0);
  endShape();

  fill(201, 191, 143);
  arc(602 , 0 , 345, 110, 0, PI+QUARTER_PI);

  fill (55, 56, 42);
  quad(478,38,708,52,684,92,418,74);


  stroke(127, 149, 114);
  fill(162, 182, 135);
  ellipse(564, 571, 250, 250)

  fill(91, 176, 128);
  rect(535,449,68,244);
}
