import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne} from 'typeorm';
import { User } from '../user/user.entity';
import { Word } from './word.entity';

@Entity()
export class VocabSet {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => User, user => user.vocabSet)
    user: User;

    @OneToMany(() => Word, word => word.vocabSet)
    words: Word[];
}