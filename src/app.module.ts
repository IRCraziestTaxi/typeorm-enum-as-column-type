import { TypeormConfig } from "@app/domain/config/database/interfaces";
import { typeormConfig } from "@app/domain/config/database/typeorm.config";
import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { StaffMemberModule } from "./staff-member/staff-member.module";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [
                ConfigModule.forRoot({
                    load: [typeormConfig]
                })
            ],
            inject: [
                ConfigService
            ],
            useFactory: async (configService: ConfigService<TypeormConfig>) =>
                configService.get("options")
        }),
        // App modules.
        StaffMemberModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
