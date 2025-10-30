const { query} = require("../database");

async function consultarTodos() {
    const sql = `SELECT * FROM livro`;

    const reusltatodos = await query(sql)

    return reusltatodos;

}
module.exports ={ consultarTodos };
