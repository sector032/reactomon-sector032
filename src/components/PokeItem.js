import React, { Component } from 'react'

export class PokeItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.poke.name}</p>
            </div>
        )
    }
}

export default PokeItem
