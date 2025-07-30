export class Ship {
    x: number;
    y: number;
    rotation: number = 0; // In degrees
    velocityX: number = 0;
    velocityY: number = 0;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update(deltaTime: number) {
        // TODO: Handle input, update position, rotation, etc.
        // Example placeholder movement:
        // this.x += this.velocityX * deltaTime;
        // this.y += this.velocityY * deltaTime;
        console.log("Updating ship...");
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = 'cyan';
        ctx.beginPath();
        ctx.moveTo(0, -10); // Nose
        ctx.lineTo(-7, 10); // Bottom left
        ctx.lineTo(0, 5);   // Cockpit
        ctx.lineTo(7, 10);  // Bottom right
        ctx.closePath();
        ctx.fill();
        ctx.restore();
        console.log("Drawing ship...");
    }
}
