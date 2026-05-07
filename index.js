require('dotenv').config()
const http = require('http')
const fs = require('fs')
const path = require('path')

function requestController(req, res) {
    if(req.url === '/') {

        const filePath = path.join(__dirname, 'public', 'index.html')

        fs.readFile(filePath, (err, content) => {

            if(err){
                res.writeHead(500)
                res.end('Error cargando archivo')
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'})
                res.end(content)
            }

        })

    }

    // CSS
    else if(req.url === '/style.css') {

        const filePath = path.join(__dirname, 'public', 'style.css')

        fs.readFile(filePath, (err, content) => {

            if(err){
                res.writeHead(500)
                res.end('Error cargando CSS')
            } else {
                res.writeHead(200, {'Content-Type': 'text/css'})
                res.end(content)
            }

        })

    }

}

const server = http.createServer(requestController)

const PORT = process.env.PORT

server.listen(PORT, function() {
    console.log("Aplicacion corriendo en: " + PORT)
})