class PrimeMultiplicationTable{
  constructor(primeNumberCount){
    this.primeNumbers = this.generatePrimeNumbers(primeNumberCount)
    this.maxPosition = this.primeNumbers.length+1
  }

  valueAt(x, y){
    if(x === 0 && y === 0) return "_"
    if(x === 0) return this.primeNumbers[y-1]
    if(y === 0) return this.primeNumbers[x-1]
    return this.primeNumbers[x-1] * this.primeNumbers[y-1]
  }

  infoAt(x,y){
    if(x === 0 && y === 0) return `This is not a number`
    if(x === 0) return `This is prime number ${y}`
    if(y === 0) return `This is prime number ${x}`
    return `This is the product of ${this.primeNumbers[x-1]} x ${this.primeNumbers[y-1]}`
  }

  generatePrimeNumbers(amount){
    if(amount % 1 !== 0) throw new Error(`Amount must be a whole number. Currently: ${amount}`)
    if(amount <= 0) return []

    let primeNumbers = [2]
    let num = 3
    while(primeNumbers.length < amount){
      if(this.isNumberPrime(num, primeNumbers)){
        primeNumbers.push(num)
      }
      num++
    }
    return primeNumbers
  }

  isNumberPrime(number, priorPrimeNumbers){
    if(number === 2 ||
      number === 3 ||
      number === 5) return true

    if(number % 2 === 0 ||
      number % 3 === 0 ||
      number % 5 === 0) return false

    let index = 3
    const smallestValueToCheck = Math.sqrt(number)
    while(priorPrimeNumbers[index] <= smallestValueToCheck){
      if(number % priorPrimeNumbers[index++] === 0) return false
    }
    return true
  }
}

export default PrimeMultiplicationTable
