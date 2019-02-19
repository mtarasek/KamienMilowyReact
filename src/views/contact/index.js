import React, { Component } from 'react'

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' }
    }

    showInConsole = (event) => {
        this.setState({ value: event.target.value })
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }

    render() {
        return (
            <div>
                <form>
                    <h3>Contact Form</h3>
                    <input type="text" name="name" placeholder="Your Name" value={this.state.name} />
                    <input type="text" name="email" placeholder="Your Email Address" />
                    <input type="number" name="number" placeholder="Your Phone Number" />
                    <input type="url" name="webURL" placeholder="Your Web Site" />
                    <textarea type="text" name="message" placeholder="Type your message here...">Awesome page</textarea>
                    <button onClick={this.showInConsole} type="button">Submit</button>
                </form>

            </div>
        )
    }
}

