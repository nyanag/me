let frames = 0;
function setup() {
    createCanvas(window.innerWidth-15, window.innerHeight-100);
}

function draw() {
    background(255,255,255,25)
    frames = frames+1
    if (frames === 500){
        background(255)
        frames = 0
    } 
    // if(mouseIsPressed){
    //     noCursor();
    //     strokeWeight(0)
    //     fill(255, random(255), 200)
    //     ellipse(mouseX,mouseY,40)
    // }
    // else{
    //     background(255)
    // }
    fill(random(255),200,random(255))
    triangle(mouseX,mouseY,mouseX+25,mouseY-25,mouseX-20,mouseY-10)
    // fill(random(255),random(255),255)
    // ellipse(mouseX,mouseY,20);
    // ellipse(mouseX+40,mouseY-40,20);

}

function doubleClicked(){
    fill(random(255),200,random(255))
    triangle(mouseX,mouseY,mouseX+45,mouseY+45,mouseX-20,mouseY-50)
}
function mouseClicked(){
    fill(random(255),random(255),255)
    ellipse(mouseX,mouseY,30);
}

function mouseDragged(){
    fill(random(255),random(255),200)
    rect(mouseX,mouseY, random(50),random(20))
    noCursor();
}