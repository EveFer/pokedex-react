import React, { Component } from 'react';

class PokemonsWrapper extends Component {
    render() {
        return (
            <div className="col-4">
                <div className="btn btn-dark" onClick={this.props.handler} data-poke-url={this.props.pokeurl}>{this.props.pokename}</div>
            </div>
        );
    }
}

export default PokemonsWrapper;