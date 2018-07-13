import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { addLane } from './actions/LaneActions';

//import {compose} from 'redux';

import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import logo from './logo.svg';
import './App.css';
import Lanes from './components/Lanes';
import LaneActions from './actions/LaneActions';

const mapDispatchToProps = dispatch => {
  return {
    addLane: lane => dispatch(addLane(lane))
  };
};

const mapStateToProps = state => {
  return { lanes: state.lanes };
};

class ConnectedApp extends Component {

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

const App = connect(mapStateToProps, mapDispatchToProps)(ConnectedApp);

export default App;

// // class App extends Component {

// //   render() {

// //     const { notes } = this.props;    

// //     return (
// //       <div className="App">
// //         <header className="App-header">
// //           <img src={logo} className="App-logo" alt="logo" />
// //           <h1 className="App-title">Welcome to Kanban</h1>
// //         </header>
// //         <p className="App-intro">
// //           To get started, edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <div className="notes-container">          
// //           <button className="add-note" onClick={this.addNote}>+</button>
// //           <Notes 
// //             notes={notes}
// //             onNoteClick={this.activateNoteEdit}
// //             onEdit={this.editNote}
// //             onDelete={this.deleteNote} />
// //         </div>
// //       </div>
// //     );
// //   }

//   addNote = () => { 
//     this.props.NoteActions.create({
//       id: uuid.v4(),
//       task: 'New task'
//     });
//   }

//   deleteNote = (id, e) => {
//     e.stopPropagation();
//     this.props.NoteActions.delete(id);
//   }

//   activateNoteEdit = (id) => {
//     this.props.NoteActions.update({id, editing: true});    
//   }
  
//   editNote = (id, task) => {
//     this.props.NoteActions.update({id, editing: false, task: task});       
//   }
// }

//export default App;

// export default connect(({notes}) => ({
//   notes
// }), {
//   NoteActions
// })(App)