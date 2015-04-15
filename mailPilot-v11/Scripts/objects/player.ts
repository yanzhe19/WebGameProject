﻿/// <reference path="../managers/playerasset.ts" />
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
        player;

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
            this.player = this;
        }

        //event
        public keyDownEvent(event: KeyboardEvent) {
            console.log(event.keyCode);
            var e = event.keyCode;
            switch (e) {
                case 87:
                    //console.log("jump ... " + event);
                    player.jump();
                    //this.timerStart = Date.now();
                    //this.state = "jump";
                    //player.gotoAndPlay(this.state);
                    console.log("jump started");
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
                    this.y = constants.GROUND_LEVEL - (Math.sin((Date.now() - this.timerStart) * 0.005) * 100);
                    console.log(this.y);
                    if (this.y > constants.GROUND_LEVEL + 15) {
                        this.land();
                        this.y = constants.GROUND_LEVEL + 15;
                    }
                    break;
                case "land":
                    //land animation
                    if (Date.now() - this.timerStart >= 250) {
                        this.y = constants.GROUND_LEVEL;
                        this.idle();
                    }
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

    //jump = new function () {
    //    this.timerStart = Date.now();
    //    this.state = "jump";
    //    this.gotoAndPlay(this.state);
    //};
        public jump() {
            this.timerStart = Date.now();
            this.state = "jump";
            player.gotoAndPlay(this.state);
        }
    }
}