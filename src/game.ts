import 'phaser';
import { Cursor } from './services/player/cursor';

export default class Demo extends Phaser.Scene
{
    private cursor: Cursor;

    constructor ()
    {
        super('demo');
    }

    preload ()
    {
        this.load.image('logo', 'assets/phaser3-logo.png');
        this.load.image('libs', 'assets/libs.png');
        this.load.glsl('bundle', 'assets/plasma-bundle.glsl.js');
        this.load.glsl('stars', 'assets/starfields.glsl.js');
        this.load.image('cursor', 'assets/cursor.png');
    }

    create ()
    {
        // this.cursor = new Cursor({
        //     scene: this,
        //     x: this.game.input.activePointer.x,
        //     y: this.game.input.activePointer.y,
        //     key: 'cursor'
        // });

        const logo = this.add.image(400, 70, 'logo');

        this.tweens.add({
            targets: logo,
            y: 350,
            duration: 1500,
            ease: 'Sine.inOut',
            yoyo: true,
            repeat: -1
        })
    }
    update ()
    {
        //this.cursor.update();
    }
}

const config = {
    type: Phaser.AUTO,
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: Demo
};

const game = new Phaser.Game(config);
