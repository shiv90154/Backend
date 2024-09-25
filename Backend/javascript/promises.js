function ConnectedToServer() {
    console.log("Connecting To server ...");
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve("Connected");
        }, 2000);
    });
}

function getCourse() {
    console.log('get course')
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("1,2,3,4,5,")
        }, 1000);
    })

}
ConnectedToServer()
    .then(
        function (response) {
            console.log(response)

            return getCourse()
        }
    )
    .then(
        function (response) {
            console.log(response)

        }
    )