
export const generatePrimeNumbers = (amount) => {
  if(amount <= 0) return []

  let primeNumbers = [2]
  let num = 3
  while(primeNumbers.length < amount){
    if(isNumberPrime(num, primeNumbers)){
      primeNumbers.push(num)
    }
    num++
  }
  return primeNumbers
}

export const isNumberPrime = (number, priorPrimeNumbers) => {
  if(number === 2 || number === 3) return true

  let index = 0
  const smallestValueToCheck = Math.sqrt(number)
  while(priorPrimeNumbers[index] <= smallestValueToCheck){
    if(number % priorPrimeNumbers[index++] === 0) return false
  }
  return true
}
