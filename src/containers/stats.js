import React, { Component } from 'react';
import { connect } from 'react-redux';
import TeamDetail from './team_detail';

class Stats extends Component {
    constructor(props) {
        super(props);

        this.state = { slideIn: false };
    }

    clickHandler(team) {

        this.setState({ slideIn: true, name: team.name, logo: team.logo });
    }

    renderStandings() {

        return this.props.stats.map((team, i) => {
            return (
                <tr key={i} onClick={() => this.clickHandler(team)}>
                    <th scope="row">{i + 1}</th>
                    <td><a>{team.name}</a></td>
                    <td>{team.W}</td>
                    <td>{team.D}</td>
                    <td>{team.L}</td>
                    <td>{team.GF}</td>
                    <td>{team.GA}</td>
                    <td>{team.points}</td>
                </tr>
            );
        });
    }

    render() {

        const addClassSlide = this.state.slideIn ? "transition slide-left" : null;
        const renderTeam = this.state.slideIn ? <TeamDetail name={this.state.name} logo={this.state.logo} /> : null;

        return (
            <div className="view">
                
                <div id="match-header">
                    <div id="parallelogram" className="container-fluid">
                        <h6>Standing</h6>
                    </div>
                </div>
                
                <div className="container-fluid stats">
                    <table className="table table-condensed">
                        <thead className="thead">
                            <tr className="tableHeader align-self-middle">
                                <th></th>
                                <th>TEAMS</th>
                                <th>W</th>
                                <th>D</th>
                                <th>L</th>
                                <th>GF</th>
                                <th>GA</th>
                                <th>Pts</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderStandings()}
                        </tbody>
                    </table>
                </div>
                
                <div className={`flex-column justify-content-between team-panel align-self-item text-center ${addClassSlide}`} >
                    {renderTeam}
                </div>
           
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}


export default connect(mapStateToProps)(Stats);
