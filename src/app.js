const express = require('express')
const cors = require('cors')
const path = require('path')
const helmet = require('helmet')
const ping = require('./api/ping')
const { port } = require('./config/vars')
const logger = require('./utils/logger')
const createFile = require('./api/createFile')
const multer  = require('multer')
const upload = multer({ dest: './public/uploads/' })


// Initialize express
const app = express()
const PORT = port

// Common Middleware
app.use(cors())
app.use(express.json()) // JSON parsing
// app.use(express.urlencoded()); // Parse URL-encoded bodies using query-string library
// or
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies using qs library
app.use(helmet()) // secure apps by setting various HTTP headers
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views'));

// -----------------------------------------------------------------------------
// API's
// -----------------------------------------------------------------------------
// Health Check
app.get('/', (req, res) => {
    return res.render('file')
})
// Create File
app.post('/api/fileanalyse', upload.single('upfile'), createFile)

// Start express on the defined port
app.listen(
    PORT,
    () => {
        console.log(`🚀 Server running on port ${PORT}`)
        logger.info(`Server started and running on ${PORT}`)
    }
)
