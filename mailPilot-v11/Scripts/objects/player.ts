/// <reference path="../managers/playerasset.ts" />
// player Class
/*Source  file  name: player.ts, Author's  name: Andrew Mackle (300603655),  Last  Modified  by: Andrew Mackle,  
Date  last  Modified: 2015_04_14,  Program description： This is to crate the player object for the player to controll*/

module objects {
    export class Player extends createjs.Sprite {
        //define propereties of player
        width: number;
        height: number;
        timerStart: number;
        private state: string;

        //the constructor of player class
        constructor() {
            super(managers.PlayerAssets.playerAtlas);

            this.state = "idle";
            this.gotoAndPlay(this.state);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = constants.GROUND_LEVEL;
            this.x = constants.GROUND_LEVEL * 0.5;

            onkeydown = this.keyDownEvent;
            //this.addEventListener("key down", this.handleClick);
        }

        //event
        public keyDownEvent(event: KeyboardEvent) {
            switch (event.charCode) {
                case 18:
                    console.log("jump ... " + event);
                    this.jump();
                    break;
            }
        }

        //Public methods
        public update() {
            switch (this.state) {
                case "idle":
                    //Idle animation
                    break;
                case "jump":
                    //jump animation
                    this.y = constants.GROUND_LEVEL + Math.sin(Date.now() - this.timerStart);
                    if (this.y > constants.GROUND_LEVEL) {
                        this.land();
                        this.y = constants.GROUND_LEVEL;
                    }
                    break;
                case "land":
                    //land animation
                    break;
            }
        }

        public land() {
            this.state = "land";
            this.gotoAndPlay(this.state);
        }

        public idle() {
            this.state = "idle"; 
            this.gotoAndPlay(this.state);
        }

        public walk() {
            this.state = "walk";
            this.gotoAndPlay(this.state);
        }

        public run() {
            this.state = "run";
            this.gotoAndPlay(this.state);
            this.timerStart = Date.now();
        }

        public jump() {
            this.state = "jump";
            this.gotoAndPlay(this.state);
        }
    }
}