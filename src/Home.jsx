import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <Link to="/pokedex" className="link" >Clique aqui para ver o deck!</Link>
        );
    }
}
