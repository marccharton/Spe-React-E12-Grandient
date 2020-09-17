// == Imports
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from 'src/components/App';

import store from 'src/store';
import { testAction } from 'src/actions/test';
import {
    incrementColors,
    randomFirstColor,
    randomLastColor,
    changeDirection,
} from 'src/actions/gradient';

import { generateSpanColor } from './utils';

const rootComponent = (
    <Provider store={store}>
        <App />
    </Provider>
);

render(rootComponent, document.getElementById('root'));

// // == Rendu dans le DOM
// function renderNbColors() {
//     const { nbColors } = store.getState();
//     console.log(nbColors);

//     document.getElementById('nbColors').innerHTML = `
//         ${nbColors} couleur(s) générée(s)
//     `;
// }
function renderGradient() {
    const { direction, firstColor, lastColor } = store.getState();

    document.getElementById('gradient').style.background = `
        linear-gradient(${direction},${firstColor},${lastColor})
    `;
}
function renderColors() {
    const { direction, firstColor, lastColor } = store.getState();

    const firstSpan = generateSpanColor(firstColor);
    const lastSpan = generateSpanColor(lastColor);

    const result = direction === '90deg'
        ? `${firstSpan} → ${lastSpan}`
        : `${lastSpan} ← ${firstSpan}`;

    document.getElementById('colors').innerHTML = result;
}

// == Initialisation
// renderNbColors();
renderGradient();
renderColors();

// == Initialisation
// store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
// document.getElementById('randAll')
//     .addEventListener('click', () => {
//         // debug
//         console.log('Random all colors');
//         store.dispatch(incrementColors());
//         store.dispatch(randomFirstColor());
//         store.dispatch(randomLastColor());
//         store.dispatch(testAction(true));
//     });

// document.getElementById('randFirst')
//     .addEventListener('click', () => {
//         store.dispatch(incrementColors());
//         store.dispatch(randomFirstColor());
//     });

// document.getElementById('randLast')
//     .addEventListener('click', () => {
//         store.dispatch(incrementColors());
//         store.dispatch(randomLastColor());
//     });

document.getElementById('toLeft')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('270deg'));
    });

document.getElementById('toRight')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('90deg'));
    });

document.getElementById('to45')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('45deg'));
    });

document.getElementById('to135')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('135deg'));
    });

document.getElementById('to225')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('225deg'));
    });

document.getElementById('to315')
    .addEventListener('click', () => {
        store.dispatch(changeDirection('315deg'));
    });
