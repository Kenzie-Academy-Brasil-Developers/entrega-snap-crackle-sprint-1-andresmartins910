// função para verificar se um determinado número é primo
// código retirado do seguinte link
// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

//SnapCracklePrime
function snapCracklePrime(maxValue) {
    let stringSnapCrackle = ""
    for (i = 1; i <= maxValue; i++) {

        // Se o número for ímpar e não for múltiplo de 5, no lugar dele, concatenar "Snap"
        if (!(i % 2 === 0) && !(i % 5 === 0)) {
            // Se o número for primo, adiciona Prime na string
            if (isPrime(i)) {
                stringSnapCrackle += "SnapPrime, "
            // Se não, não adiciona
            } else if (!(isPrime(i))) {
                stringSnapCrackle += "Snap, "
            }
        }

        // Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle"
        else if ((i % 5 === 0) && (i % 2 === 0)) {
            // Se o número for primo, adiciona Prime na string
            if (isPrime(i)) {
                stringSnapCrackle += "CracklePrime, "
            // Se não, não adiciona
            } else if (!(isPrime(i))) {
                stringSnapCrackle += "Crackle, "
            }
        }

        // Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle"
        else if (!(i % 2 === 0) && (i % 5 === 0)) {
            // Se o número for primo, adiciona Prime na string
            if (isPrime(i)) {
                stringSnapCrackle += "SnapCracklePrime, "
            // Se não, não adiciona
            } else if (!(isPrime(i))) {
                stringSnapCrackle += "SnapCrackle, "
            }
        }

        // Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número
        else {
            // Se o número for primo, adiciona Prime na string
            if (isPrime(i)) {
                stringSnapCrackle += "Prime, "
            // Se não, não adiciona
            } else if (!(isPrime(i))) {
                stringSnapCrackle += i + ", "
            }
        }
    }
    return stringSnapCrackle.slice(0, -2)
}

console.log(snapCracklePrime(15))