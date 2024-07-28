import { Module } from "@nestjs/common";
import { AnalysisModuleService } from "./analysismodule.service";
import { AnalysisModuleController } from "./analysismodule.controller";
import { AnalysisModuleResolver } from "./analysismodule.resolver";

@Module({
  controllers: [AnalysisModuleController],
  providers: [AnalysisModuleService, AnalysisModuleResolver],
  exports: [AnalysisModuleService],
})
export class AnalysisModuleModule {}
