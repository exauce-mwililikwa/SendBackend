import { MigrationInterface, QueryRunner } from "typeorm";
export declare class createMessages1642078041884 implements MigrationInterface {
    private table;
    private foreignKey;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
