import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { ConsultationModule } from "./consultation/consultation.module";
import { ImageModule } from "./image/image.module";
import { NotificationModule } from "./notification/notification.module";
import { AnalysisResultModule } from "./analysisResult/analysisResult.module";
import { ReportModule } from "./report/report.module";
import { AnalysisModuleModule } from "./AnalysisModule/analysismodule.module";
import { AuthenticationModuleModule } from "./AuthenticationModule/authenticationmodule.module";
import { ConsultationModuleModule } from "./ConsultationModule/consultationmodule.module";
import { ReportModuleModule } from "./ReportModule/reportmodule.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

import { ACLModule } from "./auth/acl.module";
import { AuthModule } from "./auth/auth.module";

@Module({
  controllers: [],
  imports: [
    ACLModule,
    AuthModule,
    UserModule,
    ConsultationModule,
    ImageModule,
    NotificationModule,
    AnalysisResultModule,
    ReportModule,
    AnalysisModuleModule,
    AuthenticationModuleModule,
    ConsultationModuleModule,
    ReportModuleModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
