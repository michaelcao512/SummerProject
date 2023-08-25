import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany } from 'typeorm';
import { VocabSet } from '../vocab/vocab-set.entity';

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

    @OneToMany(() => VocabSet, vocabSet => vocabSet.user)
    vocabSet: VocabSet[];

}
