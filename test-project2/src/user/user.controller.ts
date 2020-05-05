import {
    Controller,
    Post,
    Body,
    Get,
    Param,
    Patch,
    Delete,
  } from '@nestjs/common';
  
  import { userService } from './user.service';
  
  @Controller('User')
  export class userController {
    constructor(private readonly userService: userService) {}
  
    @Post()
    addProduct(
      @Body('username') u_username: string,
      @Body('password') u_password: string,
      @Body('plate_number') u_plate_number: number,
    ) {
      const generatedId = this.userService.insertUser(
        u_username,
        u_password,
        u_plate_number
      );
      return { id: generatedId };
    }
  
    @Get()
    getUser() {
      return this.userService.getUser();
    }
  
  }