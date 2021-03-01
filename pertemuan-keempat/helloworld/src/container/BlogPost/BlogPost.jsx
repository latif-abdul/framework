import React, {Component} from 'react';
import './BlogPost.css';
import Post from "../../component/BlogPost/Post";

class BlogPost extends Component{
  state = {
    listArtikel: []
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(jsonHasilAmbilDariAPI => {
        this.setState({
          listArtikel: jsonHasilAmbilDariAPI
        })
      })
  }
  render(){
    return(
      <div className="post-artikel">
        <h2>Daftar Artikel</h2>
        {
          this.state.listArtikel.map(artikel => {
            return <Post key={artikel.id} judul={artikel.title} isi={artikel.body}/>
          })
        }
      </div>
    )
    // return(
    //   <div class="post-artikel">
    //     <h2>Blog Artikel</h2>
    //     <div class="gambar-artikel">
    //       <img src="http://placeimg.com/80/80/tech" alt="Gambar Tumbnail Artikel" />
    //     </div>
    //     <div class="konten-artikel">
    //       <div class="judul-artikel">
    //         Judul Artikel
    //       </div>
    //       <p class="isi-artikel">Isi Artikel</p>
    //     </div>
    //   </div>
    // )
  }
}

export default BlogPost;
