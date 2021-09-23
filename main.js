const prompt = require('prompt-sync')();

const choice = Number(prompt('Enter[a] to combine or [b] to decounstruct colors; '));

const color1 =  prompt('Enter a color to combine : ');

const color2 = prompt('Enter a second color combine : '); 

if (color1 === 'red' && color2 === 'blue' ) {
    console.log('Red and Blue combine to Purple.');
}
if (color1 === 'red' && color2 === 'yellow' ) {
    console.log('Red and Yellow combine to Orange.');
}
if (color1 === 'blue' && color2 === 'yellow' ) {
    console.log('Blue and Yellow combine to Green.');
}
if (
    (color1 === 'red' && color2 === 'red' )
    (color1 === 'yellow' && color2 === 'yellow' )
    (color1 === 'blue' && color2 === 'blue' )
)   
{
    console.log('error'); 
}





