import React, { Component } from 'react';
import { connect } from 'react-redux';
import MatchDetail from './match_detail.js';

class MatchList extends Component {

    renderMatches(){

        
        return this.props.matches.map((match, i) => {
            const last = i === this.props.matches.length - 1 ? "last" : "";
            
            return(
                <div id="match-view" className={last} key={i}>
                    <MatchDetail
                    
                    id={i}
                    match = {match}
                    school={match.location.school}
                    team1Badge={match.team1.badge}
                    name1 = {match.team1.name}
                    name2 = {match.team2.name}
                    team2Badge={match.team2.badge}
                    date={match.date}
                    hours={match.hours}
                    />
                </div>
            );
        });
    }

    render(){

        return(
            <div>
                <div id="match-header">
                    <div id="parallelogram" className="container-fluid">
                        <h6>Next Matches</h6>
                    </div>
                </div>
                {this.renderMatches()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        matches: state.matches,
    };
}

export default connect(mapStateToProps)(MatchList);
