import 'map.prototype.tojson';

const createHash = (x, y) => `x${x}y${y}`;

export const setPoint = coords => dispatch => dispatch({ type: 'SET', coords});

export const deletePoint = hash => dispatch => dispatch({ type: 'DELETE', hash});

function reducer(state = { pins: new Map() }, action) {
  const { pins } = state;
  const { coords: { x, y } = {}} = action || {};
  const hash = createHash(x, y);

  switch (action.type) {
    case 'SET':
      pins.set(hash, { x, y });

      return {
        ...state,
        pins,
      };
    case 'DELETE':
      pins.delete(hash);

      return {
        ...state,
        pins,
      };
    default:
      return state;
  }
}

export default reducer;
