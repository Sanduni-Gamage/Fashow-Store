import React, { Component } from 'react';
import axios from 'axios';

export default class Edit extends Component {

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
            jtype:''
            
           
        };
    }
    componentDidMount() {
        axios.get('http://localhost:4000/shopstore/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ 
                id:response.data.id,
                jtype: response.data.jtype,
                material:response.data.material,
                price:response.data.price,
                stock:response.data.stock,
                description:response.data.description
     });
            })
            .catch(function (error) {
                console.log(error);
            })
      }
    onChangeid(e) {
        this.setState({
          id: e.target.value
        });
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


     
      onSubmit(e) {
        e.preventDefault();

   
        const obj = {
          id: this.state.id,
          jtype:this.state.jtype,
          material: this.state.material,
          stock: this.state.stock,
          price: this.state.price,
          description: this.state.description
        };
        axios.post('http://localhost:4000/shopstore/update/'+this.props.match.params.id, obj)
        .then(res => 
            {
            alert('Item Updated Successfully ')
            console.log(res.data);
          })
        
    
    
  }

    render() {
        return (

            <div className="container">
            <div style={{marginTop: 10}}>
            <h3>Make Chages to Items in  Store About Sales,Price,Stock </h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Item_Id: </label>
                    <input 
                    type="text"
                    placeholder="Enter Item Id" 
                    className="form-control"
                    value={this.state.id}
                    onChange={this.onChangeid}/>
                </div>
                <div className="form-group">
                    <label> Jewell Type: </label>
                    <input 
                    type="text"
                    placeholder="Necklace,Rings,Earrings,Pendents" 
                    className="form-control"
                    value={this.state.jtype}
                    onChange={this.onChangetype}/>
                </div>
                <div className="form-group">
                    <label>Materials:</label>
                    <input type="text" 
                    placeholder="Both Gold type GemType"
                     className="form-control"
                     value={this.state.material}
                    onChange={this.onChangematerial}/>
                </div>
                <div className="form-group">
                    <label> Available Stock </label>
                    <input type="number" 
                    placeholder="Stock" 
                    className="form-control"
                    value={this.state.stock}
                    onChange={this.onChangestock}/>
                </div>
                <div className="form-group">
                    <label> Price </label>
                    <input type="text" 
                    placeholder="Enter Current Price"
                    className="form-control"
                    value={this.state.price}
                    onChange={this.onChangeprice}/>
                </div>
                <div className="form-group">
                    <label> Description </label>
                    <input type="text" 
                    placeholder="Enter About Daily Sales" 
                    className="form-control"
                    value={this.state.description}
                    onChange={this.onChangedescription}/>
                </div>
                <div className="form-group">
                    <input type="submit" value="Update Item in Store" className="btn btn-primary"/>
                </div>
            </form>
        </div>
        </div>
        )
    }
}