import React from "react"
import PropTypes from "prop-types"

const defaultState = {
  currentCount: 2,
  incrementCounter: () => {},
}

const CounterContext = React.createContext(defaultState)

class CounterProvider extends React.Component {
  state = {
    currentCount: defaultState.currentCount,
  }

  incrementCounter = () => {
    this.setState({
      currentCount: this.state.currentCount + 1,
    })
  }

  render() {
    const { children } = this.props
    const { currentCount } = this.state
    return (
      <CounterContext.Provider
        value={{
          currentCount,
          incrementCounter: this.incrementCounter,
        }}
      >
        {children}
      </CounterContext.Provider>
    )
  }
}

CounterContext.propTypes = {
  currentCount: PropTypes.number,
}
export default CounterContext

export { CounterProvider }
