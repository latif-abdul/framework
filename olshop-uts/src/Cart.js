import React, {Component} from 'react';
import './SmartphonePost.css';

class Cart extends Component{
  state = {
    listCart: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/posts')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listCart: jsonHasilAmbilDariAPI
        })
      })
  }
  render(){
    return(
      <div className="post-artikel">

        <h2>Cart</h2>
        <div class="row">
        {
          this.state.listCart.map(cart => {
            return <div class="card mb-3" style={{width: '540px'}}>
            <div class="row g-0">
              <div class="col-md-4">
                <img src={cart.imageUrl} style={{width:'200px'}}/>
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{cart.name}</h5>
                  <p class="card-text">Price : Rp. {cart.price}</p>
                  <p class="card-text"><small class="text-muted">Qty : {cart.qty}</small></p>
                  <p class="card-text"><small class="text-muted">Sub Total : Rp. {cart.price*cart.qty}</small></p>
                </div>
              </div>
            </div>
          </div>
          })
        }
        </div>
      </div>
    )
  }


}

export default Cart;
