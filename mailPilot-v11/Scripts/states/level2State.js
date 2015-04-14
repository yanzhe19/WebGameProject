/// <reference path="../objects/stone.ts" />
/// <reference path="../objects/fence.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
//this is the level two  state for playing game
/*Source  file  name: level2State.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_4_14,  Program description： This file is the level two state file, it controls and create the level two state,
Revision  History : Version 2.0*/
//the play state of game
var states;
(function (states) {
    //update the play state
    function level2State() {
        // +++++++++++++++++++++++++++++Update play state scene+++++++++++++++++++++++++++++++++++
        sea.update();
        //updates for player object
        fish.update();
        for (var count = 0; count < stones.length; count++) {
            stones[count].update();
        }
        for (var count = 0; count < fences.length; count++) {
            fences[count].update();
        }
        for (var count = 0; count < crystals.length; count++) {
            crystals[count].update();
        }
        for (var count = 0; count < ghosts.length; count++) {
            ghosts[count].update();
        }
        //check collision of objects
        //+++ comment temporary
        //collision.update();
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
        else if (scoreboard.score >= 2000) {
            //remove everything from the stage first
            stage.removeChild(game);
            fish.destroy();
            game.removeAllChildren();
            game.removeAllEventListeners();
            //create the other state screen --> LEVEL Three state screen
            currentState = constants.LEVEL_THREE_STATE;
            changeState(currentState);
        }
    }
    states.level2State = level2State;
    // play state Function, show the level 2 scene
    function level2Scene() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        //smallFish = new objects.SmallFish(stage, game);
        fish = new objects.Fish(stage, game);
        // Show Cursor
        stage.cursor = "none";
        //add stone, fence and crystal in the scene
        states.addObj();
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        //+++ comment temporary
        //collision = new managers.Collision(fish, smallFishs, submarines, scoreboard);
        //add game container to stage
        stage.addChild(game);
    }
    states.level2Scene = level2Scene;
    // add object to screen Loop
    function level2AddObj() {
        setInterval(function () {
            var randomSelection = Math.floor(Math.random() * 3) + 1;
            switch (randomSelection) {
                case 1:
                    if (stones.length < 3) {
                        level2AddStone();
                    }
                    else
                        level2AddCrystal();
                    break;
                case 2:
                    level2AddCrystal();
                    break;
                case 3:
                    if (fences.length < 3) {
                        level2AddFence();
                    }
                    else
                        level2AddCrystal();
                    break;
                case 4:
                    level2AddGhost();
                    break;
                default: level2AddCrystal();
            }
        }, (Math.floor(Math.random() * 4 + 1) * 300 + 2000));
    }
    states.level2AddObj = level2AddObj;
    function level2AddStone() {
        //add one stone 
        stones.push(new objects.Stone(stage, game));
    }
    states.level2AddStone = level2AddStone;
    function level2AddFence() {
        //add one fence 
        fences.push(new objects.Fence(stage, game));
    }
    states.level2AddFence = level2AddFence;
    function level2AddCrystal() {
        //add one crystal 
        crystals.push(new objects.Crystal(stage, game));
    }
    states.level2AddCrystal = level2AddCrystal;
    function level2AddGhost() {
        //add one ghost 
        ghosts.push(new objects.Ghost(stage, game));
    }
    states.level2AddGhost = level2AddGhost;
})(states || (states = {}));
//# sourceMappingURL=level2State.js.map