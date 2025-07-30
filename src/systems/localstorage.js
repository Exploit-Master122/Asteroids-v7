// src/systems/saveManager.js or part of save.ts
const SAVE_KEY = 'ultimate_asteroids_save';

export const SaveManager = {
    save: function(data) {
        try {
            localStorage.setItem(SAVE_KEY, JSON.stringify(data));
            console.log("Game saved successfully.");
        } catch (e) {
            console.error("Failed to save game:", e);
        }
    },

    load: function() {
        try {
            const data = localStorage.getItem(SAVE_KEY);
            if (data) {
                console.log("Game loaded successfully.");
                return JSON.parse(data);
            } else {
               console.log("No saved game found.");
               return null;
            }
        } catch (e) {
            console.error("Failed to load game:", e);
            return null;
        }
    },

    clear: function() {
        try {
            localStorage.removeItem(SAVE_KEY);
            console.log("Save data cleared.");
        } catch (e) {
            console.error("Failed to clear save data:", e);
        }
    }
};

// Example usage:
// SaveManager.save({ level: 5, score: 12345, shipType: 'interceptor' });
// const saveData = SaveManager.load();
// if (saveData) { /* Load game state from saveData */ }
