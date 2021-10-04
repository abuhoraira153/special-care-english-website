import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import OurSucces from './components/OurSuccess/OurSucces';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path = "/">
            <Home></Home>
          </Route>
          <Route path = "/home">
            <Home></Home>
          </Route>
          <Route path = "/about">
            <About></About>
          </Route>
          <Route path = "/services">
            <Services></Services>
          </Route>
          <Route path = "/success">
            <OurSucces></OurSucces>
          </Route>
          <Route path = "*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      
      
    </div>
  );
}

export default App;
