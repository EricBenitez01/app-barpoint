const multer = require("multer");
const fs = require('fs')
const path = require('path')

const createStorage = (entityOrFolderName = "benefitsImage") => {
    const folder = path.resolve(__dirname, `../../public/images/${entityOrFolderName}`)

    /* Si la carpeta no existe la crea */
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder)
    }

    const storage = multer.diskStorage({
        destination: (req, file, callback) => {
            let pathResolved = path.resolve(__dirname,`../../public/images/${entityOrFolderName}`);
            callback(null, pathResolved);
        },
        filename: (req, file, callback) => {
            callback(null, `${entityOrFolderName}-${Date.now()}-${file.originalname}`);
        },
    });

    const uploads = {}
    uploads[entityOrFolderName] = multer({
        storage,
        limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB (en bytes)
    })

    return uploads[entityOrFolderName]

};

module.exports = {
    uploadImageBenefit: createStorage('benefitsImage'),
};


