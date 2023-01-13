require('dotenv').config();

let db = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host : process.env.DATABASE_HOST,
    port : 5432,
    user : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASSWORD,
    database : process.env.DATABASE_NAME
  },
  useNullAsDefault: true
});

db.raw("SELECT 1").then(() => {
    console.log(`PostgreSQL ${process.env.DATABASE_NAME} connected`);
})
.catch((e) => {
    console.log("PostgreSQL not connected");
    console.error(e);
});

module.exports = {
  db
}
