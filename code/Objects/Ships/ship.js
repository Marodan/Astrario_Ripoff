class ship extends object_prototype{
	constructor(pX, pY){
		super(pX, pY);
		
		this.size = 40;
		this.drag = 0.1;
		this.weapon = {
			shooting: false,
			lastShot: -100000, // frameCount at last shot
			delay: 2 // delay between shots
		}
	};
	
	show(){
		this.lookAt(createVector(mouseX,mouseY));
		this.showBody();
		this.showHead();
	}
	
	showBody(){
		push();
		this.setToCenter();
		
		fill(255);
		beginShape();
		vertex(-this.size/2,-this.size/2);
		vertex(this.size,0);
		vertex(-this.size/2,this.size/2);
		endShape(CLOSE);
		pop();
	}
	
	showHead(){
		push();
		this.setToCenter();
		
		fill(90,100,250);
		beginShape();
		vertex(-this.size/3,-this.size/4);
		vertex(this.size/2,0);
		vertex(-this.size/3,this.size/4);
		endShape(CLOSE);
		
		pop();
	}
	
	setToCenter(){
		translate(this.pos.x,this.pos.y);
		rotate(this.heading.heading());
	}
	
	shoot(){
		if(this.weapon.shooting && frameCount-this.weapon.lastShot>=this.weapon.delay){
			bullets.push(new projectile(this.pos.copy().add(this.heading.copy().mult(this.size)),this.heading));	
			this.weapon.lastShot = frameCount;
		}		
	}
	
	
	handleLeftBoundary(){
		this.pos.x = 0;
		this.vel.x = 0;
	}
	handleTopBoundary(){
		this.pos.y = 0;
		this.vel.y = 0;
	}
	handleBottomBoundary(){
		this.pos.y = height;
		this.vel.y = 0;
	}
	handleRightBoundary(){
		this.pos.x = width;
		this.vel.x = 0;
	}
	
}

