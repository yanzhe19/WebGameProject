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

        //the constructor of player class
        constructor() {
            super(managers.PlayerAssets.playerAtlas, "idle 0");

            this.state = 0;
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.timeStart = Date.now();
            this.currentFrame = 0;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
        }

        //Public methods
        public update() {
            this.elapsedTime = Date.now() - this.timeStart;
            switch (this.state) {
                case 0:
                    //Idle animation
                    if (this.elapsedTime >= this.idleFrameRate) {
                        this.currentFrame++;
                        if (this.currentFrame > 2) {
                            this.currentFrame = 0;
                        }
                        this.gotoAndStop("idle " + this.currentFrame.toString());
                    }
                    break;
                case 1:
                    //moving animation
                    break;
            }
        }
    }
}