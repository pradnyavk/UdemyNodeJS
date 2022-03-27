//import * as fs from 'fs';
// const fs = require('fs')
const utils = require('./utils.js')
const yargs = require('yargs')
//fs.writeFileSync('notes.txt','This file was created by Node.js!')
//fs.appendFileSync('notes.txt','This text is now appended!')
// console.log("note.js")

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler:function(argv){
        utils.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'To remove a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        utils.removeNote(argv.title)
    }

})

yargs.parse()