import io from 'socket.io-client';
import store,{ gotNewMessagesFromServer } from './components/store.js'

const socket = io(window.location.origin);

socket.on('connect', () => {
  console.log('I am now connected to the server!');
});

socket.on('new-message',(messages)=>{
	store.dispatch(gotNewMessagesFromServer(messages))
})

export default socket;
