import { Injectable, UnauthorizedException } from "@nestjs/common";
import { loginEntity } from "src/login/login.entity";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository, getRepository } from "typeorm"
import * as bcrypt from 'bcryptjs';
import { authEntity } from "./auth.entity";

@Injectable()
export class authService{
    constructor(@InjectRepository(loginEntity) private repo: Repository<loginEntity>){}
    
    async registration(Name: string,email: string,phone: number,password: string){
        const salt=await bcrypt.hash(password,12);

        const userReg:loginEntity=new loginEntity();
        userReg.Name=Name;
        userReg.email=email;
        userReg.phone=phone;
        userReg.password=password;
        userReg.salt=salt;
        this.repo.create(userReg);
        return await this.repo.save(userReg);
    }
    async loginUser(Name: string,password: string){
        const userLogin:authEntity=new authEntity();
        userLogin.Name=Name;
        userLogin.password=password;
        
        this.repo.create(userLogin)

        const user: loginEntity=await this.repo.findOne({where:{Name}})
        if(!user){
            throw new UnauthorizedException('Invalid Creds')
        }
        const passMatch:boolean=await bcrypt.compare(password,user.salt)
        
        if(passMatch){
            return true
        } else {
            return false
        }
    }
    async update(Name: string, password: string){
        const user: loginEntity=await this.repo.findOne({where:{Name}})
        
        if(password){
        user.password=password
        const salt=await bcrypt.hash(password,12)
        user.salt=salt
        }
        return await this.repo.save(user)
    }
    
}