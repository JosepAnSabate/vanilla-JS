//arguments n parameters

const speak = function(name, time) {
    //console.log('good day!');
    console.log(`good ${time} ${name}`);
}; 
speak('mario', 'night');

const speak2 = function(name = 'luigi', time = 'night') {
    //console.log('good day!');
    console.log(`good ${time} ${name}`);
}; 
speak2();
speak2('josep', 'day');
