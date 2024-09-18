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
export interface MessageListInstanceEachOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Function to process each record. If this and a positional callback are passed, this one will be used */
  callback?: (item: MessageInstance, done: (err?: Error) => void) => void;
  /** Function to be called upon completion of streaming */
  done?: Function;
  /** Upper limit for the number of records to return. each() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to list
 */
export interface MessageListInstanceOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Upper limit for the number of records to return. list() guarantees never to return more than limit. Default is no limit */
  limit?: number;
}

/**
 * Options to pass to page
 */
export interface MessageListInstancePageOptions {
  /** How many resources to return in each list page. The default is 50, and the maximum is 1000. */
  pageSize?: number;
  /** Page Number, this value is simply for client state */
  pageNumber?: number;
  /** PageToken provided by the API */
  pageToken?: string;
}

export interface MessageSolution {
  sessionId: string;
}

export interface MessageListInstance {
  _version: V1;
  _solution: MessageSolution;
  _uri: string;

  /**
   * Streams MessageInstance records from the API.
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
   * @param { MessageListInstanceEachOptions } [params] - Options for request
   * @param { function } [callback] - Function to process each record
   */
  each(
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  each(
    params: MessageListInstanceEachOptions,
    callback?: (item: MessageInstance, done: (err?: Error) => void) => void
  ): void;
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * @param { string } [targetUrl] - API-generated URL for the requested results page
   * @param { function } [callback] - Callback to handle list of records
   */
  getPage(
    targetUrl: string,
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  /**
   * Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstanceOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  list(
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  list(
    params: MessageListInstanceOptions,
    callback?: (error: Error | null, items: MessageInstance[]) => any
  ): Promise<MessageInstance[]>;
  /**
   * Retrieve a single page of MessageInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param { MessageListInstancePageOptions } [params] - Options for request
   * @param { function } [callback] - Callback to handle list of records
   */
  page(
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;
  page(
    params: MessageListInstancePageOptions,
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function MessageListInstance(
  version: V1,
  sessionId: string
): MessageListInstance {
  if (!isValidPathParam(sessionId)) {
    throw new Error("Parameter 'sessionId' is not valid.");
  }

  const instance = {} as MessageListInstance;

  instance._version = version;
  instance._solution = { sessionId };
  instance._uri = `/Sessions/${sessionId}/Messages`;

  instance.page = function page(
    params?:
      | MessageListInstancePageOptions
      | ((error: Error | null, items: MessagePage) => any),
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage> {
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
      (payload) =>
        new MessagePage(operationVersion, payload, instance._solution)
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
    callback?: (error: Error | null, items: MessagePage) => any
  ): Promise<MessagePage> {
    const operationPromise = instance._version._domain.twilio.request({
      method: "get",
      uri: targetUrl,
    });

    let pagePromise = operationPromise.then(
      (payload) =>
        new MessagePage(instance._version, payload, instance._solution)
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

interface MessagePayload extends TwilioResponsePayload {
  messages: MessageResource[];
}

interface MessageResource {
  id: string;
  account_sid: string;
  assistant_id: string;
  session_id: string;
  identity: string;
  role: string;
  content: Record<string, object>;
  meta: Record<string, object>;
  date_created: Date;
  date_updated: Date;
}

export class MessageInstance {
  constructor(
    protected _version: V1,
    payload: MessageResource,
    sessionId: string
  ) {
    this.id = payload.id;
    this.accountSid = payload.account_sid;
    this.assistantId = payload.assistant_id;
    this.sessionId = payload.session_id;
    this.identity = payload.identity;
    this.role = payload.role;
    this.content = payload.content;
    this.meta = payload.meta;
    this.dateCreated = deserialize.iso8601DateTime(payload.date_created);
    this.dateUpdated = deserialize.iso8601DateTime(payload.date_updated);
  }

  /**
   * The message ID.
   */
  id: string;
  /**
   * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Message resource.
   */
  accountSid: string;
  /**
   * The Assistant ID.
   */
  assistantId: string;
  /**
   * The Session ID.
   */
  sessionId: string;
  /**
   * The identity of the user.
   */
  identity: string;
  /**
   * The role of the user associated with the message.
   */
  role: string;
  /**
   * The content of the message.
   */
  content: Record<string, object>;
  /**
   * The metadata of the message.
   */
  meta: Record<string, object>;
  /**
   * The date and time in GMT when the Message was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateCreated: Date;
  /**
   * The date and time in GMT when the Message was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
   */
  dateUpdated: Date;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      id: this.id,
      accountSid: this.accountSid,
      assistantId: this.assistantId,
      sessionId: this.sessionId,
      identity: this.identity,
      role: this.role,
      content: this.content,
      meta: this.meta,
      dateCreated: this.dateCreated,
      dateUpdated: this.dateUpdated,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export class MessagePage extends Page<
  V1,
  MessagePayload,
  MessageResource,
  MessageInstance
> {
  /**
   * Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(
    version: V1,
    response: Response<string>,
    solution: MessageSolution
  ) {
    super(version, response, solution);
  }

  /**
   * Build an instance of MessageInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: MessageResource): MessageInstance {
    return new MessageInstance(
      this._version,
      payload,
      this._solution.sessionId
    );
  }

  [inspect.custom](depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
