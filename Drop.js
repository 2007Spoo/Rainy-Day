class Drops
{
    constructor(x, y , r)
    {
      var options=
      {
          friction: 0.1
      }  
      this.body= Bodies.circle(x, y, this.r,options);
      this.x= x;
      this.y= y;
      
      World.add(world, this.body);
    }

    display()
    {
      var angle= this.body.angle;
      var position= this.body.position;
      
      push()
      translate(position.x, position.y);
      rotate(angle);
      noStroke();
      fill(0, 229, 247)
      ellipseMode(RADIUS);
      ellipse(0, 0, this.r,this.r);
      for(var i=0; i<maxdrops; i++)
      {
         drops.push(new createDrop(random(0,400), random(0,400)))
      }
      pop()
    }
}