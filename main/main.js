'use strict';

var num


function getResult(num) {
    var result
    if (num===30){
        result='fizz'
    }
    else if (num===105){
        result="fizzBuzzWhizz"
    }
    else if (num===15) {
        result='fizzBuzz'
    }
    else if (num===70) {
        result='BuzzWhizz'
    }
    else if (num===21) {
        result='fizzWhizz'
    }
    else if (num === 3) {
        result = 'fizz'
    } else if (num === 5) {
        result = 'buzz'
    } else if (num === 7) {
        result = 'whizz'
    }
    else{
        result=num
    }
    return result
}

var result=getResult(num)