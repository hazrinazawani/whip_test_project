import * as mongoose from 'mongoose';

export const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  plate_number: { type: Number, required: true },
});


export class User {
    constructor(
      public id: string,
      public username: string,
      public password: string,
      public plate_number: number,
    ) {}
  }
  