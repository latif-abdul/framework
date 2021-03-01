import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import BlogPost from './container/BlogPost/BlogPost';

ReactDOM.render(<BlogPost />, document.getElementById('content'));


// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// // import App from './App';
// import Login from './login';
// import reportWebVitals from './reportWebVitals';
//
// // const HelloComponent=()=>{
// //   return 'HelloComponent'
// // }
// //
// // class StateFullComponent extends React.Component{
// //   render(){
// //     return <p>StateFullComponent</p>
// //   }
// // }
//
// // function HelloComponent(){
// //   return 'HelloComponent'
// // }
// ReactDOM.render(
//   <React.StrictMode>
//     <Login />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
