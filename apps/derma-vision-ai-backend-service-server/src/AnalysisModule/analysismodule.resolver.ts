import * as graphql from "@nestjs/graphql";
import { InitiateAnalysisInput } from "../analysisModule/InitiateAnalysisInput";
import { AnalysisResultOutput } from "../analysisModule/AnalysisResultOutput";
import { AnalysisModuleService } from "./analysismodule.service";

export class AnalysisModuleResolver {
  constructor(protected readonly service: AnalysisModuleService) {}

  @graphql.Mutation(() => AnalysisResultOutput)
  async InitiateAnalysis(
    @graphql.Args()
    args: InitiateAnalysisInput
  ): Promise<AnalysisResultOutput> {
    return this.service.InitiateAnalysis(args);
  }
}
