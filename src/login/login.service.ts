import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { loginEntity } from "./login.entity";

@Injectable()
export class loginService{

    constructor(@InjectRepository(loginEntity) private repo: Repository<loginEntity>){}

    async getUsers(){
        return await this.repo.find();
    }

    async delete(Name: string){
        return this.repo.delete({Name});
    }
}