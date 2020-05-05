import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  import { UserService } from './user.service';

@Controller('user')
export class UserController { 

    constructor(private readonly userService:UserService){ } //instance of userservice of type userservice 

    @Post()
    addUser(
        @Body('username') USER_username:String,
        @Body('password') USER_password:String,
        @Body('vehicle') USER_vehicle:String,
        @Body('plate_number') USER_plate_number:String,

    ):any{

       const generated =  this.userService.insertUser(USER_username,USER_password,USER_vehicle,USER_plate_number); //get data from incoming post request


    }

    @Get()
    getAllUser(){

        return this.userService.getUser();
    }

   


    }

    



}
