/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Trusthub
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import TrusthubBase from "../TrusthubBase";
import Version from "../../base/Version";
import { ComplianceInquiriesListInstance } from "./v1/complianceInquiries";
import { CustomerProfilesListInstance } from "./v1/customerProfiles";
import { EndUserListInstance } from "./v1/endUser";
import { EndUserTypeListInstance } from "./v1/endUserType";
import { PoliciesListInstance } from "./v1/policies";
import { SupportingDocumentListInstance } from "./v1/supportingDocument";
import { SupportingDocumentTypeListInstance } from "./v1/supportingDocumentType";
import { TrustProductsListInstance } from "./v1/trustProducts";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Trusthub
   *
   * @param domain - The Twilio (Twilio.Trusthub) domain
   */
  constructor(domain: TrusthubBase) {
    super(domain, "v1");
  }

  /** complianceInquiries - { Twilio.Trusthub.V1.ComplianceInquiriesListInstance } resource */
  protected _complianceInquiries?: ComplianceInquiriesListInstance;
  /** customerProfiles - { Twilio.Trusthub.V1.CustomerProfilesListInstance } resource */
  protected _customerProfiles?: CustomerProfilesListInstance;
  /** endUsers - { Twilio.Trusthub.V1.EndUserListInstance } resource */
  protected _endUsers?: EndUserListInstance;
  /** endUserTypes - { Twilio.Trusthub.V1.EndUserTypeListInstance } resource */
  protected _endUserTypes?: EndUserTypeListInstance;
  /** policies - { Twilio.Trusthub.V1.PoliciesListInstance } resource */
  protected _policies?: PoliciesListInstance;
  /** supportingDocuments - { Twilio.Trusthub.V1.SupportingDocumentListInstance } resource */
  protected _supportingDocuments?: SupportingDocumentListInstance;
  /** supportingDocumentTypes - { Twilio.Trusthub.V1.SupportingDocumentTypeListInstance } resource */
  protected _supportingDocumentTypes?: SupportingDocumentTypeListInstance;
  /** trustProducts - { Twilio.Trusthub.V1.TrustProductsListInstance } resource */
  protected _trustProducts?: TrustProductsListInstance;

  /** Getter for complianceInquiries resource */
  get complianceInquiries(): ComplianceInquiriesListInstance {
    this._complianceInquiries =
      this._complianceInquiries || ComplianceInquiriesListInstance(this);
    return this._complianceInquiries;
  }

  /** Getter for customerProfiles resource */
  get customerProfiles(): CustomerProfilesListInstance {
    this._customerProfiles =
      this._customerProfiles || CustomerProfilesListInstance(this);
    return this._customerProfiles;
  }

  /** Getter for endUsers resource */
  get endUsers(): EndUserListInstance {
    this._endUsers = this._endUsers || EndUserListInstance(this);
    return this._endUsers;
  }

  /** Getter for endUserTypes resource */
  get endUserTypes(): EndUserTypeListInstance {
    this._endUserTypes = this._endUserTypes || EndUserTypeListInstance(this);
    return this._endUserTypes;
  }

  /** Getter for policies resource */
  get policies(): PoliciesListInstance {
    this._policies = this._policies || PoliciesListInstance(this);
    return this._policies;
  }

  /** Getter for supportingDocuments resource */
  get supportingDocuments(): SupportingDocumentListInstance {
    this._supportingDocuments =
      this._supportingDocuments || SupportingDocumentListInstance(this);
    return this._supportingDocuments;
  }

  /** Getter for supportingDocumentTypes resource */
  get supportingDocumentTypes(): SupportingDocumentTypeListInstance {
    this._supportingDocumentTypes =
      this._supportingDocumentTypes || SupportingDocumentTypeListInstance(this);
    return this._supportingDocumentTypes;
  }

  /** Getter for trustProducts resource */
  get trustProducts(): TrustProductsListInstance {
    this._trustProducts =
      this._trustProducts || TrustProductsListInstance(this);
    return this._trustProducts;
  }
}
