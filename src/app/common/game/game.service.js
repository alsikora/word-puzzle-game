const GAME_DURATION = 40;

class GameService {

  constructor($interval, GlobalEvents, Dictionary) {
    'ngInject';

    this.NEW_WORD = 'GameService.newWord';
    this.SCORE_UPDATED = 'GameService.scoreUpdated';
    this.TIME_UPDATED = 'GameService.timeUpdated';
    this.TIME_IS_UP = 'GameService.timeIsUp';

    this.$interval = $interval;

    this.currentAnswer = '';
    this.currentWord = '';
    this.globalEvents = GlobalEvents;
    this.previousAnswer = null;
    this.remainingSeconds = null;
    this.score = 0;
    this.tickIntervalHandle = null;
    this.dictionary = Dictionary;
    this.charactersRemoved = 0;
  }

  get isActive() {
    return !!this.tickIntervalHandle;
  }

  get isAnswerCorrect() {
    return this.currentAnswer.toLowerCase() === this.currentWord.toLowerCase();
  }

  get isFinished() {
    return !this.isActive && this.isTimeUp;
  }

  get isTimeUp() {
    return this.remainingSeconds === 0;
  }

  calculateMaxScore(word) {
    return Math.floor(Math.pow(1.95, word.length / 3));
  }

  onTick() {
    this.remainingSeconds--;
    this.globalEvents.trigger(this.TIME_UPDATED, this.remainingSeconds);

    if (this.isTimeUp) {
      this.globalEvents.trigger(this.TIME_IS_UP, this.score);
      this.$interval.cancel(this.tickIntervalHandle);
      this.tickIntervalHandle = null;
    }
  }

  setAnswer(newAnswer) {
    this.previousAnswer = this.currentAnswer;
    this.currentAnswer = newAnswer;

    if (this.isAnswerCorrect) {
        let wordScore = this.calculateMaxScore(this.currentWord) - this.charactersRemoved;
        this.score += (wordScore > 0 ? wordScore : 0);
        this.charactersRemoved = 0;
        this.currentWord = this.dictionary.getNextWord();
        this.globalEvents.trigger(this.NEW_WORD, this.currentWord);
        this.currentAnswer = '';
        this.previousAnswer = null;
    } else if (this.previousAnswer) {
        let charDifference = this.previousAnswer.length - this.currentAnswer.length; //-1 or +1
        if (charDifference > 0) {
            this.charactersRemoved += charDifference;
        }
    }

    this.globalEvents.trigger(this.SCORE_UPDATED, this.score);
  }

  start() {
    this.currentWord = this.dictionary.getNextWord();
    this.remainingSeconds = GAME_DURATION;
    this.score = 0;
    this.tickIntervalHandle = this.$interval(() => this.onTick(), 1000);

    this.globalEvents.trigger(this.NEW_WORD, this.currentWord);
    this.globalEvents.trigger(this.SCORE_UPDATED, this.score);
    this.globalEvents.trigger(this.TIME_UPDATED, this.remainingSeconds);
  }

}

export default GameService;
