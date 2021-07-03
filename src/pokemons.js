import React from 'react';
import './App.css';


class Pokefile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
      item: this.props.pokemons[0],
      number: 0,
      info: '',
      showInfo: false,
      }
      this.next = this.next.bind(this);
      this.preview = this.preview.bind(this);
      this.moreInfo = this.moreInfo.bind(this);
      this.toShowInfo = this.toShowInfo.bind(this);
      this.hideInfo = this.hideInfo.bind(this);
    }

    next() {
      const { pokemons } = this.props;
      const lastPok = pokemons.length - 1;
      if (this.state.number === lastPok) this.setState({
          item: pokemons[0],
          number: 0,
          info: pokemons[0].summary,
        });
       else this.setState((estadoAnterior) => ({
          item: pokemons[this.state.number + 1],
          info: pokemons[this.state.number + 1].summary,
          number: estadoAnterior.number + 1,
        }));
        this.hideInfo();
    };

    preview() {
      const { pokemons } = this.props;
      if (this.state.number === 0) {
        const index = pokemons.length - 1
        this.setState(() => ({
          item: pokemons[index],
          info: pokemons[index].summary,
          number: index,
        }))
      } else {

      this.setState((estadoAnterior) => ({
        item: pokemons[this.state.number - 1],
        info: pokemons[this.state.number - 1].summary,
        number: estadoAnterior.number - 1,
      }))
    }
      this.hideInfo();
    };

    moreInfo(param) {
      this.setState(() => ({
        info: param,
      }));
      this.toShowInfo();
    }

    toShowInfo() {
      const { showInfo } = this.state;
      if (showInfo) this.setState(() => ({
        showInfo: false,
      }));
      else this.setState(() => ({
        showInfo: true,
      }));
    }

    hideInfo() {
      this.setState(() => ({
        showInfo: false,
      }));
    }

    render() {
      const { info, showInfo } = this.state;
      const { name, type, averageWeight, image, summary } = this.state.item;
        return (
          <div>
            <div className='center'>
              <span className="esquerda" onClick={this.preview}></span>
              <div className='Poks'>
              <p>{name}</p>
              <p>{type}</p>
              <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
              <img src={image} alt='Imagem do pokemon' />
            </div>
            <span className='direita' onClick={this.next}></span>
            </div>
            <button onClick={() => this.moreInfo(summary)}>Fun Fact</button>
            <div className="info">{ showInfo ? info : '' }</div>
          </div>
      )
}
}

export default Pokefile;