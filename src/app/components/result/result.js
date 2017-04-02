import angular from 'angular';
import template from './result.html';
import controller from './result.controller';
import Game from '../../common/game/game';

const resultComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('result', [Game]).component('result', resultComponent).name;