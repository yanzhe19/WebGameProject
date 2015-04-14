/// <reference path="../objects/stone.ts" />
/// <reference path="../objects/fence.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/crystal.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/ufo.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../managers/collision.ts" />
//this is the level two  state for playing game
/*Source  file  name: level3State.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_4_14,  Program description： This file is the level three state file, it controls and create the level three state,
Revision  History : Version 2.0*/
//the play state of game
var states;
(function (states) {
    //update the level 3 state
    function level3State() {
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
        for (var count = 0; count < ufos.length; count++) {
            ufos[count].update();
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
    }
    states.level3State = level3State;
    // play state Function, show the level 3 scene
    function level3Scene() {
        // Declare new Game Container
        game = new createjs.Container();
        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        fish = new objects.Fish(stage, game);
        // Show Cursor
        stage.cursor = "none";
        //add stone, fence, crystal, ghost and ufo in the scene
        level3AddObj();
        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);
        // Instantiate Collision Manager
        //+++ comment temporary
        //collision = new managers.Collision(fish, smallFishs, submarines, scoreboard);
        //add game container to stage
        stage.addChild(game);
    }
    states.level3Scene = level3Scene;
    // add object to screen Loop
    function level3AddObj() {
        setInterval(function () {
            var randomSelection = Math.floor(Math.random() * 5) + 1;
            console.log(randomSelection);
            switch (randomSelection) {
                case 1:
                    if (stones.length < 3) {
                        level3AddStone();
                    }
                    else
                        level3AddCrystal();
                    break;
                case 2:
                    level3AddCrystal();
                    break;
                case 3:
                    if (fences.length < 3) {
                        level3AddFence();
                    }
                    else
                        level3AddCrystal();
                    break;
                case 4:
                    level3AddGhost();
                    break;
                case 5:
                    if (ufos.length < 1) {
                        level3AddUFO();
                    }
                    else
                        level3AddCrystal();
                    break;
                default: level3AddCrystal();
            }
        }, (Math.floor(Math.random() * 4 + 1) * 300 + 2000));
    }
    states.level3AddObj = level3AddObj;
    function level3AddStone() {
        //add one stone 
        stones.push(new objects.Stone(stage, game));
    }
    states.level3AddStone = level3AddStone;
    function level3AddFence() {
        //add one fence 
        fences.push(new objects.Fence(stage, game));
    }
    states.level3AddFence = level3AddFence;
    function level3AddCrystal() {
        //add one crystal 
        crystals.push(new objects.Crystal(stage, game));
    }
    states.level3AddCrystal = level3AddCrystal;
    function level3AddGhost() {
        //add one ghost 
        ghosts.push(new objects.Ghost(stage, game));
    }
    states.level3AddGhost = level3AddGhost;
    function level3AddUFO() {
        //add one ghost 
        ufos.push(new objects.Ufo(stage, game)); // change later
    }
    states.level3AddUFO = level3AddUFO;
})(states || (states = {}));
//# sourceMappingURL=level3state.js.map