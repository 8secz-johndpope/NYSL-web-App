import React, { Component } from 'react';
import { connect } from 'react-redux';

class EventList extends Component {

    renderEvents(){
        return this.props.events.map((event, i) => {
            const last = i === this.props.events.length - 1 ? "last" : null;

            return (
                <div key={i} className={`d-flex justify-content-around event-list ${last}`}>
                    <div className="align-self-center">
                        <h5>{event.date}</h5>
                        <a href="https://www.google.de/maps/place/AJ+Katzenmaier+Elementary/@41.9002328,-87.6312581,17z/data=!3m1!4b1!4m5!3m4!1s0x880fd34e07f69da7:0x15e198c063fc787c!8m2!3d41.9002288!4d-87.6290694?hl=en">
                            {event.location}
                        </a>
                    </div>
                    <div className="align-self-center">
                        <h5>{event.title}</h5>
                        <p>Descriptions </p>
                    </div>
                </div>
            );
        })
    }

    render(){

        return(
            <div>
                {this.renderEvents()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(EventList);
