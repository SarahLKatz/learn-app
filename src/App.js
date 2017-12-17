import React, { Component } from 'react';
import {HelloWorld, NameInput } from './components';
import {connect} from 'react-redux';
import {resetName} from './store';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HelloWorld name={this.props.name}/>
        {this.props.name === 'Anonymous User' && <NameInput />}
        {this.props.name !== 'Anonymous User' && <button onClick={this.props.notMe}> I am not {this.props.name} </button>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    notMe: () => dispatch(resetName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
