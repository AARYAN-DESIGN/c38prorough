var axe,axeImg,backImg,back,ironMan,IronImage1,IronImage2,IronImage3,IronImage4,man,manImage1,manImage2,manImage3,manImage4;
var life,lifeImg;
var zom,zomImg1,zomImg2,zomImg3,zomImg4;
var zx=0;
var zy=0;
function preload(){

  manImage1=loadImage("MAN - Copy (7) - Copy.png");
  manImage2=loadImage("MAN - Copy (5) - Copy.png");
  manImage3=loadImage("MAN - Copy (4).png");
  manImage4=loadImage("MAN - Copy (6) - Copy.png");

  backImg=loadImage("back.png");

  axeImg1=loadImage("axe1.png");
  axeImg2=loadImage("axe2.png");
  axeImg3=loadImage("axe3.png");
  axeImg4=loadImage("axe4.png");

  zomImg1=loadImage("zomrun1.png");
  zomImg2=loadImage("zomrun2.png");
  zomImg3=loadImage("zomrun3.png");
  zomImg4=loadImage("zomrun4.png");

}

function setup(){
  createCanvas(displayWidth , displayHeight);
  
  back=createSprite(displayWidth/2, displayHeight/2,3600,3600);

  

  man=createSprite(displayWidth/2, displayHeight/2,10,10);
  man.addImage("mann",manImage1);
  man.scale=0.15;
 
  

  camera.position=man;

  axe=createSprite(man.x,man.y,10,10);
  axe.addImage("ag",axeImg1);
  axe.scale=0.15;

  man.density=1;
  axe.density=0;
  };

function draw(){
  background(0);
  
  zombieSpawning();

  back.addImage("nn",backImg);
  back.scale=5;

  
  if(keyDown("up_arrow")){
    man.addImage("mann",manImage1);
    man.y=man.y-3;

    axe.y=man.y+2;
    axe.addImage("ag",axeImg1);

    axe.x=man.x+30;
    axe.y=man.y-20;

    if(keyDown("r")){
      man.y=man.y-6;
    }
    if(man.y < zom.y){
    zom.addImage("ffv",zomImg1);

    
    } 
   }
  if(keyDown("right_arrow")){
    man.addImage("mann",manImage2);
    man.x=man.x+3;

    axe.x=man.x+30;
    axe.y=man.y+20;
    axe.addImage("ag",axeImg4);

    if(man.x > zom.x){
    zom.addImage("ffv",zomImg2);

    
    }
    if(keyDown("r")){
      man.x=man.x+6;
    }

  }
  if(keyDown("down_arrow")){
    man.addImage("mann",manImage3);
    man.y=man.y+3;

    axe.y=man.y-2;
    axe.addImage("ag",axeImg3);
    axe.x=man.x-30;
    axe.y=man.y+20;
    if(man.y > zom.y){
    zom.addImage("ffv",zomImg3);

   
    }
    if(keyDown("r")){
      man.y=man.y+6;
    }

  }
  if(keyDown("left_arrow")){
    man.addImage("mann",manImage4);
    man.x=man.x-3;

    axe.x=man.x-2;
    axe.addImage("ag",axeImg2);
    axe.x=man.x-30;
    axe.y=man.y-20;

    if(man.x < zom.x){
    zom.addImage("ffv",zomImg4);

    
    }
    if(keyDown("r")){
      man.x=man.x-6;
    }
      }
      if(keyDown("space")&&axe.isTouching(zom)){
        zom.visible=false;

  }
  axe.debug=true;
  man.debug=true;
  
  drawSprites();
}

function zombieSpawning(){
if(frameCount%60===0){
  
  zom=createSprite(zx,zy,50,50);
  zom.addImage("ffv",zomImg1);
  zom.scale=0.5;
  var diffx=man.x-zx;
  zx=zx+(diffx * 0.02);
  zom.x=zx;
  var diffy=man.y-zy;
  zy=zy+(diffy * 0.02);
  zom.y=zy; 
  zom.debug=true;
}
}
