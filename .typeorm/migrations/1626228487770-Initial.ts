import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1626228487770 implements MigrationInterface {
    name = 'Initial1626228487770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `staff_member` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(50) NOT NULL, `staffMemberType` int NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `staff_member`");
    }

}
