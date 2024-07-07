const { startGame } = require('./controllers/gameController');
const { displayHistory } = require('./utils/history');
const { askQuestion } = require('./utils/readline');

const main = async () => {
    console.log("Bienvenue dans Ynov Bowling !");

    while (true) {
        const action = await askQuestion("Tapez 'n' pour une nouvelle partie, 'h' pour l'historique des parties, ou 'q' pour quitter: ");
        if (action === 'q') {
            break;
        } else if (action === 'h') {
            displayHistory();
        } else if (action === 'n') {
            await startGame();
        }
    }

    process.exit();
};

main();