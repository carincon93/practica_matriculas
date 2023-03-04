const express = require('express')
const matricula_model = require('../models/matricula.model')
const matricula_routes_http = express.Router()

matricula_routes_http.get('/', (req, res) => {
    matricula_model
        .find()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})
matricula_routes_http.post('/nueva-matricula', (req, res) => {
    const new_matricula = matricula_model(req.body)
    new_matricula
        .save()
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})
matricula_routes_http.get('/:matriculaId', (req, res) => {
    const { matriculaId } = req.params
    matricula_model
        .findById({ _id: matriculaId })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})
matricula_routes_http.put('/:matriculaId', (req, res) => {
    const { matriculaId } = req.params
    const { nombre_estudiante, universidad, nro_matricula, nro_recibo, periodo, programa, facultad, materia, total_a_pagar } = req.body
    matricula_model
        .updateOne({ _id: matriculaId }, { $set: { nombre_estudiante, universidad, nro_matricula, nro_recibo, periodo, programa, facultad, materia, total_a_pagar } })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})
matricula_routes_http.delete('/:matriculaId', (req, res) => {
    const { matriculaId } = req.params
    matricula_model
        .deleteOne({ _id: matriculaId })
        .then((data) => res.json(data))
        .catch((err) => res.json({ message: err }))
})

module.exports = matricula_routes_http
