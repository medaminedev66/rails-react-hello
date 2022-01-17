import React from 'react';
import { BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Greetings from './Greetings';
import Home from './Home';
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<Greetings greeting="Hey Hey Hey Hey hey hey hey" />}
          ></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
