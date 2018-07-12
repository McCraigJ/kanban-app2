// //import uuid from 'uuid';

// import NoteActions from '../actions/NoteActions';

// export default class NoteStore {
//   constructor() {
//     this.bindActions(NoteActions);
//     this.notes = [];
//   }

//   create(note) {
//     this.setState({
//       notes: this.notes.concat(note)
//     });
//   }

//   update(updatedNote) {    
//     this.setState({
//       notes: this.notes.map(note => {
//         if (note.id === updatedNote.id) {
//           return Object.assign({}, note, updatedNote);          
//         }
//         return note;
//       })
//     });
//   }

//   delete(id) {
//     this.setState({
//       notes: this.notes.filter(note => note.id !== id)
//     });
//   }

//   deleteAllForLane(laneId) {
//     this.setState({
//       notes: this.notes.filter(note => note.laneId !== laneId)
//     })
//   }

//   //move the source note before the target note and update the lane of the source
//   move({sourceId, targetId, targetLaneId}) {

    
//     const movingToEmptyLane = targetId === null;

//     // because immutability
//     var notes = this.notes;

//     // update the source's lane and find it's index
//     var sourceIndex = 0;
//     var found = false;
//     notes.map(note => {
//       if (note.id === sourceId) {
//         note.laneId = targetLaneId;
//         found = true;
//       }
//       if (!found) {
//         sourceIndex++;
//       }      
//       return note;
//     })    

//     if (!movingToEmptyLane) {
//       // find the target note's index position in the array
//       var tarNoteIndex = notes.map(function(e) { return e.id; }).indexOf(targetId);
//       // splice out the source and splice it back in at the appropriate array position
//       notes.splice(tarNoteIndex, 0, notes.splice(sourceIndex, 1)[0]);
//     }
    

//     this.setState({
//       notes: notes
//     });

//   }
// }