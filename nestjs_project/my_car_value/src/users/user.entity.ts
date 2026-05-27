import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// decorator -> entity, column, primary generated column.
@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    
}