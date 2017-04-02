class AppController {
    constructor(Game) {
        'ngInject';

        this.game = Game;
        this.playerName = Game.playerName;
    }

    get isGameActive() {
        return this.game.isActive;
    }

    get isGameFinished() {
        return this.game.isFinished;
    }

    get isPlayerDefined() {
        return !!this.game.playerName;
    }
}

export default AppController;
