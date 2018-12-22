import React, { Component } from "react";
import TodoItem from "./TodoItem";
/**
 * TodoList
 */
export class TodoList extends Component {
  // eslint-disable-line react/prefer-stateless-function
  render() {
    const { items } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">to do list</h3>

        {items.map(item=>{
          return(
            <TodoItem key={item.id} title= {item.title}/>
          )
        })}




        <button
          type="button"
          className="bt btn-danger btn-block text-capitalize mt-5"
        >
          {" "}
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;
