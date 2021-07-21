
import './App.css';
import NavBar from './components/navBar/NavBar'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/page/Home';
import Homme from './components/page/Homme';
import Femme from './components/page/Femme';
import Search from './components/page/Search';
import Product from './components/page/Product';
import CartShop from './components/page/CartShop';
import Login from './components/page/Login';
import Admin from './components/page/admin';
import StripeContainer from './components/page/payment';
import ProfilePage from './components/page/ProfilePage';

const App = () => {
  
  return (
    <Router className="App"> 
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/femme' component={Femme} />
        <Route exact path='/homme' component={Homme} />
        <Route exact path={["/search-homme", "/search-femme"]} component={Search} />
        <Route exact path='/product' component={Product} />
        <Route exact path='/cart' component={CartShop} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/payment' component={StripeContainer} />
        <Route exact path='/me' component={ProfilePage} />
        <Route exact path='*' component={Femme} />
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
