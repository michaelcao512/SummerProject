import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from 'typeorm';
import { Users } from '../users/users.entity';
import { Word } from './word.entity';

@Entity()
export class VocabSet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Users, user => user.vocabSet)
    user: Users;

    @OneToMany(() => Word, word => word.vocabSet)
    words: Word[];
}