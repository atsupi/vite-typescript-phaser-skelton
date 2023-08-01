import Phaser from 'phaser';

class MyScene extends Phaser.Scene {
    counter: number;
    text: any;

    constructor() {
        super({key: "MyScene", active: true});
        this.counter = 0;
    }

    preload = () => { 
        console.log("MyScene preloaded"); 
    }

    create = () => {
        console.log("MyScene created");
        this.text = this.add.text(100, 100, "Phaser 3").setFontSize(16).setColor("#af0");
    }

    update = () => {
         this.counter += 1;
        this.text.setText("Phaser 3: " + Math.floor(this.counter/24)); 
    }
}

const config = {
    type: Phaser.AUTO,
    width: 320,
    height: 240,
    fps: {
        target: 24,
        forceSetTimeOut: true
    },
    scene: [MyScene],
};

let _phaser = new Phaser.Game(config);