/*
* Problem 1
* 
* Write a simple way of adding a before filter onto a given method of a class.
* Here is some Pseudo code for you as an example of the functionality we are looking for.
* 
*/
'use strict'

var AClass = function() {
    var self = this;

    this.talk = function(str) {
        console.log(str);
    };

    this.before = function(afterFnName, beforeFn) {
        self[afterFnName] = (function() {
            var cachedFn = self[afterFnName];

            return function() {
                beforeFn();
                cachedFn.apply(this, arguments);
            };

        }());
    }
}

var a = new AClass();
a.talk('Hello!');

a.before('talk', function() {console.log("I'm First!!")});
a.talk('Hello!');