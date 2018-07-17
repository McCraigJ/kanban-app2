import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';
import { moveNote, updateNote, deleteNote } from '../actions/NoteActions';


const mapDispatchToProps = dispatch => {
  return {
    moveNote: note => dispatch (moveNote(note)),
    updateNote: note => dispatch (updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId))
  };
}

class ConnectedNotes extends Component {
  constructor(props) {
    super(props);   
    this.onMoveNote = this.onMoveNote.bind(this);     
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  onMoveNote({sourceId, targetId, targetLaneId}) {
    this.props.moveNote({sourceId, targetId, targetLaneId});
  }

  editNote(id, task, laneId) {    
    var note = { 
      id: id,
      task: task,
      laneId: laneId
    };

    this.props.updateNote(note);
  }

  deleteNote(id) {    
    this.props.deleteNote(id);
  }

  render() {

    var notes = this.props.notes;

    return (<ul className="notes">{notes.map(({ id, laneId, editing, task }) =>
          
            <Note className="note" id={id} laneid={laneId} key={id}
            onMove={this.onMoveNote}
            >                  
             
              <Editable className="editable"
                id={id} laneid={laneId} value={task}
                onEdit={this.editNote} 
              />
            
             <button
              className="delete"
              onClick={this.deleteNote.bind(null, id)}>x</button> 
            </Note>
        )}</ul>)
  }
}

const Notes = connect(null, mapDispatchToProps)(ConnectedNotes);

export default Notes;
