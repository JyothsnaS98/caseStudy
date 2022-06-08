
// import './App.css';
// import { BrowserRouter as Router,Route, Switch} from 'react-router-dom'


// import UploadQuestion from './components/uploadQuestions/UploadQuestion';
// import SearchView from './components/searchView/SearchView';
// import Navigation from './components/navbar/Navbar';
// import Login from './components/login/Login';
// import Register from './components/register/Register';
// //import routing from './routing';

// function App() {
//   return (
//     <Router>
        

//     <div className="App">
//     <Navigation/>
//     <Switch>
//       <Route exact path="/" component={UploadQuestion} />
      
//       <Route path="/search" component={SearchView} />
//       </Switch>
        
//     </div>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import UploadQuestion from './components/uploadQuestions/UploadQuestion';
import SearchView from './components/searchView/SearchView';
import Navigation from './components/navbar/Navbar';
import Login from "./components/login/Login"
import Register from "./components/register/Register"
import {
  BrowserRouter as Router, 
  Switch, 
  Route

} from "react-router-dom";
import {useState} from 'react';
function App() {
  const [user,setLoginUser] = useState({

  })
  return (
    <div className="App">
      <Router>
<Switch>
  <Route exact path="/">
    {
      user && user._id ? <Navigation/>:<Login/>
    }<Navigation/></Route>
  <Route exact path="/Login"><Login setLoginUser={setLoginUser}/></Route>
          <Route path="/Register"><Register /></Route>
          <Route exact path="/" component={UploadQuestion} />
      
      <Route path="/search" component={SearchView} />
</Switch>

      </Router>

    </div>
  );
}

export default App;