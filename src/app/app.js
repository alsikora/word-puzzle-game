import angular from 'angular';
import Common from './common/common';
import Components from './components/components';
import template from './app.html';
import controller from './app.controller';
import '../style/main.css';

const AppComponent = {
    template,
    restrict: 'E',
    controller
};

export default angular.module('app', [Common, Components]).component('app', AppComponent);