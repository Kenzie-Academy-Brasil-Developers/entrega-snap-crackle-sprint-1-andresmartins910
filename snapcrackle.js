function snapCrackle(maxValue) {
    let stringSnapCrackle = ""
    for (i = 1; i <= maxValue; i++) {

        // Se o número for ímpar e não for múltiplo de 5, no lugar dele, concatenar "Snap"
        if (!(i % 2 === 0) && !(i % 5 === 0)) {
            if (i < maxValue) {
                stringSnapCrackle += "Snap" + ", "
            } else {
                stringSnapCrackle += "Snap"
            }
        }

        // Se o número for múltiplo de 5, no lugar dele, concatenar "Crackle"
        else if ((i % 5 === 0) && (i % 2 === 0)) {
            if (i < maxValue) {
                stringSnapCrackle += "Crackle" + ", "
            } else {
                stringSnapCrackle += i + "Crackle"
            }
        }

        // Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, concatenar "SnapCrackle"
        else if (!(i % 2 === 0) && (i % 5 === 0)) {
            if (i < maxValue) {
                stringSnapCrackle += "SnapCrackle" + ", "
            } else {
                stringSnapCrackle += "SnapCrackle"
            }
        }

        // Se número não for nem ímpar nem múltiplo de 5, concatenar o próprio número
        else {
            if (i < maxValue) {
                stringSnapCrackle += i + ", "
            } else {
                stringSnapCrackle += i
            }
        }
    }
    return stringSnapCrackle
}