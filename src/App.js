import { Route } from 'react-router';
import { Switch, BrowserRouter } from 'react-router-dom';
import Home from './containers/Home/home';
import Register from './containers/register';
import About from './components/about';
import NotFound from './components/not-found';
import UserDetails from './containers/UserDetails/user-details';
import NavBar from './components/nav-bar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/users' component={Home} />
        <Route path='/users/:id' component={UserDetails} />
        <Route path='/register' component={Register} />
        <Route path='/about' component={About} />
        <Route path='*' component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default App;
