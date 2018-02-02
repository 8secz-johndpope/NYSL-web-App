import React, { Component } from 'react';

export default class TeamDetail extends Component {
    
    render() {
        return (
            <div className="mt-3">
                <h4 className="font-weight-bold">{this.props.name}</h4>
                <div>
                    <img className="team-logo" src={this.props.logo} alt="TeamLogo" />
                </div>
            </div>
        )
    }
}
