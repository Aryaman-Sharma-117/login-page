import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule} from '@nestjs/typeorm'
import { loginController } from "./login.controller";
import { loginService } from "./login.service";
import { loginEntity } from "./login.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature([loginEntity])
    ],
    controllers:[loginController],
    providers:[loginService]
})
export class loginModule{}
