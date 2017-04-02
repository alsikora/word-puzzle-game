import angular from 'angular';
import Ranking from './ranking/ranking';
import Intro from './intro/intro';
import Gameboard from './game/game';
import Result from './result/result';

export default angular.module('app.components', [
    Intro,
    Gameboard,
    Ranking,
    Result
]).name;