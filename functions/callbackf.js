//callback function n foreach
const myFunc = (callbackFunc) => {
    //do something
    let value = 50;
    callbackFunc(value);
};

myFunc(function(value) {
    // do something
    console.log(value);
});
// o
myFunc(value=> {
    // do something
    console.log(value);
});

let people = ['mario', 'luigi', 'ric'];

const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
}
/* people.forEach(person => {
    console.log(person);
}); */
people.forEach(logPerson);