const initialState = { greetings: [{ id: 1, greet: 'Hello' }] };
const GET_GREETINGS_REQUEST = 'GET_GREETINGS_REQUEST';

export const getThings = () => {
  console.log('getThings() Action!!');
  return (dispatch) => {
    return fetch('http://localhost:3000/v1/greetings.json')
      .then((response) => response.json())
      .then((json) => dispatch(getGreetingsSuccess(json)))
      .catch((error) => console.log(error));
  };
};

export const getGreetingsSuccess = (json) => {
  return {
    type: GET_GREETINGS_REQUEST,
    json,
  };
};

export const greetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS_REQUEST:
      return action.json;
    default:
      return state;
  }
};
