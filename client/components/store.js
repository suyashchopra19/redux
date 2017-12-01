import {createStore} from 'redux';

const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';


export const gotMessagesFromServer = (messages) => {type:GOT_MESSAGES_FROM_SERVER, messages};
export const writeMessage = 

const initialState = { messages:[] , newMessage:''};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GOT_MESSAGES_FROM_SERVER:
            return Object.assign({},state,{messages:action.messages})
                //messages: action.messages
            
        default:
            return state
    }
}

const store = createStore(reducer);
export default store;