import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Footer extends Component {

    render(){

        return(
            <footer className="fixed-bottom bg-dark">
                <div className="btn-group btn-group-toggle d-flex justify-content-center" data-toggle="buttons">
                    <NavLink to="/" className="btn btn-dark">
                        <i className="fa fa-home" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to="/matches" className="btn btn-dark">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to="/stats" className="btn btn-dark">
                        <i className="fa fa-bar-chart" aria-hidden="true"></i>
                    </NavLink>
                    <NavLink to="/user" className="btn btn-dark">
                        <i className="fa fa-user-circle" aria-hidden="true"></i>
                    </NavLink>
                    
                </div>
            </footer>
        )
    }
}