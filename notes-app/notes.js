const fs = require('fs')
const chalk = require('chalk')
const { Console } = require('console')

const addNote =  (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title == title)
    
    debugger

    if (duplicateNote) {
        console.log(chalk.red.inverse('Note title taken'))
        
    } else {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
        
    }

    

}

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter( (note) => note.title !== title)
    if (notes.length > notesToKeep.length){
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(notesToKeep)
    } else {
        console.log(chalk.red.inverse('No note found with that title'))
    }
}

const listNotes = () => {
    const notes = loadNotes()
    notes.forEach(element => {
        console.log(chalk.blue.inverse.bold(element.title))
    });
}
const readNote = (title) => {
    const notes = loadNotes()
    note = notes.find((note) => note.title === title)
    if (note){
        console.log(chalk.bold(note.title))
        console.log(note.body)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)

    } catch (e) {
        return []

    }

}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}