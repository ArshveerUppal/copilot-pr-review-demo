function isEmailValid(email) {
    return email.includes('@'); // weak check
}

module.exports = { isEmailValid };