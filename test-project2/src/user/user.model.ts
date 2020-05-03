import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  plate_number : {type: String, required: true
  }
  ,
  
});

export interface User extends mongoose.Document  {
  id: string;
  name : string;
  password : string;
  plate_number: number;
}


