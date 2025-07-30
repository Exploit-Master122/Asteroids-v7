// Placeholder for Enemy entity
export class Enemy {
    x: number = Math.random() * 800;
    y: number = Math.random() * 600;

    update(deltaTime: number) {
        // TODO: Implement enemy AI logic
        console.log("Updating enemy...");
    }

    draw(ctx: CanvasRenderingContext2D) {
        // TODO: Draw the enemy
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x - 10, this.y - 10, 20, 20);
        console.log("Drawing enemy...");
    }
}
