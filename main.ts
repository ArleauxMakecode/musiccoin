namespace SpriteKind {
    export const COIN = SpriteKind.create()
}
music.play(music.createSong(assets.song`mySong`), music.PlaybackMode.InBackground)
let MY_SPRITE3 = sprites.create(assets.image`myImage`, SpriteKind.COIN)
let mySprite2 = sprites.create(assets.image`myImage0`, SpriteKind.COIN)
controller.player2.moveSprite(mySprite2)
controller.player3.moveSprite(MY_SPRITE3)
