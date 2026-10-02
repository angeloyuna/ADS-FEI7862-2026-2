// Exercício da aula de int. a javascript
// ou
// Lista 1: JavaScript

// Aluno: Angelo Augusto Vettorazzi

// Questão 1

function calcularSomaNumeros(array) {
    
    let n = 0;
    
    array.forEach(element => {n += element});
    return n;
}

/* Exemplo

alert(calcularSomaNumeros([5, 2, 3, -5, 6])); // 11

*/

// Questão 2

function calcularMediaNumeros(array) {

    let numSomados = calcularSomaNumeros(array);

    let media = numSomados / array.length;
    return media;
}

/*

alert(calcularMediaNumeros([25, 25, 50, 50, 100])); // 50

*/

// Questão 3

function encontrarMenorElemento(array) {

    array = array.sort(function(a,b) {return a-b});

    let elemento = array[0];
    return elemento;
}

/* Exemplo

alert(encontrarMenorElemento([10, 2, 3, 43, -12, 6, 23, 14, -5])); // -12

*/

// Questão 4

function encontrarSegundoMaiorElemento(array) {
    
    array = array.sort(function(a,b) {return a-b});

    let elemento = array[(array.length - 2)];
    return elemento;
}

/* Exemplo

alert(encontrarSegundoMaiorElemento([10, 2, 3, 43, -12, 6, 23, 14, -5])); // 23

*/

// Questão 5

function filtarParaApenasImpares(array) {

    let numImpar;
    let arrayFiltrado = new Array();

    for (let i = 0; i < array.length; i++) {

        if ((array[i] % 2) != 0) {
            
            numImpar = array[i];

            arrayFiltrado.push(array[i]);
        }
    }

    return arrayFiltrado;
}

/* Exemplo

alert(filtarParaApenasImpares([2, 5, 9, 7, 4, 10, 3])); // 5,9,7,3

*/

// Questão 6

function invertirArray(array) {

    let arrayInvertido = new Array();

    for (let i = array.length - 1; i >= 0 ; i--) {
        arrayInvertido.push(array[i]);
    }

    return arrayInvertido;
}

/* Exemplo

alert(invertirArray([..."987654321"])); // 1,2,3,4,5,6,7,8,9

*/

// Questão 7

function imprimirHistogramaDeCincoBandas(array) {

    let qtdPrimeiraBanda = 0; // [01, 20]
    let qtdSegundaBanda = 0; // [21, 40]
    let qtdTerceiraBanda = 0; // [41, 60]
    let qtdQuartaBanda = 0; // [61, 80]
    let qtdQuintaBanda = 0; // [81, 100]

    array.forEach(element => {

        if (element > 0 && element < 21) {
            qtdPrimeiraBanda++;
        } else if (element > 20 && element < 41) {
            qtdSegundaBanda++;
        } else if (element > 40 && element < 61) {
            qtdTerceiraBanda++;
        } else if (element > 60 && element < 81) {
            qtdQuartaBanda++;
        } else if (element > 80 && element < 101) {
            qtdQuintaBanda++;
        }
    } )

    console.log("> [01, 20] :" + " *".repeat(qtdPrimeiraBanda));
    console.log("> [21, 40] :" + " *".repeat(qtdSegundaBanda));
    console.log("> [41, 60] :" + " *".repeat(qtdTerceiraBanda));
    console.log("> [61, 80] :" + " *".repeat(qtdQuartaBanda));
    console.log("> [81, 100] :" + " *".repeat(qtdQuintaBanda));

}

/* Exemplo

var hist = [5, 2, 0, 20, 21, 35, 61, 80, 90, 100];
imprimirHistogramaDeCincoBandas(hist);

/* Resultado

> [01, 20] : * * *
> [21, 40] : * *
> [41, 60] : 
> [61, 80] : * * 
> [81, 100] : * *

*/

// Questão 8 

// (Assumindo que há diferença entre caracteres/nomes em maiúsculos e minúsculos)
// (Se não há diferença, é necessário apenas adicionar ".toLowerCase()" para "element" e "nomeParaVerificar" em essa linha)

// if (element == nomeParaVerificar)
// if (element.toLowerCase() == nomeParaVerificar.toLowerCase())

function verificadorDeNome(array) {

    let nomeParaVerificar = prompt("Entre o nome que você gostaria de verificar: ");    
    let nomePresente = false;

    if (nomeParaVerificar != null) {

        array.forEach(element => {if (element == nomeParaVerificar) {nomePresente = true}});

        if (nomePresente == true) {
            alert(`O nome ${nomeParaVerificar} está presente.`);
        } else {
            alert(`O nome ${nomeParaVerificar} não está presente.`);
        }
    }
}

/* Exemplo

verificadorDeNome(["João", "Ana", "Sara", "Pedro", "Maria"]);

/*

"Sara" = O nome Sara está presente.
"sara" = O nome sara não está presente.
"Pedro" = O nome Pedro está presente.
"PEDRO" = O nome PEDRO não está presente.
"Marcelo" = O nome Marcelo não está presente.

*/

// Questão 9

function comparador(arrayUm, arrayDois) {

    let arraysIguais = false;    

    if (arrayUm.length != arrayDois.length) {
        return false;
    } else {
        for (let i = 0; i < arrayUm.length; i++) {

            if (arrayUm[i] === arrayDois[i]) {
                arraysIguais = true;
            } else {
                return false;
            }
        }
    }

    if (arraysIguais) {
        return true;
    }
}

/* Exemplos

alert(comparador([0, -1], [0, -1, -2])); // false 
alert(comparador([1, "2", 3], [1, 2, 3])); // false
alert(comparador([5, 4, 6], [4, 5, 6])); // false
alert(comparador([7, 8, 9], [7, 8, 9])); // true

*/

// Questão 10

function removedor(array, indice) {

    array.splice(indice, 1);
    return array; 
}

/* Exemplo

alert(removedor([..."12345"], 2)); // 1,2,4,5

*/

// Questão 11 (Assumindo que não há diferença entre caracteres maiúsculos e minúsculos)

function verificadorPalindromo(arrayOuString) {

    let isPalindromo = false;

    for (let i = 0; i < arrayOuString.length; i++) {

        if (arrayOuString[i].toLowerCase() == arrayOuString[(arrayOuString.length - 1) - i].toLowerCase()) {
            isPalindromo = true;
        } else {
            return false;
        }
    }

    if (isPalindromo) {
        return true;
    }

}

/* Exemplos

alert(verificadorPalindromo([..."arara"])); // true 
alert(verificadorPalindromo([..."Omissíssimo"])); // true
alert(verificadorPalindromo(["o", "v", "o"])); // true
alert(verificadorPalindromo(["g", "a", "t", "o"])); // false
alert(verificadorPalindromo(["d", "i", "a"] )); // false

*/

// Questão 12

function intercalador(arrayUm, arrayDois) {

    if (arrayUm.length == arrayDois.length) {
            
        let tamanhoArray = arrayUm.length;
        let arrayIntercalado = new Array();

        for (let i = 0; i < tamanhoArray; i++) {

            arrayIntercalado.push(arrayUm[i]);
            arrayIntercalado.push(arrayDois[i]);

        }

        return arrayIntercalado;
    
    } else {
        return "Erro: Arrays de tamanhos diferentes";
    }    
}

/* Exemplos

alert(intercalador([1, 2, 3], ["a", "b", "c"])); // 1,a,2,b,3,c
alert(intercalador(["c", "d"], [4, 5])); // c,4,d,5
alert(intercalador(["w", "x", "y", "z"], [8, 9])) // Erro: Arrays de tamanhos diferentes

*/


function compactador(array) {

    let arrayCompactado = new Array();

    for (let i = 0; i < array.length; i++) {

        if (array[i] != array[i+1]) {
            arrayCompactado.push(array[i])
        } 
    }    

    return arrayCompactado;
}

/* Exemplos

alert(compactador(["a", "a", "b", "b", "b", "c", "a", "a"])); // a,b,c,a
alert(compactador([..."testeaabbccteste"])); // t,e,s,t,e,a,b,c,t,e,s,t,e

*/