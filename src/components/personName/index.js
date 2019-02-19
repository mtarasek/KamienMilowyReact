import React, { Component } from 'react';
import './index.css';

export default class PersonName extends Component {
  
    showDetails = () => {
        console.log(this.props);
    }
 
    render() {
        return (
            <div onClick={this.showDetails} className='person'>
                <div>{this.props.position}</div>
                <div>{this.props.name}</div>
                <div>{this.props.surname}</div>
                <div><img src={this.props.image} alt='person' /></div>
            </div>
        )
    }
}
