"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessages1642078041884 = void 0;
const typeorm_1 = require("typeorm");
class createMessages1642078041884 {
    constructor() {
        this.table = new typeorm_1.Table({
            name: 'messages',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'user_id',
                    type: 'integer',
                    isNullable: false,
                },
                {
                    name: 'content',
                    type: 'varchar',
                    length: '255',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'email',
                    type: 'varchar',
                    length: '255',
                    isUnique: true,
                    isNullable: false,
                },
                {
                    name: 'updated_at',
                    type: 'timestamptz',
                    isNullable: false,
                    default: 'now()',
                },
            ],
        });
        this.foreignKey = new typeorm_1.TableForeignKey({
            columnNames: ['user_id'],
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            referencedTableName: 'users',
        });
    }
    async up(queryRunner) {
        await queryRunner.createTable(this.table);
    }
    async down(queryRunner) {
        await queryRunner.dropTable(this.table);
    }
}
exports.createMessages1642078041884 = createMessages1642078041884;
//# sourceMappingURL=1642078041884-create-messages.js.map