import React, { Component } from 'react';
import { connect } from 'react-redux';

class Carousel extends Component {
    
    activeElement(i){
        if ( i === 0 ){
            return "active"
        }        
    }

    renderEvents(){
       
        return this.props.events.map((events,i) => {
            return (
                <div key={events.title} className={`carousel-item ${this.activeElement(i)}`} >
                    <img className="d-block w-100" src={events.img} />
                    <div className="carousel-caption">
                        <h5>{events.date}</h5>
                        <p>{events.title}</p>
                        <a href="">{events.location}</a>
                    </div>
                </div>
            )
        });
    }

    render(){

        return(
            <div id="events">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {this.renderEvents()}
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    //WHATEVER IS RETURNED WILL SHOW UP AS PROPS INSIDE BOOKLIST
    return {
        events: state.events
    };
}

//PROMOTE BOOKLIST FROM COMPONENT TO CONTAINER
//IT NEEDS TO KNOW ABOUT THIS NEW DISPATCH METHOD, SELECTBOOK
//MAKE IT AVAILABLE AS A PROP
export default connect(mapStateToProps)(Carousel);







