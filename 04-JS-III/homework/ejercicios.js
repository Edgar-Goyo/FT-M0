//function incrementarPorUno(array)
var a=[10,10,16,12]
for (let b=0; b<a.length; b++)
console.log (a[b]+1);

//agregarItemAlFinalDelArray
// var palabras=["Henry", "JavaScriuptClass"]
// console.log (palabras.slice(0))+"";
// palabras.splice (1)
// console.log (palabras.slice(1))


//function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings/cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
    // Tu código:
    var palabras = ["uno", "dos","tres"]
    console.log (palabras [0]+ " " + palabras[1])

//function arrayContiene(array, elemento) {
// Comprueba si el elemento existe dentro de "array"
// Devuelve "true" si está, o "false" si no está
// Tu código:
var array =["elemento", "cosa"]
console.log (array.includes ("elemento"))

//function agregarNumeros(numeros) {
    // "numeros" debe ser un arreglo de enteros (int/integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:
    var numeros = [1, 2, 3, 4, 5], suma = 0;
    numeros.forEach (function(numero){
        suma += numero;
    });
    console.log(suma);

//function promedioResultadosTest(resultadosTest) {
        // "resultadosTest" debe ser una matriz de enteros (int/integers)
        // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
        // Tu código:

        var resultadosTest =[2,5,6,7];
        var suma = 0;

for(var x = 0; x < resultadosTest.length; x++){
  suma += resultadosTest[x];
}
console.log (suma)
let avg = suma / resultadosTest.length;
console.log (avg)

//function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int/integers)
    // Devuelve el número más grande
    // Tu código:
// var a = [2,8,9,10];
//     for(int i=0; i<a.length && i++){
//         // System.out.println(nombres[i] + " " + sueldos[i]);
//         if(a[i]>numeromayor){ 
//             numeromayor = sueldos[i];
//         }
//     }
    
//     System.out.println(numeromayor);



//     var arreglo  = [5,10,25,58,12];
//     maximo = 0;

// for(var i=0,len=arreglo .length;i<len;i++){
//     if(maximo < arreglo [i]){
//         maximo = arreglo [i];
//     }
// }
    
var arreglo = [3 , 6, 2, 56, 32, 5, 89, 32];
var mayor = 0;
 
for(i = 0; i < arreglo.length; i++){
    if (arreglo[i] > mayor)
    {
        mayor = arreglo[i];
    }
}
 
console.log(mayor);


//function cuentoElementos(arreglo){
    //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
    //Escribe tu código aquí
  var cuentoElementos = [18, 58,56,18,45,18]
  conteo = 0
  for (var i=0; i < cuentoElementos.length; i++ ){
      if (cuentoElementos[i] > 18) {
        conteo = conteo + 1
      }
      
}
console.log (conteo)

//function diaDeLaSemana(numeroDeDia) {
    //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
    //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
    //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
    //Escribe tu código aquí   
    console.log ("dia de la semana");

    var diaDeLaSemana = [1,2,3,4,5,6,7];

    for (var i=0; i< diaDeLaSemana.length; i++){
         if (diaDeLaSemana [i]=1) 
         console.log ("Es fin de semana");
         else if (diaDeLaSemana [i]=7) ;
         console.log ("Es fin de semana");
          
         //(diaDeLaSemana[i]=7);

            //console.log ("Es fin de semana");
            //else console.log ("Es dia laboral")
                


         } 
        
            
            
            //||diaDeLaSemana [i]=7 )
        //console.log ("es fin de semana");
        //else ("es dia laboral")
        
    


       


        
    




















