// console.log('process.env.DATABASEE_URL :>> ', process.env.DATABASE_URL);
module.exports = {
  "type": "mysql",
  "host": process.env.DB_HOST,
  "port": "3306",
  "username": process.env.DB_USER,
  "password": process.env.DB_PASS,
  "database": process.env.DB_NAME,
  "synchronize": true,
  "logging": false,
  "entities": [
      "dist/entity/**/*.ts"
  ],
  "migrations": [
      "src/migration/**/*.ts"
  ],
  "subscribers": [
      "src/subscriber/**/*.ts"
  ],
  "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
  }
}
