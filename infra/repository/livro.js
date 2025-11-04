const { query} = require("../database");

async function consultarTodos() {
    const sql = `SELECT * FROM livro`;

    const resultatodos = await query(sql)

    return resultatodos;

}
module.exports ={ consultarTodos , consultaTops};
