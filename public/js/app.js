const socket = io();
const ui = new UI();
const userMessage = UserMessage.getInstance();

//init elements

const loginForm = document.forms['login-form'];
const userName = loginForm.elements['username'];
const messageForm = document.forms['send-message'];
const message = messageForm.elements['message'];

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if(userName.value) {
        const name = userName.value;
        socket.emit('new user', name);
        userMessage.setUser(name);
    }
});

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();
    if(message.value){
        socket.emit('message', message.value);
        message.value = '';
    }
});

//socket events
socket.on('welcome', room => {
    ui.hideLogin();
    ui.showAuthorized();
});
socket.on('rooms', rooms => ui.generateRooms(rooms));
socket.on('updateusers', users => ui.generateUsersInRoom(users));
socket.on('chat message', message => ui.addMessage(message));
socket.on('new user joined', user => ui.newUserJoin(user));