/// <reference path="../managers/asset.ts" />
// stone class
/*Source  file  name: stone.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_29,  Program description： This file is the stone object file, it's the obejct of stone(obstacle),
Revision  History : Version 3.0*/
//this is the stone object
var objects;
(function (objects) {
    var Stone = (function () {
        //constructor of stone class
        function Stone(stage, game) {
            this.stage = stage;
            this.game = game;
            //get stone image from sprite sheet
            this.image = new createjs.Sprite(managers.Assets.atlas, "stone");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            // console.log(this.width,this.height);
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();
            //add stone to game container
            game.addChild(this.image);
        }
        //update the stone objects
        Stone.prototype.update = function () {
            this.image.x -= this.dx;
            //stone move behind scene, reset to initial place
            if (this.image.x < -this.width) {
                this.reset();
            }
        };
        //randomely put stone on the right side of canvas
        Stone.prototype.reset = function () {
            //randomly pur stone, off screen on the right side
            this.image.x = Math.floor(Math.random() * (100) + this.stage.canvas.width);
            //set dx the same as background speed
            this.dx = constants.BACKGROUND_MOVING_SPEED;
            this.image.y = constants.GROUND_LEVEL;
        };
        //define function to destroy the current submarine
        Stone.prototype.destroy = function () {
            //remove this submarine from game container
            game.removeChild(this.image);
        };
        return Stone;
    })();
    objects.Stone = Stone;
})(objects || (objects = {}));
//# sourceMappingURL=stone.js.map