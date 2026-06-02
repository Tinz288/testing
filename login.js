function login(username, password) {
    return username === "admin" && password === "123";
}

// Export để Jest có thể test
if (typeof module !== "undefined") {
    module.exports = login;
}
