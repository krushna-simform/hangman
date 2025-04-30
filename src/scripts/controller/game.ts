export interface WordData {
    word: string;
    clue: string;
    difficulty?: string;
}

export class HangmanGame {
    private word: string;
    private clue: string;
    private guesses: Set<string>;
    private lives: number = 6;
    private difficulty?: string;

    constructor(data: WordData, guesses: Set<string> = new Set(), lives = 6) {
        this.word = data.word.toLowerCase();
        this.clue = data.clue;
        this.guesses = guesses;
        this.lives = lives;
        this.difficulty = data.difficulty;
    }

    public guess(letter: string): boolean {
        letter = letter.toLowerCase();
        if (!this.guesses.has(letter)) {
            this.guesses.add(letter);
            if (!this.word.includes(letter)) this.lives--;
        }
        return this.word.includes(letter);
    }

    public getDisplayWord(): string {
        return [...this.word]
            .map((c) => (c === ' ' || this.guesses.has(c) ? c : '_'))
            .join('');
    }

    public isWon(): boolean {
        return ![...this.word].some((c) => c !== ' ' && !this.guesses.has(c));
    }

    public isLost(): boolean {
        return this.lives <= 0;
    }

    public getState() {
        return {
            word: this.word,
            clue: this.clue,
            guesses: Array.from(this.guesses),
            lives: this.lives,
            difficulty: this.difficulty,
        };
    }
}
