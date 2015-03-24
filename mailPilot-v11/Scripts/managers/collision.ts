/// <reference path="../objects/submarine.ts" />
/// <reference path="../objects/smallFish.ts" />
/// <reference path="../objects/fish.ts" />
/// <reference path="../objects/scoreboard.ts" />

/*Source  file  name: collision.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This file check if two objects are collide (fish&submarine, fish&smallFish), if collide, the corresponding action will taken(point or life increase/decrease and game over)
Revision  History : Version 2.0*/

// Collision Manager Class
module managers {
    export class Collision {
        // class variables
        private fish: objects.Fish;
        private smallFishs = [];
        private submarines = [];
        private scoreboard: objects.Scoreboard;

        //constructor
        constructor(fish: objects.Fish, smallFishs, submarines, scoreboard: objects.Scoreboard) {
            this.fish = fish;
            this.smallFishs = smallFishs;
            this.submarines = submarines;
            this.scoreboard = scoreboard;
        }

        // Utility method - Distance calculation between two points
        private distance(p1: createjs.Point, p2: createjs.Point): number {
            var result: number = 0;
            var xPoints: number = 0;
            var yPoints: number = 0;

            xPoints = p2.x - p1.x;
            xPoints = xPoints * xPoints;

            yPoints = p2.y - p1.y;
            yPoints = yPoints * yPoints;

            result = Math.sqrt(xPoints + yPoints);

            return result;
        }

        // check collision between fish and any submarine object
        private fishAndSubmarine(submarine: objects.Submarine) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = submarine.image.x;
            p2.y = submarine.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (submarine.height / 2))) {
                createjs.Sound.play("explode");
                this.scoreboard.lives -= 1;
                submarine.reset();
            }
        }

        // check collision between fish and smallFish
        private fishAndSmallfish(smallFishInstance: objects.SmallFish) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();
            p1.x = this.fish.image.x;
            p1.y = this.fish.image.y;
            p2.x = smallFishInstance.image.x;
            p2.y = smallFishInstance.image.y;
            if (this.distance(p1, p2) < ((this.fish.height / 2) + (smallFishInstance.height / 2))) {
                createjs.Sound.play("pickup");
                this.scoreboard.score += 100;
                smallFishInstance.reset();
            }
        }

        // Utility Function to Check Collisions
        update() {
            //check collision for submarine and player avatar
            for (var count = 0; count < constants.SUBMARINE_NUM; count++) {
                this.fishAndSubmarine(this.submarines[count]);
            }
            //check collision for small fish and player avatar
            for (var count = 0; count < constants.SMALLFISH_NUM; count++) {
                this.fishAndSmallfish(this.smallFishs[count]);
            }
        }
    }
} 