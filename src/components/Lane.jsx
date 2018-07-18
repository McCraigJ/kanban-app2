import React, { Component } from 'react';
import {compose} from 'redux';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';
import ItemTypes from '../constants/itemTypes';

import { moveNote } from '../actions/NoteActions';

import Notes from './Notes';
import LaneHeader from './LaneHeader';

const laneTarget = {
  hover(targetProps, monitor) {
    const targetId = null;
    const sourceProps = monitor.getItem();
    const sourceId = sourceProps.id;
    const targetLaneId = targetProps.lane.id;
    if (targetProps.notes.length === 0) {
      console.log(sourceId, targetId, targetLaneId);
      targetProps.moveNote({sourceId, targetId, targetLaneId});
    }    
  }
};

const mapStateToProps = (state, props) => {
  return {
    notes: state.notes.filter(note => note.laneId === props.lane.id)
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
  }  

  render() {

    const {connectDropTarget, isDragging,
      onMove, id,  ...props} = this.props;

    return connectDropTarget(<div className={this.props.className} key={this.props.lane.id} lane={this.props.lane}>  
       <LaneHeader lane={this.props.lane} />
       <Notes notes={this.props.notes} /> 
     </div>
    );
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  DropTarget(ItemTypes.NOTE, laneTarget, (connect) => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Lane);
