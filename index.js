require("dotenv").config();
const livroRepository = require("./infra/repository/livro");
const http = require("node:http");

const server = http.createServer(function (req,  res){
//res.writeHead(200, {"content"})
 res.end("Ok bem vindo");
});

const port = process.env.PORT || 3000;

server.listen(port, function (){
  consele.log("Inicializando srvidor HTTP na porta" + port)
});
