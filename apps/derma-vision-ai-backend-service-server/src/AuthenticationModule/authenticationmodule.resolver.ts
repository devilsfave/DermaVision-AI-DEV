import * as graphql from "@nestjs/graphql";
import { LoginInput } from "../authenticationModule/LoginInput";
import { AuthUser } from "../authenticationModule/AuthUser";
import { UploadImageInput } from "../authenticationModule/UploadImageInput";
import { UploadImageOutput } from "../authenticationModule/UploadImageOutput";
import { AuthenticationModuleService } from "./authenticationmodule.service";

export class AuthenticationModuleResolver {
  constructor(protected readonly service: AuthenticationModuleService) {}

  @graphql.Mutation(() => AuthUser)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<AuthUser> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => Boolean)
  async Logout(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.Logout(args);
  }

  @graphql.Mutation(() => Boolean)
  async PasswordReset(
    @graphql.Args()
    args: string
  ): Promise<boolean> {
    return this.service.PasswordReset(args);
  }

  @graphql.Mutation(() => UploadImageOutput)
  async UploadImage(
    @graphql.Args()
    args: UploadImageInput
  ): Promise<UploadImageOutput> {
    return this.service.UploadImage(args);
  }
}
