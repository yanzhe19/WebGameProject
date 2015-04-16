module objects {
    export class LevelLabel extends objects.Label {
         dx: number;
         width: number;
        constructor(text: string) {
            this.x = stage.canvas.width * 0.5;
            this.y = stage.canvas.height * 0.5;
            super(this.x, this.y, text);
            this.dx = 2;
            this.width = this.getBounds().width;
            game.addChild(this);
        }

        update() {
            this.x -= this.dx
            if (this.x < (0- this.width)) {
                this.dx = 0;
            }
        }
    }
}  