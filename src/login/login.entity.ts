import {Column, Entity, PrimaryGeneratedColumn} from "typeorm"

@Entity()
export class loginEntity{
    @PrimaryGeneratedColumn()
    Number: number;
    @Column()
    Name: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @Column()
    password: string;
    
    @Column()
    salt: string;
}