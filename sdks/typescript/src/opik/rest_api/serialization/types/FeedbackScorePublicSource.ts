/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as serializers from "../index";
import * as OpikApi from "../../api/index";
import * as core from "../../core";

export const FeedbackScorePublicSource: core.serialization.Schema<
    serializers.FeedbackScorePublicSource.Raw,
    OpikApi.FeedbackScorePublicSource
> = core.serialization.enum_(["ui", "sdk"]);

export declare namespace FeedbackScorePublicSource {
    type Raw = "ui" | "sdk";
}