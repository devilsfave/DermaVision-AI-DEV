import { Module } from "@nestjs/common";
import { ConsultationModuleService } from "./consultationmodule.service";
import { ConsultationModuleController } from "./consultationmodule.controller";
import { ConsultationModuleResolver } from "./consultationmodule.resolver";

@Module({
  controllers: [ConsultationModuleController],
  providers: [ConsultationModuleService, ConsultationModuleResolver],
  exports: [ConsultationModuleService],
})
export class ConsultationModuleModule {}
