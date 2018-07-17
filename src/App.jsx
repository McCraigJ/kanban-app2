import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addLane } from './actions/LaneActions';

import {compose} from 'redux';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import logo from './logo.svg';
import './App.css';
import Lanes from './components/Lanes';

const mapDispatchToProps = dispatch => {
  return {
    addLane: lane => dispatch(addLane(lane))
  };
};

const mapStateToProps = state => {
  return { lanes: state.lanes };
};

class App extends Component {

  constructor() {
    super();

    this.handleAddLane = this.handleAddLane.bind(this);
  }
  
  handleAddLane(event) {
    this.props.addLane( {
      id: uuid.v4(),
      name: 'New lane'
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Kanban</h1>
        </header>      
        <div>
          <button className="add-lane" onClick={this.handleAddLane}>+ Add Lane</button>
          <Lanes lanes={this.props.lanes} />
        </div>
      </div>
    );
  }  
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DragDropContext(HTML5Backend)
)(App);
