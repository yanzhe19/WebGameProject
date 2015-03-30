/*Source  file  name: asset.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,
Date  last  Modified: 2015_3_18,  Program description： This is the assets manager file which controls all the asset(image,audio,sprite sheet and so on) used in the game,
Revision  History : Version 2.0*/
//asset manager
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var assetManifest = [
        { id: "loading", src: "assets/images/loading.jpg" },
        { id: "sea", src: "assets/images/sea.jpg" },
        { id: "explode", src: "assets/sounds/explosion.wav" },
        { id: "pickup", src: "assets/sounds/pickup.wav" },
        { id: "oceanSound", src: "assets/sounds/ocean.mp3" }
    ];
    // SpriteSheet Data Object for original fish game, will need to remove in future
    var fishGameSpriteSheetData = {
        "images": ["assets/images/atlas.png"],
        "frames": [
            [2, 2, 200, 100],
            [204, 2, 200, 100],
            [2, 104, 200, 100],
            [204, 104, 200, 100],
            [2, 206, 200, 100],
            [2, 308, 120, 82],
            [124, 308, 70, 63],
            [204, 206, 150, 97]
        ],
        "animations": {
            "btnback": [0],
            "btnbackmenu": [1],
            "btninstruction": [2],
            "btnplay": [3],
            "btntryagain": [4],
            "fish": [5],
            "smallfish": [6],
            "submarine": [7]
        }
    };
    // SpriteSheet Data Object for this project, this is the one we used
    var projectGameSpriteSheetData = {
        "images": ["assets/images/obstacle.png"],
        "frames": [
            [94, 129, 50, 50],
            [2, 129, 90, 94],
            [2, 2, 100, 125]
        ],
        "animations": {
            "crystal": [0],
            "fence": [1],
            "stone": [2]
        }
    };
    // Asset Manager Class
    var Assets = (function () {
        function Assets() {
        }
        //atlas
        //obstacleSprite
        //load the assets
        Assets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(fishGameSpriteSheetData);
        };
        return Assets;
    })();
    managers.Assets = Assets;
})(managers || (managers = {}));
//# sourceMappingURL=asset.js.map