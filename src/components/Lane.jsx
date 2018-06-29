import React from 'react';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
  lane, notes, LaneActions, NoteActions, ...props
}) => {
  const editNote = (id, task) => {
    NoteActions.update({ id, task, editing: false });
  };

  const deleteNote = (noteId, e) => {
    e.stopPropagation();
    NoteActions.delete(noteId);
  };
  const activateNoteEdit = id => {
    NoteActions.update({ id, editing: true });
  };

  return (
    <div {...props}>  
      <LaneHeader lane={lane} />    
      <Notes        
        notes={selectNotesByLaneId(notes, lane.id)}
        onNoteClick={activateNoteEdit}
        onEdit={editNote}
        onDelete={deleteNote} />
    </div>
  );
};

function selectNotesByLaneId(allNotes, laneId) { 
  return allNotes.filter(note => note.laneId === laneId);
}

export default connect(
  ({ notes }) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  }
)(Lane)