namespace SpriteKind {
    export const bossEnemy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.up.isPressed()) {
        thePlayer.vy = -100
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpCounter == 0) {
        thePlayer.vy = -150
        pause(200)
        thePlayer.vy = -100
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    pause(100)
    scene.cameraShake(4, 1000)
    arenaOne()
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.B), function () {
	
})
function upAttack () {
	
}
function stageOne () {
    tiles.setTilemap(tilemap`level3`)
}
function arenaOne () {
    tiles.setTilemap(tilemap`level1`)
}
let jumpCounter = 0
let thePlayer: Sprite = null
let bossOne = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.bossEnemy)
let playerStatusBar = statusbars.create(20, 4, StatusBarKind.Health)
playerStatusBar.setColor(7, 2, 10)
thePlayer = sprites.create(img`
    . . . . . . . f f f 1 1 f . . . 
    . . . . f f f f 1 1 1 1 1 f . . 
    . . f f f 1 1 1 1 . . . 1 f . . 
    . . f 1 1 1 1 . . . . . 1 f f . 
    . f f 1 . . . . . 1 . . 1 1 f . 
    . f 1 1 . . 1 . . . . . . 1 f . 
    . f 1 . . . . . . . . . . 1 1 f 
    . f 1 1 . . . . . . 1 1 . 1 1 f 
    . f f 1 . . 1 1 . 1 1 . . 1 f f 
    . . f 1 1 . . 1 1 . . . 1 1 f . 
    . . . f 1 1 1 1 1 1 1 1 1 f f . 
    . . . . f f f f f f f f f f . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
playerStatusBar.attachToSprite(thePlayer)
let enemyStatusBar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
enemyStatusBar.setColor(10, 2, 7)
enemyStatusBar.attachToSprite(bossOne)
controller.moveSprite(thePlayer, 100, 0)
scene.cameraFollowSprite(thePlayer)
stageOne()
game.onUpdate(function () {
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        jumpCounter = 0
    }
})
forever(function () {
    thePlayer.ay = 200
    if (thePlayer.tileKindAt(TileDirection.Left, assets.tile`myTile2`)) {
        thePlayer.ay = 0
        thePlayer.vy = 40
        if (controller.A.isPressed()) {
            thePlayer.vy = -40
            thePlayer.vx = 100
            if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
                thePlayer.vx = 0
            }
        }
    }
    if (thePlayer.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        thePlayer.ay = 0
        thePlayer.vy = 40
        if (controller.A.isPressed()) {
            thePlayer.vy = -40
            thePlayer.vx = -100
        }
        if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
            thePlayer.vx = 0
        }
    }
})
