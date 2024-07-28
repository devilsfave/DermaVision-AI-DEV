import * as graphql from "@nestjs/graphql";
import { ScheduleConsultationInput } from "../consultationModule/ScheduleConsultationInput";
import { ConsultationOutput } from "../consultationModule/ConsultationOutput";
import { ConsultationModuleService } from "./consultationmodule.service";

export class ConsultationModuleResolver {
  constructor(protected readonly service: ConsultationModuleService) {}

  @graphql.Mutation(() => ConsultationOutput)
  async ScheduleConsultation(
    @graphql.Args()
    args: ScheduleConsultationInput
  ): Promise<ConsultationOutput> {
    return this.service.ScheduleConsultation(args);
  }
}
