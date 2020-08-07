const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')

//Customize yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }

})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
        console.log('Removing a note!')
    }

})

//Create list command
//create and export listNotes
//"your notes" in chalk
//Print Note title and body for each note
//call listNotes from command Handler
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        console.log(chalk.inverse('Your Notes!'))
        notes.listNotes()
    }

})

//Create read command
//setup --title for read
//create readNote, find note and print body, title
// no note found, print error
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }

})

yargs.parse()