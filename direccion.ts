export class Dirección{

    private _calle: string;
    private _numero: string;
    private _piso: string;
    private _letra: string;
    private _codigoPostal: string;
    private _poblacion: string;
    private _provincia: string;


    constructor(a:string, b: string,c:string,d:string,e:string,f:string,g:string){
        this._calle = a;
        this._numero = b;
        this._piso=c;
        this._letra=d;
        this._codigoPostal=e;
        this._poblacion=f;
        this._provincia=g;
    }

    public DireccionCompleta():Array<any>{
        return Array(this._calle, this._numero, this._piso, this._letra, this._codigoPostal, this._poblacion, this._provincia)
    }
    

    public get calle(){
        return this._calle;
    }

    public set calle(value: string){
        this._calle = value;
    }

    public get numero():string{
        return this._numero;
    }

    public set numero(value:string){
        this._numero = value;
    }

    public get piso():string{
        return this._piso;
    }

    set piso(value:string){
        this._piso = value;
    }
    public get letra():string{
        return this._letra;
    }

    set letra(value:string){
        this._letra = value;
    }

    public get codigoPostal():string{
        return this._codigoPostal;
    }

    set codigoPostal(value:string){
        this._codigoPostal = value;
    }

    public get poblacion():string{
        return this._poblacion;
    }

    set poblacion(value:string){
        this._poblacion = value;
    }

    public get provincia():string{
        return this._provincia;
    }

    set provincia(value:string){
        this._provincia = value;
    }

    Descripcion(): string{
        return `Direccion: 
                Calle: ${this._calle} 
                Número: ${this._numero} 
                Piso:  ${this._piso} 
                Letra: ${this._letra} 
                Código postal ${this._codigoPostal} 
                Poblacion: ${this._poblacion} 
                Provincia: ${this._provincia}`;
    }
}