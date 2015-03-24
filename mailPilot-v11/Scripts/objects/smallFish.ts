/// <reference path="../managers/asset.ts" />
// small fish Class
/*Source  file  name: smallFish.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This file is the smallFish object file, it's the obejct of small fish(bonus point),
Revision  History : Version 2.0*/
//this is the small fish object --> which is the object for player avatar to collect points
module objects {
    export class SmallFish {
        //define all the properties of small fish class
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        height: number;
        width: number;
        dx: number;
        dy: number;

        //the constructor of small fish class
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.Assets.atlas, "smallFish");
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            this.image.regX = this.width / 2;
            this.image.regY = this.height / 2;
            this.reset();       

            //add the current small fish to game container
            game.addChild(this.image);
        }

        //function to update small fish class
        update() {
            //small fish move beyond scene, reset its position
            if (this.image.x < (- this.width)) {
                this.reset();
            }

            //small fish over sea level,  move down
            if (this.image.y <= 120) {
                this.dy = Math.abs(this.dy);
            }

            //change small fish position according to dx,dy
            this.image.x -= this.dx;
            this.image.y += this.dy;
        }

        //reset the small fish position
        reset() {
            //randomly generate small fish y position
            this.image.y = Math.floor(Math.random() * (this.stage.canvas.height - 120) + 120);
            //set small fish x to right side canvas margin
            this.image.x = this.stage.canvas.width + this.width;

            //randomly generate the dy and dx
            this.dy = Math.floor(Math.random() * -2) + Math.floor(Math.random() * 2);
            //set speed of small fish to a random value
            this.dx = Math.floor(Math.random() * 3 + 3);   
        }

        //function to destroy small fish
        destroy() {
            //remove small fish from game container
            game.removeChild(this.image);
        }
    }

}