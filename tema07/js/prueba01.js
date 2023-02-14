const urlScript1 = 'https://vgonzalez165.github.io/dwec/assets/scripts/dynamic_script_1.js';
const urlScript2 = 'https://vgonzalez165.github.io/dwec/assets/scripts/dynamic_script_2.js';
const urlScript3 = 'https://vgonzalez165.github.io/dwec/assets/scripts/dynamic_script_3.js';
const urlScript4 = 'https://vgonzalez165.github.io/dwec/assets/scripts/dynamic_script_4.js';    // Este NO EXISTE

// ######################################################################################################
// Ejemplo 1: JAVASCRIPT ES ASÃNCRONO
// ######################################################################################################

// function loadScript(src) {
//     let script = document.createElement('script');
//     script.src = src;
//     document.head.append(script);
// }

// console.log('Antes de invocar la carga del script');
// loadScript(urlScript1);
// console.log('DespuÃ©s de invocar la carga del script');

// // Cuando se ejecuta esta lÃ­nea el script aÃºn no se ha cargado
// console.log(msg1);



// ######################################################################################################
// Ejemplo 2: SOLUCIÃ“N UTILIZANDO CALLBACKS
// ######################################################################################################

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     // El evento 'load' se dispara cuando acaba de cargarse un recurso
//     // Cuando esto sucede, ejecutamos la funciÃ³n callback
//     script.onload = () => callback();

//     document.head.append(script);
// }

// console.log('Antes de invocar la carga del script');
// loadScript(urlScript1, function() {
//     // AquÃ­ ejecutamos lo que necesite el contenido del script
//     console.log(msg1);
// });
// console.log('DespuÃ©s de invocar la carga del script');



// ######################################################################################################
// Ejemplo 3: CALLBACK DENTRO DE UN CALLBACK
// ######################################################################################################

// Â¿QuÃ© pasa cuando queremos cargar dos scripts secuencialmente?
// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback();
//     document.head.append(script);
// }

// // SoluciÃ³n: ponemos la segunda llamada dentro del callback
// loadScript( urlScript1, function() {
//     console.log('Dentro del primer callback. Cargamos el segundo script')
//     loadScript( urlScript2, function() {
//         console.log('Dentro del segundo callback');
//     } )
// } )


// ######################################################################################################
// Ejemplo 4: MANEJO DE ERRORES
// ######################################################################################################

// Â¿Y si el script no carga por algÃºn motivo? Podemos mejorar el cÃ³digo rastreando errores

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;

//     // El evento error se dispara cuando hay algÃºn error al cargar el recurso
//     script.onload = () => callback( null, script );
//     script.onerror = () => callback( new Error(`Error de carga de script ${src}`) );

//     document.head.append(script);
// }

// // SoluciÃ³n: ponemos la segunda llamada dentro del callback
// loadScript( urlScript1, function( error, script ) {
//     if (error) {
//         console.log('AquÃ­ manejarÃ­amos el error del script 1');
//     } else {
//         console.log('El script 1 se ha cargado con Ã©xito')
//     }
// } );

// loadScript( urlScript4, function( error, script ) {
//     if (error) {
//         console.log('AquÃ­ manejarÃ­amos el error del script 4');
//     } else {
//         console.log('El script 4 se ha cargado con Ã©xito')
//     }
// } );

// Esto se llama CALLBACK ERROR PRIMERO:
//      - El primer argumento se reserva para el error
//      - El resto para resultado exitoso


// ######################################################################################################
// Ejemplo 5: CALLBACK HELL. PIRÃMIDE INFERNAL
// ######################################################################################################

// Problema: Â¿QuÃ© pasa cuando queremos cargar mÃºltiples script secuencialmente?

// SoluciÃ³n: ponemos la segunda llamada dentro del callback

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
//     script.onload = () => callback( null, script );
//     script.onerror = () => callback( new Error(`Error de carga de script ${src}`) );
//     document.head.append(script);
// }

// loadScript( urlScript1, function( error, script ) {
//     if (error) {
//         console.log('Manejo de error del script1');
//     } else {
//         console.log('El script 1 se ha cargado con Ã©xito')
//         loadScript( urlScript2, function( error, script ) {
//             if (error) {
//                 console.log("Manejo de error del script 2");
//             } else {
//                 console.log("El script 2 se ha cargado con Ã©xito");
//                 loadScript( urlScript3, function( error, script ) {
//                     if (error) {
//                         console.log("Manejo de error del script 3");
//                     } else {
//                         console.log("El script 3 se ha cargado con Ã©xito");
//                         loadScript( urlScript4, function( error, script ) {
//                             if (error) {
//                                 console.log("Manejo de error del script 4");
//                             } else {
//                                 console.log("El script 4 se ha cargado");
//                             }
//                         })
//                     }
//                 })
//             }
//         })
//     }
// } );



// ######################################################################################################
// Ejemplo 6: PROMESAS
// ######################################################################################################

// Las promesas son un mecanismo de JavaScript para gestionar eventos asÃ­ncronos.
//
// La sintaxis para declarar una promesa es:
    //  let promise = new Promise( function(resolve, reject) {
    //                      // El cÃ³digo del ejecutor    
    //                });
// 
// AquÃ­ tenemos:
//      - Ejecutor: se ejecuta automÃ¡ticamente cuando se crea la promesa. Es el cÃ³digo que toma un tiempo.
//      - resolve: callback que llama automÃ¡ticamente JavaScript si la promesa finaliza con Ã©xito
//      - reject: callback que llama automÃ¡ticamente JavaScript si la promesa tiene un error

// const url = urlScript1;

// const promise = new Promise( function(resolve, reject) {
//     // Este es el cÃ³digo que se ejecuta de forma asÃ­ncrona
//     let script = document.createElement('script');
//     script.src = url;
//     document.head.append(script);

//     // Cuando se ha ejecutado el cÃ³digo se invoca la funciÃ³n resolve()
//     // para indicar que la promesa se ha cumplido
//     script.onload  = () => resolve();
// } );

// console.log('El cÃ³digo se sigue ejecutando mientras se resuelve la promesa.');
// console.log(promise);

// // Con el then indicamos quÃ© hay que hacer una vez que se haya cumplido la promesa
// promise.then( () => {
//     console.log('Esto se ejecuta una vez que la promesa se haya cumplido.');
//     console.log(promise);
// } )



// ######################################################################################################
// Ejemplo 7: PROMESAS QUE NO SE CUMPLEN
// ######################################################################################################

// Hay ocasiones en que las promesas no se cumplen, por ejemplo, si hay un error al cargar el script.
// En esos casos se debe invocar la funciÃ³n reject() y capturar el error con catch.

// const url = urlScript4;

// const promise = new Promise( function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = url;
//     document.head.append(script);

//     script.onload  = () => resolve();
//     script.onerror = () => reject();
// } );


// promise
//     .then( () => {
//         console.log('La promesa se ha cumplido.');
//         console.log(promise);
//     } )
//     .catch( () => {
//         console.log('La promesa NO SE HA CUMPLIDO.');
//         console.log(promise);
//     } );


// ######################################################################################################
// Ejemplo 8: DEVOLVIENDO DATOS CON LAS PROMESAS
// ######################################################################################################

// Al llamar a la funciÃ³n resolve() o reject() se le puede pasar un valor como parÃ¡metro, el cual podrÃ¡ ser
// accedido desde el then o el catch. 

// const url = urlScript1;

// const promise = new Promise( function(resolve, reject) {
//     let script = document.createElement('script');
//     script.src = url;
//     document.head.append(script);

//     script.onload  = () => resolve(`Se ha cargado el script ${url}`);
//     script.onerror = () => reject(`ERROR en la carga del script ${url}`);
// } );


// promise
//     .then( (data) => {
//         console.log( data );
//     } )
//     .catch( (error) => {
//         console.log( error );
//     } );


// ######################################################################################################
// Ejemplo 9: FUNCIONES QUE DEVUELVEN PROMESAS
// ######################################################################################################

// En los ejemplos anteriores hemos utilizado directamente las promesas, pero tambiÃ©n se puede utilizar
// una promesa devuelta por una funciÃ³n.

// const url = urlScript1;

// function loadScript( src ) {
//     return new Promise( function(resolve, reject) {
//         let script = document.createElement('script');
//         script.src = url;
//         document.head.append(script);

//         script.onload  = () => resolve(`Se ha cargado el script ${url}`);
//         script.onerror = () => reject(`ERROR en la carga del script ${url}`);
//     } );
// }

// loadScript( urlScript1 )
//     .then( data => console.log(data) )
//     .catch( error => console.log(error) )

     

// ######################################################################################################
// Ejemplo 10: ENCADENAMIENTO DE PROMESAS
// ######################################################################################################

// En el ejemplo anterior tenemos una Ãºnica promesa con dos controladores. Si la ejecutas mÃºltiples veces
// verÃ¡s que no siempre se resuelven en el mismo orden.
//
// Si queremos ejecutar una secuencia de tareas asÃ­ncronas debemos ENCADENAR las promesas


// function loadScript(url) {
//     return new Promise( function(resolve, reject) {
//         let script = document.createElement('script');

//         script.src = url;
//         script.onload  = () => resolve(script);
//         script.onerror = () => reject(new Error(`Error de carga de script ${url}`));
        
//         document.head.append(script);
//     })
// }

// let promise = loadScript(urlScript1)
//         .then( function(script) {
//             return loadScript( urlScript2 );
//         })
//         .then( function(script) {
//             return loadScript( urlScript3 );
//         } )
//         .then( function(script) {
//             console.log("AquÃ­ ya se han cargado los tres scripts");
//             console.log(msg1);
//             console.log(msg2);
//             console.log(msg3);
//         })   

//         console.log(promise);


















// *****************************
// BORRAR


// const url = urlScript1;

// const promise = new Promise( (resolve, reject) => {
//     let script = document.createElement('script');
//         script.src = url;
//         script.onload  = () => resolve('cargada');
//         script.onerror = () => reject(new Error(`Error de carga de script ${url}`));
        
//         document.head.append(script);
// } )

// console.log(promise);
// promise.then( (data) => {
//     console.log(promise)
//     console.log(data)
// } )