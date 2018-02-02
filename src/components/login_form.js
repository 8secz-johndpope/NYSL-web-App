import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';


class LoginForm extends Component {
    constructor(props){
        super(props);

        this.state = { login : true }
    }

    onEmailChange(event) {
        this.props.emailChanged(event.target.value);
    }

    onPasswordChange(event) {
        this.props.passwordChanged(event.target.value);
    }

    handleSubmit(event){
        event.preventDefault();
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }

    renderError() {
        if (this.props.error) {
            return <h3>{this.props.error}</h3>
        }
    }

    render() {
        const { login } = this.state;
        const member = login ? "Not a member yet ?" : "Already a Member";
        const registerTitle = login ? "Login to your Account" : "Register a new Account";
        const registerButton = login ? "Login" : "Register";
       
       return (
            <div className="background-login">
                
                <form onSubmit={this.handleSubmit.bind(this)}>
                        <h5 className="form-header text-center">
                            {registerTitle}
                        </h5>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" 
                            value={this.props.email}
                            onChange={this.onEmailChange.bind(this)} />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" 
                            value={this.props.password}
                            onChange={this.onPasswordChange.bind(this)}/>
                    </div>
                    
                    <div>
                        <h3 className="error">{this.renderError}</h3>
                    </div>
                    
                    <div id="form-footer">
                        <a onClick={()=> this.setState({login: !this.state.login})}>{member}</a>
                        <input type="submit" value={registerButton} className="btn btn-success btn-md" />
                    </div>
                </form>
            </div>
        );
    }
}

function mapStateToProps({ auth }) {
    const { email, password, error, loading } = auth;
    return {
        email: email,
        password: password,
        error: error,
        loading: loading
    };
};

export default connect(mapStateToProps, {
    emailChanged, passwordChanged, loginUser
})(LoginForm);