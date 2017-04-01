import angular from 'angular';
import FirebaseService from './firebase.service';

export default angular.module('firebase', []).service('Firebase', FirebaseService).name;
