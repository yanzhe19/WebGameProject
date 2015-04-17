/// <reference path="../managers/playerasset.ts" />
// spell Class
/*Source  file  name: spell.ts, Author's  name: Andrew Mackle (300603655),
Program description： This is to crate the spell object for the player to cast*/

module objects {
    export class Spell extends createjs.Sprite {
        //define propereties of player
        width: number;
        height: number;
        spell: Spell;

        //the constructor of spell class
        constructor(stateNumber) {
            super(managers.PlayerAssets.playerAtlas);
            this.spell = this;
        }

        //Public methods
        public update() {

        }

        public destroy() {

        }
    }
}