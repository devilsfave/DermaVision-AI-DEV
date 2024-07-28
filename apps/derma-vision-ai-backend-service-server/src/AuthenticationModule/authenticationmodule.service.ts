import { Injectable } from "@nestjs/common";
import { LoginInput } from "../authenticationModule/LoginInput";
import { AuthUser } from "../authenticationModule/AuthUser";
import { UploadImageInput } from "../authenticationModule/UploadImageInput";
import { UploadImageOutput } from "../authenticationModule/UploadImageOutput";

@Injectable()
export class AuthenticationModuleService {
  constructor() {}
  async Login(args: LoginInput): Promise<AuthUser> {
    throw new Error("Not implemented");
  }
  async Logout(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async PasswordReset(args: string): Promise<boolean> {
    throw new Error("Not implemented");
  }
  async UploadImage(args: UploadImageInput): Promise<UploadImageOutput> {
    throw new Error("Not implemented");
  }
}
