import { StaffMemberType } from "@app/domain/enums";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class StaffMember {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({ length: 50, nullable: false })
    public name: string;

    @Column({ nullable: false })
    public staffMemberType: StaffMemberType;
}
