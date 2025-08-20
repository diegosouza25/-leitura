
const readfile= require("node:readline");
const terminal = readfile.createInterface({
    input: process.stdout,
    output: process.stdout,
}
);

function question(pergunta) {
    const promise = new Promise(function (resolve, reject){
          terminal.question(pergunta, function (valor) {
            resolve(valor);
        });
    });
    return promise; 
}
question("Qual sue nome? \n")
  .then(function(valor){
  console.log("Deu error" + error);
})
.catch(function (error){
  console.log("Deu error" + error);
})
.finally(function (){
  terminal.close();
});

