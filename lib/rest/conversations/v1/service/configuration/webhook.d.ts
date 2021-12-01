/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

type WebhookMethod = 'GET'|'POST';

/**
 * Initialize the WebhookList
 *
 * @param version - Version of the resource
 * @param chatServiceSid - The unique string that identifies the resource
 */
declare function WebhookList(version: V1, chatServiceSid: string): WebhookListInstance;

/**
 * Options to pass to update
 *
 * @property filters - The list of webhook event triggers that are enabled for this Service.
 * @property method - The HTTP method to be used when sending a webhook request
 * @property postWebhookUrl - The absolute url the post-event webhook request should be sent to.
 * @property preWebhookUrl - The absolute url the pre-event webhook request should be sent to.
 */
interface WebhookInstanceUpdateOptions {
  filters?: string | string[];
  method?: string;
  postWebhookUrl?: string;
  preWebhookUrl?: string;
}

interface WebhookListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): WebhookContext;
  /**
   * Constructs a webhook
   */
  get(): WebhookContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

interface WebhookPayload extends WebhookResource, Page.TwilioResponsePayload {
}

interface WebhookResource {
  account_sid: string;
  chat_service_sid: string;
  filters: string[];
  method: WebhookMethod;
  post_webhook_url: string;
  pre_webhook_url: string;
  url: string;
}

interface WebhookSolution {
  chatServiceSid?: string;
}


declare class WebhookContext {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param chatServiceSid - The unique ID of the Conversation Service this conversation belongs to.
   */
  constructor(version: V1, chatServiceSid: string);

  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
}


declare class WebhookInstance extends SerializableClass {
  /**
   * Initialize the WebhookContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param chatServiceSid - The unique string that identifies the resource
   */
  constructor(version: V1, payload: WebhookPayload, chatServiceSid: string);

  private _proxy: WebhookContext;
  accountSid: string;
  chatServiceSid: string;
  /**
   * fetch a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  filters: string[];
  method: WebhookMethod;
  postWebhookUrl: string;
  preWebhookUrl: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a WebhookInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  /**
   * update a WebhookInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: WebhookInstanceUpdateOptions, callback?: (error: Error | null, items: WebhookInstance) => any): Promise<WebhookInstance>;
  url: string;
}


declare class WebhookPage extends Page<V1, WebhookPayload, WebhookResource, WebhookInstance> {
  /**
   * Initialize the WebhookPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: WebhookSolution);

  /**
   * Build an instance of WebhookInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: WebhookPayload): WebhookInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { WebhookContext, WebhookInstance, WebhookInstanceUpdateOptions, WebhookList, WebhookListInstance, WebhookMethod, WebhookPage, WebhookPayload, WebhookResource, WebhookSolution }
