import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AnalysisResultService } from "./analysisResult.service";
import { AnalysisResultControllerBase } from "./base/analysisResult.controller.base";

@swagger.ApiTags("analysisResults")
@common.Controller("analysisResults")
export class AnalysisResultController extends AnalysisResultControllerBase {
  constructor(
    protected readonly service: AnalysisResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
