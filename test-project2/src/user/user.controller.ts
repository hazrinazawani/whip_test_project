import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { User } from './user';
import { userService } from './user.service';

@Crud({
    model: {
      type: User,
    },
  })
@Controller('user')
export class userController {
    constructor(public service: userService) {}
}
