import { MESSAGES_FETCH_SUCCESS, MESSAGE_CREATE } from './types';
import firebase from 'firebase';

export const messageCreate = (state) => {
    
    const { currentUser } = firebase.auth();
    const time = new Date().toUTCString();
    
    return (dispatch) => {
        firebase.database().ref(`/match/messages/${state.id}`)
            .push({
                email: currentUser.email, message: state.message, time: time })
            .then(() => {
                dispatch({ type: MESSAGE_CREATE })
            });
    }
};

export const messagesFetch = (state) => {
    console.log(state)
    const { currentUser } = firebase.auth();
    
    return (dispatch) => {
        firebase.database().ref(`/match/messages/${state.id}`)
            .on('value', snapshot => {
                dispatch({ type: MESSAGES_FETCH_SUCCESS, payload: snapshot.val() });
            });
    };
};