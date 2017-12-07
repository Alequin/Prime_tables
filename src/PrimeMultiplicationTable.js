import { generatePrimeNumbers } from "./PrimeNumberGenerator"

class PrimeMultiplicationTable{
  constructor(primeNumberCount){
    this.primeNumbers = generatePrimeNumbers(primeNumberCount)
  }

  valueAt(x, y){
    if(x === 0 && y === 0) return " "
    if(x === 0) return this.primeNumbers[y-1]
    if(y === 0) return this.primeNumbers[x-1]
    return this.primeNumbers[x-1] * this.primeNumbers[y-1]
  }
}

export default PrimeMultiplicationTable
