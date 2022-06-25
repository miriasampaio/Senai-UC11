let listaalunos = ["brenda", "yasmin", "ester", "andressa", "lais", "roberta"]
for(let numero = 0; numero < listaalunos.length; numero++) { 
    
        if(numero == 0){
            console.log("numero eh zero")
        } else if(numero % 2 == 0){
            console.log(`o numero ${numero} eh PAR`)
        } else if(numero % 2 == 1){
            console.log(`o numero ${numero} eh IMPAR`)
        }
    
    }