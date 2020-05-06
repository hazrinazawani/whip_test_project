import { Injectable, NotFoundException } from '@nestjs/common';
import{ InjectModel } from '@nestjs/mongoose';

import { User } from './user.model';
import { Model } from 'mongoose';
import { userModule } from './user.module';

@Injectable()
export class userService {

  private user: User[]=[];

  constructor(@InjectModel('User')private userModel){ }

 async insertUser(username: string, password: string, plate_number: number) {
    const userID = Math.random().toString();
    const newUser = new this.userModel({
      username:String,
      password:String,
      plate_number:Number});
   
  const result = await newUser.save(); 
  console.log(result);
  return result.userID as string;
  }

  async getUser() {
    const products = await this.userModel.find().exec();
    return products.map(prod => ({
      userID : String,
      username :String,
      password :String,
      plate_number : Number,
    }));
  }

  getSingleUser(id:String){

    const user = this.user.find((user)=>id===id);

    if(!user){

      throw new NotFoundException ('could  not find user');
  }

    return{...user };
  
  }

  private findUser(id:String){

    const user = this.user.find(user=>id===id);
    if(!user){

      throw new NotFoundException('could not find user');
    }

    return user;

  }

  updateUser(userID:String,username:String,password:String,plate_number:String){

    const user=this.findUser(userID);
  }

  async deleteUser(userID: string) {
    const result = await this.userModel.deleteOne({_id: userID}).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find user.');
    }
  }



}

