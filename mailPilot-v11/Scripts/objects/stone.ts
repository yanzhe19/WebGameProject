/// <reference path="../managers/asset.ts" />
// stone class
/*Source  file  name: stone.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_29,  Program description： This file is the stone object file, it's the obejct of stone(obstacle),
Revision  History : Version 3.0*/

//this is the stone object
module objects {
    export class Stone {
        //define propereties of stone
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        width: number;
        height: number;
        dx: number;

        //constructor of stone class
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            //get stone image from sprite sheet
            this.image = new createjs.Sprite(managers.Assets.projectAtlas, "stone");
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
        update() {
            this.image.x -= this.dx;
            //stone move behind scene, reset to initial place
            if (this.image.x < -this.width) {
                //remove it
                this.destroy();
            }
        }

        //randomely put stone on the right side of canvas
        reset() {
            //randomly pur stone, off screen on the right side
            this.image.x = Math.floor(Math.random() * (500) + this.stage.canvas.width);

            //random place function
            //var arr = []
            //while (arr.length < 8) {
            //    var randomnumber = Math.ceil(Math.random() * 100)
            //    var found = false;
            //    for (var i = 0; i < arr.length; i++) {
            //        if (arr[i] == randomnumber) { found = true; break }
            //    }
            //    if (!found) arr[arr.length] = randomnumber;
            //}
            //document.write(arr);

            //set dx the same as background speed
            this.dx = constants.BACKGROUND_MOVING_SPEED;
            this.image.y = constants.GROUND_LEVEL;
        }

        //define function to destroy the current stone
        destroy() {
            //remove this stone from game container
            game.removeChild(this.image);
        }
    }

} 