import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Carousel from '../containers/carousel';
import GoogleMap from './google_map';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {};
    }
    
    componentWillMount() {
        if(localStorage){
            const userDetail = JSON.parse(localStorage.getItem("userDetail"));
            const { name, favoriteTeam } = userDetail;
            this.setState({ name: name, favoriteTeam: favoriteTeam });
        }
    }
    
    renderFavorite(){
        return this.props.stats.map((team, i)=> {
            if(team.name === this.state.favoriteTeam){
                return (
                    <div key={i}>
                        <div className="d-flex align-items-center justify-content-center mt-1" key={i}>
                            <h3 className="mr-3">{team.name}</h3>
                            <img className="team-logo" src={team.logo} />
                        </div>
                        <Link to="/matches">
                            <div id="home-challenger" className="d-flex justify-content-center flex-column">
                                <h5 className="align-self-center">01/09</h5>
                                <h7 className="align-self-center">13:00</h7>
                                <div className="d-flex flex-column justify-content-center align-items-center">
                                    <span id="vs">VS</span>
                                    <img className="team-logo" src="./src/img/badges/c.png" />
                                    <h6>Wolverines</h6>
                                </div>
                            </div>
                        </Link>
                    </div>
                );
            }
        });
    }

    render() {
        const { name, favoriteTeam } = this.state;
        
        return (
            <div>
                <Carousel />
                <div id="parallelogram-home" className="container-fluid home d-flex">
                    <h6>Welcome back!</h6>
                    <h6 className="ml-3 font-weight-bold">{name}</h6>
                </div>
                <div id="home-page">
                    {this.renderFavorite()}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps)(HomePage);