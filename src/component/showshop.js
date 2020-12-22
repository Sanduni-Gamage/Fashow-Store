import React, { Component } from 'react';

import axios from 'axios';
import TableRow from './TableRow'
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import './table.css';

export default class Show extends Component {

    constructor(props) {
        super(props);
        this.state = {shopstore: []};
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
      tabRow(){
        return this.state.shopstore.map(function(object, i){
            return <TableRow obj={object} key={i} />;
        });
      }


      //Report generation part starting from here
    exportPDF = () => {

        console.log( "SSSSSSSSSS" )
    
    
    
    
    
        const unit = "pt";
    
        const size = "A3"; // Use A1, A2, A3 or A4
    
        const orientation = "landscape"; // portrait or landscape
    
        const marginLeft = 40;
    
        const doc = new jsPDF( orientation, unit, size );
  
        const title = "Fashow Jewell Store Details Report ";
  
      const headers = [["Item ID","Jewell Type","Material","Price","Stock","Description"]];
  
      const stores = this.state.shopstore.map(
  
        store=>[
  
          store.itemid,
  
          store.jtype,
  
          store.material,
  
          store.price,
  
          store.stock,

          store.description

          ]
  
      );
  
      let content = {
  
        startY: 50,
  
        head: headers,
  
        body: stores
  
    };
  
    doc.setFontSize( 20 );
  
    doc.text( title, marginLeft, 40 );
  
    require('jspdf-autotable');                                                       
  
    doc.autoTable( content );
  
    doc.save( "storeList.pdf" )
  
  }
    render() {
        return (
<>
<div className="container">
           
            <div>
            <h3 align="center">Shop Store</h3>
            <Button
        variant="contained"
        color="primary"
        size="small"
        
        marginRight="-130px"
        marginTop="-180px"
        onClick={() => this.exportPDF()}
        startIcon={<SaveIcon />}
      >
      Save
      </Button>
      </div>
            <table className="table table-striped" style={{ marginTop: 120 ,width:"100%" }}>
              <thead>
                <tr>
                  <th>ItemID</th>
                  <th>Jewell Type</th>
                  <th>Material</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th>Description</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>
              <tbody>
                { this.tabRow() }
              </tbody>
            </table>
          </div>
         
          </>
        )
    }
}