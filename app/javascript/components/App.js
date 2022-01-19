import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import Greetings from './Greetings';
import Home from './Home';
import store from '../redux/configureStore';
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={<Greetings />}
            ></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
