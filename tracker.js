const exec = require("child_process").exec

var address = ""

exec('curl https:\/\/ipapi.co/' + address + "\/json", (e, stdout) => {
    if (e instanceof Error) {
        console.error("Unfortunately, there was an error occurring: " + e)
    }
    console.log(stdout)

})

