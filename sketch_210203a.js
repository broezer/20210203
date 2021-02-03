const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let l1, l2;

let cols, rows;
let scl = 40;
let w = 1400;
let h = 1000;

function setup() {
   createCanvas(400, 400, WEBGL);
 
   c1 = color(252, 38, 192);
   c2 = color(245, 129, 150);
   c3 = color(244, 250, 10);
   
   b1 = color(0, 20, 88);
   b2 = color(183, 118, 198);
   b3 = color(255, 44, 160);

   
   l1 = color(0, 220, 220);
   l2 = color(29,0,41);
   
}


function draw() {
  
   setGradient(-width*0.5, height * -0.5 , width, height * 0.5, b1, b2, b1, Y_AXIS);
   setGradient(-width*0.5,0, width, height*0.8, b1, b3, b1,Y_AXIS);
    
    
    
    translate(0,0,1);
    
    
    
    fill(b1);
    noStroke();
    beginShape();
    vertex( -width * 0.45, height * -0.3);
    vertex(width * 0.4, height * -0.4);
    vertex(0, height * 0.3);
    endShape();
    
    translate(-10,-5,1);
    fill(b3);
    noStroke();
    beginShape();
    vertex( -width * 0.45, height * -0.3);
    vertex(width * 0.4, height * -0.4);
    vertex(0, height * 0.3);
    endShape();
    
    
    save("20210203.png");
  noLoop();
        
    
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}
