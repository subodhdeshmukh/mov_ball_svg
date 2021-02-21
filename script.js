//global variables
let a = 50, b=50;
let circle = document.getElementById("circle")
circle.style.transition="0.5s"
// go()
function go(){
    if(a < 850){
        a += 50;
        circle.style.cx = a + "px";
        circle.style.fill = "blue";
        console.log(a + "stamt");
    }
}

// back()
function back(){
    if(a > 50){
        a -= 50;
        circle.style.cx = a + "px" ;
        circle.style.fill = "red";
        console.log(a + "stamt");
    }
}

// up()
function up(){
    if(b > 50){
        b -= 50;
        circle.style.cy = b + "px" ;
        circle.style.fill = "green";
        console.log(b + "stamt");
    }
}

// Down()
function down(){
    if(b < 450){
        b += 50;
        circle.style.cy = b + "px" ;
        circle.style.fill = "yellow";
        console.log(b + "stamt");
    }
}


// reset()
function reset(){
    a=50;
    b=50;
    circle.style.cx = a + "px";
    circle.style.cy = b + "px";
    circle.style.fill = "red";
}