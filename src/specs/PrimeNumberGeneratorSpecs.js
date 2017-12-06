import assert from "assert"
import { generatePrimeNumbers } from "./../PrimeNumberGenerator.js"

describe("Prime number generator", function(){

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

  it("Can generate two prime number", () => {
    let expected = [2, 3]
    let result = generatePrimeNumbers(2)
    assert.deepEqual(result, expected)
  })

  it("Can generate two prime number", () => {
    let expected = [2, 3, 5, 7]
    let result = generatePrimeNumbers(4)
    assert.deepEqual(result, expected)
  })

})
