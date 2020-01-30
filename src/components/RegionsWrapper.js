import React, {Component} from 'react';


class RegionsWrapper extends Component {
    constructor() {
        super(); // este hara que sea un componente identico con los atribitos que ya contine
        this.state = {
            text:'hola koders'
        }
    }
    
    
    render() {
        return(
            <div className="region-wrapper">
                <div data-region-name="Kanto" data-region-url="https://pokeapi.co/api/v2/pokedex/2/" className="btn btn-secondary" onClick={this.props.handler}>Kanto</div>
                <div data-region-name="Johto" data-region-url="https://pokeapi.co/api/v2/pokedex/3/" className="btn btn-secondary" onClick={this.props.handler}>Johto</div>
                <div data-region-name="Hoenn" data-region-url="https://pokeapi.co/api/v2/pokedex/4/" className="btn btn-secondary" onClick={this.props.handler}>Hoenn</div>
            </div>
        )
    }
}

export default RegionsWrapper;