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

import { Inject, Injectable, Optional }                      from '@angular/core';
import { Http, Headers, URLSearchParams }                    from '@angular/http';
import { RequestMethod, RequestOptions, RequestOptionsArgs } from '@angular/http';
import { Response, ResponseContentType }                     from '@angular/http';

import { Observable }                                        from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import * as models                                           from '../model/models';
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';

/* tslint:disable:no-unused-variable member-ordering */


@Injectable()
export class SmsApi {
    protected basePath = 'https://localhost/v1';
    public defaultHeaders: Headers = new Headers();
    public configuration: Configuration = new Configuration();

    constructor(protected http: Http, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
        }
    }

    /**
     * adds a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param body 
     */
    public addCallerId(userId: string, smsId: string, body?: models.SmsCallerIdRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.addCallerIdWithHttpInfo(userId, smsId, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Change short message service alias
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param body 
     */
    public changePhoneline(userId: string, smsId: string, body?: models.SetAliasRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.changePhonelineWithHttpInfo(userId, smsId, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Deletes a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 4223
     */
    public deleteSmsCallerId(userId: string, smsId: string, callerId: number, extraHttpRequestParams?: any): Observable<{}> {
        return this.deleteSmsCallerIdWithHttpInfo(userId, smsId, callerId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * changes a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 4223
     * @param body 
     */
    public editCallerId(userId: string, smsId: string, callerId: number, body?: models.SetSmsCallerIdRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.editCallerIdWithHttpInfo(userId, smsId, callerId, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns all callerids for the short message service
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     */
    public getSmsCallerIds(userId: string, smsId: string, extraHttpRequestParams?: any): Observable<models.SmsCallerIdsResponse> {
        return this.getSmsCallerIdsWithHttpInfo(userId, smsId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * Returns all short message services
     * 
     * @param userId e.g. w0
     */
    public getSmsExtensions(userId: string, extraHttpRequestParams?: any): Observable<models.SmsExtensionsResponse> {
        return this.getSmsExtensionsWithHttpInfo(userId, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }

    /**
     * verifies a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 1337
     * @param body 
     */
    public verifyCallerId(userId: string, smsId: string, callerId: number, body?: models.VerifySmsCallerIdRequest, extraHttpRequestParams?: any): Observable<{}> {
        return this.verifyCallerIdWithHttpInfo(userId, smsId, callerId, body, extraHttpRequestParams)
            .map((response: Response) => {
                if (response.status === 204) {
                    return undefined;
                } else {
                    return response.json();
                }
            });
    }


    /**
     * adds a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param body 
     */
    public addCallerIdWithHttpInfo(userId: string, smsId: string, body?: models.SmsCallerIdRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}/callerids`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling addCallerId.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling addCallerId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Change short message service alias
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param body 
     */
    public changePhonelineWithHttpInfo(userId: string, smsId: string, body?: models.SetAliasRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling changePhoneline.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling changePhoneline.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Deletes a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 4223
     */
    public deleteSmsCallerIdWithHttpInfo(userId: string, smsId: string, callerId: number, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}/callerids/${callerId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling deleteSmsCallerId.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling deleteSmsCallerId.');
        }
        // verify required parameter 'callerId' is not null or undefined
        if (callerId === null || callerId === undefined) {
            throw new Error('Required parameter callerId was null or undefined when calling deleteSmsCallerId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Delete,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * changes a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 4223
     * @param body 
     */
    public editCallerIdWithHttpInfo(userId: string, smsId: string, callerId: number, body?: models.SetSmsCallerIdRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}/callerids/${callerId}`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling editCallerId.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling editCallerId.');
        }
        // verify required parameter 'callerId' is not null or undefined
        if (callerId === null || callerId === undefined) {
            throw new Error('Required parameter callerId was null or undefined when calling editCallerId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Put,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Returns all callerids for the short message service
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     */
    public getSmsCallerIdsWithHttpInfo(userId: string, smsId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}/callerids`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getSmsCallerIds.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling getSmsCallerIds.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * Returns all short message services
     * 
     * @param userId e.g. w0
     */
    public getSmsExtensionsWithHttpInfo(userId: string, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling getSmsExtensions.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Get,
            headers: headers,
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

    /**
     * verifies a callerid
     * 
     * @param userId e.g. w0
     * @param smsId e.g. s0
     * @param callerId e.g. 1337
     * @param body 
     */
    public verifyCallerIdWithHttpInfo(userId: string, smsId: string, callerId: number, body?: models.VerifySmsCallerIdRequest, extraHttpRequestParams?: any): Observable<Response> {
        const path = this.basePath + `/${userId}/sms/${smsId}/callerids/${callerId}/verification`;

        let queryParameters = new URLSearchParams();
        let headers = new Headers(this.defaultHeaders.toJSON()); // https://github.com/angular/angular/issues/6845
        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new Error('Required parameter userId was null or undefined when calling verifyCallerId.');
        }
        // verify required parameter 'smsId' is not null or undefined
        if (smsId === null || smsId === undefined) {
            throw new Error('Required parameter smsId was null or undefined when calling verifyCallerId.');
        }
        // verify required parameter 'callerId' is not null or undefined
        if (callerId === null || callerId === undefined) {
            throw new Error('Required parameter callerId was null or undefined when calling verifyCallerId.');
        }
        // to determine the Content-Type header
        let consumes: string[] = [
        ];

        // to determine the Accept header
        let produces: string[] = [
            'application/json'
        ];

        // authentication (oauth2) required
        // oauth required
        if (this.configuration.accessToken) {
            let accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers.set('Authorization', 'Bearer ' + accessToken);
        }

        headers.set('Content-Type', 'application/json');

        let requestOptions: RequestOptionsArgs = new RequestOptions({
            method: RequestMethod.Post,
            headers: headers,
            body: body == null ? '' : JSON.stringify(body), // https://github.com/angular/angular/issues/10612
            search: queryParameters
        });

        // https://github.com/swagger-api/swagger-codegen/issues/4037
        if (extraHttpRequestParams) {
            requestOptions = (<any>Object).assign(requestOptions, extraHttpRequestParams);
        }

        return this.http.request(path, requestOptions);
    }

}