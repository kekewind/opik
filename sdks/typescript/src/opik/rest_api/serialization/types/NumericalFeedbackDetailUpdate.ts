/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const NumericalFeedbackDetailUpdate: core.serialization.ObjectSchema<
    serializers.NumericalFeedbackDetailUpdate.Raw,
    OpikApi.NumericalFeedbackDetailUpdate
> = core.serialization.object({
    max: core.serialization.number(),
    min: core.serialization.number(),
});

export declare namespace NumericalFeedbackDetailUpdate {
    interface Raw {
        max: number;
        min: number;
    }
}