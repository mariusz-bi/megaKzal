const {createPool} = require('mysql2/promise');

const pool = createPool({
  host: 'localhost',
  user: 'root',
  database: 'routes',
  password: 'root',
  port: 8889,
  namedPlaceholders: true,
  decimalNumbers: true,
});

module.exports = {
  pool,
};