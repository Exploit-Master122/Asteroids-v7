import { Game } from './game';

// Wait for the window to load to ensure the canvas is ready!!
window.addEventListener('load', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    if (!canvas) {
        console.error('Canvas element not found!');
        return;
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) {
        console.error('Unable to get 2D context from canvas!');
        return;
    }

    // Instantiate and start the game
    const game = new Game(ctx, canvas);
    game.start();
});
