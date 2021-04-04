import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import SmartphonePost from './SmartphonePost';
import CartPost from './Cart';
import AboutMe from './About'
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

export default function Sidebar() {

  return(


    <Router>
    <div class="d-flex flex-column p-3 text-white bg-dark" style={{width: '280px'}}>
<a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
  <svg class="bi me-2" width="40" height="32"></svg>
  <span class="fs-4">Sidebar</span>
</a>
<hr />
<ul class="nav nav-pills flex-column mb-auto">
  <li class="nav-item">
    <Link to="/home" styles="text-color: white">
      <svg class="bi me-2" width="16" height="16"></svg>
      Home
      </Link>
  </li>
  <li>
  <Link to="/listSmartphone" styles="text-color: white">
    <svg class="bi me-2" width="16" height="16"></svg>
    Smartphone
    </Link>
  </li>
  <li>
  <Link to="/cart" styles="text-color: white">
    <svg class="bi me-2" width="16" height="16"></svg>
    Cart
    </Link>
  </li>
  <li>
  <Link to="/about" styles="text-color: white">
    <svg class="bi me-2" width="16" height="16"></svg>
    About
    </Link>
  </li>
</ul>
<hr />
</div>

      <Switch>
        <Route path="/home"><Home /></Route>
        <Route path="/listSmartphone"><ListSmartphone /></Route>
        <Route path="/cart"><Cart /></Route>
        <Route path="/about"><About /></Route>
      </Switch>
    </Router>

);
}

function ListSmartphone() {
  Sidebar();
      return(
        <SmartphonePost />
      )
}

function About() {
  Sidebar();
      return(
        <AboutMe />
      )
}

function Cart() {
  Sidebar();
  return(
    <CartPost />
  )
}

function Home() {
  Sidebar();
  return(
    <h1>Selamat Datang</h1>
  )
}

// export default App;
