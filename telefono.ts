export class Teléfono{
    private _tipo: string;
    private _numero: string;

    constructor(tipo:string, numero: string){
        this._tipo = tipo;
        this._numero = numero;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(value: string){
        this._tipo = value;
    }

    get numero(): string {
        return this._numero;
    }

    set numero(value:string){
        this._numero = value;
    }

    Descripcion(): string{
        return `Teléfono: 
                Número: ${this._numero} 
                Tipo: ${this._tipo}`;
    }
}