import angular from 'angular';
import DictionaryService from './dictionary.service';
import Firebase from '../firebase/firebase';


export default angular.module('dictionary', [Firebase]).service('Dictionary', DictionaryService).name;
