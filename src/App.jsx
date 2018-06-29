import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';
// import Notes from './components/Notes';
import connect from './libs/connect';
//import NoteActions from './actions/NoteActions';

import Lanes from './components/Lanes';
import LaneActions from './actions/LaneActions';




const App = ({LaneActions, lanes}) => {
  const addLane = () => {
    LaneActions.create({
      id: uuid.v4(),
      name: 'New lane'
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to Kanban</h1>
      </header>      
      <div>
        <button className="add-lane" onClick={addLane}>+</button>
        <Lanes lanes={lanes} />
      </div>
    </div>
  );
};

export default connect(({lanes}) => ({
  lanes
}), {
  LaneActions
})(App)

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