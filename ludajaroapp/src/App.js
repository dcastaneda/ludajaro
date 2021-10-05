import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import Login from './components/Login'
import Greeting from './components/Greeting'
import Sidenav from './components/Sidenav';
import { Switch, Route } from 'react-router';
import Sales from './components/Sales';

function App() {
  return (
  <>
  < Sidenav />
   <Switch> 
    <Route path="/login" component={Login}/>
    <Route path="/ventas" component={Sales} />
   </Switch>
   </>
  );
}

export default App;
