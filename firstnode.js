const http = require("http")

http.createServer((req,res) => {
    res.write("Server")
    res.end()
}).listen(4500,()=> {
    console.log("server created succesfully")
})