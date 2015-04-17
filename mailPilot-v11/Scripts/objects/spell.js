/// <reference path="../managers/playerasset.ts" />
// spell Class
/*Source  file  name: spell.ts, Author's  name: Andrew Mackle (300603655),
Program description： This is to crate the spell object for the player to cast*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Spell = (function (_super) {
        __extends(Spell, _super);
        //the constructor of spell class
        function Spell(stateNumber) {
            _super.call(this, managers.PlayerAssets.playerAtlas);
            this.spell = this;
        }
        //Public methods
        Spell.prototype.update = function () {
        };

        Spell.prototype.destroy = function () {
        };
        return Spell;
    })(createjs.Sprite);
    objects.Spell = Spell;
})(objects || (objects = {}));
//# sourceMappingURL=spell.js.map
