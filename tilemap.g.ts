// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile14 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "Produktion":
            case "level1":return tiles.createTilemap(hex`0e00080001010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010302020202020302020202020304030303030303030303030303030303020202020203020202020203030303030303030303030303030303`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,myTiles.tile2,myTiles.tile1,myTiles.tile3], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
`, [myTiles.transparency16], TileScale.Sixteen);
            case "Transport":
            case "level2":return tiles.createTilemap(hex`0e00080008080801010101050202020202020808080101010105020202020202080808010101010104020202020208080801010101010107040202020303030303030303030303030303030303030303030303030303030608080801010101010101050202020808080101010101010105020202`, img`
. . . . . . . 2 2 2 2 2 2 2 
. . . . . . . 2 2 2 2 2 2 2 
. . . . . . . . 2 2 2 2 2 2 
. . . . . . . . . 2 2 2 2 2 
. . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 
. . . . . . . . . . 2 2 2 2 
. . . . . . . . . . 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile7,sprites.vehicle.roadHorizontal,sprites.castle.tilePath3,sprites.castle.tilePath6,myTiles.tile12,sprites.castle.tilePath2,sprites.dungeon.floorLight4], TileScale.Sixteen);
            case "Labyrint Transport":
            case "level4":return tiles.createTilemap(hex`2d002d0008030303030303030303030303030303030303030303030303030303030303030303030303030a04010110100107080303030303030303030303030303030303030303030303030f0f0303030303030303030a0704010110100107070202020202020202020202020202020202020202020202020707020202020202020202070704010110100107070202020202020202020202020202020202020202020202020707020202020202020202070704010110100107070202020803030303030303030303030303030a020202020207070202020202020202020707040101101001070702020207080303030303030f0f030303030a07020202020207070202020202020202020707040101101001070702020207070202020202020707020202020707020202020207070202020202020202020c0904010110100107070202020707020202020202070702020202070702020202020707020202020202020202020202051110101007070202020707020202020202070702020202070c03030303030b0b03030303030a0202020202080303030306070e0303030b0b03030a0202020707020202020c03030303030303030f0f030303090202020202070803030306070e0303030303030a070202020707020202020202020202020202020707020202020202020202070702101010070702020202020207070202020c090202020202020202020202020207070202020202020202020707041010100707020202020202070702020202020202020202020202020202020207070202020202020202020707041010100707020202020202070e0303030303030303030a020202020202020207070202020202020202020707041010100707020202020202070e03030303030303030a070202020202020202070702020202020202020207070410101007070202020202020707020202020202020207070202020202020202070702020202080303030309070410101007070202020202020707020202020202020207070202020202020202070702020202070803030303090410101007070202080303030d07020202080a020202070702020202020202020707020202020707020202020202050505070702020c0303030d070202020707020202070c030303030a02020207070202020207070202020202020202020707020202020202070702020207070202020c030303030a07020202070702020202070702020202020202020207070202020202020707020202070702020202020202020707020202070e030303030b0b03030303030303030a07070202020202020707020202070702020202020202020707020202070e030303030303030303030303030a07070c0303030303030b0b0303030b0b03030303030303030d0702020207070202020202020202020202020207070c030303030303030303030f0f030303030303030303030d070202020707020202020202020202020202020707020202020202020202020207070202020202020202020207070202020707020202020202020202020202020707020202020202020202020207070202020202020202020207070202020707020202020202080a02020202020707080a020202020202020202070702020202020202020202070702020207070202020202020707020202020207070707020202020202020202070c0303030303030a020202070e0303030b0b030a0202020207070202020202070707070202020202020202020c030f0f0303030309020202070e03030303030a0702020202070702020202020707070702020202080a02020202020707020202020202020207070202020202070702020202070702020202020707070702020202070702020202020707020202020202020207070202020202070702020202070702020202020707070702020202070702020202020707020202020202020207070202020202070702020202070702020202020707070702020202070702020202020707020202020202020207070202020202070c030303030907020202020207070707020202020707020202020207070202020202020202070702020202020c03030f0f03030902020202020707070c030303030b0b03030303030b0b03030303030303030b0b03030a02020202020707020202020202020207070c030f0f030303030303030303030303030303030303030303030a0702020202020707020202020202020207070202070702020202020202020202020202020202020202020202070702020202020707020202020202020207070202070702020202020202020202020202020202020202020202070702020202020707020202020202020207070202070702020208030303030303030a0202020202020202020207070202020202070e0303030303030303090702020707020202070803030303030a070202020202020202020207070202020202070e030303030303030303090202070702020207070202020202070702020202020202020202070702020202020707020202020202020202020202070702020207070202020202070702020202020202020202070702020202020707020202020202020202020202070702020207070202020202070702020202020202020202070702020202020707020202020202020202020202070c03030309070202020202070c030303030303030303030b0b03030303030b0b0303030303030303030a02020c03030303030902020202020c030303030303030303030303030303030303030303030303030303030309`, img`
.......................................222222
.......................................222222
..222222222222222222222222..222222222..222222
..222222222222222222222222..222222222..222222
..222................22222..222222222..222222
..222................22222..222222222..222222
..222..222222..2222..22222..222222222..222222
..222..222222..2222..22222..22222222222222222
..222..222222..2222...............22222......
..........222..2222...............22222......
..........222..2222222222222..222222222..2222
..222222..222..2222222222222..222222222..2222
..222222..222222222222222222..222222222..2222
..222222............22222222..222222222..2222
..222222............22222222..222222222..2222
..222222..22222222..22222222..2222.......2222
..222222..22222222..22222222..2222.......2222
..22......222..222..22222222..2222..222222222
..22......222..222.......222..2222..222222222
..222222..222..222.......222..2222..222222222
..222222..222..22222222..222.................
..222222..222..22222222..222.................
.........................222..2222222222222..
.........................222..2222222222222..
22222222222..2222222222..222..2222222222222..
22222222222..2222222222..222..222222..22222..
..222222222..2222222222..222..222222..22222..
..222222222.........222.........2222..22222..
..222222222.........222.........2222..22222..
..2222..22222..22222222..22222..2222..22222..
..2222..22222..22222222..22222..2222..22222..
..2222..22222..22222222..22222..2222..22222..
..2222..22222..22222222..22222........22222..
..2222..22222..22222222..22222........22222..
............................22222..22222222..
............................22222..22222222..
22..2222222222222222222222..22222..22222222..
22..2222222222222222222222..22222..22222222..
22..222.........2222222222..22222............
22..222.........2222222222..22222............
22..222..22222..2222222222..22222..2222222222
22..222..22222..2222222222..22222..2222222222
22..222..22222..2222222222..22222..2222222222
22.......22222...............................
22.......22222...............................
`, [myTiles.transparency16,myTiles.tile8,sprites.castle.tilePath5,sprites.vehicle.roadHorizontal,sprites.castle.tilePath6,sprites.castle.tilePath2,myTiles.tile15,sprites.vehicle.roadVertical,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn2,sprites.vehicle.roadIntersection1,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection4,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection3,myTiles.tile7,sprites.castle.tilePath3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile6":
            case "tile14":return tile14;
            case "myTile7":
            case "tile15":return tile15;
            case "myTile8":
            case "tile12":return tile12;
            case "Lyseblå":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
