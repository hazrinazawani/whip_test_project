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
      return { id: generatedId };   //returns an Id
    }
  
    
    @Get()
    async getAllUsers() {
        const user = await this.userService.getUser();
        return user;
    }

    @Get('id:')
    getUser(@Param('id')id:String)
    
    {
        return this.userService.getSingleUser(id);
    
    }



    @Patch('id:')
    updateUser(
        @Param('id')id:String,
        @Body('username')username:String,
        @Body('password')password:String,
        @Body('plate_number')plate_number:String,
    ){}
    

@Delete(':id')
  async removeUser(@Param('id') userid: string) {
      await this.userService.deleteUser(userid);
      return null;
  }
    







}

  