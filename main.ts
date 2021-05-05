namespace SpriteKind {
    export const bossEnemy = SpriteKind.create()
}
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.A), function () {
	
})
function stageOne () {
    tiles.setTilemap(tilemap`level3`)
}
function arenaOne () {
    tiles.setTilemap(tilemap`level1`)
}
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
let thePlayer = sprites.create(img`
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
let enemyStatusBar = statusbars.create(20, 4, StatusBarKind.EnemyHealth)
enemyStatusBar.setColor(10, 2, 7)
enemyStatusBar.attachToSprite(bossOne)
controller.moveSprite(thePlayer)
scene.cameraFollowSprite(thePlayer)
