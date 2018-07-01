import React from 'react';
import Note from './Note';
import Editable from './Editable';
import NoteActions from '../actions/NoteActions';

const Notes = ({ notes,
  onNoteClick = () => { },
  onEdit = () => { },
  onDelete = () => { } }) => (

    <ul className="notes">{notes.map(({ id, laneId, editing, task }) =>
      <li key={id}>
        <Note className="note" id={id} laneid={laneId}
        onClick={onNoteClick.bind(null, id)}
        onMove={NoteActions.move}>        
        <Editable
          className="editable"
          editing={editing}
          value={task}
          onEdit={onEdit.bind(null, id)} />
        <button
          className="delete"
          onClick={onDelete.bind(null, id)}>x</button>
      </Note>
      </li>
    )}</ul>
  );

  export default Notes;