// const { pocketBaseAxios } = require('../utils/axios')
const logger = require('../utils/logger')


const createFile = async (req, res) => {
    logger.info('createFile Start')

    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any 
    console.log(req.file, req.body)

    return res.status(200).json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size
    })
}

module.exports = createFile
