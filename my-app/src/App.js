import React from "react"
import './default.css';
import { HashRouter, Route } from "react-router-dom"
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Mypage from './routes/Mypage';
<<<<<<< HEAD
import FuncPage from './routes/FuncPage';
import MainPage from './routes/MainPage';
// todolist는 https://todoist.com/app/#start
=======
import Funcpage from './routes/Funcpage';
import Mainpage from './routes/Mainpage';
import './default.css'

>>>>>>> 2487803e4d206b8aef0cb91cdc062b0de2ec8c57
class App extends React.Component{
  render(){
    return(
      <div>
        <HashRouter>
        <Route 
        path='/' exact={true} component={MainPage}/>        
        <Route 
        path='/signin' exact={true}  component={Signin}/>
        <Route 
        path='/signup' exact={true} component={Signup}/>
        <Route 
        path='/mypage'exact={true} component={Mypage}/>
        <Route 
        path='/start'exact={true} component={FuncPage}/>
        <Route 
        path='/'/>
        <Route 
        path='/'/>
       </HashRouter>      
    </div>)
  }
}



export default App;

