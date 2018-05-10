const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'bigFile')
const file = fs.createWriteStream(filePath)
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
for (let index = 0; index < 1e5; index++) {

    file.write(lorem)
}

file.end()