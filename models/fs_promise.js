const fs = require("node:fs");

function readFile(arquivo){
    const promise = new Promise(function(resolve, reject){
      fs.readFile(arquivo, function(err, resposta){
          if(err){
            reject(err)
            return
          }
          resolve(resposta.toString())
       })
    })

    return promise;
}

readFile("./arq1.txt")
.then(function(valor){
   console.log("10")
}).catch(function(error){
   console.log("deu error")
}).finally(function(){
   console.log("sem error")
}); 
