import './App.css';
import Pokefile from './Pokefile';
import pokemons from './data';
import Favorites from './Favorites';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <div className="main">
        <div className='nav-bar'>
          <Link to="/" className="link">Home</Link>
          <Link to="/pokedex" className="link">Pokedex</Link>
          <Link to="/favorites" className="link">Favorites</Link>
        </div>
      <Switch>
        <Route exact path="/favorites" component={Favorites} />
        <Route exact path='/pokedex' render={(props) => <Pokefile pokemons={pokemons} /> } />
      </Switch>
      </div>
    </BrowserRouter>
    <footer>Made By Daniel Daher</footer>
  </div>
  );
}

export default App;

