const _ = require('lodash');

const numbers = [23,23,34,45,55,4];

_.each(numbers, function(number, i){
    console.log(number);
});
