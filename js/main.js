let continuar = true;
console.log("🧮 ¡Bienvenido a la calculadora interactiva!");
do {
    let opcion = parseInt(prompt("Seleccione una opción:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir."));
    switch (opcion) {
            case 1:
                let suma1 = parseFloat(prompt("Ingrese el primer número:"));
                let suma2 = parseFloat(prompt("Ingrese el segundo número:"));
                console.log(`Resultado de la suma: ${suma1} + ${suma2} = ${suma1 + suma2}`);
                break;
            case 2:
                let resta1 = parseFloat(prompt("Ingrese el primer número:"));
                let resta2 = parseFloat(prompt("Ingrese el segundo número:"));
                console.log(`Resultado de la resta: ${resta1} - ${resta2} = ${resta1 - resta2}`);
                break;
            case 3:
                let multi1 = parseFloat(prompt("Ingrese el primer número:"));
                let multi2 = parseFloat(prompt("Ingrese el segundo número:"));
                console.log(`Resultado de la multiplicación: ${multi1} * ${multi2} = ${multi1 * multi2}`);
                break;
            case 4:
                let div1 = parseFloat(prompt("Ingrese el dividendo:"));
                let div2 = parseFloat(prompt("Ingrese el divisor:"));
                if (div2 !== 0) {
                    console.log(`Resultado de la división: ${div1} / ${div2} = ${div1 / div2}`);
                } else {
                    console.log("Error: No se puede dividir entre cero.");
                }
                break;
            default:
                console.log("Opción no válida.");
    }
    let confirmacion = prompt("¿Desea realizar otra operación? (si/no)").toLowerCase();
    if (confirmacion === "no"){
        continuar = false;
        alert("Gracias por usar la calculadora. ¡Hasta luego!");
    }
} while (continuar);