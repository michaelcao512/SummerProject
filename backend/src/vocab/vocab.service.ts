import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VocabSet } from './vocab-set.entity';
import { Word } from './word.entity';
import { Users } from '../users/users.entity';

@Injectable()
export class VocabService {
    constructor(
        @InjectRepository(VocabSet)
        private vocabSetRepository: Repository<VocabSet>,
        @InjectRepository(Word)
        private wordRepository: Repository<Word>,
        @InjectRepository(Users)
        private userRepository: Repository<Users>) { }


    async createVocabSet(userId: number, vocabSet: VocabSet): Promise<VocabSet> {
        const user = await this.userRepository.findBy({ userId: userId })
        if (!user) {
            throw new Error('User not found');
        }
        const newVocabSet = await this.vocabSetRepository.create({
            name: vocabSet.name,
            user: vocabSet.user
        })
        await this.vocabSetRepository.save(newVocabSet);
        return newVocabSet;
    }

    async deleteVocabSet(id: number): Promise<void> {
        await this.vocabSetRepository.delete(id);
    }

    async createWord(word: Word): Promise<Word> {
        const newWord = await this.wordRepository.create({
            word: word.word,
            definition: word.definition,
            vocabSet: word.vocabSet
        })
        await this.wordRepository.save(newWord);
        return newWord;
    }

    async deleteWord(id: number): Promise<void> {
        await this.wordRepository.delete(id);
    }

    async getAllVocabSets(): Promise<VocabSet[]> {
        const allVocabSets = await this.vocabSetRepository.find();
        return allVocabSets;
    }

    async getVocabSet(id: number): Promise<VocabSet> {
        const vocabSet = await this.vocabSetRepository.findOne({
            where: {
                id: id
            },
            relations: ['words']
        });
        return vocabSet;
    }

    async addWordToVocabSet(word: Word): Promise<Word> {
        const newWord = await this.wordRepository.create({
            word: word.word,
            definition: word.definition,
            vocabSet: word.vocabSet
        })
        await this.wordRepository.save(newWord);
        return newWord;
    }

    async removeWordFromVocabSet(id: number): Promise<void> {
        await this.wordRepository.delete(id);
    }

    async getAllWords(): Promise<Word[]> {
        const allWords = await this.wordRepository.find();
        return allWords;
    }

    async getWord(id: number): Promise<Word> {
        const word = await this.wordRepository.findOne({
            where: {
                id: id
            }
        });
        return word;
    }

    // 
    async updateWord(word: Word): Promise<Word> {
        const updatedWord = await this.wordRepository.save(word);
        return updatedWord;
    }


}