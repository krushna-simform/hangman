import { HangmanGame, WordData } from './controller/game';
import { loadGame } from './model/storage';
import words from './model/word';
import { HangmanUI } from './view/ui';

const saved = loadGame();

let game: HangmanGame;

if (saved) {
    const wordData: WordData = {
        word: saved.word,
        clue: saved.clue,
        difficulty: saved.difficulty,
    };
    game = new HangmanGame(wordData, new Set(saved.guesses), saved.lives);
} else {
    const random = words[Math.floor(Math.random() * words.length)];
    game = new HangmanGame(random);
}

new HangmanUI(game);
