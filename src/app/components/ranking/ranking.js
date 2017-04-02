import angular from 'angular';
import template from './ranking.html';
import controller from './ranking.controller';

let rankingComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('ranking', []).controller().component('ranking', rankingComponent).name;
