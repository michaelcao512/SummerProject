import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity';
import { VocabSet } from './vocab/vocab-set.entity';
import { Word } from './vocab/word.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Your username
      password: 'root', // Your password
      database: 'mainDB', // Your database name
      entities: [User, VocabSet, Word],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
