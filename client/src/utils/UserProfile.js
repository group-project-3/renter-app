let UserProfile = (function () {
    let firstName = "";
    let lastName = "";
    let username = "";
    let emailAddress = "";

    let getFirstName = () => {
        return firstName;
    }
    let getLastName = () => {
        return lastName;
    }
    let getUsername = () => {
        return username;
    }
    let getEmailAddress = () => {
        return emailAddress;
    }
    let setFirstName = (_firstName) => {
        firstName = _firstName
    }
    let setLastName = (_lastName) => {
        lastName = _lastName
    }
    let setUserName = (_username) => {
        username = _username
    }
    let setEmailAddress = (_emailAddress) => {
        emailAddress = _emailAddress
    }

    return {
        getFirstName: getFirstName,
        getLastName: getLastName,
        getEmailAddress: getEmailAddress,
        getUsername: getUsername,
        setFirstName: setFirstName,
        setLastName: setLastName,
        setEmailAddress: setEmailAddress,
        setUserName: setUserName
    }

})();

export default UserProfile;