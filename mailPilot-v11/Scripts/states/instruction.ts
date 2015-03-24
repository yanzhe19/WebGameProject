// This is the Instruction State
/*Source  file  name: instruction.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This file is the instruction state file, it controls and create the instruction state and scene,
Revision  History : Version 2.0*/
//This is the instruction state
module states {
    //update the instruction state sea background
    export function instructionState() {
        sea.update();
    }

    //scene variables
    export var backBtn: objects.Button;

    //event listerner for back button clicked in instruction page
    export function goBackBtnClicked(event: MouseEvent) {
        stage.removeChild(game);
        game.removeAllChildren();
        game.removeAllEventListeners();
        //change state to menu state
        currentState = constants.MENU_STATE;
        changeState(currentState);
    }

    //instruction scene
    export function instructionScene() {
        //array used to display instructions
        var actualInstructionsLine = [];
        var instructionsStringArray = [];

        //game container
        game = new createjs.Container();

        //the sea in the background
        sea = new objects.Sea(stage, game);

        // Show Cursor
        stage.cursor = "default";

        //define instruction string
        instructionsStringArray = [
            "This is the Big Fish game, ",
            "you can use your mouse to move the fish",
            "If you eat one small fish, you win points",
            "Win as much points as possible!",
            "",
            "However, if you collide with submarine, ",
            "you lose one life, you have three lives in total",
            "Have Fun!"
        ];

        // Display the actual Instruction
        for (var line = 0; line < instructionsStringArray.length; line++) {
            actualInstructionsLine[line] = new createjs.Text(instructionsStringArray[line], "32px Dock51", "#A8EA1F");
            actualInstructionsLine[line].x = stage.canvas.width * 0.05;
            actualInstructionsLine[line].y = 20 + (40 * line);

            //add instruction to game container
            game.addChild(actualInstructionsLine[line]);
        }

        // Display Play game Button
        playButton = new objects.Button(stage.canvas.width * 3 / 4, 400, "btnPlay");
        game.addChild(playButton);
        playButton.addEventListener("click", playButtonClicked);

        // Display Go Back Button
        goBackBtn = new objects.Button(stage.canvas.width / 4, 400, "btnBack");
        game.addChild(goBackBtn);
        goBackBtn.addEventListener("click", goBackBtnClicked);

        //add game container to stage
        stage.addChild(game);
    }

}