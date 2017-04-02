import angular from 'angular';
import Game from '../../common/game/game';
import template from './intro.html';
import controller from './intro.controller';

let introComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('intro', [Game]).component('intro', introComponent).name;
