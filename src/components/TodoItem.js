import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            paddig: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration : this.props.todo.completed?'line-through':'none'
        }
        
    }
    
    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div  style={this.getStyle()}>
                <p>
                <input type="checkbox" checked={completed} onChange={this.props.markComplete.bind(this, id)}></input>
                { title }
                <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
                </p>                
            </div>
        )
    }
}


// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    paddig: '5px 10px',
    borderRadius:'50%',
    cursor: 'pointer',
    float: 'right'

}


export default TodoItem


