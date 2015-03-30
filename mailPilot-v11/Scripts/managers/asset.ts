/*Source  file  name: asset.ts, Author's  name: Zhe Yan (300706310),  Last  Modified  by: Zhe Yan,  
Date  last  Modified: 2015_3_18,  Program description： This is the assets manager file which controls all the asset(image,audio,sprite sheet and so on) used in the game,
Revision  History : Version 2.0*/

//asset manager
module managers {
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

            "btnBack": [0],
            "btnBackMenu": [1],
            "btnInstruction": [2],
            "btnPlay": [3],
            "btnTryAgain": [4],
            "fish": [5],
            "smallFish": [6],
            "submarine": [7]
        }
    }

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
    }

    // Asset Manager Class
    export class Assets {
        public static manifest;
        public static data;

        public static loader;
        public static atlas: createjs.SpriteSheet;

        //load the assets
        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(assetManifest);
            this.atlas = new createjs.SpriteSheet(fishGameSpriteSheetData);
        }

    }
} 