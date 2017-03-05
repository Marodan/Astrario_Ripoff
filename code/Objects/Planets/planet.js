class planet extends object_prototype{
	constructor(pX, pY){
		super(pX, pY);
		this.vel.set(p5.Vector.random2D().mult(0.5));
		
		this.drag = 0.001;
		this.size = random(140,160); // size is also life for planets!
		this.color = color(random(150,255),random(150,255),random(150,255));
		
		this.despawnOnBoundary = true;
	};
	
	show(){
		push();
		stroke(0);
		fill(this.color);
		ellipse(this.pos.x,this.pos.y,this.size,this.size);
		noStroke();
		fill(0);
		pop();
	}
	
	checkHealth(){
		if(this.size<=30) this.deleteFromArray(planets);
	}
	
	handleBoundary(){
		this.deleteFromArray(planets);
	}
	
	handleBulletHit(){
		for(var i=0;i<bullets.length;i++){
			var bullet = bullets[i];
			if(collidePointCircle(bullet.pos.x,bullet.pos.y,this.pos.x,this.pos.y,this.size)){
				this.size -= 5;
				bullet.deleteFromArray(bullets);
			} 
		}
		
	}
	
}

