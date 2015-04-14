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
module states {

    //update the play state
    export function level2State() {
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

    // play state Function, show the level 2 scene
    export function level2(): void {
        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        //smallFish = new objects.SmallFish(stage, game);
        fish = new objects.Fish(stage, game);

        // Show Cursor
        stage.cursor = "none";

        //add stone, fence and crystal in the scene
        addObj();

        // Display Scoreboard
        scoreboard = new objects.Scoreboard(stage, game);

        // Instantiate Collision Manager
        //+++ comment temporary
        //collision = new managers.Collision(fish, smallFishs, submarines, scoreboard);

        //add game container to stage
        stage.addChild(game);
    }

    // add object to screen Loop
    export function level2AddObj(): void {
        setInterval(
            function () {
                var randomSelection = Math.floor(Math.random() * 3) + 1;
                console.log(randomSelection);
                switch (randomSelection) {

                    case 1:
                        if (stones.length < 3) {
                            addStone();
                        } else addCrystal();
                        break;
                    case 2:
                        addCrystal();
                        break;
                    case 3:
                        if (fences.length < 3) {
                            addFence();
                        } else addCrystal();
                        break;
                    case 4:
                        addGhost();
                        break;
                    default: addCrystal();
                }
            },
            (Math.floor(Math.random() * 4 + 1) * 300 + 2000) //set interval to exetution
            );
    }

    export function level2AddStone() {
        //add one stone 
        stones.push(new objects.Stone(stage, game));
    }
    export function level2AddFence() {
        //add one fence 
        fences.push(new objects.Fence(stage, game));
    }
    export function level2AddCrystal() {
        //add one crystal 
        crystals.push(new objects.Crystal(stage, game));
    }
    export function level2AddGhost() {
        //add one ghost 
        ghosts.push(new objects.Ghost(stage, game));
    }
} 