import { Controller, Post, Delete, Body, Param, Req, UseGuards } from '@nestjs/common';
import { VocabService } from './vocab.service';
import { VocabSet } from './vocab-set.entity';

@Controller('vocab')
export class VocabController {
    constructor(private readonly vocabService: VocabService) { }

    @Post('create-vocab-set')
    async createVocabSet(
        @Req() request,
        @Body() vocabSet: VocabSet,
    ): Promise<VocabSet> {
        const userId = request.user.id;
        return this.vocabService.createVocabSet(userId, vocabSet);
    }


}
