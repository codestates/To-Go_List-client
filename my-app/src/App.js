import React from "react"
import './App.css';
import { HashRouter, Route } from "react-router-dom"
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Mypage from './routes/Mypage';
import Funcpage from './routes/Funcpage';
import Mainpage from './routes/Mainpage';
import './default.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
        <Route 
        path='/' exact={true} component={Mainpage}/>        
        <Route 
        path='/signin' exact={true}  component={Signin}/>
        <Route 
        path='/signup' exact={true} component={Signup}/>
        <Route 
        path='/mypage'exact={true} component={Mypage}/>
        <Route 
        path='/start'exact={true} component={Funcpage}/>
        <Route 
        path='/'/>
        <Route 
        path='/'/>
       </HashRouter>      
    </div>)
  }
}

export default App;

