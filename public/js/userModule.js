const UserMessage = (function () {

    let user = {};
    let instance;

    const getUser = function () {
        return user;
    };

    const setUser = async function (name) {
        user.username = name;
        return user;
    };

    const createInstance = function () {
        return {
            getUser,
            setUser
        }
    };

    return {
        getInstance: function () {
            return instance || (instance = createInstance());
        }
    }

}());