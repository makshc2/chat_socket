class UI{
    constructor(){
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.room-list');
        this.usersList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');


    }

    hideLogin(){
        this.login.style.display = 'none';
    }

    showAuthorized(){
        this.authorized.style.display = 'block';
    }
    generateRooms(rooms){
        rooms.forEach(room => this.roomsList.insertAdjacentHTML('beforeend', UI.roomListTemplate(room)));
    }

    generateUsersInRoom(users){
        this.usersList.innerHTML = '';
        for (let user in users){
            this.usersList.insertAdjacentHTML("beforeend", UI.userListTemplate(user, users[user].id));
        }
    }

    addMessage(message){
        this.messageContainer.insertAdjacentHTML('beforeend', UI.messageTemplate(message))
    }

    newUserJoin(message){
        this.messageContainer.insertAdjacentHTML('beforeend', UI.newUserTemplate(name))
    }

    static roomListTemplate(room){
        return `<li><a href="#" class="waves-effect">${room}</a></li>`;
    }

    static userListTemplate(name, id){
        return `<li class="collection-item" data-user-id="${id}">${name}</li>`;
    }

    static messageTemplate(msg){
        return `<div class="message">
                    <div class="card blue-grey darken-1">
                        <div class="card-content white-text">
                            <p>${msg.message}</p>
                        </div>
                    </div>
                </div>`;
    }

    static newUserTemplate(name){
        return `<div class="card teal lighten-2">
                    <div class="card-content white-text">
                        <p>New user: ${name}</p>
                    </div>
                </div>`;
    }
}