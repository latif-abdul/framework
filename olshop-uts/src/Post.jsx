import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SmartphonePost from './SmartphonePost';

  const Post = (props) => {
    return(
      <div class="card" style={{width: '18rem'}}>
        <img src={props.imageUrl} class="card-img-top" style={{width:'200px'}}/>
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">Rp. {props.price}</p>
          <a href="#" class="btn btn-primary" onClick={props.onClick}>Add to cart</a>
        </div>
        </div>
      )
  }



export default Post;
