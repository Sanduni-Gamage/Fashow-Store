import React, { Component } from 'react';

import axios from 'axios';
import Onlinetable from './onlinetable';
import './table.css';
import Card from './Card';

export default class Online extends Component {

    constructor(props) {
        super(props);
        this.state = {shopstore: []
        };
      }

      componentDidMount(){
        axios.get('http://localhost:4000/shopstore')
          .then(response => {
            this.setState({ shopstore: response.data });
          })
          .catch(function (error) {
            console.log(error);
          })
      }
      onRow(){
        return this.state.shopstore.map(function(object, i){
            return <Onlinetable obj={object} key={i} />;
        });
      }
    render() {
        return (
            <>
            <div className="container">
            <div>
            <h3 align="center">FASHOW ONLINE JEWELLS</h3>
            <table className="table table-striped" style={{ marginTop: 100 ,alignContent:"center",marginRight:120,width:"100%" }}>
              <thead>
                <tr>
                  <th>ItemID</th>
                  <th>Jewell Type</th>
                  <th>Material</th>
                  <th>Price</th>
                 
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.onRow() }
              </tbody>
            </table>
          </div>
          </div>
          <Card/>
          </>
        )
    }
}