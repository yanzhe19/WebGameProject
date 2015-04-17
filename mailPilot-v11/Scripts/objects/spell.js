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
        function Spell(x, y, player) {
            _super.call(this, managers.PlayerAssets.playerAtlas);
            this.castingStartTime = Date.now();
            this.gotoAndPlay("spell");
            this.width = this.getBounds().width;
            this.height = this.getBounds().height;
            this.regX = this.width * 0.5;
            this.regY = this.height * 0.5;
            this.spellCastNoise = createjs.Sound.play('spellCastNoise');
            this.y = y;
            this.x = x;
            this.player = player;
            game.addChild(this);
        }
        //Public methods
        Spell.prototype.update = function () {
            this.x += constants.BACKGROUND_MOVING_SPEED;
        };

        Spell.prototype.destroy = function () {
            this.spellCastNoise.stop();
            this.player.spells.splice(this.player.spells.indexOf(this), 1);
            game.removeChild(this);
        };
        return Spell;
    })(createjs.Sprite);
    objects.Spell = Spell;
})(objects || (objects = {}));
//# sourceMappingURL=spell.js.map
