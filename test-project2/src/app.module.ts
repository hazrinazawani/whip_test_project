import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { userModule } from './user/user.module';

@Module({
  imports: [
    userModule,
  /*  MongooseModule.forRoot(
      'mongodb+srv://dbUser:Scoliosis@789@cluster0-fh6ix.mongodb.net/test?retryWrites=true&w=majority',
    ),*/
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
