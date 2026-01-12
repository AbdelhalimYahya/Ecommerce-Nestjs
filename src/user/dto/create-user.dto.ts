import { IsString , Min , Max, IsEmail, IsEnum, IsUrl, IsNumber, IsPhoneNumber, IsBoolean, MinLength, MaxLength, IsOptional } from "class-validator";

export class CreateUserDto {
    @IsString({ message: 'Name must be a string' })
    @MinLength(3, { message: 'Name must be at least 3 characters' })
    @MaxLength(20, { message: 'Name must be at most 20 characters' })
    name: string;

    @IsString({ message: 'Email must be a string' })
    @IsEmail({}, { message: 'Email is not valid' })
    email: string;

    @IsString({ message: 'Password must be a string' })
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    @MaxLength(20, { message: 'Password must be at most 20 characters' })
    password: string;

    @IsEnum(['user', 'admin'], { message: 'Role must be either "user" or "admin"' })
    role: string;
    
    @IsString({ message: 'Avatar must be a string' })
    @IsUrl({} , { message: 'Avatar must be a valid URL' })
    avatar: string;

    @IsNumber({}, { message: 'Age must be a number' })
    age: number;
    
    @IsString({ message: 'PhoneNumber must be a string' })
    @IsPhoneNumber('EG', { message: 'PhoneNumber is not valid' })
    phoneNumber: string;
    
    @IsString({ message: 'Address must be a string' })
    address: string;
    
    @IsBoolean({ message: 'Active must be a boolean' })
    @IsEnum([true, false], { message: 'Active must be either true or false' })
    active: boolean;
    
    @MinLength(6, { message: 'VarificationCode must be at least 6 characters' })
    @IsString({ message: 'VarificationCode must be a string' })
    @IsOptional()
    varificationCode: string;
    
    @IsEnum(['male', 'female'], { message: 'Gender must be either "male" or "female"' })
    gender: string;
}