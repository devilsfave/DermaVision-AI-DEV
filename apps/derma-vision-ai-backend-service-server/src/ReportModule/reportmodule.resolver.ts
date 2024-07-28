import * as graphql from "@nestjs/graphql";
import { GenerateReportInput } from "../reportModule/GenerateReportInput";
import { ReportOutput } from "../reportModule/ReportOutput";
import { ReportModuleService } from "./reportmodule.service";

export class ReportModuleResolver {
  constructor(protected readonly service: ReportModuleService) {}

  @graphql.Mutation(() => ReportOutput)
  async GenerateReport(
    @graphql.Args()
    args: GenerateReportInput
  ): Promise<ReportOutput> {
    return this.service.GenerateReport(args);
  }
}
