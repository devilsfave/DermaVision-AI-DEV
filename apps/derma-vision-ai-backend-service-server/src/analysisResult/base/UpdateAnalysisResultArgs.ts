/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalysisResultWhereUniqueInput } from "./AnalysisResultWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { AnalysisResultUpdateInput } from "./AnalysisResultUpdateInput";

@ArgsType()
class UpdateAnalysisResultArgs {
  @ApiProperty({
    required: true,
    type: () => AnalysisResultWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultWhereUniqueInput)
  @Field(() => AnalysisResultWhereUniqueInput, { nullable: false })
  where!: AnalysisResultWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => AnalysisResultUpdateInput,
  })
  @ValidateNested()
  @Type(() => AnalysisResultUpdateInput)
  @Field(() => AnalysisResultUpdateInput, { nullable: false })
  data!: AnalysisResultUpdateInput;
}

export { UpdateAnalysisResultArgs as UpdateAnalysisResultArgs };
