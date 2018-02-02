import React, { Component } from 'react';
import { connect } from 'react-redux';
import { messageCreate, messagesFetch } from '../actions';
import _ from 'lodash';

class MessageBoard extends Component{
    constructor(props){
    super(props)

    this.state = {message: '', id: ''};
    }
    
    componentWillMount() {
        const url = document.URL.split("/");
        this.setState({id: url[url.length -1]})
        setTimeout(() => {
            this.props.messagesFetch(this.state);
        }, 500);
        
    }

    onButtonPress(){
        this.props.messageCreate(this.state);
        this.setState({message: ''});
    }
    
    renderMessagesList(){

        return _.map(this.props.messages, (text, i) => {
            const { email, message, time } = text;

            return (
                <div 
                    key={i}
                    className="message d-flex flex-column mt-2">
                    <p><i className="fa fa-user"></i> {email}</p>
                    <h5>{message}</h5>
                    <p className="time">{time}</p>
                </div>      
            )
        });
    }

    render(){

        return(
            <div>
                <div id="message-board">
                    {this.renderMessagesList()}
                </div>
                <div className="footer-board d-flex justify-content-around">
                    <input
                        type="text"
                        placeholder="Enter your message Here..."
                        value={this.state.message}
                        onChange={event => this.setState({ message: event.target.value })}
                    />
                    <button className="btn btn-success text-right"
                        onClick={this.onButtonPress.bind(this)} >
                        Send Message
                        </button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages: state.messages,
    };
}

export default connect(mapStateToProps, { messageCreate, messagesFetch })(MessageBoard);