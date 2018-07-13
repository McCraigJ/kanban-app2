import React from 'react';
import uuid from 'uuid';
import connect from 'react-redux';
import { addLane, updateLane, deleteLane } from '../actions/LaneActions';


// import connect from '../libs/connect';
// import NoteActions from '../actions/NoteActions';
// import LaneActions from '../actions/LaneActions';

import Editable from './Editable';

const mapDispatchToProps = dispatch => {
  return {
    addLane: lane => dispatch (addLane(lane)),
    updateLane: lane => dispatch (updateLane(lane)),
    deleteLane: laneId => dispatch (deleteLane(laneId))
  };
}

class ConnectedLane extends Component {
  constructor() {
    super();
  }

  activateLaneEdit(event) {
    this.props.updateLane()
  }

  render() {
    <div className="lane-header" onClick={activateLaneEdit} {...props}>
      <div className="lane-add-note">
        <button onClick={addNote}>+</button>
      </div>
      <Editable className="lane-name" editing={lane.editing} value={lane.name} onEdit={editName} />
      <div className="lane-delete">
        <button onClick={deleteLane}>x</button>
      </div>
    </div>
  }

}


export default connect(() => ({}), {
  NoteActions,
  LaneActions
})(({ lane, LaneActions, NoteActions, ...props }) => {
  const addNote = e => {
    e.stopPropagation();

    const noteId = uuid.v4();
    
    NoteActions.create({
      id: noteId,
      task: 'New task',
      laneId: lane.id
    });
  };

  const deleteLane = e => {
    e.stopPropagation();
    NoteActions.deleteAllForLane(lane.id);
    LaneActions.delete(lane.id);
  };

  const activateLaneEdit = () => {
    LaneActions.update({
      id: lane.id,
      editing: true
    });
  };
  const editName = name => {
    LaneActions.update({
      id: lane.id,
      name,
      editing: false
    });
  };

  return (
    
  );
})