const fs = require('fs')
const { title } = require('process')

const getNote = function(){
    console.log(loadNotes())
}

const readNote = (title) =>{
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    if(note){
        console.log(note.body)
    }
    else{
        console.log('No such note found')
    }
}

const addNote = (title,body)=>{
const notes = loadNotes()
//const duplicateNotes = notes.filter((note)=>note.title === title)
const duplicateNote = notes.find((note)=>note.title === title)
if(!duplicateNote){
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

const removeNote =(title)=>{
 const notes = loadNotes()
 const foundnote = notes.filter((note)=>note.title === title)
 if(foundnote.length === 0){
     console.log('No note found')
 }
 else{notes.pop(foundnote)
    saveNotes(notes)}
 
}

const saveNotes = (notes)=>{
    const jsondata = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsondata)

}

const loadNotes = ()=>{
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
removeNote:removeNote,
readNote:readNote
}