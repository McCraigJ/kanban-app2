import React, { Component } from 'react';
import uuid from 'uuid';
import logo from './logo.svg';
import './App.css';
import Notes from './components/Notes';
import connect from './libs/connect';

import NoteActions from './actions/NoteActions';


class App extends Component {
  
  render() {

    const { notes } = this.props;    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="notes-container">          
          <button className="add-note" onClick={this.addNote}>+</button>
          <Notes 
            notes={notes}
            onNoteClick={this.activateNoteEdit}
            onEdit={this.editNote}
            onDelete={this.deleteNote} />
        </div>
      </div>
    );
  }

  addNote = () => {
    // this.setState({
    //   notes: this.state.notes.concat([{
    //     id: uuid.v4(),
    //     task: 'New task'
    //   }])
    // });    
    this.props.NoteActions.create({
      id: uuid.v4(),
      task: 'New task'
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    });
  }

  activateNoteEdit = (id) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = true;
        }
        return note;
      })
    });
  }
  
  editNote = (id, task) => {
    this.setState({
      notes: this.state.notes.map(note => {
        if (note.id === id) {
          note.editing = false;
          note.task = task;
        }
        return note;
      })
    });
  }
}

//export default App;

export default connect(({notes}) => ({
  notes
}), {
  NoteActions
})(App)