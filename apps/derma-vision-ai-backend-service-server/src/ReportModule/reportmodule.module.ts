import { Module } from "@nestjs/common";
import { ReportModuleService } from "./reportmodule.service";
import { ReportModuleController } from "./reportmodule.controller";
import { ReportModuleResolver } from "./reportmodule.resolver";

@Module({
  controllers: [ReportModuleController],
  providers: [ReportModuleService, ReportModuleResolver],
  exports: [ReportModuleService],
})
export class ReportModuleModule {}
