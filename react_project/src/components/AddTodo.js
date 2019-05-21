import React ,{Component} from 'react';

class AddTodo extends Component{
  state = {
    title: ''
  }

onSubmit = (e) =>{
  e.preventDefault();
  this.props.addTodo(this.state.title);
  this.setState({title : ''})
}

onChange = (e) => this.setState({title : e.target.value})

  render(){

    return(

      <form onSubmit = {this.onSubmit} className = "form-group">

      <input type = "text"
      name = "title"
      placeholder = "Add todo here.."
      style = {{flex: '10',padding : '5px'}}
      className = "form-control"
      value = {this.state.title}
      onChange = {this.onChange}>
      </input>

      <input  type = "submit"
      value = "Submit"
      className = "btn"
      style = {{flex : '1'}}
      >
      </input>

      </form>

    )
  }

}
export default AddTodo;
