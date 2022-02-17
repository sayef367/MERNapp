import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Error from './components/Error';

const App = () => {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App
