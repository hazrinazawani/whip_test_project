import { Module } from '@nestjs/common';
import { userController } from './user.controller';
import { userService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';

 // imports: [TypeOrmModule.forFeature([User])],
 @Module({
  imports: [
    MongooseModule.forFeature([{ name: 'User', schema: userSchema }]),
  ],
  controllers: [userController],
  providers: [userService],
})
export class userModule {}

