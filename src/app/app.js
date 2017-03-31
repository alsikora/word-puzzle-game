import angular from 'angular';
import template from './app.html';
import controller from './app.controller';
import '../style/main.css';

const AppComponent = {
    template,
    restrict: 'E',
    controller
};

export default angular.module('app', []).component('app', AppComponent);