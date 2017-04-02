import angular from 'angular';
import globalEventsModule from '../global-events/global-events';
import dictionaryModule from '../dictionary/dictionary';
import GameService from './game.service';

export default angular.module('game', [globalEventsModule, dictionaryModule]).service('Game', GameService).name;
