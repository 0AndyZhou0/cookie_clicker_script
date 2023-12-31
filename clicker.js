
// Click Cookie
setInterval(function(){
    Game.ClickCookie()
},10);

// Buy Buildings
setInterval(function(){
    var buildings = Game.ObjectsById
    for (var i = buildings.length - 1; i >= 0; i--) {
        if (buildings[i].locked == 0) {
            buildings[i].buy();
        }
    }
}, 100)

// Buy Upgrades
setInterval(function(){
    for (var i in Game.UpgradesInStore) {
        var me=Game.UpgradesInStore[i];
        if (!me.isVaulted() && me.pool!='toggle' && me.pool!='tech') me.buy(1);
    }
},100);