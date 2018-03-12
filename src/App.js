import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import Assignment from './Assignment/Assignment';
import CharComponent from './CharComponent/CharComponent';
// import Radium, {StyleRoot} from 'radium';
class App extends Component {
  state = {
    persons: [
        {id: '343', name: 'Uyanga', age: 4},
        {id: '351', name: 'Kelly', age: 9},
        {id: '331', name: 'Timmy', age: 12}
        ],
        showPersons: false,
      assignmentInput: ''
  };


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{return p.id===id});

    const person = {
    ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({
      persons: persons
    })
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: "Uyanga", age: 10},
        {name: newName, age: 9}
      ]
    })
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  };

  getStringLength =(event) => {
      this.setState({assignmentInput: event.target.value})
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    console.log(persons)
    this.setState({persons: persons})
  };

  deleteInputLetter = (letterIndex) => {
      const inputStringArr = this.state.assignmentInput.split('');
      inputStringArr.splice(letterIndex, 1);
      this.setState({assignmentInput: inputStringArr.join('')})
  }
  render(){
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
        <div className='PersonContainer'>
            {this.state.persons.map((person,index)=>{
                return <Person click={()=>this.deletePersonHandler(index)}
                    name={person.name} age={person.age} key={person.id}
                    changed={(event)=>this.nameChangedHandler(event, person.id)}/>
            })}
        </div>
      );
    }

    style.backgroundColor = 'red';

    const letters = this.state.assignmentInput.split('').map((l, index)=>{
                return <CharComponent letter={l} key={index} click={()=>this.deleteInputLetter(index)}/>
        });

    const assignmentInput = (
        <div>
         <Assignment change={this.getStringLength} length={this.state.assignmentInput.length} val={this.state.assignmentInput}/>
        </div>
    );

    const classes = [];
    if(this.state.persons.length<=2){
      classes.push('red');
    }
    if(this.state.persons.length<=1){
      classes.push('bold');
    }
    return (
      <div className="App">
        <h1 className={classes.join(' ')}>Hi, I am react app></h1>
        <button style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
       {persons}
        {assignmentInput}
          {letters}
      </div>
      );   
  }
}

export default App;
