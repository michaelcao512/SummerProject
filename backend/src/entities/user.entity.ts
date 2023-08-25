import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({unique: true })
    username: string;
    
    @Column()
    password: string;

    @CreateDateColumn({ type: 'timestamp'})
    created_at: Date;
}
