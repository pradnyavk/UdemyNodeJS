const fs = require('fs')

const book = {
    title: 'The 5 am club',
    author: 'Robin Sharma'
}
const bookstring=JSON.stringify(book)
// console.log(bookstring)
// const bookjson = JSON.parse(bookstring)
// console.log(bookjson)


// fs.writeFileSync('1-json.json',bookjson)
const buffer = fs.readFileSync('1-json.json').toString()
// console.log(buffer)
const bookjson = JSON.parse(buffer)
bookjson.title = 'buffetology'
bookjson.author = 'warren buffet'
console.log(bookjson)
fs.writeFileSync('1-json.json',JSON.stringify(bookjson))