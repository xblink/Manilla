var canvas = document.getElementById("canvasID");
var context = canvas.getContext("2d");

var title = new Image();

function Button(src){
  this.img = new Image();
  this.img.src = src;
  this.x = 0; this.y = 0;
};
Button.prototype.clicked = function(){
    // TODO: When button was clicked
  };
Button.prototype.draw = function(){
    console.log(this.img.src);
    // TODO: Draw button to (this.x, this.y)
  };

function clickHandler(event){
    alert("Clicked at ("+event.x+","+event.y+").")
}



var button_Continue = new Button("resources/menuContinue.png");
var button_NewGame = new Button("resources/menuNewGame.png");
var button_Settings = new Button("resources/menuSettings.png");
var button_Title = new Button("resources/titleText.png");

button_Continue.x = 0; button_Continue.y = 0;
button_NewGame.x = 0; button_NewGame.y = 0;
button_Settings.x = 0; button_NewGame.y = 0;
button_Title.x = 0; button_Title.y = 0;

canvas.addEventListener("click", clickHandler);
//button_Continue.addEventListener("click", button_Continue.clicked);
//button_NewGame.addEventListener("click", button_NewGame.clicked);
//button_Settings.addEventListener("click", button_Settings.clicked);

var buttonList = [button_Continue, button_NewGame, button_Settings, button_Title];

var gameloop = function(){
    for (button in buttonList){
        button.draw();
    }
}