/// <reference path="../managers/playerasset.ts" />

// lightningSpell class
/*Source  file  name: lightningSpell.ts, Author's  name: Andrew Mackle (300603655), 
Program description： This file is the lightningSpell object file*/

//this is the lightningSpell object
module objects {
    export class lightningSpell extends createjs.Sprite {
        //define propereties of lightningSpell
        image: createjs.Sprite;
        stage: createjs.Stage;
        width: number;
        height: number;

        //the constructor of lighning class
        constructor(stateNumber) {

        }

        //define function to destroy the current spell
        destroy() {
            //stop sound
        }
    }

}