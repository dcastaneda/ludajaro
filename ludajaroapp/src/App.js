import logo from './logo.svg';
import './App.css';
import './components/styles.css';
import Login from './components/Login'
import Greeting from './components/Greeting'
import Sidenav from './components/Sidenav';
import { Switch, Route} from 'react-router-dom';
import Sales from './components/Sales';
import Error from './components/Error'

function App() {
  return (
  <>
 
   <Switch> 
    <Route path="/login" component={Login}/>
    <Route path="/ventas" component={Sales} />
    <Route component={Error} />
   </Switch>
   </>
  );
}

export default App;
