"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipoMail, direccionMail) {
        this._tipo = tipoMail;
        this._direccionMail = direccionMail;
    }
    Object.defineProperty(Mail.prototype, "tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (value) {
            this._tipo = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "direccionMail", {
        get: function () {
            return this._direccionMail;
        },
        set: function (value) {
            this._direccionMail = value;
        },
        enumerable: false,
        configurable: true
    });
    Mail.prototype.Descripcion = function () {
        return "Mail:\n                Direccion: ".concat(this._direccionMail, " \n                Tipo: ").concat(this._tipo);
    };
    return Mail;
}());
exports.Mail = Mail;
//# sourceMappingURL=mail.js.map