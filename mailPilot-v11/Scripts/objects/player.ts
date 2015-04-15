/// <reference path="../managers/playerasset.ts" />
// player Class
/*Source  file  name: player.ts, Author's  name: Andrew Mackle (300603655),  Last  Modified  by: Andrew Mackle,  
Date  last  Modified: 2015_04_14,  Program description： This is to crate the player object for the player to controll*/

module objects {
    export class Player extends createjs.Sprite {
        //define propereties of player
        width: number;
        height: number;
        state: number;
        elapsedTime: number;
        timeStart: number;
        currentFrame: number;
        idleFrameRate: number = 100;
        idleMaxFrame: number = 2;
        walkingFrameRate: number = 100;
        movingMaxFrame: number = 3;

        //the constructor of player class
        constructor() {
            super(managers.PlayerAssets.playerAtlas);

            this.state = 0;
            this.gotoAndPlay("idle");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.timeStart = Date.now();
            this.currentFrame = 0;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = constants.GROUND_LEVEL;
            this.x = constants.GROUND_LEVEL * 0.5;
        }

        //Public methods
        public update() {
            switch (this.state) {
                case 0:
                    //Idle animation
                    //this.gotoAndPlay("idle");
                    break;
                case 1:
                    //moving animation (walking)
                    break;
            }
        }

        //public idle() {
        //    this.state = 0; 
        //}
    }
}