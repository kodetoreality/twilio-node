/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Assistants
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import Page, { TwilioResponsePayload } from "../../../../base/Page";
import Response from "../../../../http/response";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

/**
 * Options to pass to each
 */
export interface ChunkListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: ChunkInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface ChunkListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface ChunkListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface ChunkSolution {
  id: string;
}

export interface ChunkListInstance {
  _version: V1;
  _solution: ChunkSolution;
  _uri: string;

  /**
   * Streams ChunkInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChunkListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: ChunkInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: ChunkListInstanceEachOptions,
    callback?: (item: ChunkInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of ChunkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChunkPage) => any
  ): Promise<ChunkPage>;
  /**
   * Lists ChunkInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChunkListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: ChunkInstance[]) => any
  ): Promise<ChunkInstance[]>;
  list(
    params: ChunkListInstanceOptions,
    callback?: (error: Error | null, items: ChunkInstance[]) => any
  ): Promise<ChunkInstance[]>;
  /**
   * Retrieve a single page of ChunkInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { ChunkListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: ChunkPage) => any
  ): Promise<ChunkPage>;
  page(
    params: ChunkListInstancePageOptions,
    callback?: (error: Error | null, items: ChunkPage) => any
  ): Promise<ChunkPage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function ChunkListInstance(version: V1, id: string): ChunkListInstance {
  if (!isValidPathParam(id)) {
    throw new Error("Parameter 'id' is not valid.");
  }

  const instance = {} as ChunkListInstance;

  instance._version = version;
  instance._solution = { id };
  instance._uri = `/Knowledge/${id}/Chunks`;

  instance.page = function page(
    params?:
      | ChunkListInstancePageOptions
      | ((error: Error | null, items: ChunkPage) => any),
    callback?: (error: Error | null, items: ChunkPage) => any
  ): Promise<ChunkPage> {
    if (params instanceof Function) {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    let data: any = {};

    if (params["pageSize"] !== undefined) data["PageSize"] = params["pageSize"];

    if (params.pageNumber !== undefined) data["Page"] = params.pageNumber;
    if (params.pageToken !== undefined) data["PageToken"] = params.pageToken;

    const headers: any = {};

    let operationVersion = version,
      operationPromise = operationVersion.page({
        uri: instance._uri,
        method: "get",
        params: data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) => new ChunkPage(operationVersion, payload, instance._solution)
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
  };
  instance.each = instance._version.each;
  instance.list = instance._version.list;

  instance.getPage = function getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: ChunkPage) => any
  ): Promise<ChunkPage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) => new ChunkPage(instance._version, payload, instance._solution)
    );
    pagePromise = instance._version.setPromiseCallback(pagePromise, callback);
    return pagePromise;
  };

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}

interface ChunkPayload extends TwilioResponsePayload {
  chunks: ChunkResource[];
}

interface ChunkResource {
  account_sid: string;
  content: string;
  metadata: Record<string, object>;
  date_created: Date;
  date_updated: Date;
}

export class ChunkInstance {
  constructor(protected _version: V1, payload: ChunkResource, id: string) {
    this.accountSid = payload.account_sid;
    this.content = payload.content;
    this.metadata = payload.metadata;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Knowledge resource.
   */
  accountSid: string;
  /**
   * The chunk content.
   */
  content: string;
  /**
   * The metadata of the chunk.
   */
  metadata: Record<string, object>;
  /**
   * The date and time in GMT when the Chunk was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Chunk was updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      accountSid: this.accountSid,
      content: this.content,
      metadata: this.metadata,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class ChunkPage extends Page<
  V1,
  ChunkPayload,
  ChunkResource,
  ChunkInstance
> {
  /**
   * Initialize the ChunkPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: ChunkSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of ChunkInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: ChunkResource): ChunkInstance {
    return new ChunkInstance(this._version, payload, this._solution.id);
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
