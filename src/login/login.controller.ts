import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common/decorators";
import { loginService } from "./login.service";
import { loginEntity } from "./login.entity";

@Controller('login')
export class loginController{
    
    constructor(private loginService: loginService){}

    @Get()
        getUsers(){
            return this.loginService.getUsers();
        }
    
    @Delete(':Name')
        deleteUser(@Param('Name') Name: string){
            return this.loginService.delete(Name)
        }
}