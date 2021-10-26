import React from "react";
import { connect } from "react-redux";
import { checkAuth } from "../actions/index";

function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {

    render() {
      return <div></div>
    }
  }

  const mapStateToProps = state => {
    return {
        loggedIn: state.authReducer.loggedIn,
        authChecked: state.authReducer.authChecked,
        currentUser: state.authReducer.currentUser
    };
  };

  const mapDispatchToProps = dispatch => {
    return {
      checkAuth: () => dispatch(checkAuth())
    };
  };

  return connect(mapStateToProps, mapDispatchToProps)(Wrapper);
}

export default withAuth;