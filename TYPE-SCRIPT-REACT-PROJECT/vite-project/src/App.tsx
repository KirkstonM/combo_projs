import React, { useState } from 'react'
import './App.css'
import InputField from './components/InputField/InputField';
import { modalProps } from './model';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<modalProps[]>([]);

  const addItem = (e : React.FormEvent) => {
    e.preventDefault();
  }
  
  return (
    <div className='app'>
      <span> TODO </span>

      <InputField todo={todo} setTodo={setTodo} addItem={addItem}/>
    </div>
  )
};

export default App; 


 