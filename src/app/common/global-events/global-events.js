import angular from 'angular';
import GlobalEventsFactory from './global-events.factory';

export default angular.module('globalEvents', []).factory('GlobalEvents', GlobalEventsFactory).name;