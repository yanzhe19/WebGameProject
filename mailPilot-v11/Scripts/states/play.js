/// <reference path="../objects/button.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
//this is the state for playing game
/*Source  file  name: menu.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This file is the menu state file, it controls and create the menus state,
Revision  History : Version 2.0*/
//the play state of game
var states;
(function (states) {
    //update the play state
    function playState() {
        // +++++++++++++++++++++++++++++Update play state scene+++++++++++++++++++++++++++++++++++
        sea.update();
        for (var count = 0; count < constants.SMALLFISH_NUM; count++) {
            smallFishs[count].update();
        }
        fish.update();
        for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
            submarines[count].update();
        }
        //check collision of objects
        collision.update();
        //update the score board
        scoreboard.update();
        // +++++++++++++++++++++++++++++End of Update play state scene+++++++++++++++++++++++++++++++++++
        //check if player dead, if dead, go to game over state
        if (scoreboard.lives <= 0) {
            //remove everything from the stage first
            stage.removeChild(game);
            fish.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            //create the other state screen --> game over state screen
            currentState = constants.GAME_OVER_STATE;
            changeState(currentState);
        }
    }
    states.playState = playState;
    // play state Function, show the paly scene
    function play() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        //smallFish = new objects.SmallFish(stage, game);
        fish = new objects.Fish(stage, game);
        // Show Cursor
        stage.cursor = "none";
        for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
            submarines[count] = new objects.Submarine(stage, game);
        }
        for (var count = 0; count < constants.SMALLFISH_NUM; count++) {
            smallFishs[count] = new objects.SmallFish(stage, game);
        }
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        collision = new managers.Collision(fish, smallFishs, submarines, scoreboard);
        //add game container to stage
        stage.addChild(game);
    }
    states.play = play;
})(states || (states = {}));
//# sourceMappingURL=play.js.map