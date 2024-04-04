import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { VocabSet } from '../vocab/vocab-set.entity';

@Entity()
export class Users {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;
    
    @Column()
    password: string;

    @CreateDateColumn({ type: 'timestamp' })
    created_at: Date;

    @OneToMany(() => VocabSet, vocabSet => vocabSet.user)
    vocabSet: VocabSet[];

}
