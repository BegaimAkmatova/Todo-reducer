import React,{useState} from 'react';

const AddToDo = (props) => {
    const [name,setName] = useState('');

    const inputChangeHandler = (e) => {
        setName(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        props.onSaveTodo(name);
        setName('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input 
                onChange={inputChangeHandler}
                value={name} 
            />
            <button type='submit'>Add todo</button>
        </form>
    )
}
export default AddToDo;