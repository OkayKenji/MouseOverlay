// This is a tool that you could use when delvoping p5 skeches.
// It dispalys the x,y corrdinates of the mouse. 
//
// Possible future versions:
//  * Customize color
//  * Turn it on or off via console
//
// v8.23.2020 
//
// Special thanks to: 
// * "Daniel Shiffman" @ The Coding Train for helping me to learn this stuff
//    See his channel here: https://www.youtube.com/channel/UCvjgXvBlbQiydffZU7m1_aw; 
// * The developers of p5.js
//
//  How to implement this:
//  Add "<script src="https://okaykenji.github.io/MouseOverlay/mouseDraw.js"></script>" to HTML page.
//  Add "mouseLocation()" to the very last line of the draw() function
//  **Remember to remove these edits when making skeches public**
function mouseLocation() {
    fill(255);                                            //sets the fill of the box to white
    stroke(0)                                             //sets the outline of the box to black
    rect(mouseX,mouseY,85,25);                            //creates the box
    stroke(255,0,0,255)                                   //text outline to red
    fill(255,0,0,255);                                    //text fill to red
    text("("+mouseX+","+mouseY+")" ,mouseX+15,mouseY+15); //adding the coordinates into the box
}
