var myEmptyArray = new Array(3); // Array vacio de 3 posiciones.
console.log(myEmptyArray); // [empty × 3]


var myArray = new Array(3); // Array vacio de 3 posiciones.
myArray.fill("Hola");
console.log(myArray); // ["Hola", "Hola", "Hola]

var myArray = new Array(3).fill("Hola");
console.log(myArray); // ["Hola","Hola","Hola"]


// Constantes
var WORK_HOURS = [
    "08:00 - 09:00",
    "09:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "15:00 - 16:00",
    "16:00 - 17:00"
  ];
  
  // Datos
  var myTeam = [
    {
      name: "María",
      availability: new Array(8).fill(true)
    },
    {
      name: "Pedro",
      availability: new Array(8).fill(true)
    },
    {
      name: "Esther",
      availability: new Array(8).fill(true)
    },
    {
      name: "Marcos",
      availability: new Array(8).fill(true)
    },
  ];

  //1** Hacer que cada miembro coincida en su availability en true o false

  function añadirDisponibilidad () {
      for (const worker of myTeam) {
          for (let index = 0; index < worker.availability.length; index++) {
        if (Math.random() < 0.5) {
            worker.availability[index] = true
        }  else {
            worker.availability[index] = false
        } 
          }
}
     //1* console.log(myTeam)
  } 
  añadirDisponibilidad()
  
  //2 ** Mostrar cada miembro del equipo con su rango de horario si tiene disponible o no
  function verDisponibilidad () {
    for (const worker of myTeam) {
        console.log("Disponibilidad de " + worker.name)

        for (let index = 0; index < worker.availability.length; index++) {
            console.log(WORK_HOURS[index] + (worker.availability[index] ? " si" : " no") )
         }
    }      
  }
  verDisponibilidad()
    

            

  //3 ** Comprobar tramos horario que coinciden disponibles o ver si no coinciden.

  function buscarHorasLibres () {
      var huecosLibres = [];
    for (const worker of myTeam) {
        for (let index = 0; index < worker.availability.length; index++) {
            if (worker.availability[index]){
                huecosLibres.push(index)
            }  
          }
     }   
     var huecosOrdenados = huecosLibres.sort();
     for ( let index = 0; index <= 8; index++)  {
         var arrayResultado = huecosOrdenados.filter((element) => element == index )
         //3 * console.log(arrayResultado)
         if( arrayResultado.length == 4){
             return "Hueco libre disponible: " + WORK_HOURS[index]
            }
 } 
     return "No hay hueco libre";
   }
   console.log(buscarHorasLibres())
