import { MigrationInterface, QueryRunner } from "typeorm";

export class createTable1671649697471 implements MigrationInterface {
    name = 'createTable1671649697471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "adress" ("district" character varying(50) NOT NULL, "zipCode" character varying(20) NOT NULL, "number" character varying, "city" character varying(25) NOT NULL, "state" character varying(25) NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_f108093ea9cd9f59d72c2f1a057" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "categories" ("name" character varying(50) NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "PK_24dbc6126a28ff948da33e97d3b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("name" character varying(50) NOT NULL, "email" character varying(50) NOT NULL, "password" character varying(120) NOT NULL, "isAdm" boolean NOT NULL, "isActive" boolean DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "schedules_users_properties" ("date" date NOT NULL, "hour" TIME NOT NULL, "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "propertyId" uuid, "userId" uuid, CONSTRAINT "PK_751450246dee9abc82a47dabc4c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "properties" ("sold" boolean DEFAULT false, "value" numeric(12,2) NOT NULL, "size" integer NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "addressId" uuid, "categoryId" uuid, CONSTRAINT "REL_2b2211958ef1f0e3c680339100" UNIQUE ("addressId"), CONSTRAINT "PK_2d83bfa0b9fcd45dee1785af44d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_3193709d61be5a23d570547c964" FOREIGN KEY ("propertyId") REFERENCES "properties"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_2b2211958ef1f0e3c680339100e" FOREIGN KEY ("addressId") REFERENCES "adress"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "properties" ADD CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_a82b56d3d456c30b8c630cba0c6"`);
        await queryRunner.query(`ALTER TABLE "properties" DROP CONSTRAINT "FK_2b2211958ef1f0e3c680339100e"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_3193709d61be5a23d570547c964"`);
        await queryRunner.query(`DROP TABLE "properties"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "categories"`);
        await queryRunner.query(`DROP TABLE "adress"`);
    }

}
