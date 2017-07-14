'use strict';

describe('getResult',() => {
    it('when number has 3,should return fizz',()=>{
        let num=30
        var actualResult=getResult(num)
        let expectedResult='fizz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 105,should return fizzBuzzWhizz',()=>{
        let num=105
        var actualResult=getResult(num)
        let expectedResult='fizzBuzzWhizz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 15,should return fizzBuzz',()=>{
        let num=15
        var actualResult=getResult(num)
        let expectedResult='fizzBuzz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times 70,should return BuzzWhizz',()=>{
        let num=70
        var actualResult=getResult(num)
        let expectedResult='BuzzWhizz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 21,should return fizzWhizz',()=>{
        let num=21
        var actualResult=getResult(num)
        let expectedResult='fizzWhizz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 3,should return fizz',()=>{
    let num=3
    var actualResult=getResult(num)
    let expectedResult='fizz'
    expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 5,should return buzz',()=>{
        let num=5
        var actualResult=getResult(num)
        let expectedResult='buzz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is times of 7,should return whizz',()=>{
        let num=7
        var actualResult=getResult(num)
        let expectedResult='whizz'
        expect(actualResult).toEqual(expectedResult)
    })

    it('when number is not above all,should return number',()=>{
        let num=2
        var actualResult=getResult(num)
        let expectedResult=num
        expect(actualResult).toEqual(expectedResult)
    })

})