import {
    MESSAGE_CREATE, MESSAGES_FETCH_SUCCESS
} from '../actions/types';

export default (state = {}, action) => {

    switch (action.type) {
        case MESSAGE_CREATE:
            return state;
        case MESSAGES_FETCH_SUCCESS:
            return action.payload;
        default:
            return state;
    }
};