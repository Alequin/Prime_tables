
import assert from "assert"
import PrimeMultiplicationTable from "./../PrimeMultiplicationTable"

describe("test", function(){

  let primeTable

  beforeEach(() => {
    primeTable = new PrimeMultiplicationTable(5)
  })

  it("generates the required number of prime numbers on construction", () => {
    let expected = 5
    let result = primeTable.primeNumbers.length
    assert.strictEqual(result, expected)
  })

  it("can get value at position (1,1) on table", () => {
    let expected = 4
    let result = primeTable.valueAt(1,1)
    assert.strictEqual(result, expected)
  })

  it("can get value at position (1,0) and (0,1) on table", () => {
    let expected = 2

    let result = primeTable.valueAt(1,0)
    assert.strictEqual(result, expected)

    result = primeTable.valueAt(0,1)
    assert.strictEqual(result, expected)
  })

  it("can get value at position (0,0) on table", () => {
    let expected = "_"
    let result = primeTable.valueAt(0,0)
    assert.strictEqual(result, expected)
  })

  it("can get value at position (5,5)", () => {
    let expected = 121
    let result = primeTable.valueAt(5,5)
    assert.strictEqual(result, expected)
  })

  it("cannnot provide a decimal number as an argument", () => {
    assert.throws(() => {
      new PrimeMultiplicationTable(1.5)
    })
  })
})

describe(`isNumberPrime - checks if a number if prime using
  previous prime numbers`, function(){

  let primeTable

  beforeEach(() => {
    primeTable = new PrimeMultiplicationTable(5)
  })

  it("will return true when number to check is 2", () => {
    assert.ok(primeTable.isNumberPrime(2, []))
  })

  it("will return true when number to check is 3", () => {
    assert.ok(primeTable.isNumberPrime(3, [2]))
  })

  it("will return false when number to check is 4", () => {
    assert.ok(!primeTable.isNumberPrime(4, [2]))
  })

  it("will return false when number to check is 10", () => {
    assert.ok(!primeTable.isNumberPrime(10, [2,3,5,7]))
  })

  it("will return false when number to check is 18", () => {
    assert.ok(!primeTable.isNumberPrime(18, [2, 3, 5, 7, 11, 13, 17]))
  })

  it("will return true when number to check is 97", () => {
    assert.ok(primeTable.isNumberPrime(97, [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89]))
  })
})

describe("generatePrimeNumbers - creates an array of prime numbers", function(){

  let primeTable

  beforeEach(() => {
    primeTable = new PrimeMultiplicationTable(5)
  })

  it("Can generate zero prime numbers", () => {
    let expected = []
    let result = primeTable.generatePrimeNumbers(0)
    assert.deepEqual(result, expected)
  })

  it("Can generate one prime number", () => {
    let expected = [2]
    let result = primeTable.generatePrimeNumbers(1)
    assert.deepEqual(result, expected)
  })

  it("Can generate two prime numbers", () => {
    let expected = [2, 3]
    let result = primeTable.generatePrimeNumbers(2)
    assert.deepEqual(result, expected)
  })

  it("Can generate four prime numbers", () => {
    let expected = [2, 3, 5, 7]
    let result = primeTable.generatePrimeNumbers(4)
    assert.deepEqual(result, expected)
  })

  it("Can generate ten prime numbers", () => {
    let expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    let result = primeTable.generatePrimeNumbers(10)
    assert.deepEqual(result, expected)
  })

  it("Can generate 20 prime numbers", () => {
    let expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]
    let result = primeTable.generatePrimeNumbers(20)
    assert.deepEqual(result, expected)
  })

  it("Can generate 1000 prime numbers", () => {
    const nums = primeTable.generatePrimeNumbers(1000)

    let expected = 1000
    let result = nums.length
    assert.strictEqual(result, expected)

    expected = 7919
    result = nums[999]
    assert.strictEqual(result, expected)
  })

  it("Can generate 100000 prime numbers", () => {
    const nums = primeTable.generatePrimeNumbers(100000)

    let expected = 100000
    let result = nums.length
    assert.strictEqual(result, expected)

    expected = 1299709
    result = nums[99999]
    assert.strictEqual(result, expected)
  })
})
