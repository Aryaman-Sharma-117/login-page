import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { loginModule } from './login/login.module';
import { authModule } from './auth/auth.module';

const ormOptions: TypeOrmModuleOptions ={ 
  type: "mysql", 
  host: "localhost", 
  port: 3306, 
  username: "root", 
  password: "password", 
  database: "login_info" ,
  autoLoadEntities: true,
  synchronize: true

}

@Module({
  imports: [loginModule,
    TypeOrmModule.forRoot(ormOptions)
    ,authModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
