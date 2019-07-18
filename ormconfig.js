module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  // TODO:
  username: "typeorm",
  password: "mytypeorm",
  database: "typeorm-test",
  entities: [
    __dirname + "/entities/*.ts"
  ],
  synchronize: true,
  logging: false
};
