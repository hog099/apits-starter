import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { Country } from './Country';

// export enum UserRole {
//     ADMIN = "admin",
//     EDITOR = "editor",
//     GHOST = "ghost"
// }
export enum AblecityStatus {
    INACTIVE = "0",
    ACTIVE = "1",
    DELETED = "2"
}

// @Entity({ name: "dbconnmysql" })
@Entity({ name: 'cad_ablecities' })
export class AbleCity {

    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(type => Country, country => country.ablecities)
    // @Column()
    // idcountry: Country;

    @ManyToOne(() => Country, country => country.ableCity)
    @JoinColumn({ name: 'idcountry' })
    idcountry: Country;


    @Column("double")
    zipcode: number;

    @Column("text")
    name: string;

    @Column("text")
    decription: string;

    @Column("text")
    urlabout: string;

    @Column("boolean")
    drugstoreoncall: boolean;

    @Column("boolean")
    buslineroutes: boolean;

    @Column("boolean")
    newsonapp: boolean;

    @Column({
        type: "enum",
        enum: AblecityStatus,
        default: AblecityStatus.ACTIVE
    })
    status: AblecityStatus;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Column({ type: 'datetime' })
    deletedAt: Date;

    // @Column({ type: 'timestamp' })
    // date_time: Date;


}
