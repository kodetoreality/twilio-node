/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import serialize = require('../../../../base/serialize');
import { InteractionList } from './session/interaction';
import { InteractionListInstance } from './session/interaction';
import { ParticipantList } from './session/participant';
import { ParticipantListInstance } from './session/participant';
import { SerializableClass } from '../../../../interfaces';

type SessionMode = 'message-only'|'voice-only'|'voice-and-message';

type SessionStatus = 'open'|'in-progress'|'closed'|'failed'|'unknown';

/**
 * Initialize the SessionList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the resource's parent Service
 */
declare function SessionList(version: V1, serviceSid: string): SessionListInstance;

/**
 * Options to pass to update
 *
 * @property dateExpiry - The ISO 8601 date when the Session should expire
 * @property status - The new status of the resource
 * @property ttl - When the session will expire
 */
interface SessionInstanceUpdateOptions {
  dateExpiry?: Date;
  status?: SessionStatus;
  ttl?: number;
}

interface SessionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): SessionContext;
  /**
   * create a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  create(callback?: (error: Error | null, item: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * create a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts?: SessionListInstanceCreateOptions, callback?: (error: Error | null, item: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Streams SessionInstance records from the API.
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
   * @param callback - Function to process each record
   */
  each(callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams SessionInstance records from the API.
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
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: SessionListInstanceEachOptions, callback?: (item: SessionInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a session
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): SessionContext;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Retrieve a single target page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  /**
   * Lists SessionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: SessionListInstanceOptions, callback?: (error: Error | null, items: SessionInstance[]) => any): Promise<SessionInstance[]>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Retrieve a single page of SessionInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: SessionListInstancePageOptions, callback?: (error: Error | null, items: SessionPage) => any): Promise<SessionPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property dateExpiry - The ISO 8601 date when the Session should expire
 * @property mode - The Mode of the Session
 * @property participants - The Participant objects to include in the new session
 * @property status - Session status
 * @property ttl - When the session will expire
 * @property uniqueName - An application-defined string that uniquely identifies the resource
 */
interface SessionListInstanceCreateOptions {
  dateExpiry?: Date;
  mode?: SessionMode;
  participants?: object | object[];
  status?: SessionStatus;
  ttl?: number;
  uniqueName?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 */
interface SessionListInstanceEachOptions {
  callback?: (item: SessionInstance, done: (err?: Error) => void) => void;
  done?: Function;
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to list
 *
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 */
interface SessionListInstanceOptions {
  limit?: number;
  pageSize?: number;
}

/**
 * Options to pass to page
 *
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 */
interface SessionListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface SessionPayload extends SessionResource, Page.TwilioResponsePayload {
}

interface SessionResource {
  account_sid: string;
  closed_reason: string;
  date_created: Date;
  date_ended: Date;
  date_expiry: Date;
  date_last_interaction: Date;
  date_started: Date;
  date_updated: Date;
  links: string;
  mode: SessionMode;
  service_sid: string;
  sid: string;
  status: SessionStatus;
  ttl: number;
  unique_name: string;
  url: string;
}

interface SessionSolution {
  serviceSid?: string;
}


declare class SessionContext {
  /**
   * Initialize the SessionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the Service to fetch the resource from
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, serviceSid: string, sid: string);

  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  interactions: InteractionListInstance;
  participants: ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): Promise<boolean>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
}


declare class SessionInstance extends SerializableClass {
  /**
   * Initialize the SessionContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the resource's parent Service
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: SessionPayload, serviceSid: string, sid: string);

  private _proxy: SessionContext;
  accountSid: string;
  closedReason: string;
  dateCreated: Date;
  dateEnded: Date;
  dateExpiry: Date;
  dateLastInteraction: Date;
  dateStarted: Date;
  dateUpdated: Date;
  /**
   * fetch a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * Access the interactions
   */
  interactions(): InteractionListInstance;
  links: string;
  mode: SessionMode;
  /**
   * Access the participants
   */
  participants(): ParticipantListInstance;
  /**
   * remove a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: SessionInstance) => any): Promise<boolean>;
  serviceSid: string;
  sid: string;
  status: SessionStatus;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  ttl: number;
  uniqueName: string;
  /**
   * update a SessionInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  /**
   * update a SessionInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: SessionInstanceUpdateOptions, callback?: (error: Error | null, items: SessionInstance) => any): Promise<SessionInstance>;
  url: string;
}


declare class SessionPage extends Page<V1, SessionPayload, SessionResource, SessionInstance> {
  /**
   * Initialize the SessionPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: SessionSolution);

  /**
   * Build an instance of SessionInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: SessionPayload): SessionInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { SessionContext, SessionInstance, SessionInstanceUpdateOptions, SessionList, SessionListInstance, SessionListInstanceCreateOptions, SessionListInstanceEachOptions, SessionListInstanceOptions, SessionListInstancePageOptions, SessionMode, SessionPage, SessionPayload, SessionResource, SessionSolution, SessionStatus }
