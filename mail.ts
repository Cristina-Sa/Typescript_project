
export class Mail{
    private _tipo: string;
    private _direccionMail: string;

    constructor(tipoMail:string, direccionMail: string){
        this._tipo = tipoMail;
        this._direccionMail = direccionMail;
    }

    public get tipo(){
        return this._tipo;
    }

    public set tipo(value: string){
        this._tipo = value;
    }

    get direccionMail(): string {
        return this._direccionMail;
    }

    set direccionMail(value:string){
        this._direccionMail = value;
    }

    Descripcion(): string{
        return `Mail:
                Direccion: ${this._direccionMail} 
                Tipo: ${this._tipo}`;
    }
}