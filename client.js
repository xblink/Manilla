var PLAYGROUND_HEIGHT = 700;
var PLAYGROUND_WIDTH =  1200;
var REFRESH_RATE =      60;

$(function () {

    // frame constants:
    MENU=     0;
    NEW_GAME= 1;
    CONTINUE= 2;
    SETTINGS= 3;
    IN_GAME=  4;
    

    // globals
    var cFrame = MENU;
    var frameLoaded = false;


    $("#playground").playground({
        height: PLAYGROUND_HEIGHT,
        width: PLAYGROUND_WIDTH,
        refreshRate: 60,
        keyTracker: true,
        mouseTracker: true,
    });

    // playground sprites
    var background1 = new $.gQ.Animation({ imageURL: "./resource/stage/background1.png" });
    var titleGfx = new $.gQ.Animation({ imageURL: "./resource/stage/titleText.png" });

    var menuNEW_GAME = new $.gQ.Animation({imageURL: "./resource/stage/menuNewGame.png"});
    var menuCONTINUE = new $.gQ.Animation({imageURL: "./resource/stage/menuContinue.png"});
    var menuSETTINGS = new $.gQ.Animation({ imageURL: "./resource/stage/menuSettings.png"});
    var menuEXIT = new $.gQ.Animation({ imageURL: "./resource/stage/menuExit.png"})


    /**
    * Utility function that clear all visual aspects from the screen
    */
    function clearScreen() {
        // TODO: merge with changeFrame if not used outside of changeFrame
        $.playground().pauseGame();
        $.playground().clearScenegraph();
        $.playground().resumeGame();
    };

    /**
    * Utility function to change the current frame to given frame
    * 
    * @param {newFrame} frame to be changed to
    */
    function changeFrame(newFrame) {
        clearScreen();
        cFrame = newFrame;
    };


    /**
    * Utility function that add visual elements to the screen.
    *
    * @param {frameID} frameID to be built
    */
    function loadFrame(frameID) {
        switch (frameID) {
            case MENU:
                $.playground().addSprite("background1", {
                    posx: 0, posy: 0,
                    height: PLAYGROUND_HEIGHT,
                    width: PLAYGROUND_WIDTH,
                    animation: background1,
                });

                $.playground().addSprite("menuNEW_GAME", {
                    posx: PLAYGROUND_WIDTH * .4 + 100,
                    posy: PLAYGROUND_HEIGHT * .2,
                    height: PLAYGROUND_HEIGHT * .2,
                    width: PLAYGROUND_WIDTH * .2,
                    animation: menuNEW_GAME,
                });
                $.playground().addSprite("menuCONTINUE", {
                    posx: PLAYGROUND_WIDTH * .4 + 100,
                    posy: PLAYGROUND_HEIGHT * .3,
                    height: PLAYGROUND_HEIGHT * .2,
                    width: PLAYGROUND_WIDTH * .2,
                    animation: menuCONTINUE,
                });
                $.playground().addSprite("menuSETTINGS", {
                    posx: PLAYGROUND_WIDTH * .4 + 100,
                    posy: PLAYGROUND_HEIGHT * .4,
                    height: PLAYGROUND_HEIGHT * .2,
                    width: PLAYGROUND_WIDTH * .2,
                    animation: menuSETTINGS,
                });

                // newgame
                $("#menuNEW_GAME").click(function (e) {
                    console.log("Click New Game");
                    changeFrame(NEW_GAME);
                });
                $("#menuNEW_GAME").hover(function (e) {
                    console.log("Over New Game");
                }, function (e) {
                    console.log("Out New Game");
                });

                // continue
                $("#menuCONTINUE").click(function (e) {
                    console.log("Click Continue");
                    changeFrame(CONTINUE);
                });
                $("#menuCONTINUE").hover(function (e) {
                    console.log("Over Continue");
                }, function (e) {
                    console.log("Out Continue");
                });

                // settings
                $("#menuSETTINGS").click(function (e) {
                    console.log("Click Settings");
                    changeFrame(SETTINGS);
                });
                $("#menuSETTINGS").hover(function (e) {
                    console.log("Over Settings");
                }, function (e) {
                    console.log("Out Settings");
                });


                frameLoaded = true;
                break;
            case NEW_GAME:
                break;
            case CONTINUE:
                break;
            case SETTINGS:
                break;
            case PLAYGAME:
                break;
        }
    };

    /**
    * Callback function to serve as the main loop.
    */
    function main() {
        if (!frameLoaded) loadFrame(cFrame);

        switch (cFrame) {
            case MENU:
                break;
            case NEW_GAME:
                break;
            case CONTINUE:
                break;
            case SETTINGS:
                break;
            case PLAYGAME:
                break;
        }; // switch
    };



    // callbacks
    $.playground().registerCallback(main, REFRESH_RATE); // main

    // start loading
    $.loadCallback(function (percent) {
        $("#loadingBar").width(PLAYGROUND_WIDTH * .0075 * percent);
    });

    // initialize start button
    $.playground().startGame(function () {
        $("#welcome").fadeOut(2000, function () {$(this).remove() });
    });
    
});




