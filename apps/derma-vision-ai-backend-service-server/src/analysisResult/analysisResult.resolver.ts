import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AnalysisResultResolverBase } from "./base/analysisResult.resolver.base";
import { AnalysisResult } from "./base/AnalysisResult";
import { AnalysisResultService } from "./analysisResult.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AnalysisResult)
export class AnalysisResultResolver extends AnalysisResultResolverBase {
  constructor(
    protected readonly service: AnalysisResultService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
