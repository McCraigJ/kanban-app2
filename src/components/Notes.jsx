import React, { Component } from 'react';
import { connect } from 'react-redux';
import Note from './Note';
import Editable from './Editable';
import { moveNote, updateNote } from '../actions/NoteActions';


const mapDispatchToProps = dispatch => {
  return {
    moveNote: (sourceId, targetId, targetLaneId) => dispatch (moveNote(sourceId, targetId, targetLaneId)),
    updateNote: note => dispatch (updateNote(note))
  };
}

class ConnectedNotes extends Component {
  constructor(props) {
    super(props);   
    this.moveNote = this.moveNote.bind(this); 
  }

  moveNote(sourceId, targetId, targetLaneId) {
    this.props.moveNote(sourceId, targetId, targetLaneId);
  }

  editNote(id, value) {
    //console.log(id, value);

    var note = this.props.note;
    console.log(note);

    this.props.updateNote(sourceId, targetId, targetLaneId);
  }

  // clickNote(id) {
  //   //event.stopPropagation();
  //   this.props.onNoteClick(this.props.note)
  // }

  render() {

    var notes = this.props.notes;

    return (<ul className="notes">{notes.map(({ id, laneId, editing, task }) =>
          <li key={id}>            
            <Note className="note" id={id} laneid={laneId}
            //onClick={onNoteClick.bind(null, id)}
            //onClick={this.clickNote.bind(null, id)}
            //onMove={this.moveNote}
            >                  
             
              <Editable
                className="editable"
                //editing={false} // editing}
                value={task}
                onEdit={this.editNote.bind(null, id)} 
              />
            {/* <button
              className="delete"<Editable
                className="editable"
                editing={editing}
                value={task}
                //onEdit={onEdit.bind(null, id)} 
              />
            {/* <button
              className="delete"
              onClick={onDelete.bind(null, id)}>x</button> */}
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