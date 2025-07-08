import k from "./kaplayctx.js";
import mainMenu from "./scenes/mainmenu.js";

k.loadSprite("Chemical-bg","graphics/chemical-bg.png");
k.loadSprite("Platforms","graphics/platforms.png");
k.loadSprite("Sonic","graphics/sonic.png",{
  sliceX:8,
  sliceY:2,
  anims:{
    run:{from:0, to:7, loop:true, speed:30},
    jump:{from:8, to: 15 , loop: true, speed:100},
  },
});
k.loadSprite("ring", "graphics/ring.png",{
  sliceX:16,
  sliceY:1,
  anims:{
    run:{from:0 , to: 16, loop:true,speed:30},

  },
});

k.loadSprite("motobug","graphics/motobug.png",{
  sliceX:5,
  sliceY:1,
  anims:{
    run:{from:0,to:4,loop:true , speed:8}
  },

});

//fonts load

k.loadFont("mania","fonts/mania.ttf");

k.loadSound("destroy","sounds/Destroy.wav");
k.loadSound("hurt","sound/Hurt.wav");
k.loadSound("hyper-ring","sound/HyperRing.wav");
k.loadSound("jump","sound/Jump.wav");
k.loadSound("ring","sound/Ring.wav");
k.loadSound("city","sound/city.wav");

k.scene("main-menu", mainMenu);

k.scene("game",()=>{
  
});


k.scene("gameover",()=>{
  
});

