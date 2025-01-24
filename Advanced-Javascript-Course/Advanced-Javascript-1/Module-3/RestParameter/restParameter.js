// save the rest of the variables into an array (names in this specific occasion)
// if they do not match with any of the parameters given to the function
// rest parameter must be the last argument of the function
function setPermissionLevel(permissionLevel, ...names) {
    names.forEach(name => console.log(`${name} now has ${permissionLevel} level access.`))
}

setPermissionLevel('admin', 'Dave', 'Sally', 'Mike')