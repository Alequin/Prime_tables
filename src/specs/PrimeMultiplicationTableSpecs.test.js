
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
})
