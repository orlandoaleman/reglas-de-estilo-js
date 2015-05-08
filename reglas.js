
// Definición de variables
var valor = 'las nubes';
var hueleANube = function (valor) {
    /// Descripción opcional de la función
};


/**
 * @param callback
 * @param tiempo
 * @param variable1
 * @param variable2
 * @param variable3
 * @param variable4
 * @param variable5
 * @param variable6
 */
function funcion1(callback, tiempo, variable1, variable2, variable3, variable4, variable5, variable6) {
}



// UTOPIA: Cada valor acompañado de un comentario indicando el argumento receptor, ¿a que se entiende mejor así?
funcion1(
    hueleANube  // callback
    , 1000      // delay
    , "valor1"  // variable1
    , "valor2"  // variable2
    , "valor3"  // variable3
    , "valor4"  // variable4
    , "valor5"  // variable5
    , "valor6"  // variable5
);

// Sin embargo, es preferible usar 'named-args': una única variable de tipo objeto

/**
 * @param args
 * @param args.callback
 * @param args.tiempo
 * @param args.variable1
 * @param args.variable2
 * @param args.variable3
 * @param args.variable4
 * @param args.variable5
 */
function funcion2(args) { }



funcion2({
    callback: hueleANube
    , tiempo: 1000
    , variable1: "valor1"
    , variable2: "valor2"
    , variable3: "valor3"
    , variable4: "valor4"
    , variable5: "valor5"
    , variable6: "valor6"
});



// Llamadas a función con funciones anónimas como parámetros
setTimeout(
    function () {
        /// Descripción de la función, especialmente importante cuando es puramente 'lambda'
    },
    1000
);



// La invocación de una funcion tiene '(' pegado al nombre de la funcion y sus parámetros espaciados a los extremos
// La cantidad numerica en este caso es facilmente identificable por lo que no hay ni que comentarla ni ponerla en una variable
// salvo que sea un valor que se repita y convenga identificarlo
setTimeout( hueleANube, 1000 );



// Sentencias: Un buen espaciado permite ver a vista de pájaro lo que se está comprobando
if ( valor === 'las nubes' ) {
    // Cuerpo siempre entre llaves, salvo que se vaya a ejecutar un 'return', un 'break' o un 'continue'
}
else if ( valor === 'las olas' ) {

}
else {
    
}

/// Evitaremos las 'Yoda conditions'
if ( 'las nubes' === valor ) {

}


// -------------- Definición de un módulo Clase
// La primera sección se escribe de forma que al editor no le den "arrebatos de locura" identando.
define(
[
    "VistaJS2" /// Clase de la que hereda (primer elemento)
    , "FuncionesJS2"        /// Resto de clases, ordenadas por orden alfabético
    , "ViewControllerJS2"
]
), function
(
    VistaJS2
    , F
    , ViewControllerJS2
) {
    
    function NombreClase() {
        
    }
   
    return NombreClase;
});
