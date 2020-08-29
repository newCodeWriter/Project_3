import React from "react";
import { Prompt } from "react-router-dom";

class Contact extends React.Component {
    constructor() {
        super();
        this.state = { value: "" };
    }
    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit() {
        this.setState({ value: "" });
    }
    render() {
        return (
            <div>
                <form action="#">
                    <label for="fname">First Name</label>
                    <input type="text" name="fname" id="fname" placeholder="First Name" required/><br/>
                    <label for="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" placeholder="Last Name" required/><br/>
                    <label for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="E-mail" required/><br/>
                    <label for="comments">Comments</label>
                    <textarea value={this.state.value} name="comments" id="comments" placeholder="Please enter any comments here" rows="8" cols="30" onChange={this.handleChange.bind(this)}></textarea>
                    <input type="submit" value="Submit" onClick={this.handleSubmit.bind(this)} />
                    <Prompt when={this.state.value !== ""} message="are you sure you want to leave without sending a message?"/>
                </form>
            </div>
        );
    }
}

export default Contact;