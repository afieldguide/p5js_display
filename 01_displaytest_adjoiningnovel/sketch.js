let r = 0;
let img;

function preload() {
  img = loadImage('icon.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  
  rect(25,25,width-50,height-50);
  
    for(let i = 0; i < width+50; i+=50){
      for(let j = 0; j < height+50; j+=50){
        push();
        translate(i,j);
        rotate(r);
        scale(5);
        triangle(5,5, -5,5, 0,-5);
        
        if(dist(i,j,mouseX,mouseY)<15){
          tint(255);
        } else { tint(0,0,255); }
        
        image(img,-10/2,-10/2,10,10);
        pop();
      }
    }
  
}

function mouseReleased() {
  r += 45;
}
