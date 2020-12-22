import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './table.css';

class Onlinetable extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.jtype}
          </td>
          <td>
            {this.props.obj.material}
          </td>
          <td>
            {this.props.obj.price}
          </td>
         
          <td>
          <button  onClick= '/' className="btn btn-danger"> Add To Cart</button>
          </td>
          <td>
            <button  onClick= '/' className="btn btn-danger">Make Own Jewell</button>
          </td>
        </tr>
    );
  }
}

export default Onlinetable;