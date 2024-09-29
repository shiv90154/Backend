const fs = require('node:fs');


// fs.writeFile("abcd.txt", "hey my name is shiv kumar ", function (err) {
//     if (err) { console.log("err") }
//     else { console.log("file created") }

// })


// read file in node js 
// fs.readFile("abcd.txt", "utf8", function (err, data) {

//     if (err) { console.log("err") }
//     else { console.log(data) }
// })

//append in a file 
// fs.appendFile("abcd.txt", "        this data is append ", function (err) {
//     if (err) {
//         console.log("err")

//     }
//     else { console.log("data append safely") }

// })
// rename a file 

fs.rename("new.txt", "new1.txt", function (err) {
    if (err) { console.log("an error ") }
    else { console.log("file renamed") }

})