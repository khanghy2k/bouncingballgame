class Rectangle {
    x;
    y;
    width;
    height;
    color
    constructor(x,y,width,height,color) {
        this.x = x;
        this.y= y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    drawRect(ctx){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.closePath();
    }
    moveLeft(){
        this.x -=50;
    }
    moveRight(){
        this.x +=50;
    }
}