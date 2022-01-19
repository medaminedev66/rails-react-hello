import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getThings } from '../redux/greetingsReducer';

const Greetings = () => {
  const dispatch = useDispatch();

  const greetings = useSelector((state) => state.greetingsReducer.greetings);
  return (
    <div>
      <button onClick={() => dispatch(getThings())}>
        Get Greetings from the backend
      </button>
      {greetings.map((greet) => {
        return <h1 key={greet.id}>{greet.greet}</h1>;
      })}
    </div>
  );
};

export default Greetings;
