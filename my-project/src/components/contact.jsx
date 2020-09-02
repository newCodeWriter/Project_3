import React from "react";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: '',
            email: '',
            comments: ''
        };
    }
    handleChange = (event) => {
        let name = event.target.name;
        let val = event.target.value; 
        this.setState({[name]: val});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`First Name: ${this.state.fname}\nLast Name: ${this.state.lname}\nE-mail: ${this.state.email}\nComments: ${this.state.comments}`)
        document.getElementById('my-form').reset();
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="my-form">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" placeholder="First Name" onChange={this.handleChange} required/><br/>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" onChange={this.handleChange} required/><br/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="E-mail" onChange={this.handleChange} required/><br/>
                    <label htmlFor="comments">Comments</label>
                    <textarea name="comments" id="comments" placeholder="Please enter any comments here" rows="8" cols="30" onChange={this.handleChange}></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;