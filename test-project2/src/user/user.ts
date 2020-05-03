import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNumber, MinLength, Min, IsDefined } from 'class-validator'

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(2, { always: true })
    @Column()
    name: string;

    @Column()
    @IsDefined({ always: true })
    @IsString({ always: true })
    @MinLength(3, { always: true })
    @Column()
    password: String;

    @Column()
    @IsNumber()
    @Min(0, { always: true })
    @Column()
    plate_number: string;
}