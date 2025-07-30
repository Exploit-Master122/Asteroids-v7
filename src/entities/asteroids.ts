export class Asteroid {
    x: number;
    y: number;
    velocityX: number = (Math.random() - 0.5) * 2;
    velocityY: number = (Math.random() - 0.5) * 2;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(deltaTime: number) {
        // TODO: Update position, handle splitting, etc.
        this.x += this.velocityX;
        this.y += this.velocityY;
        console.log("Updating asteroid...");
    }

    draw(ctx: CanvasRenderingContext2D) {
        // TODO: Draw the asteroid on the canvas
        ctx.strokeStyle = 'gray';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2); // Simple circle for now
        ctx.stroke();
        console.log("Drawing asteroid...");
    }
}
