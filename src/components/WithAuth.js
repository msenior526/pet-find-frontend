import React from "react";

function withAuth(WrappedComponent) {
  class Wrapper extends React.Component {
    render() {
     return <div></div>
    }
  }

  return Wrapper;
}

export default withAuth;