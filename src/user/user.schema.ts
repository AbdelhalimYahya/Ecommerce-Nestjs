import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({ timestamps: true })
export class User {
  @Prop({
    required: true,
    type: String,
    min:[3, 'Name must be at least 3 characters'], 
    max:[20, 'Name must be at most 20 characters']
  })
  name: string;

  @Prop({
    required: true,
    unique: true,
    type: String
  })
  email: string;

  @Prop({
    required: true,
    type: String,
    min:[6, 'Password must be at least 6 characters'],
    max:[20, 'Password must be at most 20 characters']
  })
  password: string;

  @Prop({
    required: true,
    type: String,
    enum: ['user' , 'admin']
  })
  role: string;

  @Prop({type: String})
  avatar: string;

  @Prop({type:Number})
  age :number;

  @Prop({type:String})
  phoneNumber: string;

  @Prop({type:String})
  address: string;

  @Prop({
    type: String,
    enum:['false' , 'true']
  })
  active: string

  @Prop({type:String})
  varificationCode: string;

  @Prop({
    type:String,
    enum:['male' , 'female']
  })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(User);