import { TEST_ACTION } from 'src/actions/test';
import { INCREMENT_COLORS } from 'src/actions/gradient';

// == State
const initialState = {
    firstColor: '#e367a4',
    lastColor: '#48b1f3',
    direction: '90deg',
    nbColors: 0,
    pouet: true,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
    case TEST_ACTION:
        return {
            ...state,
            pouet: !state.pouet,
        };
    case INCREMENT_COLORS:
        return {
            ...state,
            nbColors: state.nbColors + 1,
        };
    default:
        return state;
    }
};

export default reducer;
