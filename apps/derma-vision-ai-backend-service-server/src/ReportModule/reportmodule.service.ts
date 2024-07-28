import { Injectable } from "@nestjs/common";
import { GenerateReportInput } from "../reportModule/GenerateReportInput";
import { ReportOutput } from "../reportModule/ReportOutput";

@Injectable()
export class ReportModuleService {
  constructor() {}
  async GenerateReport(args: GenerateReportInput): Promise<ReportOutput> {
    throw new Error("Not implemented");
  }
}
