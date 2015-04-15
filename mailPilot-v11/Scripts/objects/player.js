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
        function Player() {
            _super.call(this, managers.PlayerAssets.playerAtlas);
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
        Player.prototype.keyDownEvent = function (event) {
            console.log(event.keyCode);
            var e = event.keyCode;
            switch (e) {
                case 87:
                    console.log("jump ... " + event);
                    this.jump();
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
                    this.y = constants.GROUND_LEVEL - Math.sin(Date.now() - this.timerStart);
                    console.log(this.y);
                    if (this.y > constants.GROUND_LEVEL) {
                        this.land;
                        this.y = constants.GROUND_LEVEL;
                    }
                    break;
                case "land":
                    break;
            }
        };
        Player.prototype.land = function () {
            this.state = "land";
            this.gotoAndPlay(this.state);
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
            this.gotoAndPlay(this.state);
        };
        return Player;
    })(createjs.Sprite);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map