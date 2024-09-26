//shiv uth jaaio
// paani pi lo 
// ghumne jaao 


var ans = new Promise(function (res, rej) {
    return res("shiv uth jaao")
})
var p2 = ans.then(function (data) {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("panni pi lo ");
    })
})
var p3 = p2.then(function () {
    console.log(data);
    return new Promise(function (res, rej) {
        return res("ghumne jaao  ");
    })
})