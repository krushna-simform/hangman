const template = {
    header: (): HTMLElement => {
        const header = document.createElement('header');

        const title = document.createElement('h1');
        title.innerText = 'Hangman';

        header.appendChild(title);

        return header;
    },

    gauessSection: (): HTMLElement => {
        const mainRoot = document.createElement('div');
        mainRoot.className = 'gauess-section';

        const hangmanGraphic = document.createElement('div');
        hangmanGraphic.setAttribute('id', 'hangman-graphic');

        const clueSection = document.createElement('div');
        clueSection.setAttribute('id', 'clue-section');

        const wordDisplayed = document.createElement('div');
        wordDisplayed.setAttribute('id', 'word-display');

        const keyboard = document.createElement('div');
        keyboard.setAttribute('id', 'keyboard');

        const status = document.createElement('div');
        status.setAttribute('id', 'status');

        mainRoot.appendChild(hangmanGraphic);
        mainRoot.appendChild(clueSection);
        mainRoot.appendChild(wordDisplayed);
        mainRoot.appendChild(keyboard);
        mainRoot.appendChild(status);

        return mainRoot;
    },

    render: () => {
        const main = document.createElement('div');
        main.appendChild(template.header());
        main.appendChild(template.gauessSection());
        return main;
    },
};

export default template;
