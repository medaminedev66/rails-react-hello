const initialState = [];
const FETCH_DATA = 'countries/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  const response = await fetch('http://localhost:3000/v1/greetings');
  const data = await response.json();
  dispatch({
    type: FETCH_DATA,
    payload: data,
  });
};

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};
