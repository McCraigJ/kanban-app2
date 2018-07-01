import React from 'react';
import {compose} from 'redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';
import connect from '../libs/connect';
import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const Lane = ({
  connectDropTarget, 
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

  return connectDropTarget (
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

const noteTarget = {
  hover(targetProps, monitor) {
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;

    // If the target lane doesn't have notes,
    // attach the note to it.
    //
    // `attachToLane` performs necessarly
    // cleanup by default and it guarantees
    // a note can belong only to a single lane
    // at a time.
     if(!targetProps.lane.notes.length) {
       NoteActions.move({
         sourceId: sourceId,
         targetId: null,
         targetLaneId: targetProps.lane.id        
        }
       );
     }
  }
};

function selectNotesByLaneId(allNotes, laneId) { 
  return allNotes.filter(note => note.laneId === laneId);
}

export default compose(
  DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  })),
  connect(({notes}) => ({
    notes
  }), {
    NoteActions,
    LaneActions
  })
)(Lane)