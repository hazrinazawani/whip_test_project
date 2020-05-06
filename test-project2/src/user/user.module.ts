import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { userController } from './user.controller';
import { userService } from './user.service';
import { userSchema } from './user.model';

@Module({
    imports:[MongooseModule.forFeature([{name:'User',schema:userSchema}])],
    controllers: [userController],
    providers: [userService],
})
export class userModule {}
