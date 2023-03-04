const mongoose = require('mongoose')
const matricula_schema = mongoose.Schema({
    nombre_estudiante: { type: String, require: true },
    universidad: {
        type: Object,
        require: true,
        nombre: {
            type: String,
            require: true,
        },
        nit̀: {
            type: String,
            require: true,
        },
        tel: {
            type: String,
            require: true,
        },
        direccion: {
            type: String,
            require: true,
        },
    },
    nro_matricula: { type: Number, require: true, unique: true },
    nro_recibo: { type: Number, require: true, unique: true },
    periodo: { type: Number, require: true },
    programa: { type: String, require: true },
    facultad: { type: String, require: true },
    materia: { type: Object, require: true, nombre: { type: Number, require: true }, creditos: { type: Number, require: true }, costo_credito: { type: mongoose.Decimal128, require: true } },
    total_a_pagar: { type: mongoose.Decimal128, require: true },
})

module.exports = mongoose.model('MatriculaCollection', matricula_schema)
