/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Marketplace
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
const deserialize = require("../../../../base/deserialize");
const serialize = require("../../../../base/serialize");
import { isValidPathParam } from "../../../../base/utility";

export class MarketplaceV1InstalledAddOnInstalledAddOnUsage {
  /**
   * Total amount in local currency that was billed in this request. Aggregates all billable_items that were successfully submitted.
   */
  "totalSubmitted"?: number;
  "billableItems": Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;
}

export class MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems {
  /**
   * Total amount in local currency that was billed for this Billing Item. Can be any floating number greater than 0.
   */
  "quantity": number;
  /**
   * BillingSid to use for billing.
   */
  "sid": string;
  /**
   * Whether the billing event was successfully generated for this Billable Item.
   */
  "submitted"?: boolean;
}

/**
 * Options to pass to create a InstalledAddOnUsageInstance
 */
export interface InstalledAddOnUsageListInstanceCreateOptions {
  /**  */
  marketplaceV1InstalledAddOnInstalledAddOnUsage: MarketplaceV1InstalledAddOnInstalledAddOnUsage;
}

export interface InstalledAddOnUsageSolution {
  installedAddOnSid: string;
}

export interface InstalledAddOnUsageListInstance {
  _version: V1;
  _solution: InstalledAddOnUsageSolution;
  _uri: string;

  /**
   * Create a InstalledAddOnUsageInstance
   *
   * @param params - Body for request
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed InstalledAddOnUsageInstance
   */
  create(
    params: MarketplaceV1InstalledAddOnInstalledAddOnUsage,
    callback?: (error: Error | null, item?: InstalledAddOnUsageInstance) => any
  ): Promise<InstalledAddOnUsageInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function InstalledAddOnUsageListInstance(
  version: V1,
  installedAddOnSid: string
): InstalledAddOnUsageListInstance {
  if (!isValidPathParam(installedAddOnSid)) {
    throw new Error("Parameter 'installedAddOnSid' is not valid.");
  }

  const instance = {} as InstalledAddOnUsageListInstance;

  instance._version = version;
  instance._solution = { installedAddOnSid };
  instance._uri = `/InstalledAddOns/${installedAddOnSid}/Usage`;

  instance.create = function create(
    params: MarketplaceV1InstalledAddOnInstalledAddOnUsage,
    callback?: (error: Error | null, items: InstalledAddOnUsageInstance) => any
  ): Promise<InstalledAddOnUsageInstance> {
    if (params === null || params === undefined) {
      throw new Error('Required parameter "params" missing.');
    }

    let data: any = {};

    data = params;

    const headers: any = {};
    headers["Content-Type"] = "application/json";

    let operationVersion = version,
      operationPromise = operationVersion.create({
        uri: instance._uri,
        method: "post",
        data,
        headers,
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new InstalledAddOnUsageInstance(
          operationVersion,
          payload,
          instance._solution.installedAddOnSid
        )
    );

    operationPromise = instance._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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

interface InstalledAddOnUsagePayload extends InstalledAddOnUsageResource {}

interface InstalledAddOnUsageResource {
  total_submitted: number;
  billable_items: Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;
}

export class InstalledAddOnUsageInstance {
  constructor(
    protected _version: V1,
    payload: InstalledAddOnUsageResource,
    installedAddOnSid: string
  ) {
    this.totalSubmitted = payload.total_submitted;
    this.billableItems = payload.billable_items;
  }

  /**
   * Total amount in local currency that was billed in this request. Aggregates all billable_items that were successfully submitted.
   */
  totalSubmitted: number;
  billableItems: Array<MarketplaceV1InstalledAddOnInstalledAddOnUsageBillableItems>;

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      totalSubmitted: this.totalSubmitted,
      billableItems: this.billableItems,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}
