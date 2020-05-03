import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {MongooseModule} from '@nestjs/mongoose';

@Module({
//  imports: [TypeOrmModule.forRoot(),userModule],
  imports : [userModule, MongooseModule.forRoot('dbUser:Scoliosis@789@cluster0-fh6ix.mongodb.net/test?retryWrites=true&w=majority'
    )],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
