import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';
import { moveNote, updateNote, deleteNote } from '../actions/NoteActions';


const mapDispatchToProps = dispatch => {
  return {
    moveNote: (sourceId, targetId, targetLaneId) => dispatch (moveNote(sourceId, targetId, targetLaneId)),
    updateNote: note => dispatch (updateNote(note)),
    deleteNote: noteId => dispatch(deleteNote(noteId))
  };
}

class ConnectedNotes extends Component {
  constructor(props) {
    super(props);   
    this.moveNote = this.moveNote.bind(this);     
    this.editNote = this.editNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  moveNote(sourceId, targetId, targetLaneId) {
    this.props.moveNote(sourceId, targetId, targetLaneId);
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
          <li key={id}>            
            <Note className="note" id={id} laneid={laneId}
            //onMove={this.moveNote}
            >                  
             
              <Editable className="editable"
                id={id} laneid={laneId} value={task}
                onEdit={this.editNote} 
              />
            
             <button
              className="delete"
              onClick={this.deleteNote.bind(null, id)}>x</button> 
            </Note>
          </li>
        )}</ul>)
  }
}

const Notes = connect(null, mapDispatchToProps)(ConnectedNotes);

export default Notes;

// const Notes = ({ notes,
//   onNoteClick = () => { },
//   onEdit = () => { },
//   onDelete = () => { } }) => (

//     <ul className="notes">{notes.map(({ id, laneId, editing, task }) =>
//       <li key={id}>
//         <Note className="note" id={id} laneid={laneId}
//         onClick={onNoteClick.bind(null, id)}
//         onMove={this.moveNote}>        
//         <Editable
//           className="editable"
//           editing={editing}
//           value={task}
//           onEdit={onEdit.bind(null, id)} />
//         <button
//           className="delete"
//           onClick={onDelete.bind(null, id)}>x</button>
//       </Note>
//       </li>
//     )}</ul>
//   );

//   export default Notes;