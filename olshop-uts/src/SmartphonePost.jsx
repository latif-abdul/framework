import React, {Component} from 'react';
import './SmartphonePost.css';
import Post from "./Post";

class SmartphonePost extends Component{
  state = {
    listPhone: [],
    insertCart: {
      id: 1,
      name: "",
      imageUrl: "",
      price: 1,
      qty: 1
    }
  }

  componentDidMount(){
    fetch('http://localhost:3002/posts')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listPhone: jsonHasilAmbilDariAPI
        })
      })
  }
  render(){

    let formInsertCart = {...this.state.insertCart};
    let timeStamp = new Date().getTime();
    return(
      <div className="post-artikel">

        <h2>Daftar Smartphone</h2>
        <div class="row">
        {
          this.state.listPhone.map(phone => {
            formInsertCart[phone] = phone;
            return <div class="card" style={{width: '18rem'}}>
              <img src={phone.imageUrl} class="card-img-top" style={{width:'200px'}} name="imageUrl" onChange={this.addToCart}/>
              <div class="card-body">
                <h5 class="card-title" name="name">{phone.name}</h5>
                <p class="card-text" name="price">Rp. {phone.price}</p>
                <a href="#" class="btn btn-primary" onClick="add({phone.id}, {phone.name}, {phone.price}, {phone.imageUrl})">Add to cart</a>
                <input type="hidden" name="name" onLoad={this.addToCart} value={phone.name} />
                <input type="hidden" name="imageUrl" onLoad={this.addToCart} value={phone.imageUrl} />
                <input type="hidden" name="price" onLoad={this.addToCart} value={phone.price} />
              </div>
              </div>
          })
        }
        </div>
      </div>
    )
  }

  addToCart = (event) => {
    let formInsertCart = {...this.state.insertCart};
    let timeStamp = new Date().getTime();
    formInsertCart['id'] = timeStamp;
    formInsertCart[event.target.name] = event.target.value;
    this.setState({
      insertCart: formInsertCart
    });
  }

  addButton = () => {
    const request = {
       method: 'post',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(this.state.insertCart)
    };
    fetch('http://localhost:3001/posts', request).then(response => {
        window.alert("Berhasil ditambahkan");
    });
  }

  add(a, b, c, d){
    const request = {
       method: 'post',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body: JSON.stringify({id: a, name:b, price:c, imageUrl:d})
    };
    fetch('http://localhost:3001/posts', request).then(response => {
        window.alert("Berhasil ditambahkan");
    });
  }


}

export default SmartphonePost;
