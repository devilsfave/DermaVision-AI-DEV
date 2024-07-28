import { Injectable } from "@nestjs/common";
import { ScheduleConsultationInput } from "../consultationModule/ScheduleConsultationInput";
import { ConsultationOutput } from "../consultationModule/ConsultationOutput";

@Injectable()
export class ConsultationModuleService {
  constructor() {}
  async ScheduleConsultation(args: ScheduleConsultationInput): Promise<ConsultationOutput> {
    throw new Error("Not implemented");
  }
}
