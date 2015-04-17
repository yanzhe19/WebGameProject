/// <reference path="../managers/playerasset.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
// lightningSpell class
/*Source  file  name: lightningSpell.ts, Author's  name: Andrew Mackle (300603655),
Program description： This file is the lightningSpell object file*/
//this is the lightningSpell object
var objects;
(function (objects) {
    var lightningSpell = (function (_super) {
        __extends(lightningSpell, _super);
        //the constructor of lighning class
        function lightningSpell(stateNumber) {
            _super.call(this, managers.PlayerAssets.spellAtlas);
            this.gotoAndPlay("cast");
        }
        //define function to destroy the current spell
        lightningSpell.prototype.destroy = function () {
            //stop sound
        };
        return lightningSpell;
    })(createjs.Sprite);
    objects.lightningSpell = lightningSpell;
})(objects || (objects = {}));
//# sourceMappingURL=lightningSpell.js.map
