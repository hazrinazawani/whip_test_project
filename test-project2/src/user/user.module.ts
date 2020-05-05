import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userController } from './user.controller';
import { userService } from './user.service';

@Module({
    controllers: [userController],
    providers: [userService],
})
export class userModule {}
