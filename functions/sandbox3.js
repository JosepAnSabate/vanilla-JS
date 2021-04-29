// practise arrow function
const greet = function() {     
   return 'hello, world';
};
const greet1 = () => 'hello you';
const result = greet1();
console.log(result);

//function
const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
return total;
}

//const bill = (products, tax)
console.log(bill([10,15,21], 0.2));

//arrow function
const vill = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
        total += products[i] + products[i] * tax;
    }
return total;
};
console.log(vill([1,15,21], 0.2));