class projectile extends object_prototype{
	constructor(pos,heading){
		super(pos.x, pos.y);
		this.vel.set(heading).mult(10);
		this.drag = 0;
		
		this.despawnOnBoundary = true;
		this.size = 10;
	};
	
	show(){
		push();
		strokeWeight(this.size);
		// stroke(50,150,250); // blue
		stroke(250,50,50); // red
		//stroke(70,200,70); // green
		point(this.pos.x,this.pos.y);
		pop();
	}
	
	
	handleBoundary(){
		this.deleteFromArray(bullets);
	}
}

