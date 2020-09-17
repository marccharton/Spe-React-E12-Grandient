export const INCREMENT_COLORS = 'incrementColor';
export const incrementColors = () => ({ type: INCREMENT_COLORS });

export const RANDOM_FIRST_COLOR = 'randomFirstColor';
export const randomFirstColor = () => ({ type: RANDOM_FIRST_COLOR });

export const RANDOM_LAST_COLOR = 'randomLastColor';
export const randomLastColor = () => ({ type: RANDOM_LAST_COLOR });

export const CHANGE_DIRECTION = 'changeDirection';
export const changeDirection = (direction) => ({ type: CHANGE_DIRECTION, direction });
