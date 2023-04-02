import { Mail } from "./mail";
import { Teléfono } from "./telefono";
import { Dirección } from "./direccion";

export class Persona {
    private _nombre:string;
    private _apellidos:string;
    private _edad:number | undefined | string;
    private _DNI:string;
    private _cumpleaños:string;
    private _colorFavorito:string;
    private _sexo:string;
    private _direcciones:Dirección;
    private _mails:Mail; 
    private _teléfono:Teléfono; 
    private _Notas:string;

    constructor(a: string, b: string, c:number, d:string, e:string, f:string, g:string) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._DNI = d;
        this._cumpleaños = e;
        this._colorFavorito = f;
        this._sexo = g;
        this._Notas='La nota está vacía';
        this._direcciones = new Dirección('calle','número','piso','letra','Código postal','Población','Provincia');
        this._mails = new Mail('tipo','dirección');
        this._teléfono = new Teléfono('tipo','numero');
    }
    
//    public set AñadirMail(a:Mail){
//        this._mails = Array(a.tipo,a.direccionMail); 
//    }

    public get nombre() : string {
        return this._nombre
    }

    public set nombre(v : string) {
        this._nombre = v;
    }
    
    public get apellidos() : string {
        return this._apellidos
    }

    public set apellidos(v : string) {
        this._apellidos = v;
    }

    public get edad() : number | undefined | string {
        return this._edad
    }

    public set edad(v : number | undefined | string) {
        this._edad = v;
    }
        
    public get DNI() : string {
        return this._DNI
    }

    public set DNI(v : string) {
        this._DNI = v;
    }
    
    public get cumpleaños() : string {
        return this._cumpleaños
    }

    public set cumpleaños(v : string) {
        this._cumpleaños = v;
    }

    public get colorFavorito() : string {
        return this._colorFavorito
    }

    public set colorFavorito(v : string) {
        this._colorFavorito = v;
    }

    public get sexo() : string {
        return this._sexo
    }

    public set sexo(v : string) {
        this._sexo = v;
    }

    public get Notas() : string {
        return this._Notas
    }

    public set Notas(v : string) {
        this._Notas = v;
    }

 //   public AñadirDireccion(a:string, b: number,c:number,d:string,e:string,f:string,g:string){
 //       this._direcciones = this._direcciones.DireccionCompleta(a, b,c,d,e,f,g);
 //   }

    public  mostrarDatos():void{
        console.log('Nombre: '+this._nombre+'\n Apellidos: '+this._apellidos+'\n Edad: '+this._edad
        +'\n DNI: '+this._DNI+'\n Cumpleaños: ' +this._cumpleaños+
        '\n Color favorito: '+this._colorFavorito+'\n Sexo: '+this._sexo+
        '\n Nota: '+this._Notas)
        console.log(this._direcciones.Descripcion())
        console.log(this._teléfono.Descripcion())
        console.log(this._mails.Descripcion())
    }

    public CambiarDireccion(a:string, b: string,c:string,d:string,e:string,f:string,g:string){
        this._direcciones = new Dirección(a,b,c,d,e,f,g);
    }

    public get direcciones():string{
        return this._direcciones.Descripcion();
    }

    public CambiarMail(tipoMail:string, direccionMail: string){
        this._mails = new Mail(tipoMail, direccionMail);
    }

    public get mails():string{
        return this._mails.Descripcion();
    }

    public CambiarTelefono(tipo:string, numero: string){
        this._teléfono = new Teléfono(tipo, numero);
    }

    public get teléfono():string{
        return this._teléfono.Descripcion();
    }


}
