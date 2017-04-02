class ResultController {
    constructor(Game) {
        'ngInject';

        this.game = Game;
    }

    get finalScore() {
        return this.game.score;
    }

    get playerName() {
        return this.game.playerName;
    }

    restartGame() {
        this.game.start();
    }
}

export default ResultController;