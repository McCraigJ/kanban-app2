import React from 'react';

const Note = ({children, ...props}) => (
  <div {...props}>
    {children}
  </div>
  // <div>
  //   <span>{task}</span>
  //   <button onClick={onDelete}>x</button>
  // </div>
);

export default Note;