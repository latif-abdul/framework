import React, {Component} from 'react';
import foto from './DSC_7929.JPG'

class About extends Component{
  render(){
    return(
      <div>
        <div>
          <img src={foto} style={{width:'200px'}}/><br/>
          Nama : Abdul Latif<br/>
          Tempat tanggal lahir : Malang, 8 oktober 2000<br/>
          Alamat : Ciptomulyo, Kota Malang<br/>
          Jenis Kelamin : Laki-laki<br/>
        </div>
      </div>

    )
  }
}
export default About;
