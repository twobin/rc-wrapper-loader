import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { CardScriptWrapper } from '@ali/remote-component';

class MyCard extends React.Component {
  render() {
    return (
      <div className="remoteComponent">
        <div className="header">
          <p className="test">example: This is a demo!</p>
        </div>
      </div>
    );
  }
}

export default MyCard;

// ReactDOM.render(<MyCard />, document.getElementById('app'));
