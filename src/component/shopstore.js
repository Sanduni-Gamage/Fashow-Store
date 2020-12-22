import React, { Component } from 'react';
import axios from 'axios';
export default class Shop  extends Component {
    constructor(props) {
        super(props);
        this.onChangeid = this.onChangeid.bind(this);
        this.onChangetype = this.onChangetype.bind(this);
        this.onChangematerial = this.onChangematerial.bind(this);
        this.onChangestock = this.onChangestock.bind(this);
        this.onChangeprice = this.onChangeprice.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            id: '',
            material: '',
            stock:'',
            price:'',
            description:'',
            jtype:'',

            idError: "",
            materiaError: "",
            stockError: "",
            priceError: "",
            descriptionError: "",
            jtypeError: ""


        };
    }
    onChangeid(e) {
      this.setState({
        id: e.target.value
      })
    }
    onChangetype(e) {
        this.setState({
          jtype: e.target.value
        })
      }
    onChangematerial(e) {
      this.setState({
        material: e.target.value
      })  
    }
    onChangestock(e) {
        this.setState({
          stock: e.target.value
        })
    }
    onChangeprice(e) {
      this.setState({
        price: e.target.value
      })
    }
    
   
    onChangedescription(e) {
        this.setState({
        description: e.target.value
        })
        
    }

    validate = () => {
        let isError = false;
    
        const errors = {

            idError: "",
            materiaError: "",
            stockError: "",
            priceError: "",
            descriptionError: "",
            jtypeError: ""
        };

        if(this.state.id.length < 3){
            isError = true;
            errors.idError = " Invalid Id";
        }

        if(this.state.material=== ""){
            isError = true;
            errors.materiaError = "Enter Material";
        }

        if(this.state.stock=== ""){
            isError = true;
            errors.stockError = " Enter stock";
        }

        if(this.state.price.length < 5){
            isError = true;
            errors.priceError = " price must me more than 5 or more characters";
        }

        if(this.state.description=== ""){
            isError = true;
            errors.descriptionError = " Enter description";
        }

        if(this.state.jtype===""){
            isError = true;
            errors.jtypeError = " Invalid jewellery";
        }

        this.setState({
            ...this.state,
            ...errors
        });
      
        return isError;
     };






        

  
    onSubmit(e) {
      e.preventDefault();


      const err = this.validate();
      if(!err){

      const obj = {
        id: this.state.id,
        jtype: this.state.jtype,
        material: this.state.material,
        stock: this.state.stock,
        price: this.state.price,
        description: this.state.description
      };
      axios.post('http://localhost:4000/shopstore/add', obj)
      .then(res => 
        {
        alert('Item Added Successfully ')
        console.log(res.data);
      })
    }
   // window.location = '/show'
    }
  
 
    render() {
        return (
            <div className="container">
            <div style={{marginTop: 10}}>
            <h3>Add Items In Store</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Item_Id: </label>
                    <input 
                    type="text"
                    placeholder="Enter Item Id" 
                    className="form-control"
                    value={this.state.id}
                    onChange={this.onChangeid}/>
                    <span className="text-danger">{this.state.idError}</span>
                </div>
                <div className="form-group">
                    <label> Jewell Type: </label>
                    <input 
                    type="text"
                    placeholder="Necklace,Rings,Earrings,Pendents" 
                    className="form-control"
                    value={this.state.jtype}
                    onChange={this.onChangetype}/>
                    <span className="text-danger">{this.state.jtypeError}</span>
                </div>
                <div className="form-group">
                    <label>Materials:</label>
                    <input type="text" 
                    placeholder="Both Gold type GemType"
                     className="form-control"
                     value={this.state.material}
                    onChange={this.onChangematerial}/>
                    <span className="text-danger">{this.state.materiaError}</span>
                </div>
                <div className="form-group">
                    <label> Available Stock </label>
                    <input type="number" 
                    placeholder="Stock" 
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChangestock}/>
                    <span className="text-danger">{this.state.stockError}</span>
                </div>
                <div className="form-group">
                    <label> Price </label>
                    <input type="text" 
                    placeholder="Enter Current Price"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangeprice}/>
                    <span className="text-danger">{this.state.priceError}</span>
                </div>
                <div className="form-group">
                    <label> Description </label>
                    <input type="text" 
                    placeholder="Enter About Daily Sales" 
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangedescription}/>
                    <span className="text-danger">{this.state.descriptionError}</span>
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Items" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </div>
        )
    }
}