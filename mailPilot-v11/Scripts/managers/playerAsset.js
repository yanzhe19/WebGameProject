/*Source  file  name: playerAsset.ts, Author's  name: Andrew Mackle (300603655),
description： This is the player asset manager file which controls all the assets associated with the player(image,audio,sprite sheet and so on) used in the game*/
//player asset manager
var managers;
(function (managers) {
    // Image and Sound Manifest;
    var playerManifest = [
        { id: "", src: "" }
    ];

    // SpriteSheet Data Object for the player object
    var playerSpriteSheetData = {
        "images": ["assets/images/playerSpriteSheet.png"],
        "frames": [
            [0, 0, 54, 72],
            [54, 0, 54, 72],
            [108, 0, 54, 72],
            [162, 0, 54, 72],
            [0, 80, 54, 72],
            [54, 80, 54, 72],
            [108, 80, 54, 72],
            [0, 170, 54, 72],
            [54, 170, 54, 72],
            [108, 170, 54, 72],
            [162, 170, 54, 72],
            [410, 2, 54, 73],
            [480, 13, 68, 62]
        ],
        "animations": {
            "moving 0": [0],
            "moving 1": [1],
            "moving 2": [2],
            "moving 3": [3],
            "idle 0": [4],
            "idle 1": [5],
            "idle 2": [6],
            "battle ready 0": [7],
            "battle ready 1": [8],
            "battle ready 2": [9],
            "battle ready 3": [10],
            "jump": [11],
            "land": [12]
        }
    };

    // Asset Manager Class
    var PlayerAssets = (function () {
        function PlayerAssets() {
        }
        //load the assets
        PlayerAssets.init = function () {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(playerManifest);

            //atlas for the player
            this.playerAtlas = new createjs.SpriteSheet(playerSpriteSheetData);
        };
        return PlayerAssets;
    })();
    managers.PlayerAssets = PlayerAssets;
})(managers || (managers = {}));
//# sourceMappingURL=playerAsset.js.map
