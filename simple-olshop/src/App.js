import './App.css';
import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import tempee from './tempe.PNG'
import cabee from './cabe.PNG'
import pepayaa from './pepaya.PNG'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

export default function NestingAuth() {

  return(


    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-info">
        <p class="navbar-brand">TokoSebelah</p>

    </nav>
    <div class="jumbotron jumbotron-fluid text-center bg-warning">
          <h1 styles="font-size: 30px">TOKO SEBELAH OFFICIAL STORE</h1>
          <h2>Welcome to Our Store!</h2>
            <p>Dapatkan promo Bulan Maret dan ribuan GRATIS ONGKIR!!!</p>
            <p class="lead">
            </p>
          <div class="row">
              <div class="nav-item"><Link to="/belanja" styles="text-color: white">Mulai Berbelanja</Link></div>
              <div class="nav-item"><Link to="/private">Silahkan Login</Link></div>
            </div>
      </div>

          <Switch>
            <Route path="/login"><LoginPage /></Route>
            <Route path="/belanja"><Belanja /></Route>
            <PrivateRoute path="/private"><ProtectedPage /></PrivateRoute>
          </Switch>
    </Router>

);
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

// function AuthButton() {
//   let history = useHistory();
//   return fakeAuth.isAuthenticated ? (

//     <p style={{marginTop:'1000px'}}>
//       Welcome!{" "}
//       <button
//         onClick={() => {
//           fakeAuth.signout(() => history.push("/"));
//         }}
//       >
//         Sign out
//       </button>
//     </p>
//   ) : (
//     <p></p>
//   );
// }

function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}

function ProtectedPage(){
  return (
    <center>
    <h2>Terima Kasih Sudah Login Kak, Silahkan Klik Mulai Belanja</h2>
    </center>
  );
}

function LoginPage(){
  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || {from : {pathname: "/"}};
  let login = () =>{
    fakeAuth.authenticate(() => {
      history.replace(from);
    });
  };

  return(
    <div>
      <center>
      <h2>Silahkan LOGIN dulu Kak ! :)</h2>
      <br/>
      <button type="button" class="btn btn-info" onClick={login}>Log in</button>
      </center>
    </div>
  )
}


function Belanja() {
  let {path,url} = useRouteMatch();
  const isLoggedIn = fakeAuth.isAuthenticated;
  if (isLoggedIn === true) {
    return(
      <div>
        <center>
        <h2>PILIH KATEGORI</h2>
        <div class="row">
          <div class="col">
              <img
                  src={tempee}
                  alt="laptop"
                  width="250"
                />
              <Link to={`${url}/Simpan tempe di dalam kulkas agar dapat bertahan lebih lama. Dijadikan tempe goreng, tempe crispy atau dibikin campuran untuk sayuran juga oke loh.`}>Tempe Value 500 gram</Link>
              <p>Rp 5.300</p>
              </div>
              <div class="col-7 sm">
            <img
                  src={cabee}
                  alt="laptop"
                  width="250"
                />
                <br/>
              <Link to={`${url}/Cabai Merah Rawit ini wajib ada di dapur. Membuat makanan yang pedas dan nikmat adalah tugas cabai merah rawit ini. Bentuknya kecil dan bervariasi, warnanya mulai dari orange kemerahan sampai merah. Cukup pedas dan punya rasa yang kuat.`}>Cabai Rawit Merah 200 gr</Link>
              <p>Rp 23.200</p>
              </div>
              <div class="col">
            <img
                  src={pepayaa}
                  alt="laptop"
                  width="250"
                />
              <Link to={`${url}/Unripe fruits can be kept at room temperature for few days but ripe ones should be stored inside the refrigerator. Bring it back to normal temperature when it is to be eaten to get its natural taste and flavor. Unripe green papaya is cooked as a vegetable in many Asian and Pacific regions. However, it should not be eaten raw as it contains toxic alkaloids in its milky latex.`}>Pepaya California 1 pcs</Link>
              <p>Rp 12.100</p>
              </div>
              </div>
          <Switch>
              <Route exact path="{path}">
                <h3>Please Choose Your Goods!</h3>
              </Route>

              <Route path={`${path}/:barangId`}>
                <Barang/>
              </Route>

          </Switch>
          </center>
      </div>
    );
  }
    return(
    <div>
      <center>
      <h1>SILAHKAN LOGIN TERLEBIH DAHULU UNTUK MULAI BERBELANJA</h1>
      </center>
    </div>
    );
}

function Barang() {
  let{barangId} = useParams();

  return(
    <div>
      <h3>{barangId}</h3>
    </div>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
