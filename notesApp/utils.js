const fs = require('fs')

const getNote = function(){
    console.log(loadNotes())
}

const addNote = function(title,body){
const notes = loadNotes()
const duplicateNotes = notes.filter(function(note){
    return note.title === title
})
if(duplicateNotes.length === 0){
    notes.push({
        title:title,
        body:body
    })
    saveNotes(notes)
}
else{
    console.log('Note title taken!')
}

}

const removeNote =function(title){
 const notes = loadNotes()
 const foundnote = notes.filter(function(note){
     return note.title === title
 })
 if(foundnote.length === 0){
     console.log('No note found')
 }
 else{notes.pop(foundnote)
    saveNotes(notes)}
 
}

const saveNotes = function(notes){
    const jsondata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsondata)

}

const loadNotes = function(){
    try{
        const notes = fs.readFileSync('notes.json').toString()
        return JSON.parse(notes)
    }catch(e){
        return []
    }
}


module.exports = {
addNote:addNote,
getNote:getNote,
removeNote:removeNote
}