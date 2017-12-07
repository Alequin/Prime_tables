
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
    let expected = " "
    let result = primeTable.valueAt(0,0)
    assert.strictEqual(result, expected)
  })
})
