import React from 'react';
import Card from '../UI/Card';
import classes from './Todos.module.css'

const Todos = (props) => {
    return(
        <Card className={classes.todos}>
            <ul>
                {props.todos.items.map((item, index) => (
                    <li
                        style={{
                            textDecoration: props.todos.completed[index] ? 'line-through' : ''
                        }}
                        onClick={() => {props.onHandleCheck(index)}} 
                        key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </Card>
    )
}
export default Todos;