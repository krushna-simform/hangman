import { HangmanGame } from '../controller/game';
import { saveGame } from '../model/storage';
import template from './template';

export class HangmanUI {
    private game: HangmanGame;
    private root = document.getElementById('main-root') as HTMLDivElement;

    constructor(game: HangmanGame) {
        this.game = game;

        if (!this.root) {
            throw new Error('root element is not selected');
        }

        this.root.append(template.render());
        this.render();
        this.bindKeyboard();
    }

    private render() {
        (document.getElementById('clue-section') as HTMLDivElement).innerText =
            `Clue: ${this.game.getState().clue}`;
        this.renderWord();
        this.renderKeyboard();
        this.renderStatus();
    }

    private renderWord() {
        const wordDisplay = document.getElementById(
            'word-display'
        ) as HTMLDivElement;

        if (!wordDisplay) {
            throw new Error('word-display element is not selected');
        }

        wordDisplay.innerHTML = '';
        for (const char of this.game.getDisplayWord()) {
            const div = document.createElement('div');
            div.className = 'letter';
            div.innerText = char;
            wordDisplay.appendChild(div);
        }
    }

    private renderKeyboard() {
        const keys = 'abcdefghijklmnopqrstuvwxyz'.split('');
        const container = document.getElementById('keyboard') as HTMLDivElement;

        if (!container) {
            throw new Error('keyboard element is not selected');
        }

        container.innerHTML = '';
        for (const key of keys) {
            const btn = document.createElement('button');
            btn.innerText = key;
            btn.disabled = this.game.getState().guesses.includes(key);
            btn.onclick = () => {
                this.game.guess(key);
                saveGame(this.game.getState());
                this.render();
            };
            container.appendChild(btn);
        }
    }

    private renderStatus() {
        const status = document.getElementById('status') as HTMLDivElement;

        if (!status) {
            throw new Error('status element is not selected');
        }

        status.innerText = '';
        if (this.game.isWon()) status.innerText = 'You won!';
        else if (this.game.isLost()) status.innerText = 'You lost!';
        else status.innerText = `Lives left: ${this.game.getState().lives}`;
    }

    private bindKeyboard() {
        window.addEventListener('keydown', (e) => {
            if (/^[a-z]$/i.test(e.key)) {
                this.game.guess(e.key);
                saveGame(this.game.getState());
                this.render();
            }
        });
    }
}
