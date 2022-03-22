import logo from './logo.svg';
import './App.css';
import EventBind from './components/EventBind'
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from'./components/Message';
import Counter from './components/Counter'
import FunctionalClick from './components/FunctionalClick';
import ClassClick from './components/ClassClick';
import { Component } from 'react';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import Form from './components/Form';

class App extends Component{
  render(){
    return(
    <div className='App'>
      <Form/>
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Good" heroName="Government"/> */}
      {/* <Hello name="sachin"  heroName="sachin">
      <h1>Hello Sachin</h1>
      </Hello> */}
      {/* <Hello name="dhoni"  heroName="dhoni">
      <h1>Dhoni is the hero of indian cricket</h1>
      </Hello> */}
      {/* <Hello name="kohli"  heroName="kohli">
      <button>Accept</button>
      </Hello> */}
      {/* <Welcome name="dhoni"  heroName="dhoni"></Welcome> */}
      {/* <Welcome name="kohli"  heroName="kohli"></Welcome> */}
      {/* <Welcome name="sachin"  heroName="sachin"></Welcome> */}
      {/* <Welcome name="dhoni"  heroName="dhoni"></Welcome> */}
      {/* <FunctionalClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      {/* <UserGreetings/> */}
      {/* <NameList/> */}
       {/* <Stylesheet primar={false} /> */}
       {/* <Inline/> */}
      </div>
    );   
  }
}

export default App
