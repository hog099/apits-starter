import { Entity, PrimaryGeneratedColumn, Column, OneToMany, JoinColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

import { AbleCity } from './AbleCity'

export enum CountryStatus {
    INACTIVE = "0",
    ACTIVE = "1",
    DELETED = "2"
}


// @Entity({ name: "dbconnmysql" })
@Entity({ name: 'cad_countries' })
export class Country {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("double")
    code: number;

    @Column("text")
    name: string;

    @Column("text")
    decription: string;

    @Column({
        type: "enum",
        enum: CountryStatus,
        default: CountryStatus.ACTIVE
    })
    status: CountryStatus;


    // @OneToMany(type => AbleCity, ableCity => ableCity.idcountry)
    // ableCity: AbleCity[];

    @OneToMany(() => AbleCity, ableCity => ableCity.idcountry, {
        cascade: ['remove']
    })
    @JoinColumn({ name: 'idcountry' })
    ableCity: AbleCity[];

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn({ type: "timestamp" })
    updatedAt: number;

    @Column({ type: 'datetime' })
    deletedAt: Date;

}
