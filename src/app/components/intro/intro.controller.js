class HomeController {
  constructor(Game) {
    'ngInject';
    this.game = Game;

    this.playerName = '';
  }

  startGame($event) {
    $event.preventDefault();

    this.game.playerName = this.playerName;
    this.game.start();
  }
}

export default HomeController;
