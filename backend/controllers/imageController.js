require("dotenv").config();
const sharp = require('sharp');
const axios = require('axios')
const uuid = require('uuid');

module.exports = {
imageUpload: (request, response) => {
    console.log(request.body)
    let inputFile = request.body;
    let outputFile = uuid + ".jpg";
    
        sharp(inputFile).resize({ height: 200, width: 200 }).toFile(outputFile)
        .then(function(newFileInfo) {
            console.log("Success");
            axios({
                url: 'https://api.imgur.com/3/image',
                method: 'POST',
                headers: {
                  'Authorization': 'Client-ID 4ab89fea97d23c8',
                  'Content-Type': "multipart/form-data"
                },
                data: newFileInfo,
              }).then(res =>{
                  console.log(res)
              })
            
        })
        .catch(function(err) {
            console.log("Error occured");
        });

    }

}