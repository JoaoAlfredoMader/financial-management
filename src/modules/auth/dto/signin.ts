import { IsString, IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class SigninDTO {
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;
}
