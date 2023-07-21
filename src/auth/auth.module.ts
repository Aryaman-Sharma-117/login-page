import { Module } from "@nestjs/common";
import { authController } from "./auth.controller";
import { authService } from "./auth.service";
import { TypeOrmModule} from '@nestjs/typeorm'
import { authEntity } from "./auth.entity";
import { loginEntity } from "src/login/login.entity";


@Module({
    imports:[
        TypeOrmModule.forFeature([authEntity,loginEntity])
    ],
    controllers: [authController],
    providers: [authService]
})
export class authModule{}