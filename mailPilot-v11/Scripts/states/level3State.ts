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
module states {

    //update the level 3 state
    export function level3State() {
        // +++++++++++++++++++++++++++++Update play state scene+++++++++++++++++++++++++++++++++++
        sea.update();

        //updates for player object
        fish.update();

        //update all stones
        for (var count = 0; count < stones.length; count++) {
            stones[count].update();
        }

        //update all fences
        for (var count = 0; count < fences.length; count++) {
            fences[count].update();
        }

        //update all crystals
        for (var count = 0; count < crystals.length; count++) {
            crystals[count].update();
        }

        //update all ghost
        for (var count = 0; count < ghosts.length; count++) {
            ghosts[count].update();
        }

        //update all ufo
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

    // play state Function, show the level 3 scene
    export function level3Scene(): void {
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

    // add object to screen Loop
    export function level3AddObj(): void {
        setInterval(
            function () {
                var randomSelection = Math.floor(Math.random() * 5) + 1;
                console.log(randomSelection);
                switch (randomSelection) {
                    case 1:
                        if (stones.length < 3) {
                            level3AddStone();
                        } else level3AddCrystal();
                        break;
                    case 2:
                        level3AddCrystal();
                        break;
                    case 3:
                        if (fences.length < 3) {
                            level3AddFence();
                        } else level3AddCrystal();
                        break;
                    case 4:
                        level3AddGhost();
                        break;
                    case 5:
                        if (ufos.length < 1) {// maximum 2 ufo in the sky
                            level3AddUFO();
                        } else level3AddCrystal();
                        break;
                    default: level3AddCrystal();
                }
            },
            (Math.floor(Math.random() * 4 + 1) * 300 + 2000) //set interval to exetution
            );
    }

    export function level3AddStone() {
        //add one stone 
        stones.push(new objects.Stone(stage, game));
    }
    export function level3AddFence() {
        //add one fence 
        fences.push(new objects.Fence(stage, game));
    }
    export function level3AddCrystal() {
        //add one crystal 
        crystals.push(new objects.Crystal(stage, game));
    }
    export function level3AddGhost() {
        //add one ghost 
        ghosts.push(new objects.Ghost(stage, game));
    }
    export function level3AddUFO() {
        //add one ghost 
        ufos.push(new objects.Ufo(stage, game));// change later
    }
}  