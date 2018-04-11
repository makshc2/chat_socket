class UI{
    constructor(){
        this.login = document.querySelector('.login');
        this.authorized = document.querySelector('.authorized');
        this.roomsList = document.querySelector('.rooms-list');
        this.usersList = document.querySelector('.users-list');
        this.messageContainer = document.querySelector('.message-container');
        this.userNameNew = document.querySelector('.user-name')
        this.user = UserMessage.getInstance();
    }

    showLogin(){

    }

    hideLogin(){
        this.login.style.display = 'none';
    }

    showAuthorized(){
        let homeUser = this.user.getUser();
        this.userNameNew.innerText = `${homeUser.username}`;
        this.authorized.style.display = 'block';
    }

    hideAuthorized(){

    }

    generateRooms(rooms){
        this.roomsList.innerHTML = '';
        rooms.forEach(room => this.roomsList.insertAdjacentHTML('beforeend', UI.roomListTemplate(room)));
    }

    generateUsersInRoom(users){
        this.usersList.innerHTML = '';
        for (let user in users){
            this.usersList.insertAdjacentHTML("beforeend", UI.userListTemplate(user, users[user].id));
        }
    }

    addMessage(message){
        let className = this.testUser(message);
        this.messageContainer.insertAdjacentHTML('beforeend', UI.messageTemplate(message,className))
    }

    newUserJoin(name){
        this.messageContainer.innerHTML='';
        this.messageContainer.insertAdjacentHTML('beforeend', UI.newUserTemplate(name))
    }

    testUser(response){
        let homeUser = this.user.getUser();
        if(response.username === homeUser.username){
            return {
                class:'from',
                color:'blue-grey darken-1'
            }
        }else{
            return{
                class:'to',
                color:'lime darken-4'
            }
        }
    }

    static messageTemplate(msg, className){
        return `<div class="message ${className.class}">
                    <div class="card ${className.color}">
                        <div class="card-content white-text">
                            <p>${msg.username} говорит:</p>
                            <span>${msg.message}</span>
                        </div>
                    </div>
                </div>`
    }

    static roomListTemplate(room){
        return `<li><a href="#" class="waves-effect">${room}</a></li>`;
    }

    static userListTemplate(name, id){
        return `<li class="collection-item" data-user-id="${id}">${name}</li>`;
    }

    static newUserTemplate(name){
        return `<div class="card teal lighten-2">
                    <div class="card-content white-text">
                        <p>Add new user: ${name}</p>
                    </div>
                </div>`;
    }
}