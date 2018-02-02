import React, { Component } from 'react'
import firebase from 'firebase';
import {Link, Redirect} from 'react-router-dom';

export default class UserForm extends Component {
    constructor(props){
        super(props);

        this.state= {name: '', favoriteTeam: ''};
    }
    
    
    componentWillMount() {
        if (localStorage.userDetail){
            const userDetail = JSON.parse(localStorage.getItem("userDetail"));
            const { name, favoriteTeam } = userDetail;
            this.setState({name: name, favoriteTeam: favoriteTeam })
        }
        
        firebase.auth().onAuthStateChanged((user)=> {
            if (user) {
                const { uid } = firebase.auth().currentUser;
                
                firebase.database().ref(`/users/${uid}`)
                    .on('value', snapshot => {
                        const id = Object.keys(snapshot.val())[0];
                        const { name, favoriteTeam } = snapshot.val()[id];

                        this.setState({id: id, name: name, favoriteTeam: favoriteTeam })
                        localStorage.setItem("userDetail", JSON.stringify(this.state))
                    });
            }
            else{
                this.props.history.push('/login')    
            }
        });
    }
    
    handleSubmit(event){
        event.preventDefault();
        localStorage.setItem("userDetail", JSON.stringify(this.state))
        const { uid } = firebase.auth().currentUser;
        const {id,name,favoriteTeam} = this.state;
        if(id){
            firebase.database().ref(`/users/${uid}/${id}`)
                .set({
                    name, favoriteTeam
                })
        }
        else{
            firebase.database().ref(`/users/${uid}`)
                .push({
                    name: this.state.name, favoriteTeam: this.state.favoriteTeam
                })
        }
    }

    onNameChange(event){
        this.setState({name: event.target.value})
    }

    onSelectChange(event){
        this.setState({favoriteTeam: event.target.value})
    }

    logOut(){
        firebase.auth().signOut()
        console.log(firebase.auth());
        localStorage.clear()
        this.props.history.push('/login')    
    }

    render() {
        const { favoriteTeam } = this.state;
        const defaultOptionValue = favoriteTeam.length > 0 ? favoriteTeam : "Choose your Favorite team";
        
        return (
            <div>
                <Link className="ml-3" onClick={this.logOut.bind(this)} to="/login">LogOut</Link>
                <form id="user-form" onSubmit={this.handleSubmit.bind(this)}>
                    <h4 className="form-header text-center">
                        Profile
                    </h4>
                    <div className="profile-image">
                        <img className="img-fluid" src="./src/img/profile-img.jpg" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input type="text" className="form-control" id="exampleInputText" placeholder="Enter Name"
                            value={this.state.name}
                            onChange={this.onNameChange.bind(this)} />
                    </div>

                    <div className="select input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button"><i className="fa fa-star"></i></button>
                        </div>
                        <select 
                            onChange={(event)=>this.onSelectChange(event)}
                            className="custom-select" 
                            id="inputGroupSelect06">
                            <option defaultValue>{defaultOptionValue}</option>
                                <option value="Mega Bees">Mega Bees</option>
                                <option value="Bull Riders">Bull Riders</option>
                                <option value="Wolverines">Wolverines</option>
                                <option value="Happy Leaves">Happy Leaves</option>
                                <option value="Radioactives">Radioactives</option>
                                <option value="Ball Pirates">Ball Pirates</option>
                        </select>
                    </div>

                    <div id="form-footer">
                        <input type="submit" value="Save" className="btn btn-success btn-md" />
                    </div>
                </form>
            </div>
        )
    }
}

