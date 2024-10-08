/**
 * @generated SignedSource<<9adb182e18943fb3fdbbb3ecd5d9932b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AccountPageQuery$variables = Record<PropertyKey, never>;
export type AccountPageQuery$data = {
  readonly viewer: {
    readonly id: string;
  } | null | undefined;
};
export type AccountPageQuery = {
  response: AccountPageQuery$data;
  variables: AccountPageQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "EntUser",
    "kind": "LinkedField",
    "name": "viewer",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AccountPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AccountPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "f00886af543b31d3b5891e4d19b3ad3c",
    "id": null,
    "metadata": {},
    "name": "AccountPageQuery",
    "operationKind": "query",
    "text": "query AccountPageQuery {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d2a1d0f4f8f92cc7a9efab28bccd782";

export default node;
