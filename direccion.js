"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dirección = void 0;
var Dirección = /** @class */ (function () {
    function Dirección(a, b, c, d, e, f, g) {
        this._calle = a;
        this._numero = b;
        this._piso = c;
        this._letra = d;
        this._codigoPostal = e;
        this._poblacion = f;
        this._provincia = g;
    }
    Dirección.prototype.DireccionCompleta = function () {
        return Array(this._calle, this._numero, this._piso, this._letra, this._codigoPostal, this._poblacion, this._provincia);
    };
    Object.defineProperty(Dirección.prototype, "calle", {
        get: function () {
            return this._calle;
        },
        set: function (value) {
            this._calle = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "piso", {
        get: function () {
            return this._piso;
        },
        set: function (value) {
            this._piso = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "letra", {
        get: function () {
            return this._letra;
        },
        set: function (value) {
            this._letra = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "codigoPostal", {
        get: function () {
            return this._codigoPostal;
        },
        set: function (value) {
            this._codigoPostal = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "poblacion", {
        get: function () {
            return this._poblacion;
        },
        set: function (value) {
            this._poblacion = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dirección.prototype, "provincia", {
        get: function () {
            return this._provincia;
        },
        set: function (value) {
            this._provincia = value;
        },
        enumerable: false,
        configurable: true
    });
    Dirección.prototype.Descripcion = function () {
        return "Direccion: \n                Calle: ".concat(this._calle, " \n                N\u00FAmero: ").concat(this._numero, " \n                Piso:  ").concat(this._piso, " \n                Letra: ").concat(this._letra, " \n                C\u00F3digo postal ").concat(this._codigoPostal, " \n                Poblacion: ").concat(this._poblacion, " \n                Provincia: ").concat(this._provincia);
    };
    return Dirección;
}());
exports.Dirección = Dirección;
//# sourceMappingURL=direccion.js.map