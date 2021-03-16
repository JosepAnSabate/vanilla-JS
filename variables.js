let a = 21;
//keyword nameVsriable =(operator) identifier
//reassignacio valor
a = 10;

console.log(a);

let josep = "text";//tipus de text
josep="otro texto";

console.log(josep);
//ej primitive
let num = 30;

console.log(num);

console.log(typeof num);

let b = "hola mon";

console.log(typeof b);

let c = true;
console.log(typeof c);
//variable sense valor undefined
let d;
console.log(typeof d);

//symbol
let sym = Symbol();
console.log(typeof sym);

let reference ={};
console.log(typeof reference);

let obj = [1,2,3];
console.log(obj  instanceof Array);

// string conct
let cadena1 = "josep";
let cadena2 = "andreu";
console.log('hola a tots soc ${cadena1} ${cadena2}');

let texto ="Hola a tothom";
            
//array like
console.log(texto.length);
console.log(texto[0]);
console.log(texto[5]);

console.log(2+2);
console.log("bon"+"dia");

//type coercion
console.log( typeof(2 + 9));//number
console.log( typeof(2 + "9"));//string
console.log(typeof(true + true));// mumber
//boolean=true/ffalse
console.log(1 < 2 < 3); //true
console.log(3 > 2 > 1); //fals pk amb 3>2 true i associa a true valor 1
//null sense valor res undefined te variable assignada però no valor

//type coercion implicit
console.log(typeof(2+"2"));
let num1 = "10"; //string tonumber
let num2 = 10; //number
console.log( Number(num1) + num2);

console.log("2"+"2"-"2"); // 22-2 20 pk enadena el + i resta el -

































