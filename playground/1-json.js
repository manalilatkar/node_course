const fs = require('fs')


const my_data_buffer = fs.readFileSync('1-json.json') 
const user = JSON.parse(my_data_buffer.toString())
user.name = 'Manali'
user.age = 29
console.log(user)
fs.writeFileSync('1-json.json', JSON.stringify(user))