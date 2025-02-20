/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Consultation } from "./Consultation";
import { ConsultationCountArgs } from "./ConsultationCountArgs";
import { ConsultationFindManyArgs } from "./ConsultationFindManyArgs";
import { ConsultationFindUniqueArgs } from "./ConsultationFindUniqueArgs";
import { CreateConsultationArgs } from "./CreateConsultationArgs";
import { UpdateConsultationArgs } from "./UpdateConsultationArgs";
import { DeleteConsultationArgs } from "./DeleteConsultationArgs";
import { ConsultationService } from "../consultation.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Consultation)
export class ConsultationResolverBase {
  constructor(
    protected readonly service: ConsultationService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "any",
  })
  async _consultationsMeta(
    @graphql.Args() args: ConsultationCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Consultation])
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "any",
  })
  async consultations(
    @graphql.Args() args: ConsultationFindManyArgs
  ): Promise<Consultation[]> {
    return this.service.consultations(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Consultation, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "read",
    possession: "own",
  })
  async consultation(
    @graphql.Args() args: ConsultationFindUniqueArgs
  ): Promise<Consultation | null> {
    const result = await this.service.consultation(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Consultation)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "create",
    possession: "any",
  })
  async createConsultation(
    @graphql.Args() args: CreateConsultationArgs
  ): Promise<Consultation> {
    return await this.service.createConsultation({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Consultation)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "update",
    possession: "any",
  })
  async updateConsultation(
    @graphql.Args() args: UpdateConsultationArgs
  ): Promise<Consultation | null> {
    try {
      return await this.service.updateConsultation({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Consultation)
  @nestAccessControl.UseRoles({
    resource: "Consultation",
    action: "delete",
    possession: "any",
  })
  async deleteConsultation(
    @graphql.Args() args: DeleteConsultationArgs
  ): Promise<Consultation | null> {
    try {
      return await this.service.deleteConsultation(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
