class Slingshot{
    constructor(bodyA,pointB){
        var options={
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
        }
        this.Slinghot = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Slingshot);
        
        
    }
    display(){
      var pos = this.Slingshot.bodyA.position;
      var posB = this.pointB;
      line(pos.x,pos.y,posB.x,posB.y);
    }
}
  