import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addLane, updateLane, deleteLane } from '../actions/LaneActions';
import { addNote, deleteAllForLane } from '../actions/NoteActions';
import Editable from './Editable';

const mapDispatchToProps = dispatch => {
  return {
    addLane: lane => dispatch (addLane(lane)),
    updateLane: lane => dispatch (updateLane(lane)),
    deleteLane: laneId => dispatch (deleteLane(laneId)),
    addNote: note => dispatch(addNote(note)),
    deleteAllForLane: laneId => dispatch(deleteAllForLane(laneId))
  };
}

class ConnectedLaneHeader extends Component {
  constructor(props) {
    super(props);    
    this.addNote = this.addNote.bind(this);
    this.editLane = this.editLane.bind(this);    
    this.deleteLane = this.deleteLane.bind(this);    
  }

  addNote(event) {
    var { lane } = this.props;
    event.stopPropagation();
    this.props.addNote({
            id: uuid.v4(),
            task: 'New task',
            laneId: lane.id
          });
  }

  editLane(id, name) {
    var lane = { 
      id: id,
      name: name      
    };
    this.props.updateLane(lane);
  }

  deleteLane(event) {
    event.stopPropagation();
    this.props.deleteAllForLane(this.props.lane.id);
    this.props.deleteLane(this.props.lane.id);
  }

  render() {
    
    var { lane } = this.props;

    return (
      <div className="lane-header">       
        <div className="lane-add-note">
          <button onClick={this.addNote}>+</button>
        </div>
        <Editable className="lane-name"
                id={lane.id} value={lane.name}
                onEdit={this.editLane} />
        
        
        <div className="lane-delete">
           <button onClick={this.deleteLane}>x</button> 
        </div>
      </div>
    );
  }
}

const LaneHeader = connect(null, mapDispatchToProps)(ConnectedLaneHeader);

export default LaneHeader;