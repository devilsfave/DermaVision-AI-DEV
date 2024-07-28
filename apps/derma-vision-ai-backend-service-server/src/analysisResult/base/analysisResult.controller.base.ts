/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AnalysisResultService } from "../analysisResult.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AnalysisResultCreateInput } from "./AnalysisResultCreateInput";
import { AnalysisResult } from "./AnalysisResult";
import { AnalysisResultFindManyArgs } from "./AnalysisResultFindManyArgs";
import { AnalysisResultWhereUniqueInput } from "./AnalysisResultWhereUniqueInput";
import { AnalysisResultUpdateInput } from "./AnalysisResultUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AnalysisResultControllerBase {
  constructor(
    protected readonly service: AnalysisResultService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AnalysisResult })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createAnalysisResult(
    @common.Body() data: AnalysisResultCreateInput
  ): Promise<AnalysisResult> {
    return await this.service.createAnalysisResult({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        resultJsonField: true,
        createdAtField: true,
        imageRefField: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AnalysisResult] })
  @ApiNestedQuery(AnalysisResultFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analysisResults(
    @common.Req() request: Request
  ): Promise<AnalysisResult[]> {
    const args = plainToClass(AnalysisResultFindManyArgs, request.query);
    return this.service.analysisResults({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        resultJsonField: true,
        createdAtField: true,
        imageRefField: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async analysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput
  ): Promise<AnalysisResult | null> {
    const result = await this.service.analysisResult({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        resultJsonField: true,
        createdAtField: true,
        imageRefField: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateAnalysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput,
    @common.Body() data: AnalysisResultUpdateInput
  ): Promise<AnalysisResult | null> {
    try {
      return await this.service.updateAnalysisResult({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          resultJsonField: true,
          createdAtField: true,
          imageRefField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: AnalysisResult })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AnalysisResult",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAnalysisResult(
    @common.Param() params: AnalysisResultWhereUniqueInput
  ): Promise<AnalysisResult | null> {
    try {
      return await this.service.deleteAnalysisResult({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          resultJsonField: true,
          createdAtField: true,
          imageRefField: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
