function factor(num) {
    let result = num;
    if (num === 0 || num === 1)
        return 1;
    while (num > 1) {
        num--;
        result = result * num;
    }
    return result;
}

// Llamar a la función con el parámetro