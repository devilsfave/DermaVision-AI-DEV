import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AnalysisResultModuleBase } from "./base/analysisResult.module.base";
import { AnalysisResultService } from "./analysisResult.service";
import { AnalysisResultController } from "./analysisResult.controller";
import { AnalysisResultResolver } from "./analysisResult.resolver";

@Module({
  imports: [AnalysisResultModuleBase, forwardRef(() => AuthModule)],
  controllers: [AnalysisResultController],
  providers: [AnalysisResultService, AnalysisResultResolver],
  exports: [AnalysisResultService],
})
export class AnalysisResultModule {}
