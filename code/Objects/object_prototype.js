class object_prototype{
	
	constructor(pX, pY){
		this.pos = createVector(pX,pY);
		this.vel = createVector(0,0);
		this.heading = createVector(1,0);
		this.drag = 0.95;
		// top, left, bottom, right 
		this.motion = [false, false, false, false]; 
		
		this.stats = {
			health: 100,
			speed: 0.5
		};
		
		this.despawnOnBoundary = false;
	}
	
	
	move(){
		if(this instanceof object_prototype && p5.Vector.dist(this.pos,createVector(mouseX,mouseY))>= 25){
			// relative control
			if (this.motion[0])      this.vel.add(this.heading.mult(this.stats.speed));
			if (this.motion[1]){
				var angle = this.heading.heading() + 3/2 * PI;
				var vector = p5.Vector.fromAngle(angle).mult(this.stats.speed);
				this.vel.add(vector);				
			}
			if (this.motion[2])      this.vel.sub(this.heading.mult(this.stats.speed));
			if (this.motion[3]){
				var angle = this.heading.heading() + 1/2 * PI;
				var vector = p5.Vector.fromAngle(angle).mult(this.stats.speed);
				this.vel.add(vector);			
			}
			// absolute control
			/* 
			if (this.motion[0])      this.vel.y += -this.stats.speed;
			else if (this.motion[1]) this.vel.x += -this.stats.speed;
			if (this.motion[2])      this.vel.y += this.stats.speed;
			else if (this.motion[3]) this.vel.x += this.stats.speed;
			*/
		}
		this.vel.mult(1 - this.drag);
		this.pos.add(this.vel);
		
		if(this.vel.mag()<0.1)this.vel.mult(0);
		this.checkBoundaries();
	}
	
	show(){
		noFill();
		stroke(0);
		strokeWeight(2);
		rectMode(CENTER);
		rect(this.pos.x,this.pos.y,10,10);
		
	}
	
	lookAt(aim){
		this.heading.set( aim.sub(this.pos).normalize() );
	}
	
	checkBoundaries(){
		if(this.despawnOnBoundary){
			if(this.pos.x<0 || this.pos.y<0 || this.pos.x>width || this.pos.y>height) this.handleBoundary();
		}
		else{
			if(this.pos.x<0)		this.handleLeftBoundary();
			if(this.pos.y<0)		this.handleTopBoundary();
			if(this.pos.x>width)	this.handleRightBoundary();
			if(this.pos.y>height)	this.handleBottomBoundary();	
		}		
	}
	handleLeftBoundary(){}
	handleTopBoundary(){}
	handleBottomBoundary(){}
	handleRightBoundary(){}
	handleBoundary(){}
	
	checkCollision(other){
		if(p5.Vector.dist(this.pos,other.pos)<=this.size+other.size)console.log("collision");
	}
	
	
	deleteFromArray(array){
		var index = array.indexOf(this);
		array.splice(index,1);
	}
	
}

