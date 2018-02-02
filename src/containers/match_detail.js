import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class MatchDetail extends Component {
    constructor(props) {
        super(props);

        this.state = { showMore: false };
    }

    clickHandler(event) {
        this.setState({ showMore: !this.state.showMore });
    }

    render() {
        
        const expand = this.state.showMore ? "expand" : "";

        return (
            <div onClick={this.clickHandler.bind(this)} className={`match text-center ${expand}`}>
                
                <a target="_blank" href="https://www.google.de/maps/place/AJ+Katzenmaier+Elementary/@41.9002328,-87.6312581,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34e07f69da7:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694?hl=en"><i className="fa fa-map-marker" aria-hidden="true"></i> {this.props.school}</a>
                <div id="evident" className="d-flex justify-content-around">
                    <div className="text-center align-self-center">
                        <img className="team-logo" alt="badge" src={this.props.team1Badge} />
                    </div>
                    <div id="time" className="text-center">
                        <h3>{this.props.date}</h3>
                        <h3>{this.props.hours}</h3>
                    </div>
                    <div className="text-center align-self-center">
                        <img className="team-logo" alt="badge" src={this.props.team2Badge} />
                    </div>
                </div>

                <div className="d-flex justify-content-around mt-3">
                    <div className="align-self-center">
                        <h8>4° {this.props.name1}</h8>
                    </div>
                    <div className="icons mt-2 align-self-center">
                        <Link 
                            to={`/messages/${this.props.id}`} >   
                                <i className="fa fa-comments-o" aria-hidden="true"></i>
                        </Link>
                    </div>
                    <div className="align-self-center">
                        <h8>5° {this.props.name2}</h8>
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        matches: state.matches
    };
}

export default connect(mapStateToProps)(MatchDetail);
