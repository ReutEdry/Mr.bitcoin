const user = {
    name: "Reut Edry",
    balance: 100 + '$',
    transactions: []
}

export const userService = {
    getUser,
}

function getUser() {
    return user
}