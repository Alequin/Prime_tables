
export const generatePrimeNumbers = (amount) => {
  if(amount === 0) return []
  if(amount === 1) return [2]

  let primeNumbers = [2]
  let num = 3
  while(primeNumbers.length < amount){
    let isCurrentPrime = true;
    for(let primeNum of primeNumbers){
      if(num % primeNum === 0){
        isCurrentPrime = false
        break
      }
    }
    if(isCurrentPrime) primeNumbers.push(num)
    num++
  }
  return primeNumbers
}
