document.addEventListener("DOMContentLoaded", function (){
    let bolEdad =true;
    console.log("Iniciando JS", bolEdad);
    let resultado, resultado2;
    resultado = 10+30; //Sumo
    //resultado2 ="10"+30; //Concatenar
    //resultado2 =parseInt("10")+30; //Sumar cambiando el tipo de dato a entero
    resultado2 = Number("10")+30; //Sumar cambiando el tipo de dato a entero
    console.log("Comparar Operaciones", {resultado, resultado2}); //Objeto tipo JSON

    resultado = 10-30; //Resta
    console.log("Resta", resultado);

    resultado = 10*30; //Multiplicación
    console.log("Multiplicación", resultado);

    resultado = 10/30; //División
    console.log("División", resultado);

    resultado = 10%3; //Módulo
    console.log("Módulo", resultado);

    resultado = 10**3; //Potencia
    console.log("Potencia", resultado);

    resultado = Math.pow(10,3); //Potencia
    console.log("Potencia con Math", resultado);

    resultado = Math.sqrt(100); //Raíz cuadrada
    console.log("Raíz cuadrada", resultado);

    resultado = Math.PI; //Valor de PI
    console.log("Valor de PI", resultado);

    resultado++;
    resultado--;

    resultado += 10; //resultado = resultado + 10;
    resultado -= 5; //resultado = resultado - 5;
    resultado *= 2; //resultado = resultado * 2;
    resultado /= 2; //resultado = resultado / 2;

    let strMensaje = `El resultado es: ${resultado}`; //Poner el valor de la variable resultado en el mensaje, es mas eficiente
    let strMensaje2 = 'El resultado: '+resultado; //Poner el valor de la variable resultado en el mensaje

    let strDoubleQuotes = "Esto es \"UNA CITA BIBLIOGRAFICA\" se debe usar \\ para escapar el simbolo"; //Para poner comillas dobles en un string
    let strSingleQuotes = 'Esto es "UNA CITA BIBLIOGRAFICA" no se debe usar \ para escapar el simbolo '; //Para poner comillas simples en un string
    //console.log("Comillas", {strDoubleQuotes, strSingleQuotes});

    const objPersona = {
        "nombre": "Orlando",
        "apellido": "Betancourth",
        "edad": 40,
        "correo": "obentacourthunicah@gmail.com",
    }; //Objeto JSON

    objPersona.edad = 20; //Cambiar la edad del objeto JSON

    const arrPersonas = []; //Lista Dinamica de Objetos

    arrPersonas.push(objPersona); //Agregar un objeto a la lista de objetos

    //Estructuras de Control 
    //IF
    let a = 10;
    let b = "10";
    if(a == b){
        console.log("Si entro al a == b"); //Ya que comparo el texto y el numero 
    }
    if(a != b){
        console.log("Si entro al a != b"); //Ya que comparo el texto y el numero
    }
    else{
        console.log("No entro al a != b");
    }

    if (a === b){
        console.log("Si entro al a === b"); //Evalua que ambas variables sean del mismo tipo, y despues compara
    }
    else{
        console.log("No entro al a === b");
    }

    if (a !== b){
        console.log("Si entro al a !== b"); //Evalua que ambas variables sean del mismo tipo, y despues compara
    }
    else{
        console.log("No entro al a !== b");
    }

    const strGreaterThan10 = (a > 10) ? "A es mayor a 10" : "A es menor o igual a 10"; //Operador Ternario
    console.log("Operador Ternario: ", strGreaterThan10);

    let strValueSelected = 'ACT'; // ACT | INA | SPN | RTR |CTN
    switch(strValueSelected){
        case "ACT":
            console.log("SelectedValue: ", strValueSelected);
            break;
        case "INA":
            //Expresiones
            break;
        case "SPN":
            //Expresiones
            break;
        case "RTR":
            //Expresiones
            break;
        case "CTN":
            //Expresiones
            break;
        default:
            console.log("ERROR", "No hay handlera para expresion");
            break;
    }

   // Estructuras de Ciclos o Iteraciones.
   for (let i=0; i<10; i++){
    console.log("Iteracion for: ", i);
    }
    let intWhile = 10;
    while ( intWhile >= 0){
        console.log("Iteracion while: ", intWhile);
        intWhile -= 1;
    }

    let intDoWhile = 50;
    do {
        console.log("Iteración Do While", intDoWhile);
        intDoWhile--;
    } while (intDoWhile < 10);

    const arrColores = ["red","blue","green", 123, 255];

    arrColores.forEach(
        (color)=>{
            console.log("Color Iterando: ", color);
        }
    );

    const miSlider = new SliderController();

});