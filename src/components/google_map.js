import React, { Component } from 'react';
import { connect } from 'react-redux';

const KEY = `AIzaSyCoBmftnp3TnAbOGo53HeXBf_sTY87_gO4`;

class GoogleMap extends Component {

    componentDidMount(){

        const map = new google.maps.Map(this.refs.map, {
            zoom: 14,
            center: {
                lat: this.props.lat,
                lng: this.props.lng
            }, 
        });

        new google.maps.Marker({
            position: {
                lat: this.props.lat,
                lng: this.props.lng
            },
            map: map,
            label: this.props.school
        });

    }
    render(){

        return (
            <div className="text-center" id="map" ref="map" />
        );
    }
}

function mapStateToProps(state) {
    return {
        match: state.match
    };
}

export default connect(mapStateToProps)(GoogleMap);
