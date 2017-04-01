import * as firebase from 'firebase';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyA8Q_eFL8I5-LJlz1D-pkMbf2bpJWBEn8g",
    authDomain: "word-puzzle-game-13323.firebaseapp.com",
    databaseURL: "https://word-puzzle-game-13323.firebaseio.com",
    storageBucket: "word-puzzle-game-13323.appspot.com",
    messagingSenderId: "940715973214"
};
firebase.initializeApp(config);

class FirebaseService {
    constructor() {
        'ngInject';
        this.firebase = firebase;
        this.database = firebase.database();
        this.playersRef = this.database.ref('/players');
        this.dictionaryRef = this.database.ref('/dictionary');
    }

    savePlayer(name, score) {
        this.playersRef.push({
            name,
            score
        });
    }

    getDictionary() {
        let words = [];

        return new Promise(resolve => {
            this.dictionaryRef.once('value', snapshot => {
                snapshot.forEach(childSnapshot => {
                    words.push(childSnapshot.val());
                });
                resolve(words);
            });
        });
    }
}

export default FirebaseService;
