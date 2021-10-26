import React from "react";
import { connect } from "react-redux";
import { checkAuth } from "../actions/auth";
import Login from "../containers/Login";

function withAuth(WrappedComponent) {
    class Wrapper extends React.Component {
        componentDidMount() {
            this.props.checkAuth();
        }
        
        render() {
            if (!this.props.authChecked) {
                return <h3>LOADING</h3>;
            } else if (!this.props.loggedIn) {
                return (
                    <Login />
                );
            } else {
                return <WrappedComponent {...this.props} />;
            }
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