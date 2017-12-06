
export const generatePrimeNumbers = (amount) => {
  if(amount <= 0) return []

  let primeNumbers = [2]
  let num = 3
  while(primeNumbers.length < amount){
    let isCurrentPrime = true;
    for(let primeNum of primeNumbers){
      if(primeNum > Math.sqrt(num)) break
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
