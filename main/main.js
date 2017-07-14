'use strict';


function getResult(num) {
    var result
    if (String(num).indexOf(3)!=-1 ){
        result='fizz'
    }
    else if (num%105===0){
        result="fizzBuzzWhizz"
    }
    else if (num%15===0) {
        result='fizzBuzz'
    }
    else if (num%35===0) {
        result='BuzzWhizz'
    }
    else if (num%21===0) {
        result='fizzWhizz'
    }
    else if (num%3===0) {
        result = 'fizz'
    } else if (num%5===0) {
        result = 'buzz'
    } else if (num%7===0) {
        result = 'whizz'
    }
    else{
        result=num
    }
    return result
}
