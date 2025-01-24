function checkUsername(userName) {
    if (userName) {
    console.log(userName)
    } else {
        throw new Error('No username provided')
    }
}

checkUsername('YummyCoder64')
checkUsername()

// Common Data Types Constructor
// String()
// Number()
// Array()
// Object()
// Boolean()