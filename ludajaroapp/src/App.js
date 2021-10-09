import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import Login from './components/Login'
import Greeting from './components/Greeting'
import Sidenav from './components/Sidenav';
import { Switch, Route, Redirect} from 'react-router-dom';
import Sales from './components/Sales';
import Error from './components/Error';
import Products from './components/Products';
import Users from './components/Users';
function App() {
  return (
  <>
   <Sidenav />
   <Switch> 
    <Redirect exact from="/" to="/login"/>
    <Route path="/login" component={Login}/>
    <Route path="/ventas" component={Sales} />
    <Route path="/productos" component={Products} />
    <Route path="/usuarios" component={Users} />
    <Route component={Error} />
   </Switch>
   
   </>
  );
}

export default App;
