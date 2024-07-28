import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { ConsultationModuleService } from "./consultationmodule.service";
import { ScheduleConsultationInput } from "../consultationModule/ScheduleConsultationInput";
import { ConsultationOutput } from "../consultationModule/ConsultationOutput";

@swagger.ApiTags("consultationModules")
@common.Controller("consultationModules")
export class ConsultationModuleController {
  constructor(protected readonly service: ConsultationModuleService) {}

  @common.Post("/schedule-consultation")
  @swagger.ApiOkResponse({
    type: ConsultationOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ScheduleConsultation(
    @common.Body()
    body: ScheduleConsultationInput
  ): Promise<ConsultationOutput> {
        return this.service.ScheduleConsultation(body);
      }
}
