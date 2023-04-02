"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teléfono = void 0;
var Teléfono = /** @class */ (function () {
    function Teléfono(tipo, numero) {
        this._tipo = tipo;
        this._numero = numero;
    }
    Object.defineProperty(Teléfono.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Teléfono.prototype, "numero", {
        get: function () {
            return this._numero;
        },
        set: function (value) {
            this._numero = value;
        },
        enumerable: false,
        configurable: true
    });
    Teléfono.prototype.Descripcion = function () {
        return "Tel\u00E9fono: \n                N\u00FAmero: ".concat(this._numero, " \n                Tipo: ").concat(this._tipo);
    };
    return Teléfono;
}());
exports.Teléfono = Teléfono;
//# sourceMappingURL=telefono.js.map