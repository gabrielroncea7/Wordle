export class Word {
    private _word: string;
    private _fecha: Date;

    constructor(word: string, fecha: Date) {
        this._word = word;
        this._fecha = fecha;
    }

    // Static method to create a new instance of Word
    static Maker(word: string): Word {
        return new Word(word, new Date());
    }

    // Method to create a word
    create(word: string, fecha: Date): boolean {
        if (typeof word === 'string' && word.length >= 5 && word.length <= 10) {
            this._word = word;
            this._fecha = fecha;
            return true;
        } else {
            return false;
        }
    }

    // Method to get the word
    get(): string {
        return this._word;
    }

    // Method to set the word
    setByWordObj(word: string): boolean {
        if (typeof word === 'string' && word.length >= 5 && word.length <= 10) {
            this._word = word;
            return true;
        } else {
            return false;
        }
    }

    // Method to set the word using another Word object
    set(wordObj: Word): void {
        this._word = wordObj.get();
        this._fecha = wordObj.getDate();
    }

    // Method to get the date
    getDate(): Date {
        return this._fecha;
    }
}