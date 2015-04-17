/// <reference path="../constants.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/sea.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/player.ts" />

/*Source  file  name: menu.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This file is the menu state file, it controls and create the menus state,
Revision  History : Version 2.0*/

//This is the menu state
module states {
    //event listener when play button of menu screen clicked
    export function playButtonClicked(event: MouseEvent) {
        //remove everything from the stage frist
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        //create another state screen --> play state screen
        currentState = constants.PLAY_STATE;//place to set the initial start level, current is the play state (level one)
        changeState(currentState);
    }

    //event listener when instruction button of menu screen clicked
    export function instructionBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        //go to the instruction state and screen changed to insturction state
        currentState = constants.INSTRUCTION_STATE;
        changeState(currentState);
    }

    //menu state function, updates for menu states
    export function menuState() {
        sea.update();
        player.update();
    }

    //create the menu state scene
    export function menu(state) {
        //label show the name of game
        var gameNameLabel: objects.Label;

        // Declare new Game Container
        game = new createjs.Container();

        // Instantiate Game Objects
        sea = new objects.Sea(stage, game);
        player = new objects.Player(state);

        // Show Cursor
        stage.cursor = "default";

        // Display Game Over
        gameNameLabel = new objects.Label(stage.canvas.width / 2, 40, "Dtzz Game!");
        game.addChild(gameNameLabel);

        // Display Instruction Button
        instructionBtn = new objects.Button(stage.canvas.width / 2, 230, "btnInstruction");
        game.addChild(instructionBtn);
        instructionBtn.addEventListener("click", instructionBtnClicked);

        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width / 2, 300, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        //onkeypress = this.keyEvent;

        //Display idle player object
        //player.idle();
        game.addChild(player);

        //add game container to the stage
        stage.addChild(game);
    }

    //export function keyEvent(event: KeyboardEvent) {
    //    console.log(event.keyCode);
    //    var e = event;
    //    if (e.type == "keypress") {
    //        switch (e.keyCode) {
    //            case 49:
    //                //1: change to level 1
    //                stage.removeChild(game);
    //                game.removeAllChildren();
    //                game.removeAllEventListeners();
    //                currentState = constants.PLAY_STATE;
    //                changeState(currentState);
    //                break;
    //            case 50:
    //                //2: change to level 2
    //                stage.removeChild(game);
    //                game.removeAllChildren();
    //                game.removeAllEventListeners();
    //                currentState = constants.LEVEL_TWO_STATE;
    //                changeState(currentState);
    //                break;
    //            case 51:
    //                //3: change to level 3
    //                stage.removeChild(game);
    //                game.removeAllChildren();
    //                game.removeAllEventListeners();
    //                currentState = constants.LEVEL_THREE_STATE;
    //                changeState(currentState);
    //                break;
    //            case 77:
    //                //M: mute or unmute
    //                backgroundSound.setMute(!backgroundSound.getMute());
    //                break;
    //            case 40:
    //                //down arrow key: volume down
    //                backgroundSound.setVolume(backgroundSound.getVolume() - volumeAdjustmentValue);
    //                break;
    //            case 38:
    //                //up arrow key: volume up
    //                backgroundSound.setVolume(backgroundSound.getVolume() + volumeAdjustmentValue);
    //                break;
    //            case 87:
    //                //W
    //                break;
    //            case 83:
    //                //S
    //                break;
    //            case 68:
    //                //D
    //                break;
    //            case 65:
    //                //A
    //                break;
    //        }
    //    }
    //}
} 