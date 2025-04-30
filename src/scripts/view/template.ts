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

        const button = document.createElement('button');
        button.setAttribute('id', 'new-game-button');
        button.innerText = 'new game';

        mainRoot.appendChild(hangmanGraphic);
        mainRoot.appendChild(clueSection);
        mainRoot.appendChild(wordDisplayed);
        mainRoot.appendChild(keyboard);
        mainRoot.appendChild(status);
        mainRoot.appendChild(button);

        return mainRoot;
    },

    hangManGraphics: () => {
        const hangmanContainer = document.createElement('div');
        hangmanContainer.setAttribute('id', 'hangman-container');

        const hang = document.createElement('div');
        hang.setAttribute('id', 'hang');

        const figure = document.createElement('div');
        figure.setAttribute('id', 'figure');

        const base = document.createElement('div');
        base.className = 'base';

        const pole = document.createElement('div');
        pole.className = 'pole';

        const beam = document.createElement('div');
        beam.className = 'beam';

        const rope = document.createElement('div');
        rope.className = 'rope';

        hang.appendChild(base);
        hang.appendChild(pole);
        hang.appendChild(beam);
        hang.appendChild(rope);

        const head = document.createElement('div');
        head.className = 'head part';

        const body = document.createElement('div');
        body.className = 'body part';

        const leftArm = document.createElement('div');
        leftArm.className = 'left-arm part';

        const rightArm = document.createElement('div');
        rightArm.className = 'right-arm part';

        const leftLeg = document.createElement('div');
        leftLeg.className = 'left-leg part';

        const rightLeg = document.createElement('div');
        rightLeg.className = 'right-leg part';

        figure.appendChild(head);
        figure.appendChild(body);
        figure.appendChild(leftArm);
        figure.appendChild(rightArm);
        figure.appendChild(leftLeg);
        figure.appendChild(rightLeg);

        hangmanContainer.appendChild(hang);
        hangmanContainer.appendChild(figure);

        return hangmanContainer;
    },

    render: () => {
        const main = document.createElement('div');
        main.appendChild(template.header());

        const section = document.createElement('section');
        section.className = 'hangman-grapic-play';
        section.appendChild(template.gauessSection());
        section.appendChild(template.hangManGraphics());

        main.appendChild(section);
        return main;
    },
};

export default template;
