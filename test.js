var notes = ['ant', 'bison', 'camel', 'duck', 'elephant'];
 console.log(notes);

// console.log(notes.slice(2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(notes.slice(2, 4));
// // expected output: Array ["camel", "duck"]

// console.log(notes.slice(1, 5));
// // expected output: Array ["bison", "camel", "duck", "elephant"]


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

}

moveAfter('ant', 'elephant');