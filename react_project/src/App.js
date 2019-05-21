import React ,{Component} from 'react';
import Todos from './components/Todos';
import Header from './components/layout/header';
import AddTodo from './components/AddTodo'
import {BrowserRouter as Router ,Route}  from 'react-router-dom'
import About from './components/About';
import './App.css';
import uuid from 'uuid';
class App extends Component{
  state = {
    todos : [
      {
        id :uuid.v4() ,
        title : "Sample Task 1",
        completed : false
      },
      {
        id : uuid.v4(),
        title : "Sample Task 2",
        completed : false
      },
      {
        id : uuid.v4(),
        title : "Sample Task 3",
        completed : false
      }
    ]
  }
  markComplete = (id) => {
    this.setState({todos : this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({todos : [...this.state.todos.filter(todo => todo.id !== id
    )]
    })
  }

  addTodo = (title) =>{
    const newTodo = {
      id : uuid.v4(),
      title : title,
      completed : false
    }
    this.setState({todos:[...this.state.todos,newTodo]});
  }

  render(){
  return (
    <Router>
    <div className = "container">
    <Header />
    <Route exact path = "/" render = {props =>(
      <React.Fragment>
      <AddTodo addTodo = {this.addTodo}/>
      <Todos todos = {this.state.todos} markComplete = {this.markComplete}  delTodo = {this.delTodo} />
      </React.Fragment>
    )} />

    <Route path = "/about" component = {About} />
        </div>

    </Router>
  );
}
}

export default App;
