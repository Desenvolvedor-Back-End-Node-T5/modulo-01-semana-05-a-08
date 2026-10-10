const numeros = [1, 2, 3, 100, 500, 678];

numeros.forEach(numero => {
    // console.log(`O número do array é ${numero}`);
    console.log('O número do array é ' + numero);
});

const dobro = numeros.map(numero => {
    return numero * 2;
});

console.log(dobro);
