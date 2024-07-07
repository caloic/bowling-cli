const fs = require('fs');
const path = './history.json';

const saveHistory = (results) => {
    let history = loadHistory();
    history.push(results);
    fs.writeFileSync(path, JSON.stringify(history, null, 2));
};

const loadHistory = () => {
    if (fs.existsSync(path)) {
        const data = fs.readFileSync(path);
        return JSON.parse(data);
    }
    return [];
};

const displayHistory = () => {
    const history = loadHistory();
    if (history.length === 0) {
        console.log("Aucune partie n'a été jouée.");
    } else {
        console.log("Historique des parties:");
        history.forEach((game, index) => {
            console.log(`Partie ${index + 1}:`);
            game.forEach(player => {
                console.log(`${player.name}: ${player.score}`);
            });
        });
    }
};

module.exports = { saveHistory, loadHistory, displayHistory };