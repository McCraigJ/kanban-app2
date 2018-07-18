import React, { Component } from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

// import NoteActions from '../actions/NoteActions';
// import LaneActions from '../actions/LaneActions';

import { moveNote } from '../actions/NoteActions';

import Notes from './Notes';
import LaneHeader from './LaneHeader';

const laneTarget = {
  hover(targetProps, monitor) {
    const targetId = null; // targetProps.id;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const targetLaneId = targetProps.id;

    if(sourceId !== targetId) {
      targetProps.onMoveNote({sourceId, targetId, targetLaneId});
    }
  }
};

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    moveNote: note => dispatch (moveNote(note))
  };
}

class Lane extends Component {
  constructor(props) {
    super(props);    
    this.onMoveNote = this.onMoveNote.bind(this);
  }  

  onMoveNote({sourceId, targetId, targetLaneId}) {
    //this.props.moveNote({sourceId, targetId, targetLaneId});
    console.log("moved");
  }

  render() {

    const {connectDropTarget, isDragging,
      onMove, id,  ...props} = this.props;


    return (<div className={this.props.className} key={this.props.lane.id} lane={this.props.lane}>  
       <LaneHeader lane={this.props.lane} />
       <Notes notes={selectNotesByLaneId(this.props.notes, this.props.lane.id)} />
     </div>
    );
  }
}

function selectNotesByLaneId(allNotes, laneId) {   
  return allNotes.filter(note => note.laneId === laneId);
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, laneTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Lane);
