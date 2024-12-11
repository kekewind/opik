/**
 * This file was auto-generated by Fern from our API Definition.
 */
import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";
import { DeltaRole } from "./DeltaRole";
import { ToolCall } from "./ToolCall";
import { FunctionCall } from "./FunctionCall";
export declare const Delta: core.serialization.ObjectSchema<serializers.Delta.Raw, OpikApi.Delta>;
export declare namespace Delta {
    interface Raw {
        role?: DeltaRole.Raw | null;
        content?: string | null;
        tool_calls?: ToolCall.Raw[] | null;
        function_call?: FunctionCall.Raw | null;
    }
}