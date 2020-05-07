// You could have multiple flags like: start, launch to indicate the state of the game.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/
var ground,tanker,canonBall;
var engine,world;
function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
var canvas = CreateCanvas(1200,800);
ground = new Ground(1200,800,100,10);
tanker = new Tanker();
canonBall = new CanonBall(x,y,width,height);
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine = update(engine);
Engine = add(World);
background(255);
ground.display();
tanker.display();
canonBall.display();
drawSprites();

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(keyDown(UPARROW)){
        canonBall.fly();
    }
}