import './style.css'
import {writeStatic} from './features/write-static';
import {writeDinamic} from './features/write-dinamic';
import {templateLiteral} from './features/template-literal';
import {nullisCaoalescing} from './features/nullis-caoalescing';
import {desestructuring} from './features/destructuring';
//*******************Declaration*******************
const nameUser='Nadi';
//const nameUser=null;
//const ageUser=40;
const ageUser=null;
const user={
    name:'Nadi',
    age:null,
    address:{
        city:'Salvador, Ba',
        country:'Brasil',
    },
    login:'nadiduno',
    blog:'https://portfolio-nadi.vercel.app/',
};
// ***********************DECLARAR ***************************
// Default parameters
const multiply = (x, y = 1) => {
    result=x * y
    // Salto de linha
    document.write('<br>')
    // Criando um span de forma dinámica para apresentar o resultado
    var spanNova = document.createElement('span');
    var resultadoNovo = document.createTextNode('Uma funão que multiplica '+ x + '*' + y + '=' + result);
    spanNova.appendChild(resultadoNovo);
    var spanAtual = document.getElementById('texto');
    document.body.insertBefore(spanNova, spanAtual);
    
}
// Ou em uma linha
// const multiply = (x, y = 1) => res= x * y

// ForEach para recorrer 
function sum(...numbers) {
    let result = 0
    numbers.forEach((number) => {
        result += number
        //DINAMICAMENTE
        var spanNova = document.createElement('span');
        var resultadoNovo = document.createTextNode(number + '+' );
        spanNova.appendChild(resultadoNovo);
        var spanAtual = document.getElementById('texto');
        document.body.insertBefore(spanNova, spanAtual);
    })
    //DINAMICAMENTE
    var spanNova = document.createElement('span');
    var resultadoNovo = document.createTextNode("="+ result);
    spanNova.appendChild(resultadoNovo);
    var spanAtual = document.getElementById('texto');
    document.body.insertBefore(spanNova, spanAtual);
  }

//*******************Call Function*******************

//IS6 features no JavaScript
writeStatic();
writeDinamic('Features IS6 e API');
//Function Rest Parameter: Indefinite number of arguments 
writeDinamic(templateLiteral(user.name),nullisCaoalescing(user.age));
desestructuring(user);

// ***********************CHAMAR ***************************
// Enviando 2 parâmetro 
 
document.write('<br><br>Enviando 2 parâmetros para a função X e Y, sendo X = 3 e Y = 2');
multiply(3,2)

document.write('<br><br>Enviando só 1 parâmetro para a função X e Y ele pega por default pelas utilidades do ES6 pode-se definir Y=1');
// Enviando só 1 parâmetro e o segundo por default usara 1
multiply(3)

document.write('<br><br>ForEach para recorrer os elementos da funçõa');
sum(1, 2, 3, 4, 5)
