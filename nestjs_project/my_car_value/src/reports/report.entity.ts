import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ReportEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    price: number;
    // make: number;
    // model: string;
    // year: string;
    // mileage: string;
    // longitude: string;
    // latitude: string;
}