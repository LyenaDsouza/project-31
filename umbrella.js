class Umbrella
{

    constructor(x,y)
    {
      
        var options=
        {
            isStatic:true,


        }
        this.body=Bodies.circle(x,y,50,options);
        this.image=loadImage("images/walking_1.png");
        this.r=50;
        this.x=x;
        this.y=y;
        World.add(world,this.body);
        

    }

    display()
    {
       
       image(this.image,this.body.position.x,this.body.position.y +70,300,300);


    }

    
    
}