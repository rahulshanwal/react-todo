import React from "react";

const { Provider, Consumer } = React.createContext();

export default class DataProvider extends React.Component {
  state = {};

  componentWillMount() {
    const { state } = this.props;
    this.setState({ ...state });
  }

  getStoreState = () => {
    return this.state;
  };

  setStoreState = newState => {
    this.setState({ ...newState });
  };

  render() {
    const { children } = this.props;
    return (
      <Provider
        value={{
          getStoreState: this.getStoreState,
          setStoreState: this.setStoreState
        }}
      >
        {children}
      </Provider>
    );
  }
}

export const withTasks = Component => {
  const WithStoreComponent = props => {
    return (
      <Consumer>{store => <Component {...props} store={store} />}</Consumer>
    );
  };
  return WithStoreComponent;
};
