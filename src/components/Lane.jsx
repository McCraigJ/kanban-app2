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

class Lane extends Component {
  constructor(props) {
    super(props);
  }  

  render() {
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

export default connect(mapStateToProps, null)(Lane);