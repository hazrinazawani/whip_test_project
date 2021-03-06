import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  plate_number: { type: Number, required: true },
});


export interface User {
    save();
    constructor(
      id: string,
      username: string,
      password: string,
      plate_number: number,
    ) 
  }
  