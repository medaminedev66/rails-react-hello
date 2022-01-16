import React from "react"
import PropTypes from "prop-types"
class Greetings extends React.Component {
  render () {
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
      </React.Fragment>
    );
  }
}

Greetings.propTypes = {
  greeting: PropTypes.string
};
export default Greetings
