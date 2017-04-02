import shuffle from 'lodash/shuffle';

class DictionaryService {
    constructor(Firebase) {
        'ngInject';

        this.currentWordIndex = 0;
        this.firebase = Firebase;
        this.words = [];
        this.getWords();
    }

    /**
     * Gets array of strings from database
     */
    getWords() {
        this.firebase.getDictionary().then((dictionary) => {
            this.words = shuffle(dictionary);
        })
    }

    /**
     * @returns {String} Next word in array
     */
    getNextWord() {
        let isOutOfWords = this.currentWordIndex === this.words.length - 1;

        if (isOutOfWords) {
            this.currentWordIndex = 0;
        }

        return this.words[this.currentWordIndex++];
    }
}

export default DictionaryService;
