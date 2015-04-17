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
        state: string;
        defaultState: string;
        player: Player;

        //the constructor of player class
        constructor(stateNumber) {
            super(managers.PlayerAssets.playerAtlas);

            switch (stateNumber){
                case constants.MENU_STATE:
                    this.defaultState = "idle";
                    break;

                case constants.PLAY_STATE:
                    this.defaultState = "run";
                    break;

                case constants.GAME_OVER_STATE:
                    this.defaultState = "idle";
                    break;

                case constants.INSTRUCTION_STATE:
                    this.defaultState = "idle";
                    break;

                case constants.LEVEL_TWO_STATE:
                    this.defaultState = "run";
                    break;

                case constants.LEVEL_THREE_STATE:
                    this.defaultState = "run";
                    break;
            }
            this.gotoAndPlay(this.defaultState);
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;

            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;

            this.y = constants.GROUND_LEVEL;
            this.x = constants.GROUND_LEVEL * 0.5;

            onkeydown = this.keyDownEvent;
            
            //this.addEventListener("key down", this.handleClick);
            this.player = this;
        }

        //event
        public keyDownEvent(event: KeyboardEvent) {
            console.log(event.keyCode);
            var e = event.keyCode;
            switch (e) {
                case 87:
                    //jump event
                    console.log("jump event");
                    player.jump();
                    break;
                case 83:
                    //land event
                    console.log("land event");
                    player.land();
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
                    console.log(this.y);
                    this.y = constants.GROUND_LEVEL - (Math.sin((Date.now() - this.timerStart) * 0.002) * 150);
                    console.log(this.y);
                    if (this.y > constants.GROUND_LEVEL + 15) {
                        this.land();
                    }
                    break;
                case "land":
                    //land animation
                    this.y = constants.GROUND_LEVEL + 15;
                    if (Date.now() - this.timerStart >= 250) {
                        this.y = constants.GROUND_LEVEL;
                        this.defaultAnimation();
                        this.timerStart = Date.now();
                    }
                    this.x -= constants.BACKGROUND_MOVING_SPEED;
                    break;
                case "run":
                    //run animation
                    break;
            }
        }

        public land() {
            this.timerStart = Date.now();
            this.state = "land";
            player.gotoAndPlay(this.state);
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
        }

        public jump() {
            this.state = "jump";
            this.timerStart = Date.now();
            player.gotoAndPlay(this.state);
        }

        public defaultAnimation() {
            this.state = this.defaultState;
            player.gotoAndPlay(this.state);
        }
    }
}