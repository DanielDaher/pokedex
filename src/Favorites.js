import React from 'react';
import { connect } from 'react-redux';
import pokemons from './data';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      mouseOn: false,
    };
    this.info = this.info.bind(this);
    this.hide = this.hide.bind(this);
  }

  showFavorites() {
    const { favoritesId } = this.props;
    const filtered = pokemons.filter((pokemon) => favoritesId.includes(pokemon.id));
    return filtered.map((pokemon) => (
      <div onMouseEnter={() => this.info(pokemon.name)} onMouseLeave={() => this.hide(pokemon.name)}>
        <img alt={`imagem do ${pokemon.name}`} src={pokemon.image} />
        <div>{this.state.mouseOn[pokemon.name] ? this.additionalInfo(pokemon) : ''}</div>
      </div>
        ));
  }

  additionalInfo(param) {
    return (
    <div className="favorites-pokemons-info">
      <h4>{param.name}</h4>
      <p>Where can we found this Pokémon?</p>
      {param.foundAt.map((found) => (
      <>
        <h6>{found.location}</h6>
        <img alt="localização" src={found.map} width="300px" />
      </>
      ))}
    </div>);
  }

  info(param) {
    this.setState((state) => ({
      mouseOn: {...state.mouseOn,
        [param]: true,
      },
    }));
  }

  hide(param) {
    this.setState((state) => ({
      mouseOn: {...state.mouseOn,
        [param]: false,
      },
    }));
  } 

  render() {
    return (
      <div className="favorites-pokemons">
        {this.showFavorites()}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  favoritesId: state.favoriteReducer.id,
});

export default connect(mapStateToProps, null)(Favorites);
