namespace SpriteKind {
    export const carrot = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bunny,
    [img`
        . . . 1 1 . . . . d 1 . . . . . 
        . . . 1 1 d . . d 1 1 . . . . . 
        . . . 1 1 1 d . d 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 d d 1 1 1 . . . . . . 
        . . . . 1 d 1 1 1 1 1 . . . . . 
        . . . . 1 1 d d 1 1 . . . . . . 
        . . . . 1 d . . 1 d . . . . . . 
        . . . . . d . . d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . d 1 1 . . . . . 
        . . 1 1 1 1 . . d 1 1 . . . . . 
        . 1 1 d 1 1 1 1 1 1 . . . . . . 
        . 1 d . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 d d 1 1 1 . . . . . . 
        . . . . 1 d 1 1 1 1 1 . . . . . 
        . . . . . 1 d d 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.carrot, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        pause(500)
        info.changeScoreBy(1)
        otherSprite.destroy(effects.disintegrate, 500)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    bunny.setImage(img`
        . . . . . . . . . . 1 1 . . . . 
        . . 1 1 1 1 . . . 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 3 1 . . . . 
        . . . 1 3 3 1 . . 1 3 1 . . . . 
        . . . 1 1 3 3 1 . 1 3 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 f 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 3 1 1 1 1 . . 
        . . . . . 1 1 3 3 3 3 1 1 . . . 
        . . . . . . 1 3 3 3 3 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bunny,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . 1 1 . . . . . . 
        . . . 1 3 . . 1 3 1 . . . . . . 
        . . . 1 3 . 1 3 3 1 . . . . . . 
        . . . 1 3 . 1 3 1 . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 1 f 1 1 1 1 1 1 1 . 1 1 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 d 
        . . . 1 1 1 1 1 1 1 1 1 1 1 d 1 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 d 1 3 3 3 3 1 1 1 1 . 
        . . 1 1 d . . . . . . . d d d 1 
        . . . . . . . . . . . . . . . d 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . 1 1 1 1 . . . . . . . . 
        . . . 1 3 3 . . 1 1 1 1 . . . . 
        . . . 1 3 . . 1 3 3 1 . . . . . 
        . . . 1 3 . 1 1 3 . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 1 f 1 1 1 1 1 1 1 . 1 1 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 d 
        . . . 1 1 1 1 1 1 1 1 1 1 1 d 1 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        . . . 1 1 d 1 3 3 3 3 1 1 1 1 . 
        . . 1 1 d . . . . . . . d d 1 . 
        . . . . . . . . . . . . . . d . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . 1 1 . . . . . . 
        . . . 1 3 . . 1 3 1 . . . . . . 
        . . . 1 3 . 1 3 3 1 . . . . . . 
        . . . 1 3 . 1 3 1 . . . . . . . 
        . . . 1 1 1 1 1 1 . . . . . . . 
        . . . 1 1 f 1 1 1 1 1 1 1 1 1 . 
        . . . f 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 d 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . . 1 1 d 3 3 3 3 1 1 . . . 
        . . . 1 1 1 . . . . d d d . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    bunny.setImage(img`
        . . . . . . . . . . 1 1 . . . . 
        . . 1 1 1 1 . . . 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 3 1 . . . . 
        . . . 1 3 3 1 . . 1 3 1 . . . . 
        . . . 1 1 3 3 1 . 1 3 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 f 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 3 1 1 1 1 . . 
        . . . . . 1 1 3 3 3 3 1 1 . . . 
        . . . . . . 1 3 3 3 3 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    bunny.setImage(img`
        . . . . . . . . . . 1 1 . . . . 
        . . 1 1 1 1 . . . 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 3 1 . . . . 
        . . . 1 3 3 1 . . 1 3 1 . . . . 
        . . . 1 1 3 3 1 . 1 3 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 f 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 3 1 1 1 1 . . 
        . . . . . 1 1 3 3 3 3 1 1 . . . 
        . . . . . . 1 3 3 3 3 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bunny,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . 1 1 . . . 
        . . . . . . 1 3 1 . . 3 1 . . . 
        . . . . . . 1 3 3 1 . 3 1 . . . 
        . . . . . . . 1 3 1 . 3 1 . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        1 1 . 1 1 1 1 1 1 1 f 1 1 . . . 
        d 1 1 1 1 1 1 1 1 1 1 1 f . . . 
        1 d 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 d 3 3 3 3 1 d 1 1 . . . 
        1 d d d . . . . . . . d 1 1 . . 
        d . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . 1 1 . . . . . 
        . . . . . . . . 1 1 1 1 . . . . 
        . . . . 1 1 1 1 . . 3 3 1 . . . 
        . . . . . 1 3 3 1 . . 3 1 . . . 
        . . . . . . . 3 1 1 . 3 1 . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        1 1 . 1 1 1 1 1 1 1 f 1 1 . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 f . . . 
        1 d 1 1 1 1 1 1 1 1 1 1 1 . . . 
        . . 1 1 1 1 1 1 1 1 1 1 . . . . 
        . 1 1 1 d 3 3 3 3 1 d 1 1 . . . 
        . 1 d d . . . . . . . d d d . . 
        . 1 . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . 1 1 . . . 1 1 . . . 
        . . . . . . 1 3 1 . . 3 1 . . . 
        . . . . . . 1 3 3 1 . 3 1 . . . 
        . . . . . . . 1 3 1 . 3 1 . . . 
        . . . . . . . 1 1 1 1 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 f 1 1 . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 f . . . 
        . 1 d 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 1 1 1 1 1 1 1 1 . . . . 
        . . . 1 d 3 3 3 3 d 1 1 . . . . 
        . . . 1 d d . . . . d d 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    150,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, bunny)
    bunny.setImage(img`
        . . . . . . . . . . 1 1 . . . . 
        . . 1 1 1 1 . . . 1 1 1 . . . . 
        . . 1 1 1 1 1 . . 1 3 1 . . . . 
        . . . 1 3 3 1 . . 1 3 1 . . . . 
        . . . 1 1 3 3 1 . 1 3 1 . . . . 
        . . . . 1 1 1 1 1 1 1 1 . . . . 
        . . . . . 1 1 f 1 1 f 1 . . . . 
        . . . . . . 1 1 1 1 1 1 . . . . 
        . . . . . . 1 1 f 1 1 1 . . . . 
        . . . . . 1 1 1 1 1 1 1 1 . . . 
        . . . . . 1 1 1 1 1 1 1 1 1 . . 
        . . . . . 1 1 1 1 3 1 1 1 1 . . 
        . . . . . 1 1 3 3 3 3 1 1 . . . 
        . . . . . . 1 3 3 3 3 1 1 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    bunny,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . d . . d d . . . . . . 
        . . . . 1 d . . 1 d . . . . . . 
        . . . . 1 1 d d 1 1 . . . . . . 
        . . . . 1 d 1 1 1 1 1 . . . . . 
        . . . 1 1 d d 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 d . d 1 1 . . . . . 
        . . . 1 1 d . . d 1 1 . . . . . 
        . . . 1 1 . . . . d 1 . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 d d 1 . . . . . . . 
        . . . . 1 d 1 1 1 1 1 . . . . . 
        . . . 1 1 d d 1 1 1 . . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . 1 1 1 1 1 1 1 1 . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . . . . 1 1 1 1 1 1 . . . . . . 
        . 1 d . 1 1 1 1 1 1 . . . . . . 
        . 1 1 d 1 1 1 1 1 1 . . . . . . 
        . . 1 1 1 1 . . d 1 1 . . . . . 
        . . . . . . . . d 1 1 . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    if (info.score() == 7) {
        game.over(true)
    } else {
        bunny.say("you only have " + info.score() + "/7 carrots.", 1000)
    }
})
let carrots: Sprite = null
let bunny: Sprite = null
bunny = sprites.create(img`
    . . 1 . . . . . . 1 1 . . . . 
    . 1 1 1 1 . . . 1 1 1 . . . . 
    . 1 1 1 1 1 . . 1 3 1 . . . . 
    . . 1 3 3 1 . . 1 3 1 . . . . 
    . . 1 1 3 3 1 . 1 3 1 . . . . 
    . . 1 1 1 1 1 1 1 1 1 . . . . 
    . . . . 1 1 f 1 1 f 1 . . . . 
    . . . . . 1 1 1 1 1 1 . . . . 
    . . . . . 1 1 f 1 1 1 . . . . 
    . . . . 1 1 1 1 1 1 1 1 . . . 
    . . . . 1 1 1 1 1 1 1 1 1 . . 
    . . . . 1 1 1 1 3 1 1 1 1 . . 
    . . . . 1 1 3 3 3 3 1 1 . . . 
    . . . . . 1 3 3 3 3 1 1 . . . 
    . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let map = randint(1, 3)
if (map == 1) {
    tiles.setTilemap(tilemap`level1`)
} else if (map == 2) {
    tiles.setTilemap(tilemap`level2`)
} else {
    tiles.setTilemap(tilemap`level5`)
}
controller.moveSprite(bunny)
info.setScore(0)
scene.setBackgroundColor(14)
tiles.placeOnRandomTile(bunny, sprites.castle.tileGrass2)
game.splash("click space to collect a carrot, collect 7 total carrots to leave the maze.")
scene.cameraFollowSprite(bunny)
for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
    carrots = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . 7 . . 
        . . . . 5 1 4 4 4 4 4 4 . 7 . . 
        . . 4 4 4 4 4 4 4 4 1 7 7 7 . . 
        . . 4 4 4 4 4 4 4 4 4 4 7 7 7 . 
        . . 4 4 4 4 4 e b 4 4 e . 7 7 . 
        . . . . . . . . e e e e . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.carrot)
    tiles.placeOnTile(carrots, value)
}
