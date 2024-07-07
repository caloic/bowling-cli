const { Player } = require('./player');
const { askQuestion } = require('../utils/readline');

class Game {
    constructor(playerNames) {
        this.players = playerNames.map(name => new Player(name));
        this.frames = 10;
    }

    async play() {
        for (let frame = 1; frame <= this.frames; frame++) {
            console.log(`Frame ${frame}`);
            for (let player of this.players) {
                await this.playFrame(player, frame);
            }
            this.displayScores();
        }
    }

    async playFrame(player, frame) {
        let roll1 = await this.getRoll(player.name, 10, 1);
        player.roll(roll1);

        if (roll1 < 10) {
            let roll2 = await this.getRoll(player.name, 10 - roll1, 2);
            player.roll(roll2);
        }

        if (frame === 10) {
            if (player.isStrike(player.rolls.length - 1)) {
                let roll2 = await this.getRoll(player.name, 10, 2);
                player.roll(roll2);
                let roll3 = await this.getRoll(player.name, 10, 3);
                player.roll(roll3);
            } else if (player.isSpare(player.rolls.length - 2)) {
                let roll3 = await this.getRoll(player.name, 10, 3);
                player.roll(roll3);
            }
        }
    }

    async getRoll(playerName, maxPins, rollNumber) {
        let pins;
        do {
            pins = parseInt(await askQuestion(`${playerName}, combien de quilles avez-vous renversé au lancer ${rollNumber} (0-${maxPins})? `));
            if (isNaN(pins) || pins < 0 || pins > maxPins) {
                console.log(`Erreur: le nombre de quilles doit être entre 0 et ${maxPins}. Veuillez réessayer.`);
            }
        } while (isNaN(pins) || pins < 0 || pins > maxPins);
        return pins;
    }

    displayScores() {
        console.log("Scores après chaque frame:");
        this.players.forEach(player => {
            console.log(`${player.name}: ${player.getTotalScore()}`);
        });
    }

    getResults() {
        return this.players.map(player => ({
            name: player.name,
            score: player.getTotalScore()
        }));
    }
}

module.exports = { Game };