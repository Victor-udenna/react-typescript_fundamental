import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from './components/PersonList';
import {Status} from "./components/Status";
import { Button } from './components/Button';
import { Button2 } from './components/Button2';
import { Button3 } from './components/Button3';
import { Input } from "./components/Input";
import { Style } from './Style';
import { Input2 } from './components/Input2';

function App() {

  const Personname = {
    first: "victor",
    last: "Okwuosa"
  }

  const namelist = [
    {
      first: "bruce",
      last: "wayne"
    }, {
      first: "Micheal",
      last: "wayne"
    }, {
      first: "charles ",
      last: "wayne"
    }
  ]
  return (
    <div className="App">
<Greet name='victor' messageCount={20} isLoggedin={false}/>
<Person name={Personname}/>
<PersonList names={namelist}/>
<Status status='Loading'/>
<Button handlClick={(event)=>{
  console.log("Button clicked", event.target, 2, "Gota")
}}/>

<Button2 HandleClick={()=>{
  alert("button 2")
}}/>

<Button3 handleclick={(event)=>{
  console.log('clicked', event)
}}/>
<div></div>
<Input handleChange={(event)=>{
  console.log(event.target.value);
}}/>
<div></div>

<Input2 Onchange={(e)=>{
console.log(e.target.value)
}}/>

<Style style={{border: '3px solid red', color: 'red', display: "blo"}}/>
    </div>
  );
}

export default App;
