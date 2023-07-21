import { Body, Controller, Delete, Get, Param, Post, Patch } from "@nestjs/common/decorators";
import { loginEntity } from "src/login/login.entity";
import { authService } from "./auth.service";
import { authEntity } from "./auth.entity";

@Controller('auth')
export class authController{
    constructor(private authService: authService){}
    @Post('register')
        registration(@Body() info:loginEntity){
            const {Name,email,phone,password}=info;
            return this.authService.registration(Name,email,phone,password);
        }
    
    @Post('log')
        signin(@Body() info:authEntity){
            const {Name,password}=info
            return this.authService.loginUser(Name,password)
        }

    @Patch(':Name')
        update(@Param('Name') Name: string, @Body() info:loginEntity){
            const {password}=info
            return this.authService.update(Name,password)
        }
    
    
}