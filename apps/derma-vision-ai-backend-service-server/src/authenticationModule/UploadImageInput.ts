import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class UploadImageInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    imageUrl!: string;

    @Field(() => Date)
    @Type(() => Date)
    uploadedAt!: Date;
}

export { UploadImageInput as UploadImageInput };