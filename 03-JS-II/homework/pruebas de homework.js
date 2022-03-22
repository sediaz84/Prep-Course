function imprime1aN(n) {
    for (var i = 0; i <= n; i = i + 4){
        if ( i % 3 === 0){
            console.log(i)
        }
    }
}


function cicloWhile(){
    var x = 1;
    while ( x <=4 ){
        console.log(x);
        x++
    }
}

function tablaDelSeis(){
    
    var tablaSeis = [];
    
    for (var i = 1; i <= 10; i++ ){
        tablaSeis.push(i * 6)
        }
        console.log(tablaSeis)
}




function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
    var toString = numero.toString();
    if ( toString.length === 3){
        return true;
    } 
        return false;
    
    
  }
tieneTresDigitos(200)
