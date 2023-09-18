import { Controller, Post, Delete, Get, Body, Param, Req, UseGuards } from '@nestjs/common';
import { VocabService } from './vocab.service';
import { VocabSet } from './vocab-set.entity';
import { AuthGuard } from '../auth/auth.guard';
@Controller('vocab')
export class VocabController {
    constructor(private readonly vocabService: VocabService) { }


    @UseGuards(AuthGuard)
    @Get('test')
    async test(@Req() request): Promise<string> {
        const userId = request.user.id;
        return `Hello ${userId}`;
    }

    @UseGuards(AuthGuard)
    @Post('create-vocab-set')
    async createVocabSet(
        @Req() request,
        @Body() vocabSet: VocabSet,
    ): Promise<VocabSet> {
        const userId = request.user.id;
        return this.vocabService.createVocabSet(userId, vocabSet);
    }


}
