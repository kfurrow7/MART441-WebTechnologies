var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;
var square3;
var square4;
var square5;

createSquares();

drawSquare();


setInterval(moveBlackSquare, 5000);

function createSquares() {
    square1 = new Square(x, y, 30, 30, "#FF43B2");
    square2 = new Square(x2, y2, 60, 60, "black");
    square3 = new Square(x2, y2, 60, 60, "black");
    square4 = new Square(x2, y2, 60, 60, "black");
    square5 = new Square(x2, y2, 60, 60, "black");
}

function moveBlackSquare() {

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();

    square3.setX(Math.floor(Math.random() * canvas.width));
    square3.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();

    square4.setX(Math.floor(Math.random() * canvas.width));
    square4.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();

    square5.setX(Math.floor(Math.random() * canvas.width));
    square5.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();

    square2.setX(Math.floor(Math.random() * canvas.width));
    square2.setY(Math.floor(Math.random() * canvas.height));
    drawSquare();
}

function drawSquare() {
    ctx.clearRect(0, 0, 800, 600);
    ctx.fillStyle = square1.theColor;
    ctx.fillRect(square1.theX, square1.theY, square1.theWidth, square1.theHeight);
    ctx.fillStyle = square2.theColor;
    ctx.fillRect(square2.theX, square2.theY, square2.theWidth, square2.theHeight);

}

$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});

function getKey(event) {

    var didCollide = hasCollided(square1, square2, square3, square4, square5);

    if (didCollide) {

        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

        square1.setWidth(square1.theWidth - 1);
        square1.setHeight(square1.theHeight - 1);
        square2.setWidth(square2.theWidth + 1);
        square2.setHeight(square2.theHeight + 1);
    }

    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "i") {
        moveUp();
    } else if (actualLetter == "k") {
        moveDown();
    } else if (actualLetter == "l") {
        moveRight();
    } else if (actualLetter == "j") {
        moveLeft();
    }

    drawSquare();
}


function moveUp() {
    square1.setY(square1.theY - 7);
}


function moveDown() {
    square1.setY(square1.theY + 7);
}

function moveLeft() {
    square1.setX(square1.theX - 7);
}


function moveRight() {
    square1.setX(square1.theX + 7);
}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
