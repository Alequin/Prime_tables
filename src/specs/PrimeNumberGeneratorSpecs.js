import assert from "assert"
import {
  generatePrimeNumbers,
  isNumberPrime,
} from "./../PrimeNumberGenerator.js"

describe(`isNumberPrime - checks if a number if prime using
  all previous prime numbers`, function(){

  it("will return true when number to check is 2", () => {
    assert.ok(isNumberPrime(2, []))
  })

  it("will return true when number to check is 3", () => {
    assert.ok(isNumberPrime(3, [2]))
  })

  it("will return false when number to check is 4", () => {
    assert.ok(!isNumberPrime(4, [2]))
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
