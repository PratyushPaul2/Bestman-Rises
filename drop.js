class drops{
    constructor(x,y,){
        this.x=x;
        this.y=y;
        this.radius=5;
        var options={
            'friction':0.1
        }
        this.drops=Bodies.circle(x,y,5,options);
    }
    display(){
        fill("blue");
        ellipse(this.x,this.y,5)
        
        
    }
}