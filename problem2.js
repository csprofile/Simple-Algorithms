/*
* Problem 2
* 
* We were discussing options to perform a map operation a hash. Your mission, should 
* you choose to accept it is to write a function that takes a hash and performs a map operation on the keys and values.
*
*/
'use strict'

var myHash = {
    'a': 1,
    'b': 2,
    'c': 3
};

Object.prototype.map = function(fn) {
    var self = this;
    Object.keys(self).forEach(function(key) {
        var newKeyValue = fn(key, self[key]);
        self[newKeyValue[0]] = newKeyValue[1];
        delete self[key];
    });
};

myHash.map(function(key, value) {
    return [key.toUpperCase(), value + 1];
});

console.log(myHash);