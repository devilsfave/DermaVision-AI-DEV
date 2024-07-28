import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ReportModuleService } from "./reportmodule.service";
import { GenerateReportInput } from "../reportModule/GenerateReportInput";
import { ReportOutput } from "../reportModule/ReportOutput";

@swagger.ApiTags("reportModules")
@common.Controller("reportModules")
export class ReportModuleController {
  constructor(protected readonly service: ReportModuleService) {}

  @common.Post("/generate-report")
  @swagger.ApiOkResponse({
    type: ReportOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateReport(
    @common.Body()
    body: GenerateReportInput
  ): Promise<ReportOutput> {
        return this.service.GenerateReport(body);
      }
}
