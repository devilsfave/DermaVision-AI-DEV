import { Injectable } from "@nestjs/common";
import { InitiateAnalysisInput } from "../analysisModule/InitiateAnalysisInput";
import { AnalysisResultOutput } from "../analysisModule/AnalysisResultOutput";

@Injectable()
export class AnalysisModuleService {
  constructor() {}
  async InitiateAnalysis(args: InitiateAnalysisInput): Promise<AnalysisResultOutput> {
    throw new Error("Not implemented");
  }
}
