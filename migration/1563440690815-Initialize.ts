import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1563440690815 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
      return await queryRunner.query(`
        CREATE TABLE "users" (
          "id" SERIAL NOT NULL,
          "firstName" character varying NOT NULL,
          "lastName" character varying NOT NULL,
          "email" character varying NOT NULL,
          "password" character varying NOT NULL,
          CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))
      `);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
      return await queryRunner.query(`DROP TABLE "users"`);
    }

}
