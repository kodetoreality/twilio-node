/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import Understand = require('../../Understand');
import serialize = require('../../../../base/serialize');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the StyleSheetList
 *
 * PLEASE NOTE that this class contains preview products that are subject to
 * change. Use them with caution. If you currently do not have developer preview
 * access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 * @param assistantSid - The unique ID of the Assistant
 */
declare function StyleSheetList(version: Understand, assistantSid: string): StyleSheetListInstance;

/**
 * Options to pass to update
 *
 * @property styleSheet - The JSON Style sheet string
 */
interface StyleSheetInstanceUpdateOptions {
  styleSheet?: object;
}

interface StyleSheetListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): StyleSheetContext;
  /**
   * Constructs a style_sheet
   */
  get(): StyleSheetContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface StyleSheetPayload extends StyleSheetResource, Page.TwilioResponsePayload {
}

interface StyleSheetResource {
  account_sid: string;
  assistant_sid: string;
  data: object;
  url: string;
}

interface StyleSheetSolution {
  assistantSid?: string;
}


declare class StyleSheetContext {
  /**
   * Initialize the StyleSheetContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param assistantSid - The unique ID of the Assistant
   */
  constructor(version: Understand, assistantSid: string);

  /**
   * fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * update a StyleSheetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: StyleSheetInstanceUpdateOptions, callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
}


declare class StyleSheetInstance extends SerializableClass {
  /**
   * Initialize the StyleSheetContext
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param assistantSid - The unique ID of the Assistant
   */
  constructor(version: Understand, payload: StyleSheetPayload, assistantSid: string);

  private _proxy: StyleSheetContext;
  accountSid: string;
  assistantSid: string;
  data: object;
  /**
   * fetch a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a StyleSheetInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  /**
   * update a StyleSheetInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: StyleSheetInstanceUpdateOptions, callback?: (error: Error | null, items: StyleSheetInstance) => any): Promise<StyleSheetInstance>;
  url: string;
}


declare class StyleSheetPage extends Page<Understand, StyleSheetPayload, StyleSheetResource, StyleSheetInstance> {
  /**
   * Initialize the StyleSheetPage
   *
   * PLEASE NOTE that this class contains preview products that are subject to
   * change. Use them with caution. If you currently do not have developer preview
   * access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Understand, response: Response<string>, solution: StyleSheetSolution);

  /**
   * Build an instance of StyleSheetInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: StyleSheetPayload): StyleSheetInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { StyleSheetContext, StyleSheetInstance, StyleSheetInstanceUpdateOptions, StyleSheetList, StyleSheetListInstance, StyleSheetPage, StyleSheetPayload, StyleSheetResource, StyleSheetSolution }
