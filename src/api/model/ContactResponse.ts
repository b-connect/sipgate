/**
 * sipgate API
 * This is the sipgate REST API documentation. We build our new applications on this API and we invite you to use it too.
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

import * as models from './models';

export interface ContactResponse {
    id?: string;

    name?: string;

    picture?: string;

    emails?: Array<models.EMailResponse>;

    numbers?: Array<models.NumberResponse>;

    addresses?: Array<models.AddressResponse>;

    organization?: Array<Array<string>>;

}