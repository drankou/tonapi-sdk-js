/**
 * REST api to TON blockchain explorer
 * Provide access to indexed TON blockchain
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: contact@fslabs.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AccountAddress } from './AccountAddress';
/**
 *
 * @export
 * @interface DomainBid
 */
export interface DomainBid {
    /**
     *
     * @type {AccountAddress}
     * @memberof DomainBid
     */
    bidder: AccountAddress;
    /**
     *
     * @type {boolean}
     * @memberof DomainBid
     */
    success: boolean;
    /**
     *
     * @type {number}
     * @memberof DomainBid
     */
    txTime: number;
    /**
     *
     * @type {number}
     * @memberof DomainBid
     */
    value: number;
}
/**
 * Check if a given object implements the DomainBid interface.
 */
export declare function instanceOfDomainBid(value: object): boolean;
export declare function DomainBidFromJSON(json: any): DomainBid;
export declare function DomainBidFromJSONTyped(json: any, ignoreDiscriminator: boolean): DomainBid;
export declare function DomainBidToJSON(value?: DomainBid | null): any;
