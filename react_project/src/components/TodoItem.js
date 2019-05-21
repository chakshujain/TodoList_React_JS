import React ,{Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component{
  getStyle = () => {
    return {
      background : '#f4f4f4',
      padding : '10px',
      borderBottom : '1px',
      textDecoration : this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  render(){
    const { id, title} = this.props.todo
return(
<div style = {this.getStyle()}>


  <p>
  <input type = "checkbox" onChange = {this.props.markComplete.bind(this,id)}></input>{ '  '}
  {title}
  <button onClick = {this.props.delTodo.bind(this,id)} style = {getStyle}> </button>
  </p>
</div>
);
}
}


//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
}

const getStyle = {
  background : 'grey',
  color : 'black',
  padding : '10px 15px',
  border : 'none',
  borderRadius : '50%',
  cursor : 'pointer',
  float : 'right'
}

export default TodoItem;
