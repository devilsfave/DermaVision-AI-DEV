import { Module } from "@nestjs/common";
import { AuthenticationModuleService } from "./authenticationmodule.service";
import { AuthenticationModuleController } from "./authenticationmodule.controller";
import { AuthenticationModuleResolver } from "./authenticationmodule.resolver";

@Module({
  controllers: [AuthenticationModuleController],
  providers: [AuthenticationModuleService, AuthenticationModuleResolver],
  exports: [AuthenticationModuleService],
})
export class AuthenticationModuleModule {}
