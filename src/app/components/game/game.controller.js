import shuffle from 'lodash/shuffle';

class GameController {
    constructor(Game, Firebase, GlobalEvents) {
        'ngInject';

        this.currentAnswer = '';
        this.currentMangledWord = shuffle(Game.currentWord).join('');
        this.game = Game;
        this.remainingTime = Game.remainingSeconds;
        this.score = 0;
        this.firebase = Firebase;
        GlobalEvents.on(Game.NEW_WORD, (newWord) => this.onNewWord(newWord));
        GlobalEvents.on(Game.SCORE_UPDATED, (newScore) => this.onNewScore(newScore));
        GlobalEvents.on(Game.TIME_UPDATED, (newTime) => this.onTimeUpdated(newTime));
        GlobalEvents.on(Game.TIME_IS_UP, () => this.onTimeIsUp());
    }

    get isGameActive() {
        return this.game.isActive;
    }

    get playerName() {
        return this.game.playerName;
    }

    onAnswerChange() {
        this.game.setAnswer(this.currentAnswer);
    }

    onNewScore(newScore) {
        this.score = newScore;
    }

    onNewWord(newWord) {
        this.currentAnswer = '';
        this.currentMangledWord = shuffle(newWord).join('');
    }

    /**
     * Saves username and user's score to database
     */
    onTimeIsUp() {
        this.firebase.savePlayer(this.playerName, this.score);
    }

    /**
     * Updates counter
     * @param newTime
     */
    onTimeUpdated(newTime) {
        this.remainingTime = newTime;
    }
}

export default GameController;
