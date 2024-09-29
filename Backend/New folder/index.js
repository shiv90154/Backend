const fs = require('node:fs');


fs.writeFile("abcd.txt", "hey my name is shiv kumar ", function (err) {
    if (err) { console.log("err") }
    else { console.log("file created") }

})