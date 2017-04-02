import angular from 'angular';
import Firebase from './firebase/firebase';
import GameComponent from './game/game';
import GlobalEvents from './global-events/global-events';
import Dictionary from './dictionary/dictionary';

export default angular.module('app.common', [
    Firebase,
    GameComponent,
    GlobalEvents,
    Dictionary
]).name;