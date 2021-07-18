import React from 'react';
import { connect } from 'react-redux';
import pokemons from './data';

class Favorites extends React.Component {
  showFavorites() {
    const { favoritesId } = this.props;
    const filtered = pokemons.filter((pokemon) => favoritesId.includes(pokemon.id));
    return filtered.map((pokemon) => (<img alt={`imagem do ${pokemon.name}`} src={pokemon.image}/>));
  }

  render() {
    return (
      <div>
        {this.showFavorites()}
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  favoritesId: state.favoriteReducer.id,
});

export default connect(mapStateToProps, null)(Favorites);
