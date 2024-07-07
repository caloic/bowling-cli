const { Game } = require('../models/game');
const { askQuestion } = require('../utils/readline');
const { saveHistory } = require('../utils/history');

const startGame = async () => {
    const numPlayers = parseInt(await askQuestion("Entrez le nombre de joueurs (entre 1 et 6): "));
    const players = [];
    for (let i = 0; i < numPlayers; i++) {
        const playerName = await askQuestion(`Entrez le nom du joueur ${i + 1}: `);
        players.push(playerName);
    }

    const game = new Game(players);
    await game.play();

    const results = game.getResults();
    console.log("Score final:");
    results.forEach(result => {
        console.log(`${result.name}: ${result.score}`);
    });

    saveHistory(results);
};

module.exports = { startGame };