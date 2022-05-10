
let operacion = prompt('Elige una opción: \n1 - Tipo de Triángulo \n2 - Área del Triángulo \n3 - Perímetro del Triángulo \nX - Salir')

let area;
let perimetro;
let tipo;
let base;
let altura;


while (operacion != 'X') {

    let ladoA = parseFloat(prompt('Ingresa la longitud del lado "a" del triángulo'));
    let ladoB = parseFloat(prompt('Ingresa la longitud del lado "b" del triángulo'));
    let ladoC = parseFloat(prompt('Ingresa la longitud del lado "c" del triángulo'));

    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = 'equilatero'
    } else if (ladoA == ladoB || ladoB == ladoC || ladoC == ladoA) {
        tipo = 'isósceles'
    } else {
        tipo = 'escaleno'
    }
    switch (operacion) {
        case '1':
            if (tipo === 'equilatero') {
                alert('Tu triángulo es ' + tipo)
            } else if (tipo === 'isósceles') {
                alert('Tu triángulo es ' + tipo)
            } else {
                alert('Tu triángulo es ' + tipo)
            }
            break;
        case '2':
            if (tipo == 'equilatero') {
                area = ((Math.sqrt(3)) / 4) * ladoA * ladoA
                alert('El área del triángulo es: ' + area)
            } else if (tipo == 'isósceles') {
                if (ladoA === ladoB) {
                    base = ladoC;
                    lado = ladoA;
                } else if (ladoB === ladoC) {
                    base = ladoA;
                    lado = ladoB;
                } else {
                    base = ladoB;
                    lado = ladoC;
                }
                area = base * (Math.sqrt((lado * lado) - (base * base * .25))) * .5;
                alert('El área del triángulo es: ' + area)
            } else {
                alert('No tengo suficiente información para calcular el área de un triángulo escaleno')
            }
            break;
        case '3':
            perimetro = ladoA + ladoB + ladoC;
            alert('El perímetro de tu triángulo es: ' + perimetro);
            break;
        default:
            alert('Elegiste una opcion invalida');
            break;
    }
    operacion = prompt('Elige una opción: \n1 - Tipo de Triángulo \n2 - Área del Triángulo \n3 - Perímetro del Triángulo \nX - Salir')
}