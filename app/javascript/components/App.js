import React from "react"
import PropTypes from "prop-types"
import Greetings from './Greetings'

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Greetings />}></Route>
        </Routes>
      </React.Fragment>
    );
  }
}

export default App
