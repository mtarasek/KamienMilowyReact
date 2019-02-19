import React, { Component } from 'react'
import PersonName from '../../components/personName';
import './index.css';

export default class People extends Component {
    constructor(props) {
        super(props);
        this.state = { people: [] }
    }

    componentDidMount() {
        fetch('https://us-central1-react-mspm.cloudfunctions.net/api/people')
            .then(resp => resp.json())
            .then(resp => {
                this.setState({ people: resp })
            })
    }

    render() {
        if (this.state.people.length === 0) {
            return "Loading..."
        }

        var personList = this.state.people.map(item => {
            return <PersonName image={item.picture} name={item.firstName} surname={item.lastName} position={item.position} />
        })

        return (
            <div id='container'>
                {personList}
            </div >
        )
    }
}
