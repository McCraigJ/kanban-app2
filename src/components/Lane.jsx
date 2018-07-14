import React, { Component } from 'react';
import { connect } from 'react-redux';
import {DropTarget} from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import NoteActions from '../actions/NoteActions';
import LaneActions from '../actions/LaneActions';
import Notes from './Notes';
import LaneHeader from './LaneHeader';

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

class ConnectedLane extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
    return (<div className={this.props.className} key={this.props.lane.id} lane={this.props.lane}>  
       <LaneHeader lane={this.props.lane} />
       <Notes        
         notes={selectNotesByLaneId(this.props.notes, this.props.lane.id)}
         //onNoteClick={activateNoteEdit}
         //onEdit={editNote}
         //onDelete={deleteNote} 
        />
     </div>
    );
  }

}

function selectNotesByLaneId(allNotes, laneId) {   
  return allNotes.filter(note => note.laneId === laneId);
}

const Lane = connect(mapStateToProps, null)(ConnectedLane);

export default Lane;

// const Lane = ({
//   connectDropTarget, 
//   lane, notes, LaneActions, NoteActions, ...props
// }) => {
//   const editNote = (id, task) => {
//     NoteActions.update({ id, task, editing: false });
//   };

//   const deleteNote = (noteId, e) => {
//     e.stopPropagation();
//     NoteActions.delete(noteId);
//   };
//   const activateNoteEdit = id => {
//     NoteActions.update({ id, editing: true });
//   };

//   return connectDropTarget (
//     <div {...props}>  
//       <LaneHeader lane={lane} />    
//       <Notes        
//         notes={selectNotesByLaneId(notes, lane.id)}
//         onNoteClick={activateNoteEdit}
//         onEdit={editNote}
//         onDelete={deleteNote} />
//     </div>
//   );
// };

// const noteTarget = {
//   hover(targetProps, monitor) {
//     const sourceProps = monitor.getItem();
//     const sourceId = sourceProps.id;

//     // If the target lane doesn't have notes,
//     // attach the note to it.
//     //
//     // `attachToLane` performs necessarly
//     // cleanup by default and it guarantees
//     // a note can belong only to a single lane
//     // at a time.
//      if(!targetProps.lane.notes.length) {
//        NoteActions.move({
//          sourceId: sourceId,
//          targetId: null,
//          targetLaneId: targetProps.lane.id        
//         }
//        );
//      }
//   }
// };

// function selectNotesByLaneId(allNotes, laneId) { 
//   return allNotes.filter(note => note.laneId === laneId);
// }

// export default compose(
//   DropTarget(ItemTypes.NOTE, noteTarget, connect => ({
//     connectDropTarget: connect.dropTarget()
//   })),
//   connect(({notes}) => ({
//     notes
//   }), {
//     NoteActions,
//     LaneActions
//   })
// )(Lane)