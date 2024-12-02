scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    scene.setBackgroundImage(assets.image`Produktion`)
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        Samlet_score += 50 + Samlet_score
        info.changeScoreBy(50)
        Produktion += 10 + Produktion
        tiles.setCurrentTilemap(tilemap`Labyrint Transport`)
        Transporttekst()
    })
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        Samlet_score += 10 + Samlet_score
        info.changeScoreBy(10)
        Produktion += 10 + Produktion
        tiles.setCurrentTilemap(tilemap`Labyrint Transport`)
        Transporttekst()
    })
})
function Change_level (num: number) {
    if (Level == 1) {
        tiles.setCurrentTilemap(tilemap`Produktion`)
        mySprite = sprites.create(assets.image`mySprite1`, SpriteKind.Player)
    } else if (Level == 2) {
        tiles.setCurrentTilemap(tilemap`Produktion`)
    } else if (Level == 3) {
        tiles.setCurrentTilemap(tilemap`Labyrint Transport`)
        mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
    } else if (Level == 4) {
    	
    } else if (Level == 5) {
    	
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile7`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level7`)
    scene.setBackgroundImage(assets.image`Transport`)
    controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
        Samlet_score += 10 + Samlet_score
        info.changeScoreBy(10)
        Transport += 10 + Transport
        tiles.setCurrentTilemap(tilemap`Labyrint Transport`)
    })
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        Samlet_score += 50 + Samlet_score
        info.changeScoreBy(50)
        Transport += 50 + Transport
        tiles.setCurrentTilemap(tilemap`Labyrint Transport`)
    })
})
function Transporttekst () {
    game.showLongText("Velkommen til transportfasen", DialogLayout.Bottom)
    game.showLongText("Med det rigtige valg af transport vil det være muligt ...", DialogLayout.Bottom)
    game.showLongText("At reducere CO2-udledningen for t-shirtsene", DialogLayout.Bottom)
    game.showLongText("Dog findes der mange forskellige transportmuligheder", DialogLayout.Bottom)
    game.showLongText("Det er derfor op til dig at vurdere, hvilken af to mulige der er bedst", DialogLayout.Bottom)
    game.showLongText("Ved f.eks. at transportere med fly opnår kunden produkterne hurtigere", DialogLayout.Bottom)
    game.showLongText("Dog er der en stor CO2-udledning forbundet med denne", DialogLayout.Bottom)
    game.showLongText("Modsat er der eksempelvis længere ventetid ved skibstransport", DialogLayout.Bottom)
    game.showLongText("Der udledes dog her mindre CO2 i transportfasen", DialogLayout.Bottom)
    game.showLongText("Klar dig igennem labyrinten, så dine varer kan blive transporteret videre", DialogLayout.Bottom)
    game.showLongText("Og vurdér herefter hvilken transportmulighed du ønsker", DialogLayout.Bottom)
}
function Produktionstekst () {
    game.showLongText("Velkommen til produktionen", DialogLayout.Bottom)
    game.showLongText("Denne kan have stor indflydelse på CO2-udledningen", DialogLayout.Bottom)
    game.showLongText("Fast fashion industrien indeholder store tøjproduktioner i Asien", DialogLayout.Bottom)
    game.showLongText("Disse er bundet op omkring store mængder fabriksarbejde", DialogLayout.Bottom)
    game.showLongText("Ligeledes bliver mange kollektioner produceret i storproduktioner", DialogLayout.Bottom)
    game.showLongText("Derudover kan der bruges bl.a. kemikalier i processen; til skade for miljøet", DialogLayout.Bottom)
    game.showLongText("Ved at skifte til slow fashion kan flere ting opnås bl.a.", DialogLayout.Bottom)
    game.showLongText("Reducering af CO2, Naturlige materialer og bedre arbejdsforhold", DialogLayout.Bottom)
    game.showLongText("Gå igennem produktionen og find infoknappen", DialogLayout.Bottom)
    game.showLongText("Vælg herefter hvilken produktionsform du ønsker", DialogLayout.Bottom)
}
let mySprite: Sprite = null
let Level = 0
let Produktion = 0
let Transport = 0
let Samlet_score = 0
info.setScore(0)
Level = 1
mySprite = sprites.create(assets.image`mySprite1`, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`Produktion`)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
Produktionstekst()
