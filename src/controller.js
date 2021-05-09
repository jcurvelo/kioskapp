import dbFactory from '../db';

const db = {
    productos: dbFactory('productos.db'),
}

module.exports = db;