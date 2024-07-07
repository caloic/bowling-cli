class Player {
    constructor(name) {
        this.name = name;
        this.rolls = [];
    }

    roll(pins) {
        this.rolls.push(pins);
    }

    isStrike(rollIndex) {
        return this.rolls[rollIndex] === 10;
    }

    isSpare(rollIndex) {
        return this.rolls[rollIndex] + this.rolls[rollIndex + 1] === 10;
    }

    getTotalScore() {
        let score = 0;
        let rollIndex = 0;

        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(rollIndex)) { // Strike
                if (this.rolls[rollIndex + 1] !== undefined && this.rolls[rollIndex + 2] !== undefined) {
                    score += 10 + this.rolls[rollIndex + 1] + this.rolls[rollIndex + 2];
                }
                rollIndex++;
            } else if (this.isSpare(rollIndex)) { // Spare
                if (this.rolls[rollIndex + 2] !== undefined) {
                    score += 10 + this.rolls[rollIndex + 2];
                }
                rollIndex += 2;
            } else {
                if (this.rolls[rollIndex] !== undefined && this.rolls[rollIndex + 1] !== undefined) {
                    score += this.rolls[rollIndex] + this.rolls[rollIndex + 1];
                }
                rollIndex += 2;
            }
        }

        return score;
    }
}

module.exports = { Player };