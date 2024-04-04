import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Users } from './users/users.entity';
import { VocabSet } from './vocab/vocab-set.entity';
import { Word } from './vocab/word.entity';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.MYSQL_ENDPOINT || 'localhost',
      port: 3306, 
      username: process.env.MYSQL_USERNAME || 'root',
      password: process.env.MYSQL_PASSWORD, 
      database: 'vocabAppDB', 
      entities: [Users, VocabSet, Word],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule { }
