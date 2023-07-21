import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class authEntity{
    @PrimaryGeneratedColumn()
    Number: number;
    @Column()
    Name: string;
    @Column()
    password: string;
}