import assert from "assert"
import {
  generatePrimeNumbers,
  isNumberPrime,
  generatePrimeMultiplicationTable,
} from "./../PrimeNumberGenerator.js"

describe(`isNumberPrime - checks if a number if prime using
  previous prime numbers`, function(){

  it("will return true when number to check is 2", () => {
    assert.ok(isNumberPrime(2, []))
  })

  it("will return true when number to check is 3", () => {
    assert.ok(isNumberPrime(3, [2]))
  })

  it("will return false when number to check is 4", () => {
    assert.ok(!isNumberPrime(4, [2]))
  })

  it("will return false when number to check is 10", () => {
    assert.ok(!isNumberPrime(10, [2,3,5,7]))
  })

  it("will return false when number to check is 18", () => {
    assert.ok(!isNumberPrime(18, [2, 3, 5, 7, 11, 13, 17]))
  })

  it("will return true when number to check is 97", () => {
    assert.ok(isNumberPrime(97, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]))
  })
})

describe("generatePrimeNumbers - creates an array of prime numbers", function(){

  it("Can generate zero prime numbers", () => {
    let expected = []
    let result = generatePrimeNumbers(0)
    assert.deepEqual(result, expected)
  })

  it("Can generate one prime number", () => {
    let expected = [2]
    let result = generatePrimeNumbers(1)
    assert.deepEqual(result, expected)
  })

  it("Can generate two prime numbers", () => {
    let expected = [2, 3]
    let result = generatePrimeNumbers(2)
    assert.deepEqual(result, expected)
  })

  it("Can generate four prime numbers", () => {
    let expected = [2, 3, 5, 7]
    let result = generatePrimeNumbers(4)
    assert.deepEqual(result, expected)
  })

  it("Can generate ten prime numbers", () => {
    let expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    let result = generatePrimeNumbers(10)
    assert.deepEqual(result, expected)
  })

  it("Can generate 20 prime numbers", () => {
    let expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]
    let result = generatePrimeNumbers(20)
    assert.deepEqual(result, expected)
  })

  it("Can generate 1000 prime numbers", () => {
    const nums = generatePrimeNumbers(1000)

    let expected = 1000
    let result = nums.length
    assert.strictEqual(result, expected)

    expected = 7919
    result = nums[999]
    assert.strictEqual(result, expected)
  })

  it("Can generate 100000 prime numbers", () => {
    const nums = generatePrimeNumbers(100000)

    let expected = 100000
    let result = nums.length
    assert.strictEqual(result, expected)

    expected = 1299709
    result = nums[99999]
    assert.strictEqual(result, expected)
  })

})

describe(`igeneratePrimeMultiplicationTable - generates a multiplication
  table (represents by a 2d array) using the max prime number asked for`, function(){

  it("can generate a 2d array for 1 prime number", () => {
    let expected = [
      [" ", 2],
      [ 2 , 4],
    ]
    let result = generatePrimeMultiplicationTable(1)
    assert.deepEqual(result, expected)
  })

  it("can generate a 2d array for 5 prime numbers", () => {
    let expected = [
      [" ", 2, 3, 5, 7, 11],
      [2, 4, 6, 10, 14, 22],
      [3, 6, 9, 15, 21, 33],
      [5, 10, 15, 25, 35, 55],
      [7, 14, 21, 35, 49, 77],
      [11, 22, 33, 55, 77, 121],
    ]
    let result = generatePrimeMultiplicationTable(5)
    assert.deepEqual(result, expected)
  })
})
