import { Injectable } from '@nestjs/common';
import { User } from './user.model';

@Injectable()
export class UserService {

    //a list of user in an array, import from user.model 

    user: User[]=[];

    insertUser(username:String,password:String,vehicle:String,plate_number:String){

        const user_ID = new Date().toString();
        const newUser = new User(user_ID,username,password,vehicle,plate_number);
        this.user.push(newUser);
        return user_ID;

        //push user into the array


    }

    getUser(){

        return[...this.user]
    }
}
