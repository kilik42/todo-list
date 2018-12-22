import React, { Component } from 'react';

/**
 * TodoItem
 */
export class TodoItem extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
     <li className="list-group-item text-capitalized-flex justify-content-between my-2">
       <h6>title</h6>
       <div className="to-icon">
         <span className="mx-2 text-success">
            <i className="fas fa-pen"></i>
         </span>
         <span className="mx-2 text-danger">
            <i className="fas fa-trash"></i> 
         </span>
       </div>
     </li>
    );
  }
}



export default TodoItem;
