import { Injectable, NotFoundException } from '@nestjs/common';
import{ InjectModel } from '@nestjs/mongoose';

import { User } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class userService {

  private user: User[]=[];

  constructor(@InjectModel('User')private userModel:Model<User>){ }

  insertUser(username: string, password: string, plate_number: number) {
    const userID = Math.random().toString();
    const newUser = new this.userModel(userID, username, password, plate_number);
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

  private findUser(id:String){

    const user = this.user.find(user=>user.id===id);
    if(!user){

      throw new NotFoundException('could not find user');
    }

    return user;

  }

  updateUser(userID:String,username:String,password:String,plate_number:String){

    const user=this.findUser(userID);
  }



}

