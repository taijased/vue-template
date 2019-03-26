

const FileWorkerService = {
    saveFileInBrowser (arraybuffer) {
        var jsZip = require('jszip')
        jsZip.loadAsync(arraybuffer)
            .then(zip => {
                Object.keys(zip.files).forEach( filename => {
                    console.log(filename);
                    // zip.files[filename].async('string')
                    //     .then(fileData => {
                    //         console.log(fileData) // These are your file contents      
                    //     })
                })
            })
    }
}

export default FileWorkerService

