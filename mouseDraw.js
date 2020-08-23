function mouseLocation() {
    stroke(0)
    rect(mouseX,mouseY,85,25);
    stroke(255,0,0,255)
    fill(0,0,0,0);
    text("("+mouseX+","+mouseY+")" ,mouseX+15,mouseY+15);   
}
