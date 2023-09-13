import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { VocabSet } from './vocab-set.entity';

@Entity()
export class Word {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    word: string;

    @Column()
    definition: string;

    @ManyToOne(() => VocabSet, vocabSet => vocabSet.words)
    vocabSet: VocabSet;
}