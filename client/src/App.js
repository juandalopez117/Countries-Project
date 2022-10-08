import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom' 
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import createActivity from './components/createActivity/createActivity.jsx';
import countryDetail from './components/Detail/countryDetail.jsx'
import aboutComponent from './components/About/About.jsx'
import Activities from './components/Activities/Activities';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route exact path='/countries' component={Home} /> 
          <Route exact path='/Activity' component={createActivity} />
          <Route exact path='/countries/:id' component={countryDetail} />
          <Route exact path='/About' component={aboutComponent}/>
          <Route exact path='/Activities' component={Activities}/> 
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
