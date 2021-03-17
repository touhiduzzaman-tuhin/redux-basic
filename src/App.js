import './App.css';
import { Route,BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Counter from './components/Counter/Counter';
import Phone from './components/Phone/Phone';
import Patient from './components/Patient/Patient';

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route path='/counter'>
          <Counter></Counter>
        </Route>
        <Route path='/phone'>
          <Phone></Phone>
        </Route>
        <Route path='/patient'>
          <Patient></Patient>
        </Route>
        <Route path='*'>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
