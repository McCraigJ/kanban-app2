//var notes = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 

var notes = [ { note: { id: 1, task: 'note1'}, lane: 1}, { note: { id: 2, task: 'note2'}, lane: 1}, { note: { id: 3, task: 'note3'}, lane: 1}];
console.log(notes);


var removed = [
        ...notes.slice(0, 2),
        ...notes.slice(3)
    ];

//console.log(removed);

function moveAfter(source, target) {

  var sourceIndex = 0;
  var found = false;

  // find index of source
  notes.map(note => {
    if (note === source) {
      //note.laneId = targetLaneId;
      found = true;
    }
    if (!found) {
      sourceIndex++;
    }
    return note;
  });
  if (!found)  {
      return;
  }

  var tarNoteIndex = notes.map(function(e) { return e; }).indexOf(target);

  console.log(sourceIndex, tarNoteIndex);

  var arrayWithoutSource = [...notes.slice(0, sourceIndex), ...notes.slice(sourceIndex + 1)];
  var sourceItem = notes[sourceIndex];

  console.log(arrayWithoutSource);

  //insert removed after target

  var updatedNotes = [...arrayWithoutSource.slice(0, tarNoteIndex), sourceItem, ...arrayWithoutSource.slice(tarNoteIndex)];

  console.log(updatedNotes);

  //var updatedNotes2 = 

}

function updateItem(sourceId, newLaneId) {  
  notes.map(note => {
    
    if (note.note.id === sourceId) {
      //console.log(note.lane);
      return { ...note, lane: newLaneId };
     //return { ...note, ...newValue} 
     //console.log(Object.assign({}, note, newValue));
     //return Object.assign({}, note, note.lane);
    }    
    return note;
  });
  //console.log(notes);
}

//moveAfter('ant', 'elephant');
updateItem(1, 2);