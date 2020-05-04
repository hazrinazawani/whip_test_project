import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { User } from './user';
import { Model } from 'mongoose'
import { userModule } from './user.module';
import {InjectModel} from '@nestjs/mongoose'
import { Mongoose } from 'mongoose';



/*@Injectable()
export class userService
 extends TypeOrmCrudService<User> {
  constructor(@InjectRepository(User) repo) {
    super(repo);
  }}

  */


 @Injectable()
export class userService {
  constructor(
    @InjectModel('User') private readonly userModel
  ) {}
    async insertUser(id: string, name: string, password: string, plate_number:number) {
        const newUser = new this.userModel({
          id,
          name,
          password,
          plate_number
        });
       

      }
    
    }


