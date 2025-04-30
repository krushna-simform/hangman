const STORAGE_KEY = 'hangman-progress';

export interface GameSave {
    word: string;
    clue: string;
    guesses: string[];
    lives: number;
    difficulty?: string;
}

export function saveGame(state: GameSave) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadGame(): GameSave | null {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
}

export function clearGame() {
    localStorage.removeItem(STORAGE_KEY);
}
