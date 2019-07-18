console.log(__dirname);

// https://github.com/typeorm/typeorm/blob/master/docs/connection-options.md
module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  // TODO:
  username: "typeorm",
  password: "mytypeorm",
  database: "typeormtest",
  entities: [
    "src/entities/*.ts"
  ],
  migrationsTableName: "custom_migration_table",
  migrations: [__dirname + "/migration/*.js"],
  synchronize: true,  // TODO: don't use this option for production
  logging: false,
  "cli": {
    "migrationsDir": "migration"
  }
};
