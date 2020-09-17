// == Imports
import store from 'src/store';
import { testAction } from 'src/actions/test';
import { incrementColors } from 'src/actions/gradient';
import { randomHexColor, generateSpanColor } from './utils';

// == Rendu dans le DOM
function renderNbColors() {
    const { nbColors } = store.getState();
    console.log(nbColors);

    document.getElementById('nbColors').innerHTML = `
        ${nbColors} couleur(s) générée(s)
    `;
}
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
renderNbColors();
renderGradient();
renderColors();

// == Initialisation
store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
    .addEventListener('click', () => {
        // debug
        console.log('Random all colors');
        store.dispatch(incrementColors());
        // // data
        // state.nbColors += 2;
        // state.firstColor = randomHexColor();
        // state.lastColor = randomHexColor();
        // // ui
        // renderNbColors();
        // renderGradient();
        // renderColors();

        store.dispatch(testAction(true));
    });

// document.getElementById('randFirst')
//   .addEventListener('click', () => {
//     state.nbColors += 1;
//     state.firstColor = randomHexColor();
//     renderNbColors();
//     renderGradient();
//     renderColors();
//   });

// document.getElementById('randLast')
//   .addEventListener('click', () => {
//     state.nbColors += 1;
//     state.lastColor = randomHexColor();
//     renderNbColors();
//     renderGradient();
//     renderColors();
//   });

// document.getElementById('toLeft')
//   .addEventListener('click', () => {
//     state.direction = '270deg';
//     renderGradient();
//     renderColors();
//   });

// document.getElementById('toRight')
//   .addEventListener('click', () => {
//     state.direction = '90deg';
//     renderGradient();
//     renderColors();
//   });
