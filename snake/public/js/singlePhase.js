import mainScene from './mainScene.js';

// Screen settings
const config = {
    width: 550,
    height: 550,
    type: Phaser.AUTO,
    parent: 'phaser-game',
    scene: [mainScene]
};

new Phaser.Game(config);