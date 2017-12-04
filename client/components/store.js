import {createStore, applyMiddleware} from 'redux';
import loggerMiddleware from 'redux-logger'

const GOT_NEW_MESSAGES_FROM_SERVER = 'GOT_NEW_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';


// export const gotMessagesFromServer = (messages) => {type:GOT_MESSAGES_FROM_SERVER, messages};
// export const writeMessage = (inputContent) => {type:WRITE_MESSAGE, newMessageEntry:inputContent}

const initialState = { messages:[] , newMessageEntry:''};
const middleware = applyMiddleware(loggerMiddleware)


const reducer = (prevState = initialState, action) => {
    switch(action.type) {
        case GOT_NEW_MESSAGES_FROM_SERVER:
            return Object.assign({},prevState,{messages:prevState.messages.concat(action.messages)})
                //messages: action.messages
            
        case WRITE_MESSAGE:
        	return Object.assign({},prevState, {newMessageEntry:action.newMessageEntry})
        
        default:
            return prevState
    }
}

export function writeMessage(inputContent) {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: inputContent
  };
}

export function gotNewMessagesFromServer(messages) {
  return {
    type: GOT_NEW_MESSAGES_FROM_SERVER,
    messages: messages
  };
}

const store = createStore(reducer, middleware);
export default store;