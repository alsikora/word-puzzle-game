import angular from 'angular';
import template from './ranking.html';
import controller from './ranking.controller';
import Firebase from '../../common/firebase/firebase';

let rankingComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller
};

export default angular.module('ranking', [Firebase]).component('ranking', rankingComponent).name;
