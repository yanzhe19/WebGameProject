    /*Source  file  name: constants.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
    Date  last  Modified: 2015_3_18,  Program description： This file is the constants.ts file which contains the constant variables used in game.
    Revision  History : Version 2.0*/
//constants used in this game
module constants {
    // State Machine Constants
    export var MENU_STATE: number = 0;
    export var PLAY_STATE: number = 1;
    export var GAME_OVER_STATE: number = 2;
    export var INSTRUCTION_STATE: number = 3;

    // Game Constants
    export var SUBMARINE_NUM: number = 3;
    export var SMALLFISH_NUM: number = 2;
    export var LABEL_FONT = "40px Consolas";
    export var LABEL_COLOUR = "#FFFF00";
    export var PLANE_LIVES = 3;
}