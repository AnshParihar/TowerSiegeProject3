class Ball{
    constructor(x,y,radius){
        var options = {
            restitution: 1.0,
            friction: 1.0,
            density: 1.0
        }
        this.body = Bodies.circle(x,y,radius,options)
        console.log(this.body);
        World.add(world, this.body)
        this.radius = radius
    }
    display(){
        ellipseMode(RADIUS)
        fill("yellow")
        stroke("blue")
        strokeWeight(2)
        ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
    }
}