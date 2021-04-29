
//function expression
const speak = function() {      //function expression acaben amb;
    console.log('good day!');
};

greet();  //calling the function pot ser abans en la function pero no amb const (function expression)
greet();
speak();
//function declaration es pot declarar despres de cridarla nomesakest tipus no amb const
function greet() {
    console.log('hello there');
}