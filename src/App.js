import React,{ useReducer, useEffect} from 'react';
import Todos from './components/Todo/Todos'
import './App.css';
import AddToDo from './components/Todo/AddToDo';

const initializer = () => JSON.parse(localStorage.getItem('items')) || {
    name:'',
    items: [],
    completed: {}
}

const todoReducer = (prevState, action) => {
  if(action.type === 'SAVE_TODO'){
    return {
      ...prevState,
      name: action.value,
      items: [...prevState.items, {
        name: action.value,
        id: Math.random().toString(),
      }]
    }
  }
  
  if(action.type === 'COMPLETE_TODO'){
    return {
      ...prevState,
      completed: {
        ...prevState.completed,
        [action.index]: !prevState.completed[action.index]
      }
    }
  }

  return {
    name:'',
    items: [],
    completed: {}
  }
}

function App() {
    const [todoState, dispatchTodo] = useReducer(todoReducer, {
      name:'',
      items: [],
      completed: {}
    }, initializer);

    useEffect(() => {
      localStorage.setItem('items', JSON.stringify(todoState))
    },[todoState])
  
  const saveTodo = (name) => {
    dispatchTodo({type: 'SAVE_TODO', value: name})
  }

  const handleCheck = (index) => {
    dispatchTodo({type:'COMPLETE_TODO', index: [index]})
  }

  return (
    <>
      <AddToDo onSaveTodo={saveTodo}/>
      <Todos todos={todoState} onHandleCheck={handleCheck}/>
    </>
  );
}

export default App;