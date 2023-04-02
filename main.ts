import { Persona } from "./persona";

console.log ('------------- Iniciamos ejecución del programa ------------');


let cliente1 = new Persona("Cristina", "Sanchez", 20, "22418976e", '20-12-1993','azul','F');
cliente1.CambiarDireccion('Gran vía','14','1º','A','37003','Salamanca','Salamanca')
cliente1.CambiarMail('personal','prueba1@gmail.com')
cliente1.CambiarTelefono('personal','658546372')
console.log('Primer cliente ')
console.log ('---------')
cliente1.mostrarDatos()
console.log ('---------')

console.log ('---------')
let cliente2 = new Persona("Maria", "Sanchez", 50, "13458976e", '20-04-1993','rojo','F');
cliente2.CambiarDireccion('Av.Portugal','4','6º','B','28001','Madrid','Madrid')
cliente2.CambiarMail('trabajo','prueba2@gmail.com')
cliente2.CambiarTelefono('personal','643876543')
console.log('Segundo cliente ')
console.log ('---------')
cliente2.mostrarDatos()
console.log ('---------')

console.log ('---------')
let cliente3 = new Persona("Lucas", "Martin", 23, "02428976e", '20-08-1983','negro','M');
cliente3.CambiarDireccion('Gran Vía','24','9º','F','28009','Madrid','Madrid')
cliente3.CambiarMail('personal','prueba3@gmail.com')
cliente3.CambiarTelefono('trabajo','632123123')
console.log('Tercer cliente ')
console.log ('---------')
cliente3.mostrarDatos()
console.log ('---------')


const clientes = [cliente1,cliente2, cliente3]
console.log ('*********')
console.log ('---------')
console.log('Modificación de un cliente')
console.log ('---------')
console.log ('---------')
for (const i of clientes){
    //Encuentro cliente por el DNI
    if (i.DNI == "13458976e"){
        console.log('1) Datos completos del cliente sin modificar:')
        i.mostrarDatos()
        //Cambio dirección, Mail y Teléfono
        i.CambiarDireccion('Rua Nueva','20','2º','C','37004','Valladolid','Valladolid')
        i.CambiarMail('trabajo','email_cambiado@gmail.com')
        i.CambiarTelefono('trabajo','6411111111')

/*      console.log('Nombre del cliente ',i.nombre, i.apellidos)
        console.log('Nueva dirección: ', i.direcciones) 
        console.log('Nuevo email: ', i.mails)
        console.log('Nuevo teléfono: ', i.teléfono)  */
        console.log ('---------')
        console.log('2) Datos completos del cliente modificado:')
        i.mostrarDatos()
    }
}



console.log ('----------- Finalizamos ejecución del programa -----------');