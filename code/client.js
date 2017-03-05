var player;
var planets = [];
var bullets = [];

function setup(){
	var w  = window,
    d  = w.document,
    de = d.documentElement,
    db = d.body || d.getElementsByTagName('body')[0],
    width  = w.innerWidth || de.clientWidth || db.clientWidth,
    height  = w.innerHeight|| de.clientHeight|| db.clientHeight;
	
	
	createCanvas(width,height+20);
	
	player = new ship(random(100,width-100),random(100,height-100));
	
}

function draw(){
	background(200,200,100);
	
	if(frameCount%100===0 && planets.length<7)planets.push(new planet(random(100,width-100),random(100,height-100)));
	
	for(var i=0;i<planets.length;i++){		
		planets[i].handleBulletHit();
		planets[i].move();
		if(planets.length===i)break; // check if there are still as many bullets as in the beginning
		planets[i].checkHealth();
		if(planets.length===i)break;
		planets[i].show();
	}
	for(var i=0;i<bullets.length;i++){		
		bullets[i].move();
		if(bullets.length===i)break; // same as in planets-loop
		bullets[i].show();
	}
	
	player.move();
	player.shoot();
	player.show();
}

function keyPressed() {
	if (key=='W')player.motion[0] = true;
	if (key=='A')player.motion[1] = true;
	if (key=='S')player.motion[2] = true;
	if (key=='D')player.motion[3] = true;
}

function keyReleased() {
	if (key=='W')player.motion[0] = false;
	if (key=='A')player.motion[1] = false;
	if (key=='S')player.motion[2] = false;
	if (key=='D')player.motion[3] = false;
}

function mousePressed() {
	player.weapon.shooting = true;
}
function mouseReleased(){
	player.weapon.shooting = false;
}