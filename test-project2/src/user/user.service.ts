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

  getAllUser() {
    return [...this.user];
  }

  getSingleUser(id:String){

    const user = this.user.find((user)=>user.id===id);

    if(!user){

      throw new NotFoundException ('could  not find user');
    }

    return{...user };



  }



}

