/// <reference path="../managers/playerasset.ts" />
// player Class
/*Source  file  name: player.ts, Author's  name: Andrew Mackle (300603655),  Last  Modified  by: Andrew Mackle,
Date  last  Modified: 2015_04_14,  Program description： This is to crate the player object for the player to controll*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Player = (function (_super) {
        __extends(Player, _super);
        //the constructor of player class
        function Player(stateNumber) {
            _super.call(this, managers.PlayerAssets.playerAtlas);
            this.walking = false;
            this.sprinting = false;

            switch (stateNumber) {
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
            onkeyup = this.keyupEvent;

            //this.addEventListener("key down", this.handleClick);
            this.player = this;
        }
        //event
        Player.prototype.keyDownEvent = function (event) {
            console.log(event.keyCode);
            this.e = event;
            if (this.e.type == "keydown") {
                switch (this.e.keyCode) {
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
                    case 68:
                        //sprint event
                        console.log("sprint event");
                        player.sprint();
                        break;
                    case 65:
                        //walk event
                        console.log("walk event");
                        player.walk();
                        break;
                }
            }
        };

        Player.prototype.keyupEvent = function (event) {
            console.log(event.keyCode);
            console.log(event.type);
            this.e = event;
            if (this.e.type == "keyup") {
                switch (this.e.keyCode) {
                    case 68:
                        //end sprint event
                        player.sprinting = false;
                        player.defaultAnimation();
                        break;
                    case 65:
                        //end walk event
                        player.walking = false;
                        player.defaultAnimation();
                        break;
                }
            }
        };

        //Public methods
        Player.prototype.update = function () {
            switch (this.state) {
                case "idle":
                    break;
                case "jump":
                    //jump animation
                    console.log(this.y);
                    this.y = constants.GROUND_LEVEL - (Math.sin((Date.now() - this.timerStart) * 0.0025) * 150);
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
                        this.timerStart = 1000000000;
                    }
                    this.x -= constants.BACKGROUND_MOVING_SPEED;
                    break;
                case "sprint":
                    //sprint animation
                    this.x += constants.BACKGROUND_MOVING_SPEED;
                    break;
                case "walk":
                    //walk animation
                    this.x -= constants.BACKGROUND_MOVING_SPEED * 1.5;
                    break;
                default:
                    break;
            }
        };

        Player.prototype.land = function () {
            this.timerStart = Date.now();
            this.state = "land";
            player.gotoAndPlay(this.state);
        };

        Player.prototype.idle = function () {
            this.state = "idle";
            this.gotoAndPlay(this.state);
        };

        Player.prototype.walk = function () {
            this.state = "walk";

            //this.gotoAndPlay(this.state);
            if (this.walking == false) {
                this.walking = true;
                this.gotoAndPlay(this.state);
            }
        };

        Player.prototype.run = function () {
            this.state = "run";
            this.gotoAndPlay(this.state);
        };

        Player.prototype.sprint = function () {
            this.state = "sprint";

            //this.gotoAndPlay(this.state);
            if (this.sprinting == false) {
                this.sprinting = true;
                this.gotoAndPlay(this.state);
            }
        };

        Player.prototype.jump = function () {
            this.state = "jump";
            this.timerStart = Date.now();
            player.gotoAndPlay(this.state);
        };

        Player.prototype.defaultAnimation = function () {
            this.state = this.defaultState;
            player.gotoAndPlay(this.state);
        };
        return Player;
    })(createjs.Sprite);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map
