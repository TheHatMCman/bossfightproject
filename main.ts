namespace SpriteKind {
    export const bossEnemy = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    if (controller.up.isPressed()) {
        thePlayer.vy = -100
    }
})
function stageThree () {
    stageCounter = 3
    tiles.setTilemap(tilemap`level5`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(4, 28))
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jumpCounter == 0) {
        thePlayer.vy = -150
        pause(200)
        thePlayer.vy = -100
        jumpCounter = 1
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (stageCounter == 1) {
        scene.cameraShake(4, 1000)
        controller.vibrate(900)
        arenaOne()
    }
    if (stageCounter == 2) {
        scene.cameraShake(4, 1000)
        controller.vibrate(900)
    }
    if (stageCounter == 3) {
        scene.cameraShake(4, 1000)
        controller.vibrate(900)
    }
})
controller.combos.attachCombo("" + controller.combos.idToString(controller.combos.ID.up) + controller.combos.idToString(controller.combos.ID.B), function () {
    playerInvincibility = 1
})
function upAttack () {
	
}
function stageOne () {
    stageCounter = 1
    bossBattle = 0
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        cccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccc
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        b55b55b55b55b55b55b55b5bb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbb555555bb555555bb555555bb555555bb555555bb555555bb55bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    tiles.setTilemap(tilemap`level3`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(2, 28))
}
function stageTwo () {
    stageCounter = 2
    tiles.setTilemap(tilemap`level4`)
    tiles.placeOnTile(thePlayer, tiles.getTileLocation(13, 10))
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile8`, function (sprite, location) {
    scene.cameraFollowSprite(bossOne)
    bossOne.ay = 300
    tiles.setTileAt(tiles.getTileLocation(65, 20), assets.tile`transparency16`)
    bossBattle = 1
})
function arenaOne () {
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(bossOne, tiles.getTileLocation(56, 5))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (playerInvincibility == 1) {
        enemyStatusBar.value += -20
    }
    if (playerInvincibility == 0) {
        playerStatusBar.value += -20
    }
})
let rightEnemy = 0
let leftEnemy = 0
let jumpEnemy = 0
let wallJump = 0
let bossBattle = 0
let playerInvincibility = 0
let jumpCounter = 0
let stageCounter = 0
let enemyStatusBar: StatusBarSprite = null
let thePlayer: Sprite = null
let playerStatusBar: StatusBarSprite = null
let bossOne: Sprite = null
scene.setBackgroundColor(1)
bossOne = sprites.create(img`
    ...............fff......................
    ..............ff.fff....................
    ............fff.....ff..................
    ..........fff........fff................
    .........ff.............ff..............
    ........f.................f.............
    .......f...................ff...........
    ......ff.....................f..........
    ......f......................ff.........
    .....f........................ff........
    ....f..........................ff.......
    ....f...........................f.......
    ...ff............................f......
    ...f.............................f......
    ..f...............................f.....
    ..f...............................f.....
    .f.................................f....
    .f.................................f....
    .f.................................f....
    .f..................................f...
    .f..................................f...
    .f.............f....................f...
    .f......................f...........f...
    .f..................................f...
    ..f.................................f...
    ..f.................................f...
    ..f...............fff...............f...
    ...f..........ffff...ffff..........f....
    ...f....................ff.........f....
    ...ff.............................ff....
    .....f............................f.....
    ......f..........................ff.....
    ......f.........................ff......
    .......f.......................ff.......
    ........ff....................ff........
    ..........ff................ff..........
    ............fff..........fff............
    ...............ffffffffff...............
    ........................................
    ........................................
    `, SpriteKind.bossEnemy)
playerStatusBar = statusbars.create(20, 4, StatusBarKind.Health)
playerStatusBar.value = 100
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
enemyStatusBar = statusbars.create(40, 4, StatusBarKind.EnemyHealth)
enemyStatusBar.value = 200
enemyStatusBar.setColor(10, 2, 7)
enemyStatusBar.attachToSprite(bossOne)
controller.moveSprite(thePlayer, 100, 0)
scene.cameraFollowSprite(thePlayer)
stageOne()
game.onUpdate(function () {
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        jumpCounter = 0
        wallJump = 0
    }
    if (wallJump == 1) {
        controller.moveSprite(thePlayer, 0, 0)
        pause(200)
        wallJump = 0
    } else {
        controller.moveSprite(thePlayer, 100, 0)
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
            wallJump = 1
        }
    }
    if (thePlayer.tileKindAt(TileDirection.Right, assets.tile`myTile3`)) {
        thePlayer.ay = 0
        thePlayer.vy = 40
        if (controller.A.isPressed()) {
            thePlayer.vy = -200
            thePlayer.vx = -100
            wallJump = 1
        }
    }
    if (thePlayer.isHittingTile(CollisionDirection.Bottom)) {
        wallJump = 0
    }
    if (true) {
    	
    }
})
game.onUpdateInterval(100, function () {
    if (bossBattle == 1) {
        bossOne.ay = 300
        jumpEnemy = randint(0, 20)
        leftEnemy = randint(0, 10)
        rightEnemy = randint(0, 10)
        if (jumpEnemy >= 19) {
            bossOne.vy = -100
        }
        if (leftEnemy > 10) {
            bossOne.vx = -100
        }
        if (rightEnemy > 10) {
            bossOne.vx = 100
        }
        console.log(jumpEnemy)
        console.log(leftEnemy)
        console.log(rightEnemy)
    }
})
