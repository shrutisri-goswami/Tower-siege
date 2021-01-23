
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1,block2,block3,block4,block5,block6,block7,block8;
var block9,block10,block11,block12,block13,block14,block15,block16;

function setup(){ 

    ground= new Ground(100,100,10,10);

    block1 = new Block(100,100,50,50);
    block2 = new Block(150,100,50,50);
    block3 = new Block(100,100,50,50);
    block4 = new Block(100,100,50,50);
    block5 = new Block(100,100,50,50);
    block6 = new Block(100,100,50,50);
    block7 = new Block(100,100,50,50);
    block8 = new Block(100,100,50,50);
    block9 = new Block(100,100,50,50);
    block10 = new Block(100,100,50,50); 
    block11 = new Block(100,100,50,50);
    block12 = new Block(100,100,50,50);
    block13 = new Block(100,100,50,50);
    block14 = new Block(100,100,50,50);
    block15 = new Block(100,100,50,50);
    block16 = new Block(100,100,50,50);

    Engine.run(engine);
}
function draw(){ 

    ground.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
}
