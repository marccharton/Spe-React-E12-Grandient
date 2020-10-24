import {
    INCREMENT_COLORS,
    RANDOM_FIRST_COLOR,
    RANDOM_LAST_COLOR,
    CHANGE_DIRECTION,
} from 'src/actions/gradient';
import { randomHexColor } from 'src/utils';

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
    case INCREMENT_COLORS:
        return {
            ...state,
            nbColors: state.nbColors + 1,
        };
    case RANDOM_FIRST_COLOR:
        return {
            ...state,
            firstColor: randomHexColor(),
        };
    case RANDOM_LAST_COLOR:
        return {
            ...state,
            lastColor: randomHexColor(),
        };
    case CHANGE_DIRECTION:
        return {
            ...state,
            direction: action.direction,
        };
    default:
        return state;
    }
};

export default reducer;
