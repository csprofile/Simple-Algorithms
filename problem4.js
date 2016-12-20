/*
* Problem 4
* 
* You’ve recently been transferred from Product Development to the newly formed Department of Truth.
* People being ‘educated’ by your department don’t believe that 2 + 2 = 5. You need to prove it to them. Write a little program that seemingly adds 2 + 2 and outputs 5.
* Use some globals, leak some memory; more creative / nefarious is better. You may use whatever language or bad practices you feel are appropriate for this problem.
* 
*/
'use strict'

function calc(a,b,op){
    var result;
    
    switch(op){
        case '+':
            result = a+b+((a+b)*0.25);
            break;
        case '-':
            result = a===b ? 0 : a-b-b/2;
            break;
        case '*':
            result =  (a*b)+((a*b)*0.25);
            break;
        case '/':
            result = a===b ? 1 : (a/b)-((a/b)*0.20);
            break;
    }

    return result;
}

console.log('2+2 = ' + calc(2,2,'+'));
console.log('4+4 = ' + calc(4,4,'+'));
console.log('2*2 = ' + calc(2,2,'*'));
console.log('10/4 = ' + calc(10,4,'/'));
console.log('10/2 = ' + calc(10,2,'/'));
console.log('10-4 = ' + calc(10,4,'-'));
console.log('5+5 = ' + calc(5,5,'+'));
console.log('10/10 = ' + calc(10,10,'/'));
console.log('10-10 = ' + calc(10,10,'-'));