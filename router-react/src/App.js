import './App.css';
import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import meja from './meja.jpg'
import monitor from './monitor.jpg'
import jaket from './jaket.jpeg'
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
        <p class="navbar-brand">Store</p>

    </nav>
    <div class="jumbotron jumbotron-fluid text-center bg-warning">
          <h1 styles="font-size: 30px">Store</h1>
          <h2>Welcome to Our Store!</h2>
            <p>LOREM IPSUM DOLOR SIT AMET!!!</p>
            <p class="lead">
            </p>
          <div class="row">
              <div class="nav-item"><Link to="/belanja" styles="text-color: white">Start shopping</Link></div>
              <div class="nav-item"><Link to="/private">Please Login</Link></div>
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
                  src={jaket}
                  alt="laptop"
                  width="250"
                />
              <Link to={`${url}/lorem ipsum]`}>Jaket</Link>
              <p>Rp 125.300</p>
              </div>
              <div class="col-7 sm">
            <img
                  src={meja}
                  alt="laptop"
                  width="250"
                />
                <br/>
              <Link to={`${url}/lorem ipsum dolor`}>Meja</Link>
              <p>Rp 83.200</p>
              </div>
              <div class="col">
            <img
                  src={monitor}
                  alt="laptop"
                  width="250"
                />
              <Link to={`${url}/lorem ipsum dolor sit amet`}>Monitor</Link>
              <p>Rp 1.112.100</p>
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
//
// import logo from './logo.svg';
// import './App.css';
// import React from "react";
// import{
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link,
//   useParams,
//   useRouteMatch,
//   Redirect,
//   useHistory,
//   useLocation
// } from "react-router-dom";
//
//
// export default function AuthExample(){
//   return(
//     <Router>
//       <div>
//         <AuthButton />
//         <ul>
//           <li>
//             <Link to="/public">Public Page</Link>
//           </li>
//           <li>
//             <Link to="/private">Private Page</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route path="/public">
//             <PublicPage />
//           </Route>
//           <Route path="/login">
//             <LoginPage />
//           </Route>
//           <PrivateRoute path="/private">
//             <ProtectedPage />
//           </PrivateRoute>
//         </Switch>
//       </div>
//     </Router>
//   );
// }
//
// const fakeAuth = {
//   isAuthenticated: false,
//   authenticate(cb){
//     fakeAuth.isAuthenticated = true;
//     setTimeout(cb, 100);
//   },
//   signout(cb){
//     fakeAuth.isAuthenticated = false;
//     setTimeout(cb, 100);
//   }
// };
//
// function AuthButton(){
//   let history = useHistory();
//
//   return fakeAuth.isAuthenticated ? (
//     <p>
//       Welcome!{" "}
//       <button onClick={()=>{
//         fakeAuth.signout(()=>history.push("/"));
//       }}>
//       signout
//       </button>
//     </p>
//   ) : (
//     <p> You are not logged in.</p>
//   );
// }
//
// function PrivateRoute({children, ...rest}){
//   return(
//     <Route
//       {...rest}
//       render={({location}) =>
//         fakeAuth.isAuthenticated ? (
//           children
//         ) : (
//           <Redirect to={{pathname: "/login", state: { from: location}}} />
//         )
//       } />
//   );
// }
//
// function PublicPage(){
//   return <h3>Public</h3>
// }
//
// function ProtectedPage(){
//   return <h3>Private</h3>
// }
//
// function LoginPage(){
//   let history = useHistory();
//   let location = useLocation();
//   let {from} = location.state || {from:{pathname: "/"}};
//   let login = () => {
//     fakeAuth.authenticate(() => {
//       history.replace(from);
//     });
//   };
//
//   return(
//     <div>
//       <p>You must log in to view the page at {from.pathname} </p>
//       <button onClick={login}>Log in</button>
//     </div>
//   );
// }
// export default function NestingExample(){
//   return(
//     <Router>
//             <div>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/topics">Topics</Link>
//               </li>
//             </ul>
//               <hr />
//               <Switch>
//               <Route exact path="/">
//                 <Home />
//               </Route>
//                 <Route path="/topics">
//                   <Topics />
//                 </Route>
//               </Switch>
//             </div>
//
//           </Router>
//   );
// }
//
// function Topics(){
//   let {path, url} = useRouteMatch();
//   return(
//     <div>
//       <h2>Topics</h2>
//       <ul>
//         <li>
//           <Link to={`${url}/Sate, Nasi goreng`}>Kuliner</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Wisata alam, Museum`}>Travelling</Link>
//         </li>
//         <li>
//           <Link to={`${url}/Ibis, JW Marriot`}>Review Hotel</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//         <Route path={`${path}/:topicId`}>
//           <Topic />
//         </Route>
//       </Switch>
//     </div>
//   );
// }
//
// function Topic(){
//   let{ topicId } = useParams();
//
//   return(
//     <div>
//       <h3>{topicId}</h3>
//     </div>
//   );
// }


// export default function ParamsExample(){
//   return(
//       <Router>
//         <div>
//         <ul>
//           <li>
//             <Link to="/netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to="/gmail">Gmail</Link>
//           </li>
//           <li>
//             <Link to="/yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to="/amazon">Amazon</Link>
//           </li>
//         </ul>
//           <hr />
//           <Switch>
//             <Route path="/:id" children={<Child />} />
//           </Switch>
//         </div>
//
//       </Router>
//
//     );
//
// }
//
// function Child(){
//   let{ id } = useParams();
//
//   return(
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   )
// }
// export default function BasicExample(){
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr />
//         <Switch>
//           <Route exact path="/">
//             <Home />
//           </Route>
//           <Route exact path="/about">
//             <About />
//           </Route>
//           <Route exact path="/dashboard">
//             <Dashboard />
//           </Route>
//         </Switch>
//       </div>
//
//     </Router>
//
//   );
// }

function Home(){
  return(
    <div>
      <h2>Home</h2>
    </div>
  );
}
//
// function About(){
//   return(
//     <div>
//       <h2>About</h2>
//     </div>
//   );
// }
//
// function Dashboard(){
//   return(
//     <div>
//       <h2>Dashboard</h2>
//     </div>
//   );
// }

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
//
// export default App;
