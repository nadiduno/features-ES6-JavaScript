import {multiply} from './src/default-parameters';
import {sum} from './src/rest-parameters';
// ***********************CALL FUNCTION***************************
// Enviando 2 parâmetro  
document.write('<br><br>Enviando 2 parâmetros para a função X e Y, sendo X = 3 e Y = 2');
multiply(3,2)

document.write('<br><br>Enviando só 1 parâmetro para a função X e Y ele pega por default pelas utilidades do ES6 pode-se definir Y=1');
// Enviando só 1 parâmetro e o segundo por default usara 1
multiply(3)

//ForEach
document.write('<br><br>ForEach para recorrer os elementos da funçõa');
sum(1, 2, 3, 4, 5)