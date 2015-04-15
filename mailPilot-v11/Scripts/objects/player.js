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
            this.idleFrameRate = 100;
            this.idleMaxFrame = 2;
            this.walkingFrameRate = 100;
            this.movingMaxFrame = 3;
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
        Player.prototype.update = function () {
            switch (this.state) {
                case 0:
                    break;
                case 1:
                    break;
            }
        };
        return Player;
    })(createjs.Sprite);
    objects.Player = Player;
})(objects || (objects = {}));
//# sourceMappingURL=player.js.map