import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthenticationModuleService } from "./authenticationmodule.service";
import { UploadImageInput } from "../authenticationModule/UploadImageInput";
import { AuthUser } from "../authenticationModule/AuthUser";
import { UploadImageOutput } from "../authenticationModule/UploadImageOutput";

@swagger.ApiTags("authenticationModules")
@common.Controller("authenticationModules")
export class AuthenticationModuleController {
  constructor(protected readonly service: AuthenticationModuleService) {}

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: AuthUser
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: UploadImageInput
  ): Promise<AuthUser> {
        return this.service.Login(body);
      }

  @common.Post("/logout")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Logout(
    @common.Body()
    body: UploadImageInput
  ): Promise<boolean> {
        return this.service.Logout(body);
      }

  @common.Post("/password-reset")
  @swagger.ApiOkResponse({
    type: Boolean
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async PasswordReset(
    @common.Body()
    body: UploadImageInput
  ): Promise<boolean> {
        return this.service.PasswordReset(body);
      }

  @common.Post("/upload-image")
  @swagger.ApiOkResponse({
    type: UploadImageOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async UploadImage(
    @common.Body()
    body: UploadImageInput
  ): Promise<UploadImageOutput> {
        return this.service.UploadImage(body);
      }
}
