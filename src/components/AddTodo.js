import React, {Component} from 'react';

export default class extends Component {
    render() {
        const {addTodo} = this.props;
        return (
            <div className="inner">
                <form onSubmit={e => {
                    e.preventDefault();
                    if (!this.input.value.trim()) {
                        return
                    }
                    addTodo(this.input.value);
                    this.input.value = ''
                }}>
                    <input type="text" placeholder="React-Redux Todolist" ref={node => {
                        this.input = node
                    }}/>
                    <button type="submit">
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
}
