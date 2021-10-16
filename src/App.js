
import './App.css';
import Use from './Use';
import Design from './Design';
import {Route,Switch} from 'react-router-dom';

function App1() {
  return (
    <>
<Switch>
  <Route path='/' exact component={Design}/>
  <Route path='/use' component={Use}/>
  

</Switch>
    
    </>


  );
}

export default App1;
