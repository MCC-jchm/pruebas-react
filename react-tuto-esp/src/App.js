import React from 'react';
import Footer from './components/Footer'
import VisibleTodoList from './containers/VisibleTodoList';
import AddTodo from './containers/AddTodo';
import './App.css';

class App extends React.Component{

  render(){
    return (
      <div className="App">
      <AddTodo />
    <VisibleTodoList />
    <Footer />
      </div>
    );
  }
}

export default App;
