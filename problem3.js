/*
* Problem 3
*
* We have a grid of mostly 0s there will be one 1. Write a function that returns the position of the 1 relative to the bottom left of the grid.
* 
*/
'use strict'

var grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1]
];

var findIt = function(arr) {
    for(var x = arr.length - 1; x >= 0 ;  x--){
    	for(var y = 0 ; y < arr[x].length ; y++){
      	if(arr[x][y] == 1){
         	var output = [y, arr.length - (x + 1)];
          break;
        }
      }
      
      if(output)
      	break;
    }
    
    return output;
}

var find = findIt(grid);
console.log(find);