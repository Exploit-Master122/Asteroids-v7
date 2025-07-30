export class Bullet {
    x: number = 0;
    y: number = 0;
    velocityX: number = 0;
    velocityY: number = 0;
    active: boolean = false; // Bullets start inactive

    update(deltaTime: number) {
        // TODO: Update position, check lifetime, etc.
        if (this.active) {
             this.x += this.velocityX;
             this.y += this.velocityY;
            console.log("Updating bullet...");
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        // TODO: Draw the bullet on the canvas if active
        if (this.active) {
            ctx.fillStyle = 'yellow';
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fill();
            console.log("Drawing bullet...");
        }
    }
}
