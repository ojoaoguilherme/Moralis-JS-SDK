import { Core, Camelize, Operation,  } from '@moralisweb3/common-core';
import { EvmChain,EvmChainish, } from '../../dataTypes';
import { EvmChainResolver } from '../../EvmChainResolver';
import { operations } from '../openapi';

type OperationId = 'getDateToBlock';



type QueryParams = operations[OperationId]['parameters']['query'];



type RequestParams =  & QueryParams ;


type SuccessResponse = operations[OperationId]['responses']['200']['content']['application/json'];

// Exports

export interface GetDateToBlockRequest extends Camelize<Omit<RequestParams,  | 'chain'>> {
      chain?: EvmChainish;
}

export type GetDateToBlockJSONRequest = ReturnType<typeof serializeRequest>;

export type GetDateToBlockJSONResponse = SuccessResponse;

export type GetDateToBlockResponse = ReturnType<typeof deserializeResponse>;

export const GetDateToBlockOperation: Operation<
  GetDateToBlockRequest,
  GetDateToBlockJSONRequest,
  GetDateToBlockResponse,
  GetDateToBlockJSONResponse
> = {
  method: 'GET',
  name: 'getDateToBlock',
  id: 'getDateToBlock',
  groupName: 'token',
  urlPathPattern: '/dateToBlock',
  
  urlSearchParamNames: ['chain','providerUrl','date',],

  
  getRequestUrlParams,
  serializeRequest,
  deserializeRequest,
  deserializeResponse,
};

// Methods



function getRequestUrlParams(request: GetDateToBlockRequest, core: Core) {
  return {
      chain: EvmChainResolver.resolve(request.chain, core).apiHex,
      providerUrl: request.providerUrl,
      date: request.date,
  };
}

function serializeRequest(request: GetDateToBlockRequest, core: Core) {
  return {
      chain: EvmChainResolver.resolve(request.chain, core).apiHex,
      providerUrl: request.providerUrl,
      date: request.date,
  };
}

function deserializeRequest(
  jsonRequest: GetDateToBlockJSONRequest,
  core: Core,
): GetDateToBlockRequest {
  return {
      chain: EvmChain.create(jsonRequest.chain, core),
      providerUrl: jsonRequest.providerUrl,
      date: jsonRequest.date,
  };
}

function deserializeResponse(jsonResponse: GetDateToBlockJSONResponse) {
  return jsonResponse;
}