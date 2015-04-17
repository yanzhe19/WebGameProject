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

            //this.addEventListener("key down", this.handleClick);
            this.player = this;
        }
        //event
        Player.prototype.keyDownEvent = function (event) {
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
        };

        //Public methods
        Player.prototype.update = function () {
            switch (this.state) {
                case "idle":
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
            this.gotoAndPlay(this.state);
        };

        Player.prototype.run = function () {
            this.state = "run";
            this.gotoAndPlay(this.state);
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
