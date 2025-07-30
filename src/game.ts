import { Ship } from './entities/ship';
import { Asteroid } from './entities/asteroid';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private lastTime: number = 0;
    private isRunning: boolean = false;
    private ship: Ship;
    private asteroids: Asteroid[] = [];

    constructor(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
        this.ctx = ctx;
        this.canvas = canvas;
        this.ship = new Ship(canvas.width / 2, canvas.height / 2);
        // TODO: Initialize other game entities (asteroids, enemies, etc.) here
        this.spawnAsteroids(5);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.lastTime = performance.now();
            requestAnimationFrame((time) => this.gameLoop(time));
        }
    }

    stop() {
        this.isRunning = false;
    }

    private spawnAsteroids(count: number) {
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.canvas.width;
            const y = Math.random() * this.canvas.height;
            this.asteroids.push(new Asteroid(x, y));
        }
    }

    private gameLoop(time: number) {
        if (!this.isRunning) return;

        const deltaTime = (time - this.lastTime) / 1000; // Convert to seconds
        this.lastTime = time;

        this.update(deltaTime);
        this.draw();

        requestAnimationFrame((t) => this.gameLoop(t));
    }

    private update(deltaTime: number) {
        // TODO: Update game state (player input, physics, collisions, etc.)
        this.ship.update(deltaTime);
        this.asteroids.forEach(a => a.update(deltaTime));
        console.log("Updating game...", deltaTime); // Placeholder
    }

    private draw() {
        // Clear the canvas yup...
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // TODO: Draw game entities!! (Three.js sux)
        this.ship.draw(this.ctx);
        this.asteroids.forEach(a => a.draw(this.ctx));
        console.log("Drawing game..."); // Placeholder
    }
}
