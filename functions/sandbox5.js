//get a reference to the 'ul'
const ul = document.querySelector('.people');

const people = ['mario', 'luigi', 'ryu', 'shaun', 'chinli'];

let html = ``;

people.forEach(function(person){
    //create html template
    html += `<li style="color: purple">${person}</li>`;
});
//tambe podria fer una arrow function
console.log(html);
ul.innerHTML = html;