import React, { Component } from 'react';

import classnames from 'classnames';


class Editable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };
  }

  clickNote = (e) => {
    e.stopPropagation();
    this.setState({editing: true});
  }

  checkEnter = (e) => {
    if (e.key === 'Enter') {
      this.finishEdit(e);
    }
  }
  finishEdit = (e) => {
    const value = e.target.value;

    this.setState({editing: false});    

    if (this.props.onEdit) {
      this.props.onEdit(value);
    }
  }

  render() {
    var { editing } = this.state;
   
    const {className, value, onEdit, ...props} = this.props;

    if (editing) {

      return (<input 
              type="text" 
              className={classnames('edit', className)}
              autoFocus={true} 
              defaultValue={value}
              onBlur={this.finishEdit}
              onKeyPress={this.checkEnter}      
              {...props} />);
    } else {
      return <span className={classnames('value', className)} onClick={this.clickNote} { ...props}>{value}</span>;
    }
  }

}

// class Edit extends React.Component {
//   render() {
//     const {className, value, onEdit, ...props} = this.props;

//     return <input 
//       type="text" 
//       className={classnames('edit', className)}
//       autoFocus={true} 
//       defaultValue={value}
//       onBlur={this.finishEdit}
//       onKeyPress={this.checkEnter}      
//       {...props} />;
//   }
//   checkEnter = (e) => {
//     if (e.key === 'Enter') {
//       this.finishEdit(e);
//     }
//   }
//   finishEdit = (e) => {
//     const value = e.target.value;

//     if (this.props.onEdit) {
//       this.props.onEdit(value);
//     }
//   }
// }

export default Editable;