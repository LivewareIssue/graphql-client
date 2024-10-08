/**
 * @generated SignedSource<<a90267b87d7c739d6221b4ecdcca7907>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type ComponentsPageQuery$variables = Record<PropertyKey, never>;
export type ComponentsPageQuery$data = {
  readonly viewer: {
    readonly id: string;
  } | null | undefined;
};
export type ComponentsPageQuery = {
  response: ComponentsPageQuery$data;
  variables: ComponentsPageQuery$variables;
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
    "name": "ComponentsPageQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ComponentsPageQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "d1365ad1f3ac1581c490b25ee7ead9af",
    "id": null,
    "metadata": {},
    "name": "ComponentsPageQuery",
    "operationKind": "query",
    "text": "query ComponentsPageQuery {\n  viewer {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "295db7bc1810b2fd12c308e5937b52b2";

export default node;
