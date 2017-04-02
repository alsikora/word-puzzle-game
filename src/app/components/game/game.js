import angular from 'angular';
import template from './game.html';
import controller from './game.controller';
import Game from '../../common/game/game';
import Firebase from '../../common/firebase/firebase';


const gameComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('wordsGame', [Game, Firebase]).component('wordsGame', gameComponent).name;
