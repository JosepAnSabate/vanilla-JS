//regular function
const calcArea = function(radius) {
    //let area = 3.14 * radius**2;
    //return area;
    // o
    return 3.14 * radius**2;  
};

//arrow function
const calcArea2 = (radius) => { //radius al ser 1 sol parametre pot anar sense () i si no hi ha cap parametre () sol
    return 3.14 * radius**2;
};
//o 
const calcArea3 = (radius) => 3.14 * radius**2;

const area = calcArea2(5);
console.log('area is:', area);

const area2 = calcArea3(5);
console.log('area is:', area2);