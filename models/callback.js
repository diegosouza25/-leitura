
const fs = require("node:fs")


 fs.readFile("./arq1.txt", function(error1, resposta1){
 if (error1){
       console.log("erro ao ler o primeiro arquivo")
       return
}  
   fs.readFile("./arq2.txt", function (error2, resposta2){
   if (error2){
          console.log("conseguiu ler o primeiro arquivo, mas o segundo deu erro")
          return
}
       fs.readFile("./arq3.txt",  function(error3, resposta3){
       if (error3){
             console.log("erro ao ler o terceiro arquivo")
             return
         }
         console.log(`${resposta1}${resposta2}${resposta3}`);                                                                
       });
    });
 });

 console.log("FIM");  