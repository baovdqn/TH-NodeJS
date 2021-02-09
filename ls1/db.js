const low = require('lowdb') // require lowdb
const FileSync = require('lowdb/adapters/FileSync')// đọc file
const adapter = new FileSync('db.json') // adapter
const db = low(adapter) // create obj db

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [],
    jobs:[],
    sessions: []
}).write()

module.exports = db;