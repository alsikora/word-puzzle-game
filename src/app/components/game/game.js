import angular from 'angular';
import template from './game.html';
import controller from './game.controller';
import Game from '../../common/game/game';
import Firebase from '../../common/firebase/firebase';
import GlobalEvents from '../../common/global-events/global-events';


const gameComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('wordsGame', [Game, Firebase, GlobalEvents]).component('wordsGame', gameComponent).name;
