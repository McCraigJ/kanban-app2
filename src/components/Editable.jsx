import React, { Component } from 'react';
import classnames from 'classnames';

class Editable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      editing: false
    };

    this.finishEdit = this.finishEdit.bind(this);
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
      this.props.onEdit(this.props.id, value, this.props.laneid);
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
      return <div className={classnames('value', className)} onClick={this.clickNote} { ...props}>{value}</div>;
    }
  }
}

export default Editable;