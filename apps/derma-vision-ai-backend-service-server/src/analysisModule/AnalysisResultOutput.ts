import { ObjectType, Field } from "@nestjs/graphql";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../types";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("AnalysisResultOutputObject")
class AnalysisResultOutput {
    @Field(() => GraphQLJSON)
    result!: InputJsonValue;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    analysisStatus!: string;
}

export { AnalysisResultOutput as AnalysisResultOutput };