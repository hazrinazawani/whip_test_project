import { Injectable, NotFoundException } from '@nestjs/common';

import { User } from './user.model';

@Injectable()
export class userService {

    user: User[]=[];

  insertUser(username: string, password: string, plate_number: number) {
    const userID = Math.random().toString();
    const newUser = new User(userID, username, password, plate_number);
    this.user.push(newUser);
    return userID;
  }

  getUser() {
    return [...this.user];
  }

}