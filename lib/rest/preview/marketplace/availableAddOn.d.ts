/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Marketplace = require('../Marketplace');
import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import { AvailableAddOnExtensionList } from './availableAddOn/availableAddOnExtension';
import { AvailableAddOnExtensionListInstance } from './availableAddOn/availableAddOnExtension';
import { SerializableClass } from '../../../interfaces';

/**
 * Initialize the AvailableAddOnList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function AvailableAddOnList(version: Marketplace): AvailableAddOnListInstance;

interface AvailableAddOnListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): AvailableAddOnContext;
  /**
   * Streams AvailableAddOnInstance records from the API.
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
  each(callback?: (item: AvailableAddOnInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams AvailableAddOnInstance records from the API.
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
  each(opts?: AvailableAddOnListInstanceEachOptions, callback?: (item: AvailableAddOnInstance, done: (err?: Error) => void) => void): void;
  /**
   * Constructs a available_add_on
   *
   * @param sid - The SID of the AvailableAddOn resource to fetch
   */
  get(sid: string): AvailableAddOnContext;
  /**
   * Retrieve a single target page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
  /**
   * Retrieve a single target page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: AvailableAddOnInstance[]) => any): Promise<AvailableAddOnInstance[]>;
  /**
   * Lists AvailableAddOnInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: AvailableAddOnListInstanceOptions, callback?: (error: Error | null, items: AvailableAddOnInstance[]) => any): Promise<AvailableAddOnInstance[]>;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
  /**
   * Retrieve a single page of AvailableAddOnInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: AvailableAddOnListInstancePageOptions, callback?: (error: Error | null, items: AvailableAddOnPage) => any): Promise<AvailableAddOnPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
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
interface AvailableAddOnListInstanceEachOptions {
  callback?: (item: AvailableAddOnInstance, done: (err?: Error) => void) => void;
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
interface AvailableAddOnListInstanceOptions {
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
interface AvailableAddOnListInstancePageOptions {
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
}

interface AvailableAddOnPayload extends AvailableAddOnResource, Page.TwilioResponsePayload {
}

interface AvailableAddOnResource {
  configuration_schema: object;
  description: string;
  friendly_name: string;
  links: string;
  pricing_type: string;
  sid: string;
  url: string;
}

interface AvailableAddOnSolution {
}


declare class AvailableAddOnContext {
  /**
   * Initialize the AvailableAddOnContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param sid - The SID of the AvailableAddOn resource to fetch
   */
  constructor(version: Marketplace, sid: string);

  extensions: AvailableAddOnExtensionListInstance;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnInstance) => any): Promise<AvailableAddOnInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class AvailableAddOnInstance extends SerializableClass {
  /**
   * Initialize the AvailableAddOnContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param sid - The SID of the AvailableAddOn resource to fetch
   */
  constructor(version: Marketplace, payload: AvailableAddOnPayload, sid: string);

  private _proxy: AvailableAddOnContext;
  configurationSchema: object;
  description: string;
  /**
   * Access the extensions
   */
  extensions(): AvailableAddOnExtensionListInstance;
  /**
   * fetch a AvailableAddOnInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: AvailableAddOnInstance) => any): Promise<AvailableAddOnInstance>;
  friendlyName: string;
  links: string;
  pricingType: string;
  sid: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  url: string;
}


declare class AvailableAddOnPage extends Page<Marketplace, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnInstance> {
  /**
   * Initialize the AvailableAddOnPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Marketplace, response: Response<string>, solution: AvailableAddOnSolution);

  /**
   * Build an instance of AvailableAddOnInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: AvailableAddOnPayload): AvailableAddOnInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { AvailableAddOnContext, AvailableAddOnInstance, AvailableAddOnList, AvailableAddOnListInstance, AvailableAddOnListInstanceEachOptions, AvailableAddOnListInstanceOptions, AvailableAddOnListInstancePageOptions, AvailableAddOnPage, AvailableAddOnPayload, AvailableAddOnResource, AvailableAddOnSolution }
