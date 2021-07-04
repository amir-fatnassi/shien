
import './App.css';
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homme from './components/page/Homme';
import Femme from './components/page/Femme';
import Search from './components/page/Search';
import Product from './components/page/Product';
import CartShop from './components/page/CartShop';
import Login from './components/page/Login';

const App = () => {
  
  return (
    <Router className="App"> 
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Femme} />
        <Route exact path='/homme' component={Homme} />
        <Route exact path='/Search' component={Search} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/cart' component={CartShop} />
        <Route exact path='/login' component={Login} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
