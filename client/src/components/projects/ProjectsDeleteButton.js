import React, { Component } from 'react';

import * as actions from 'actions/indexActions';
import store from 'reduxFiles/store';

export default function ProjectsDeleteButton(props){
  function handleClick() {
    store.dispatch(actions.deleteProject(props.projectId));
  }
  
  return (
    <button onClick={() => handleClick()}>X</button>
  );
}