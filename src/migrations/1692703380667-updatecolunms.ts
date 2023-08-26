import { MigrationInterface, QueryRunner } from "typeorm";

export class Updatecolunms1692703380667 implements MigrationInterface {
    name = 'Updatecolunms1692703380667';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "duaration"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "duration" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" ADD CONSTRAINT "UQ_3a794f850bd3e432c46b3faa913" UNIQUE ("name")`);
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" DROP NOT NULL`);
    };

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "movies" ALTER COLUMN "description" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "movies" DROP CONSTRAINT "UQ_3a794f850bd3e432c46b3faa913"`);
        await queryRunner.query(`ALTER TABLE "movies" DROP COLUMN "duration"`);
        await queryRunner.query(`ALTER TABLE "movies" ADD "duaration" integer NOT NULL`);
    };

};