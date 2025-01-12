/**
 * This file was auto-generated by Fern from our API Definition.
 */

import * as environments from "../../../../environments";
import * as core from "../../../../core";
import * as OpikApi from "../../../index";
import urlJoin from "url-join";
import * as serializers from "../../../../serialization/index";
import * as errors from "../../../../errors/index";

export declare namespace SystemUsage {
    interface Options {
        environment?: core.Supplier<environments.OpikApiEnvironment | string>;
        /** Override the Authorization header */
        apiKey?: core.Supplier<string | undefined>;
        /** Override the Comet-Workspace header */
        workspaceName?: core.Supplier<string | undefined>;
    }

    interface RequestOptions {
        /** The maximum time to wait for a response in seconds. */
        timeoutInSeconds?: number;
        /** The number of times to retry the request. Defaults to 2. */
        maxRetries?: number;
        /** A hook to abort the request. */
        abortSignal?: AbortSignal;
        /** Override the Authorization header */
        apiKey?: string | undefined;
        /** Override the Comet-Workspace header */
        workspaceName?: string | undefined;
        /** Additional headers to include in the request. */
        headers?: Record<string, string>;
    }
}

/**
 * System usage related resource
 */
export class SystemUsage {
    constructor(protected readonly _options: SystemUsage.Options = {}) {}

    /**
     * Get datasets information for BI events per user per workspace
     *
     * @param {SystemUsage.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.systemUsage.getDatasetBiInfo()
     */
    public getDatasetBiInfo(
        requestOptions?: SystemUsage.RequestOptions
    ): core.APIPromise<OpikApi.BiInformationResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ?? environments.OpikApiEnvironment.Default,
                        "v1/internal/usage/bi-datasets"
                    ),
                    method: "GET",
                    headers: {
                        "Comet-Workspace":
                            (await core.Supplier.get(this._options.workspaceName)) != null
                                ? await core.Supplier.get(this._options.workspaceName)
                                : undefined,
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...(await this._getCustomAuthorizationHeaders()),
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    withCredentials: true,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.BiInformationResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.OpikApiTimeoutError(
                            "Timeout exceeded when calling GET /v1/internal/usage/bi-datasets."
                        );
                    case "unknown":
                        throw new errors.OpikApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Get experiments information for BI events per user per workspace
     *
     * @param {SystemUsage.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.systemUsage.getExperimentBiInfo()
     */
    public getExperimentBiInfo(
        requestOptions?: SystemUsage.RequestOptions
    ): core.APIPromise<OpikApi.BiInformationResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ?? environments.OpikApiEnvironment.Default,
                        "v1/internal/usage/bi-experiments"
                    ),
                    method: "GET",
                    headers: {
                        "Comet-Workspace":
                            (await core.Supplier.get(this._options.workspaceName)) != null
                                ? await core.Supplier.get(this._options.workspaceName)
                                : undefined,
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...(await this._getCustomAuthorizationHeaders()),
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    withCredentials: true,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.BiInformationResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.OpikApiTimeoutError(
                            "Timeout exceeded when calling GET /v1/internal/usage/bi-experiments."
                        );
                    case "unknown":
                        throw new errors.OpikApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Get traces information for BI events per user per workspace
     *
     * @param {SystemUsage.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.systemUsage.getTracesBiInfo()
     */
    public getTracesBiInfo(
        requestOptions?: SystemUsage.RequestOptions
    ): core.APIPromise<OpikApi.BiInformationResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ?? environments.OpikApiEnvironment.Default,
                        "v1/internal/usage/bi-traces"
                    ),
                    method: "GET",
                    headers: {
                        "Comet-Workspace":
                            (await core.Supplier.get(this._options.workspaceName)) != null
                                ? await core.Supplier.get(this._options.workspaceName)
                                : undefined,
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...(await this._getCustomAuthorizationHeaders()),
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    withCredentials: true,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.BiInformationResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.OpikApiTimeoutError(
                            "Timeout exceeded when calling GET /v1/internal/usage/bi-traces."
                        );
                    case "unknown":
                        throw new errors.OpikApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    /**
     * Get traces count on previous day for all available workspaces
     *
     * @param {SystemUsage.RequestOptions} requestOptions - Request-specific configuration.
     *
     * @example
     *     await client.systemUsage.getTracesCountForWorkspaces()
     */
    public getTracesCountForWorkspaces(
        requestOptions?: SystemUsage.RequestOptions
    ): core.APIPromise<OpikApi.TraceCountResponse> {
        return core.APIPromise.from(
            (async () => {
                const _response = await core.fetcher({
                    url: urlJoin(
                        (await core.Supplier.get(this._options.environment)) ?? environments.OpikApiEnvironment.Default,
                        "v1/internal/usage/workspace-trace-counts"
                    ),
                    method: "GET",
                    headers: {
                        "Comet-Workspace":
                            (await core.Supplier.get(this._options.workspaceName)) != null
                                ? await core.Supplier.get(this._options.workspaceName)
                                : undefined,
                        "X-Fern-Language": "JavaScript",
                        "X-Fern-Runtime": core.RUNTIME.type,
                        "X-Fern-Runtime-Version": core.RUNTIME.version,
                        ...(await this._getCustomAuthorizationHeaders()),
                        ...requestOptions?.headers,
                    },
                    contentType: "application/json",
                    requestType: "json",
                    timeoutMs:
                        requestOptions?.timeoutInSeconds != null ? requestOptions.timeoutInSeconds * 1000 : 60000,
                    maxRetries: requestOptions?.maxRetries,
                    withCredentials: true,
                    abortSignal: requestOptions?.abortSignal,
                });
                if (_response.ok) {
                    return {
                        ok: _response.ok,
                        body: serializers.TraceCountResponse.parseOrThrow(_response.body, {
                            unrecognizedObjectKeys: "passthrough",
                            allowUnrecognizedUnionMembers: true,
                            allowUnrecognizedEnumValues: true,
                            breadcrumbsPrefix: ["response"],
                        }),
                        headers: _response.headers,
                    };
                }
                if (_response.error.reason === "status-code") {
                    throw new errors.OpikApiError({
                        statusCode: _response.error.statusCode,
                        body: _response.error.body,
                    });
                }
                switch (_response.error.reason) {
                    case "non-json":
                        throw new errors.OpikApiError({
                            statusCode: _response.error.statusCode,
                            body: _response.error.rawBody,
                        });
                    case "timeout":
                        throw new errors.OpikApiTimeoutError(
                            "Timeout exceeded when calling GET /v1/internal/usage/workspace-trace-counts."
                        );
                    case "unknown":
                        throw new errors.OpikApiError({
                            message: _response.error.errorMessage,
                        });
                }
            })()
        );
    }

    protected async _getCustomAuthorizationHeaders() {
        const apiKeyValue = await core.Supplier.get(this._options.apiKey);
        return { Authorization: apiKeyValue };
    }
}