/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const LlmAsJudgeOutputSchemaWriteType: core.serialization.Schema<
    serializers.LlmAsJudgeOutputSchemaWriteType.Raw,
    OpikApi.LlmAsJudgeOutputSchemaWriteType
> = core.serialization.enum_(["BOOLEAN", "INTEGER", "DOUBLE"]);

export declare namespace LlmAsJudgeOutputSchemaWriteType {
    type Raw = "BOOLEAN" | "INTEGER" | "DOUBLE";
}