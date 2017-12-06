
export const generatePrimeMultiplicationTable = (amount) => {
  const primeNumbers = [1, ...generatePrimeNumbers(amount)]
  amount++

  const table = [primeNumbers]
  for(let row=1; row<amount; row++){
    const currentRow = []
    table.push(currentRow)
    for(let column=0; column<amount; column++){
      currentRow.push(primeNumbers[row] * primeNumbers[column])
    }
  }
  table[0][0] = " "
  return table
}

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

export const isNumberPrime = (number, primeNumbers) => {
  if(number === 2 || number === 3) return true

  let index = 0
  const smallestValueToCheck = Math.sqrt(number)
  while(primeNumbers[index] <= smallestValueToCheck){
    if(number % primeNumbers[index++] === 0) return false
  }
  return true
}
