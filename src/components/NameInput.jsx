import React from 'react';
import {connect} from 'react-redux';
import {saveName} from '../store';

const NameInput = (props) => {
  return (
    <form name="inputName" onSubmit={(e) => props.saveNameToStore(e)}>
      <h3>What is your name?</h3>
      <input name="name" type="text" />
      <button type="submit">Submit!</button>
    </form>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveNameToStore: (e) => {
      e.preventDefault();
      dispatch(saveName(e.target.name.value))
      e.target.name.value = '';
    }
  }
}

export default connect(null, mapDispatchToProps)(NameInput);