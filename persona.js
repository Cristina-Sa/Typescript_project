"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var direccion_1 = require("./direccion");
var Persona = /** @class */ (function () {
    function Persona(a, b, c, d, e, f, g) {
        this._nombre = a;
        this._apellidos = b;
        this._edad = c;
        this._DNI = d;
        this._cumpleaños = e;
        this._colorFavorito = f;
        this._sexo = g;
        this._Notas = 'La nota está vacía';
        this._direcciones = new direccion_1.Dirección('calle', 'número', 'piso', 'letra', 'Código postal', 'Población', 'Provincia');
        this._mails = new mail_1.Mail('tipo', 'dirección');
        this._teléfono = new telefono_1.Teléfono('tipo', 'numero');
    }
    Object.defineProperty(Persona.prototype, "nombre", {
        //    public set AñadirMail(a:Mail){
        //        this._mails = Array(a.tipo,a.direccionMail); 
        //    }
        get: function () {
            return this._nombre;
        },
        set: function (v) {
            this._nombre = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "apellidos", {
        get: function () {
            return this._apellidos;
        },
        set: function (v) {
            this._apellidos = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "edad", {
        get: function () {
            return this._edad;
        },
        set: function (v) {
            this._edad = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "DNI", {
        get: function () {
            return this._DNI;
        },
        set: function (v) {
            this._DNI = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "cumplea\u00F1os", {
        get: function () {
            return this._cumpleaños;
        },
        set: function (v) {
            this._cumpleaños = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "colorFavorito", {
        get: function () {
            return this._colorFavorito;
        },
        set: function (v) {
            this._colorFavorito = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "sexo", {
        get: function () {
            return this._sexo;
        },
        set: function (v) {
            this._sexo = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "Notas", {
        get: function () {
            return this._Notas;
        },
        set: function (v) {
            this._Notas = v;
        },
        enumerable: false,
        configurable: true
    });
    //   public AñadirDireccion(a:string, b: number,c:number,d:string,e:string,f:string,g:string){
    //       this._direcciones = this._direcciones.DireccionCompleta(a, b,c,d,e,f,g);
    //   }
    Persona.prototype.mostrarDatos = function () {
        console.log('Nombre: ' + this._nombre + '\n Apellidos: ' + this._apellidos + '\n Edad: ' + this._edad
            + '\n DNI: ' + this._DNI + '\n Cumpleaños: ' + this._cumpleaños +
            '\n Color favorito: ' + this._colorFavorito + '\n Sexo: ' + this._sexo +
            '\n Nota: ' + this._Notas);
        console.log(this._direcciones.Descripcion());
        console.log(this._teléfono.Descripcion());
        console.log(this._mails.Descripcion());
    };
    Persona.prototype.CambiarDireccion = function (a, b, c, d, e, f, g) {
        this._direcciones = new direccion_1.Dirección(a, b, c, d, e, f, g);
    };
    Object.defineProperty(Persona.prototype, "direcciones", {
        get: function () {
            return this._direcciones.Descripcion();
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.CambiarMail = function (tipoMail, direccionMail) {
        this._mails = new mail_1.Mail(tipoMail, direccionMail);
    };
    Object.defineProperty(Persona.prototype, "mails", {
        get: function () {
            return this._mails.Descripcion();
        },
        enumerable: false,
        configurable: true
    });
    Persona.prototype.CambiarTelefono = function (tipo, numero) {
        this._teléfono = new telefono_1.Teléfono(tipo, numero);
    };
    Object.defineProperty(Persona.prototype, "tel\u00E9fono", {
        get: function () {
            return this._teléfono.Descripcion();
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
exports.Persona = Persona;
//# sourceMappingURL=persona.js.map